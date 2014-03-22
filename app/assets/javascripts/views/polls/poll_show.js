window.RolyPolly.Views.PollShow = Backbone.View.extend({
	template: JST["poll/poll_show"],

	initialize: function(){
		this.model.fetch();
		this.listenTo(this.model, "all", this.render);
	},

	events: {
		"click .test-vote": "testVote",
		"click .chosen-ch": "voteAnswer"
	},

	render: function() {
		var showContent = this.template({
			poll: this.model
		})

		this.$el.html(showContent);
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