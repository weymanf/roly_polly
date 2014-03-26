window.RolyPolly.Collections.AllPolls = Backbone.Collection.extend({
	url: "/allpolls",
	model: RolyPolly.Models.Poll,

	getOrFetch: function(id) {
		var model = this.get(id);
		var polls = this;

		if (model) {
			model.fetch();
			return model;
		} else {
			model = new RolyPolly.Models.Poll({ id: id });
			model.fetch({
				success: function () { polls.add(model) }
			});
			return model;
		}
	}
});