window.RolyPolly.Views.PollShow = Backbone.View.extend({
	template: JST["poll/poll_show"],

	render: function() {
		var showContent = this.template({
			poll: this.model
		})

		this.$el.html(showContent);
		return this;
	}

})