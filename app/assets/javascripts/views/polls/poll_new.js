window.RolyPolly.Views.PollForm = Backbone.View.extend({
	template: JST["poll/poll_form"],

	render: function() {
	 	var newView = this.template({
	 		poll: this.model
	 	})

	 	this.$el.html(newView);
	 	return this;
	}
})