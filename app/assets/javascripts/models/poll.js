window.RolyPolly.Models.Poll = Backbone.Model.extend({
	urlRoot: "/polls",
	answer_choices: function() {
		if (!this._answer_choices) {
			this._answer_choices = new RolyPolly.Collections.AnswerChoices([], {
				poll: this
			});
		}

		return this._answer_choices;
	},

	parse: function (jsonResp) {
		if (jsonResp) {
			if (jsonResp.answer_choices) {
				this.answer_choices().set(jsonResp.answer_choices, {parse: true});
				delete jsonResp.answer_choices;
			}

			return jsonResp;
		}
	}

})