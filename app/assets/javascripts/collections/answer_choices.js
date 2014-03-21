window.RolyPolly.Collections.AnswerChoices = Backbone.Collection.extend({
	initialize: function(models, options){
		this.poll = options.poll
	},

	url: function () {
		return this.poll.url() + "/answer_choices";
	},

	model: RolyPolly.Models.AnswerChoice 

})