window.RolyPolly.Views.AllPollsIndex = Backbone.View.extend({
	template: JST["poll/allpoll_index"],

	initialize: function(options) {
		this.listenTo(this.collection, "sync add remove", this.render)
	},

	render: function() {
		var indexContent = this.template({})

		this.$el.html(indexContent);
		return this;
	}
})