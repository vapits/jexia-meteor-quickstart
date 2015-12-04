if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('token', 'Click button to get it');

  Template.hello.helpers({
    token: function () {
      return Session.get('token');
    }
  });

  Template.hello.events({
    'click button': function () {
      Meteor.call('getToken', function(err, res) {
        Session.set('token', res.token);
      });
    }
  });


}
