//called when successful user log in
var name; 
function onSignIn(googleUser) {
    console.log('User signed in!');
    var profile = googleUser.getBasicProfile();
    //change userName text, img source, & email text based on profile
    $(".userName").append("<p> Welcome " + profile.getName()   + "</p>");
    $(".userProfile").append(`<b><u>${profile.getName()}</u></b> `)
    //$("img").attr("src", profile.getImageUrl());
    $(".userProfile2").append(`<u>${profile.getEmail()}</u>`);
    name=profile.getName()
    console.log(name);
    return name;
}

//called when "sign out" button clicked
function onSignOut() {
    //should sign user out and toggleHidden
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.')
        //setting back to default
        $(".userName").text("");
        //$(".profileImg").attr("src", "assets/placeholder.png");
        $(".email").text("example@example.com");
    });
}


// //Set database object
var database = firebase.database().ref(name)

database.on('child_added', function(rowData) {
    console.log(rowData.val())
    $('#stories').append("<p>Name: " + rowData.val().NAME + "<br> Word Given: " + rowData.val().WORD + '<br>Story: '   + rowData.val().STORY  + "</p>");
})


