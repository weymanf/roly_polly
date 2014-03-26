window.RolyPolly.Routers.RolyRouter = Backbone.Router.extend({

	initialize: function(options) {
		this.$rootEl = options.$rootEl;
		this.polls = options.polls;
		this.sms = options.sms;
		this.allpolls = options.allpolls;
	},

	routes: {
		"": "myPolls",
		"polls/new": "newPoll",
		"polls/:id": "showPoll",
		"allpolls": "allPolls",
		"allpolls/:id": "showPubPolls"
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

	showPoll: function(id) {
		var poll = this.polls.getOrFetch(id);
		
		var showView = new RolyPolly.Views.PollShow({
			model: poll,
			collection: this.polls,
			sms: this.sms
		})

		this._swapView(showView);
	},

	showPubPolls: function(id) {
		var poll = this.polls.getOrFetch(id);
		
		var showView = new RolyPolly.Views.AllPollShow({
			model: poll,
			collection: this.polls,
			sms: this.sms
		})

		this._swapAllView(showView);
	},

	allPolls: function() {
		var allIndexView = new RolyPolly.Views.AllPollsIndex({
			collection: this.allpolls
		});

		this._swapAllView(allIndexView);

	},

	_swapView: function(view) {
		if (this.currentView)
			this.currentView.remove();
		this.currentView = view

		this.$rootEl.html(view.render().$el);
	},

	_swapAllView: function(view) {
		if (this.currentView)
			this.currentView.remove();
		this.currentView = view

		$(".all-poll-content").html(view.render().$el);
	},



})