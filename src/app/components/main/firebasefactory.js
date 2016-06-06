'use strict';

/**
 * @ngdoc service
 * @name filmDisplayApp.firebaseFactory
 * @description
 * # firebaseFactory
 * Factory in the filmDisplayApp.
 */
angular.module('filmDisplayApp')
  .factory('firebaseFactory', function ($firebaseArray, $q,  $cookies, $location, SERVERURL) {


    var isAuthentified = false;
    var configUser = {
      id:{
        email:'test@rien.com',
        password: '123456'
      }
    };
    var films = [];
    var dbLoaded = $q.defer();

    var accessDb = function(){
      films = $firebaseArray(ref.child('db/films'));
      films.$loaded(function(){
        dbLoaded.resolve(true);
      });
    };

    var ref = new Firebase(SERVERURL);

    var token = $cookies.get('firebase');
    console.log('token', token);
    // console.log('ref.getAuth()', ref.getAuth());
    var testAuth = ref.getAuth();
    if(testAuth){
      console.log('Already logged');
      isAuthentified = true;
      $cookies.put('firebase', testAuth);
      accessDb();
    }else if(token.token){
      ref.authWithCustomToken(token.token,function(error, authData){
        if (error) {
          console.warn("Login Failed!", error);
          dbLoaded.reject(false);
          $location.path('/#/login');
        } else {
          console.log("Authenticated successfully with payload:", authData);
          isAuthentified = true;
          $cookies.put('firebase', authData);
          accessDb();
        }
      });

    }
    else
    {
      $location.path('/#/login');
    }
    var login = function(user){

      ref.authWithPassword(user, function(error, authData){
        if (error) {
          console.warn("Login Failed!", error);
          dbLoaded.reject(false);
        } else {
          console.log("Authenticated successfully with payload:", authData);
          isAuthentified = true;
          $cookies.put('firebase', authData);
          accessDb();
        }
      });
    };



    var getFilmByName = function (id) {
      return films.filter(function(film){
        return film.name.includes(id);
      })[0];
    };


    // var getFilm = function (id) {
    //   return getFilmByName(id);
    // };

    var createFilm = function (film) {
      // console.log('film', film);
      if(films.indexOf(film) == -1){
        films.$add(film);
      }else{
        console.log('Already existing film');
      }
    };

    var deleteFilm = function (id) {
      // console.log('deleting : ', id);
      var film = getFilmByName(id);
      if(film){
        films.$remove(film);
      }
    };

    var saveFilm = function (film) {
      films.$save(film);
    };

    var uploadAffiche = function(id, affiche){

      console.log('affiche', affiche);
        var filename = affiche.target.files[0];
        var fr = new FileReader();
      var film = getFilmByName(id);
        fr.onload = function (res) {
          film.affiche.image = res.target.result;
          console.log('film.affiche.image', film.affiche.image);
          films.$save(film).then(function (val) {
          }, function (error) {
            console.log("ERROR", error);
          })
        };
        fr.readAsDataURL(filename);

    };


    return {
      list: function(){return films;},
      get: getFilmByName,
      save: saveFilm,
      create: createFilm,
      delete: deleteFilm,
      hasLoaded: function(){ return dbLoaded.promise;},
      isAuth: function () { return isAuthentified;},
      login: login,
      uploadAffiche: uploadAffiche
    };
  });
