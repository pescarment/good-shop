angular.module('starter.controllers', ['ngCordova'])

.controller('MagazineCtrl', function($scope, $state) {
  console.log('MagazineCtrl');

})
.controller('CatalogCtrl', function($scope) {})
.controller('ScanCtrl', function($scope, $ionicModal/*, $cordovaBarcodeScanner */) {

	$ionicModal.fromTemplateUrl('templates/modal-scan.html', {
	scope: $scope,
	animation: 'slide-in-up'
	}).then(function(modal) {
	$scope.modal = modal
	})  

	$scope.openModal = function() {
	$scope.modal.show()
	}

	$scope.closeModal = function() {
	$scope.modal.hide();
	};

	$scope.$on('$destroy', function() {
	$scope.modal.remove();
	});

    /*$scope.scanBarcode = function() {
        $cordovaBarcodeScanner.scan().then(function(imageData) {
            alert(imageData.text);
            console.log("Barcode Format -> " + imageData.format);
            console.log("Cancelled -> " + imageData.cancelled);
        }, function(error) {
            console.log("An error happened -> " + error);
        });
    };
	*/

})
.controller('DealersCtrl', function($scope,$ionicLoading, $compile) {

  console.log('DealersCtrl');

    $scope.init = function() {

  console.log('DealersCtrl >> initialize()');

  var myLatlng = new google.maps.LatLng(43.07493,-89.381388);
        
        var mapOptions = {
          center: myLatlng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        
		var map = new google.maps.Map(document.getElementById("map"),
            mapOptions);
        
        //Marker + infowindow + angularjs compiled ng-click
        var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
        var compiled = $compile(contentString)($scope);

        var infowindow = new google.maps.InfoWindow({
          content: compiled[0]
        });

        var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: 'Uluru (Ayers Rock)'
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map,marker);
        });

        $scope.map = map;
      }
      
      $scope.centerOnMe = function() {
        if(!$scope.map) {
          return;
        }

        $scope.loading = $ionicLoading.show({
          content: 'Getting current location...',
          showBackdrop: false
        });

        navigator.geolocation.getCurrentPosition(function(pos) {
          $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
          $scope.loading.hide();
        }, function(error) {
          alert('Unable to get location: ' + error.message);
        });
      };
      
      $scope.clickTest = function() {
        alert('Example of infowindow with ng-click')
      };

})
.controller('WalletCtrl', function($scope, $ionicModal) {
	console.log('WalletCtrl');
	
  $scope.contact = {
    name: 'Mittens Cat',
    info: 'Tap anywhere on the card to open the modal'
  }

  $ionicModal.fromTemplateUrl('templates/modal-register.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal
  })  

  $scope.openModal = function() {
    $scope.modal.show()
  }

  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  
});

