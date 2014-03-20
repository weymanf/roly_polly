window.RolyPolly = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
  	var RolyPolly.polls = new RolyPolly.Collections.Polls()
 	RolyPolly.router = new RolyPolly.Routers.RolyRouters({
 		polls: RolyPolly.polls,
 		$rootEl: $('#content')
 	})

 	Backbone.history.start();
  }
};

$(document).ready(function(){
  RolyPolly.initialize();
});
