window.RolyPolly = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
  	RolyPolly.polls = new RolyPolly.Collections.Polls();
 	RolyPolly.router = new RolyPolly.Routers.RolyRouter({
 		polls: RolyPolly.polls,
 		$rootEl: $('.content')
 	})
 	debugger
 	Backbone.history.start();
  }
};

$(document).ready(function(){
  RolyPolly.initialize();
});
