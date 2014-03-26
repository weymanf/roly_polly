window.RolyPolly.Views.AllPollShow = Backbone.View.extend({
	template: JST["poll/allpoll_show"],

	initialize: function(options){
        this.sms = options.sms
		this.model.fetch();
		this.listenTo(this.model, "all", this.render);
        var that = this;
        this.sms.bind('sms_received', function(data) {
            that.model.fetch();           
        } );
	},

	events: {
		"click .test-vote": "testVote",
		"click .chosen-ch": "voteAnswer",
	},

	render: function() {
		var showContent = this.template({
			poll: this.model
		})

        this.collection.fetch();
		this.$el.html(showContent);

		var w = 400,                        //width
        h = 400,                            //height
        r = 200,                            //radius
        color = d3.scale.ordinal().range(["#2900A3", "#7A00A3", "#A3007A", "#A30029", "#0029A3", "#3200C7",
                            "#4405FF", "#00678A", "#FF0066", "#00FF00", "#00FFFF", "#6600FF", "#9A46D9",
                            "#9DD93E", "#B1CDED", "#459C7D", "#F4CB89",
                           "#ED3388", "#F4CB31"]);       //builtin range of colors

    var getData = function(poll) {
    	dataAr = [];

    	var check = poll.answer_choices().some(function(answer) {
    		if (answer.responses().length != 0)
    			return true;
    	})
    
    	if (check) {
    		poll.answer_choices().forEach(function(answer) {
    			if (answer.responses().length != 0) {
    				var dataUnit = {"label": answer.get("body"), "value": answer.responses().length};
    				dataAr.push(dataUnit);
    			}
    		});
    	} else {
    		dataAr.push({ "label": poll.get("title"), "value": 100 })
    	}
    	return dataAr
    }


    data = getData(this.model)
    
    var vis = d3.select(".poll-chart")
        .append("svg:svg")              //create the SVG element inside the <body>
        .data([data])                   //associate our data with the document
            .attr("width", w)           //set the width and height of our visualization (these will be attributes of the <svg> tag
            	.attr("height", h)
        .append("svg:g")                //make a group to hold our pie chart
            .attr("transform", "translate(" + r + "," + r + ")")    //move the center of the pie chart from 0, 0 to radius, radius

    var arc = d3.svg.arc()              //this will create <path> elements for us using arc data
    .outerRadius(r);

    var pie = d3.layout.pie()           //this will create arc data for us given a list of values
        .value(function(d) { return d.value; });    //we must tell it out to access the value of each element in our data array

    var arcs = vis.selectAll("g.slice")     //this selects all <g> elements with class slice (there aren't any yet)
        .data(pie)                          //associate the generated pie data (an array of arcs, each having startAngle, endAngle and value properties) 
        .enter()                            //this will create <g> elements for every "extra" data element that should be associated with a selection. The result is creating a <g> for every object in the data array
            .append("svg:g")                //create a group to hold each slice (we will have a <path> and a <text> element associated with each slice)
                .attr("class", "slice");    //allow us to style things in the slices (like text)

                arcs.append("svg:path")
                .attr("fill", function(d, i) { return color(i); } ) //set the color for each slice to be chosen from the color function defined above
                // .attr("d", arc);    
                .each(function(d) {
                	this._current = JSON.parse(JSON.stringify(d));
                	this._current.endAngle = this._current.startAngle;
                })
    			.transition().duration(750).attrTween("d", arcTween);                                   //this creates the actual SVG path using the associated data (pie) with the arc drawing function

        arcs.append("svg:text")                                     //add a label to each slice
                .attr("transform", function(d) {                    //set the label's origin to the center of the arc
                //we have to make sure to set these before calling arc.centroid
                d.innerRadius = 0;
                d.outerRadius = r;
                return "translate(" + arc.centroid(d) + ")";        //this gives us a pair of coordinates like [50, 50]
            })
            .attr("text-anchor", "middle")                          //center the text on it's origin
            .text(function(d, i) { return data[i].label; });        //get the label from our original data array

            function arcTween(a) {
            	var i = d3.interpolate(this._current, a);
            	this._current = i(0);
            	return function(t) {
            		return arc(i(t));
            	};
            }


            return this;
        },


        testVote: function() {
        	if ($(".vote-options").html() === "") {
        		var testContent = JST["response/test_response"]({
        			poll: this.model
        		})

        		$(".vote-options").html(testContent)
        	}	else {
        		$(".vote-options").html("")
        	}
        },

        voteAnswer: function(event) {
        	event.preventDefault();
        	var that = this;
        	var answerChoiceId = $(event.target).data("answer")
        	var answerChoice = this.model.answer_choices().get(answerChoiceId)
        	answerChoice.responses().create({}, {
        		success: function() {
        			that.render();
        		}
        	});
        	$(".vote-options").html("")
        }

     

    })