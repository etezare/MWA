angular.module("bookRental").factory("AuthFactory", AuthFactory);
function AuthFactory() {
  return { auth: auth };
  var auth = { ifLoggedId: false };
}
