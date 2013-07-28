Pictures = new Meteor.Collection("pictures");

Meteor.startup(function () {
    Meteor.publish("pictures", function () {
        return Pictures.find();
    });
    Pictures.allow({
        insert: function(userId,doc){
            return true;
        }
    })
});

