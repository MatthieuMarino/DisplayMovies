angular.module('filmDisplayApp')
  .factory('AuthFactory', function ($location, $cookies, FirebaseFactory, SERVERURL) {

    var ref = new Firebase(SERVERURL);
    var isAuthentified = false;


    var check = function(){

      return function() {

        if(!isAuthentified) {
          var token = $cookies.get('firebase');
          // console.log('token', token);
          // console.log('ref.getAuth()', ref.getAuth());
          var testAuth = ref.getAuth();
          if (testAuth) {
            console.log('Already logged');
            isAuthentified = true;
            $cookies.put('firebase', testAuth);
            FirebaseFactory.connectDb();
            $location.path('/');
          } else if (token && token.token) {
            ref.authWithCustomToken(token.token, function (error, authData) {
              if (error) {
                console.warn("Login Failed!", error);
                $location.path('/login');
              } else {
                console.log("Authenticated successfully with payload:", authData);
                isAuthentified = true;
                $cookies.put('firebase', authData);
                FirebaseFactory.connectDb();
                $location.path('/');
              }
            });

          }
          else {
            $location.path('/login');
          }
        }
      }
    };


    var login = function(){

      return function(user) {
        ref.authWithPassword(user, function (error, authData) {
          if (error) {
            console.warn("Login Failed!", error);
            $location.path('/login');
          } else {
            console.log("Authenticated successfully with payload:", authData);
            isAuthentified = true;
            $cookies.put('firebase', authData);
            FirebaseFactory.connectDb();
            $location.path('/');
          }
        });
      }
    };

    var disconnect = function () {
      return function () {
        ref.unauth();
        isAuthentified = false;
        $location.path('/login');
      }
    };

    return {
      checkAuth : check(),
      isAuth : function(){
        return isAuthentified;
      },
      getUser: function (){
        return ref.getAuth();
      },
      login : login(),
      logout : disconnect()
    }
  });
