'use strict';

/**
 * @ngdoc service
 * @name filmDisplayApp.FirebaseFactory
 * @description
 * # FirebaseFactory
 * Factory in the filmDisplayApp.
 */
angular.module('filmDisplayApp')
  .factory('FirebaseFactory', function ($firebaseArray, $q, $location, SERVERURL) {



    var films = [];
    var dbLoaded = $q.defer();

    var accessDb = function(){
      films = $firebaseArray(ref.child('db/films'));
      films.$loaded(function(){
        dbLoaded.resolve(true);
      });
    };

    var ref = new Firebase(SERVERURL);





    var getFilmByName = function (id) {
      for(var i = 0; i < films.length; i++){
        if(films[i].name.includes(id)){
          return films[i];
        }
      }
      return -1;
      // return films.filter(function(film){
      //   return film.name.includes(id);
      // })[0];
    };


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
          // console.log('film.affiche.image', film.affiche.image);
          films.$save(film).then(function (val) {
          }, function (error) {
            console.error("ERROR", error);
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
      uploadAffiche: uploadAffiche,
      connectDb: accessDb
    };
  });
