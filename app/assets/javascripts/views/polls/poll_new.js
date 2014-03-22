window.RolyPolly.Views.PollForm = Backbone.View.extend({
	template: JST["poll/poll_form"],

	events: {
		"submit form": "createPoll",
		"click #add-answer": "addAnswer",
		"click #del-answer": "delAnswer"
	},

	render: function() {
	 	var newView = this.template({
	 		poll: this.model
	 	})

	 	this.$el.html(newView);
	 	return this;
	},

	createPoll: function(event) {
		event.preventDefault();
		var polls = this.collection
		var pollParams = $(event.currentTarget).serializeJSON().poll;
		
		this.collection.create({poll: pollParams}, {
			success: function(poll) {
				
				Backbone.history.navigate("#polls/" + poll.get("id"), {trigger: true})
			}
		});
	
	},

	addAnswer: function() {
		var randomNum = Math.floor((Math.random()*10000)+3);
		var moreAns = JST["answer/answer_form"]({
			ran: randomNum
		})
		$(".more-ans").append(moreAns)
	},

	delAnswer: function(event) {
		$(".more-ch:last").remove();
	}
})