window.RolyPolly.Collections.Responses = Backbone.Collection.extend({
	initialize: function(models, options) {
		this.answer_choice = options.answer_choice
	},

	url: function() {
		return this.answer_choice.url() + "/responses";
	}
})