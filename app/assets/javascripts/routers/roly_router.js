window.RolyPolly.Routers.RolyRouter = Backbone.Router.extend({

	initialize: function(options) {
		this.$rootEl = options.$rootEl;
		this.polls = options.polls;
	},

	routes: {
		"": "myPolls",
		"polls/new": "newPoll",
		"polls/:id": "showPoll"
	},


	myPolls: function() {
		
		var indexView = new RolyPolly.Views.PollsIndex({
			collection: this.polls
		})
		this.polls.fetch();
		this._swapView(indexView);
	},

	newPoll: function() {
		var newPoll = new RolyPolly.Models.Poll();
		var newView = new RolyPolly.Views.PollForm({
			model: newPoll,
			collection: this.polls
		});

		this._swapView(newView);
	},

	showPoll: function() {
		this.polls



	},

	_swapView: function(view) {
		if (this.currentView)
			this.currentView.remove();
		this.currentView = view

		this.$rootEl.html(view.render().$el);
	}


})