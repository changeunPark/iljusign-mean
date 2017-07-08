angular.module('adminServices',[])
.factory('Admin', function($http){
  adminFactory = {};


  adminFactory.readAristCrop = function(blob){
    return $http.post('/api/createCropImage', blob);
  };
  // Artist.createPhoto(photoData)
  adminFactory.createAristPhoto = function(photoData){
    return $http.post('/api/artistProfiles', photoData);
  };

  adminFactory.createItem = function(itemData){
    return $http.post('/api/item', itemData);
  };

  adminFactory.readItems = function(){
    return $http.get('/api/item');
  };

  adminFactory.readItem = function(item_id){
    return $http.get('/api/item/'+item_id);
  };

  return adminFactory;
});