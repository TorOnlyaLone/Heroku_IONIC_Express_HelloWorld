//angular.module('starter.controllers', []).controller('MenuCtrl', function ($scope) {
//
//}).controller('CVCtrl', function ($scope) {
//
//});
angular.module('starter.controllers', []).controller('NavCtrl', function ($scope, $ionicSideMenuDelegate) {
    $scope.showLeftMenu = function () {
        $ionicSideMenuDelegate.toggleLeft();
    };
    $scope.showRightMenu = function () {
        $ionicSideMenuDelegate.toggleRight();
    };
}).controller('HomeTabCtrl', function ($scope) {
    console.log("Home Page");

}).controller('CVCtrl', function ($scope) {
    console.log("CV Page");

}).controller('SettingCtrl', function ($scope, $window) {

    $scope.go_page = function (str_url) {
        $window.location.href = '#/'+str_url;
    };

    $scope.txt = "Setting Page";
    console.log("Setting Page");
});