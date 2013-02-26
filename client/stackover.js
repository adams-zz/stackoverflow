if (Meteor.isClient) {
  Template.main.greeting = function () {
    return "Welcome to stackover. Please ask or answer a question";
  };

  Template.main.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
