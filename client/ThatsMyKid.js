if (Meteor.is_client) {
    Meteor.startup(function () {
        $(document).ready(function (){
            Visibility.bindClickHandlers()
        });
    });
}

Visibility = {}

Visibility.bindClickHandlers = function() {
    "use strict";
    $('#photo_viewer').on('click', function() {
        Visibility.hidePhoto()
    })
}

Visibility.showPhoto = function(url) {
    "use strict";
    $('#photo_box_img').attr("src", url);
    $('#photo_viewer').css("visibility", "visible");
}

Visibility.hidePhoto = function() {
    "use strict";
    $('#photo_viewer').css("visibility", "hidden")
}
