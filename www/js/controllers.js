angular.module('starter.controllers', [])

.controller('MagazineCtrl', function($scope, $state) {
  console.log('MagazineCtrl');

})
.controller('CatalogCtrl', function($scope) {})
.controller('ScanCtrl', function($scope) {})
.controller('DealersCtrl', function($scope) {})
.controller('WalletCtrl', function($scope, $ionicModal) {
	console.log('WalletCtrl');
});

