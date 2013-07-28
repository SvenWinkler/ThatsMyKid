/**
 * Created with JetBrains WebStorm.
 * User: Fabian
 * Date: 25.07.13
 * Time: 15:25
 * To change this template use File | Settings | File Templates.
 */

Pictures = new Meteor.Collection("pictures");

Meteor.subscribe("pictures");

Template.userBereich.pics = function() {
    return Pictures.find({}, {sort: {$natural:-1}});
}

Template.userBereich.events(
    {
        'drop' : function(e) {
            e.stopPropagation();
            e.preventDefault();

            var files = e.dataTransfer.files; // FileList object.
            var reader = new FileReader();
            // files is a FileList of File objects. List some properties.
          /*  var output = [];
            for (var i = 0, f; f = files[i]; i++) {
                output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
                    f.size, ' bytes, last modified: ',
                    f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
                    '</li>');
            }

            document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';*/

            reader.onload = function(event) {
                $('#preview').attr('src', event.target.result);
                Pictures.insert({
                    name : files[0].name,
                    data : event.target.result
                });
            }

            reader.readAsDataURL(files[0]);
        },
        'dragover' : function (e) {
            e.stopPropagation();
            e.preventDefault();
            e.dataTransfer.dropEffect = 'copy';
        }
    }
);