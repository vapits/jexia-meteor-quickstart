Meteor.methods({

	// call this method from client to get token & refresh token
	getToken: function(){

		// You Jexia Data App url
		var appUrl = 'http://XXX';	// Set your Jexia Data App URL
		var data = {
			key: '',	// Set you Jexia Access key
			secret: ''	// Set your Jexia Acess Key secret
		};

	    try {
	      var result = HTTP.post(appUrl, {data: data});
	      return result.data;
	    } catch (err) {
	      return err;
	    }

	} 
});
