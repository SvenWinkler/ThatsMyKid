if (Meteor.is_client) {
    Meteor.startup(function () {
        $(document).ready(function (){
            Visibility.bindClickHandlers()
        });
    });
}

Visibility = {}

Visibility.bindClickHandlers = function() {
    $('#transparent_layer').on('click', function() {
        Visibility.hidePhoto()
    })
    $('#photo_box').on('click', function() {
        Visibility.hidePhoto()
    })
//    $('#status').bind('click', function () {
//        Visibility.showPhoto()
//    })
   $('#gallery').find('img').map(function(){
       alert(this.src)
       this.on('click', function() {
           alert("Test2")
           Visibility.showPhoto(this.src);
       })
    });
}

Visibility.showPhoto = function(url) {
    alert("showPhoto")
    $('photo_box').find('img').src = url
    Visibility.showPhoto()
}

Visibility.showPhoto = function() {
    alert("showPhoto2")
    $('#transparent_layer').css("visibility", "visible")
    $('#photo_box').css("visibility", "visible")
}

Visibility.hidePhoto = function() {
    $('#transparent_layer').css("visibility", "hidden")
    $('#photo_box').css("visibility", "hidden")
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