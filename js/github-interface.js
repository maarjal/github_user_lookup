var UserLookup = require('./../js/github.js').userModule;


$(document).ready(function() {
  $('.user-lookup').submit(function(event) {
    event.preventDefault();
    $('#results').empty();
    $('.error').empty();
    var userSearch = new UserLookup();
    var username = $('#username').val();
    userSearch.getRepos(username);
  });
});
