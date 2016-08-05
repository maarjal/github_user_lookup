var apiKey = require('./../.env').apiKey;

var UserLookup = function() {

};

UserLookup.prototype.getRepos = function(username) {
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
    console.log(response.length);
    for (var i = 0; i < response.length; i++) {
      $('#results').append('<li> Name: ' + response[i].name + '</li>' +
                            '<li>' + response[i].description + '</li>');
    }

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};





exports.userModule = UserLookup;
