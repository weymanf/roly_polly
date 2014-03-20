window.RolyPolly.Collections.Polls = Backbone.Collection.extend({
	url: "/posts",
	model: RolyPolly.Models.Poll
});