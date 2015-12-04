if (Meteor.isServer) {
	Meteor.startup(function () {
		// code to run on server at startup
		// Anything you put here is not visible to clients
		// so you can use it for AUthentication & token matters.
		var hidden = 'this should be hidden';
		
	});
}