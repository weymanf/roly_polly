window.RolyPolly.Models.AnswerChoice = Backbone.Model.extend({
	urlRoot: "/answer_choices",

	responses: function() {
		if (!this._responses) {
			this._responses = new RolyPolly.Collections.Responses([], {
				answer_choice: this
			});
		}

		return this._responses;
	},

	parse: function (jsonResp) {
		if (jsonResp) {
			if (jsonResp.responses) {
				this.responses().set(jsonResp.responses);
				delete jsonResp.responses;
			}

			return jsonResp;
		}
	}


})