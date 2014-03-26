window.RolyPolly = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
  
  	var smsChannel;

  	var pusher = new Pusher(PUSHER_CONFIG.key);
  	smsChannel = pusher.subscribe('sms');

    RolyPolly.allpolls = new RolyPolly.Collections.AllPolls();
  	RolyPolly.polls = new RolyPolly.Collections.Polls();
 	  RolyPolly.router = new RolyPolly.Routers.RolyRouter({
 		polls: RolyPolly.polls,
 		$rootEl: $('.content'),
 		sms: smsChannel,
    allpolls: RolyPolly.allpolls
 	})
 	Backbone.history.start();
  }
};

$(document).ready(function(){
  RolyPolly.initialize();
});
