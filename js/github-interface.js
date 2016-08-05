var UserLookup = require('./../js/github.js').userModule;


$(document).ready(function() {
  $('.user-lookup').submit(function(event) {
    event.preventDefault();
    var userSearch = new UserLookup();
    var username = $('#username').val();
    console.log(username);
    userSearch.getRepos(username);
  });
});
