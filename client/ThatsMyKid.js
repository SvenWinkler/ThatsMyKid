if (Meteor.is_client) {
    Meteor.startup(function () {
        $(document).ready(function (){
            $('#transparent_layer').bind('click', function() {
                $('#transparent_layer').css("visibility", "hidden")
                $('#photo_box').css("visibility", "hidden")
            })
            $('#photo_box').bind('click', function() {
                $('#transparent_layer').css("visibility", "hidden")
                $('#photo_box').css("visibility", "hidden")
            })
            $('#walking').bind('click', function() {
                $('#transparent_layer').css("visibility", "visible")
                $('#photo_box').css("visibility", "visible")
            });
        });
    });
}

Template.banner.greeting = function () {
    return "ThatsMyKid";
};

Template.hello.events({
  'click input' : function () {
    // template data, if any, is available in 'this'
    if (typeof console !== 'undefined')
      console.log("You pressed the button");
  }
});