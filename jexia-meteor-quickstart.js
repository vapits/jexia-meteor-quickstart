if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    // Anything you put here is not visible to clients
    // so you can use it for AUthentication & token matters.

    });
}

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}
