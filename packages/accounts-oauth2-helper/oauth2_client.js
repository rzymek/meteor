(function () {
  // Open a popup window pointing to a OAuth handshake page
  //
  // @param state {String} The OAuth state generated by the client
  // @param url {String} url to page
  Meteor.accounts.oauth2.initiateLogin = function(state, url) {
    // Include the oauth version as the last parameter
    Meteor.accounts.oauth.initiateLogin(state, url, 2);
  };
})();
