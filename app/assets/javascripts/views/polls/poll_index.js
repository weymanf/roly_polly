window.RolyPolly.Views.PollsIndex = Backbone.View.extend({
	template: JST["poll/poll_index"],

	initialize: function(options) {
		this.listenTo(this.collection, "sync add remove", this.render)
	},

	render: function() {
		var indexContent = this.template({
			polls: this.collection
		})

		this.$el.html(indexContent);
		return this;
	}
})