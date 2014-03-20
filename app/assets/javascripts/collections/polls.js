window.RolyPolly.Collections.Polls = Backbone.Collection.extend({
	url: "/polls",
	model: RolyPolly.Models.Poll
});