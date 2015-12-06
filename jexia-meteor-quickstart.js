if (Meteor.isClient) {

  Session.setDefault('token', 'empty');

  Template.auth.helpers({
    token: function () {
      return Session.get('token');
    },
    hasToken: function() {
      var token = Session.get('token');
      if (token === 'empty') {
        return false;
      } else {
        return true;
      }
    }
  });

  Template.auth.events({
    'click button': function () {
      Meteor.call('getToken', function(err, res) {
        Session.set('token', res.token);
      });
    }
  });


}
