angular.module('menuControllers',['menuServices'])
.controller('mainMenuCtrl', function (Menu, $state) {
  var app = this;
  Menu.readMainMenu().then(function(data){
    if(data.data.success){
      app.mainMenues = data.data.result;
    } else {
      app.errorMsg = data.data.message;
    }
  });

  this.createMenu = function(data){
    app.errorMsg = false;
    if(data === undefined){
      app.errorMsg = '올바른 정보를 입력해주세요.';
    } else {
      var menuData = {
          name: data.name
      };
      Menu.createMenu(menuData).then(function(data){
        if(data.data.success){
          app.successMsg = data.data.message;
          $state.reload();
        } else {
          app.errorMsg = data.data.message;
        }
      });
    }
  };

  this.update = function(data){
    app.errorMsg = false;
    var updateData = {
      category_id: data.category_id,
      name: data.name
    };
    console.log(updateData);
      Menu.updateMenu(updateData).then(function(data){
        if(data.data.success){
          app.successMsg = data.data.message;
          $state.reload();
        } else {
          app.errorMsg = data.data.message;
        }
      });
  };

  this.delete = function(data){
    app.errorMsg = false;
    var deleteData = data.category_id;
    Menu.deleteMenu(deleteData).then(function(data){
      if(data.data.success){
        app.successMsg = data.data.message;
        $state.reload();
      } else {
        app.errorMsg = data.data.message;
      }
    });
  };

});
