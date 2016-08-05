var apiKey = require('./../.env').apiKey;

var UserLookup = function() {

};

UserLookup.prototype.getRepos = function(username) {
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey + '&per_page=500').then(function(response) {
    for (var i = 0; i < response.length; i++) {
      $('#results').append('<li> <strong>Name:</strong> ' + response[i].name + '</li>' +
                            '<li class="description"><strong>Description:</strong> ' + response[i].description + '</li>');
      if (response[i].description === null) {
        $('.description').hide();
      }
    }
  }).fail(function(error){
    console.log(error.responseJSON.message);
    $('.error').append('<h6>Username not found. Try again!</h6>');
  });
};





exports.userModule = UserLookup;
