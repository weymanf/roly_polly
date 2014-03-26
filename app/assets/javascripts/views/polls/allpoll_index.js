window.RolyPolly.Views.AllPollsIndex = Backbone.View.extend({
	template: JST["poll/allpoll_index"],

	initialize: function(options) {
	},

	render: function() {
		var indexContent = this.template({})

		this.$el.html(indexContent);
		return this;
	}
})