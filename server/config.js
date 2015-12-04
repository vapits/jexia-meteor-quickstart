Meteor.startup(function () {
	// code to run on server at startup
});

Meteor.methods({
	// call this method from client to get token & refresh token
	getToken: function(){
		// You Jexia Data App url
		var appUrl = 'http://05397fa0-9917-11e5-ad13-259350bd66db.app.jexia.com/';	
		// Set your Jexia Access Key credentials
		var data = {
			key: 'b806826678a8fed5179c35ef9e52485d', 
			secret: 'b32a88e9979eabd026e17bd81b2125d17a09917d7f75559d'
		};
	    try {
	      var result = HTTP.post(appUrl, {data: data});
	      return result.data;
	    } catch (err) {
	      return err;
	    }
	} 
});