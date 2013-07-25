/**
 * Created with JetBrains WebStorm.
 * User: Fabian
 * Date: 25.07.13
 * Time: 15:25
 * To change this template use File | Settings | File Templates.
 */
Template.userBereich.events(
    {
        'click #submit': function(e) {
            var file = document.getElementById( 'file');
            alert(file.value);
            var reader = new FileReader();

            reader.onload = function(event) {
                alert(Object.keys(event));
            }

            alert("Test1")
            reader.readAsDataURL(file.value)
            alert("Test2")
        }
    }
);