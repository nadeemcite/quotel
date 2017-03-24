var app=angular.module('myapp',['ngRoute']);

app.config(function($routeProvider,$locationProvider){
    $routeProvider.when('/',{
        controller:'HomeController',
        templateUrl:'views/home.html'
    }).otherwise({
        redirectTo:'/'
    });
    $locationProvider.html5Mode(true);
});


app.run(["$rootScope", function($rootScope) {
     $rootScope.$on("$viewContentLoaded", function() {
         componentHandler.upgradeAllRegistered();
     });
   }]);



app.controller('HomeController',function(QuotelService,$scope){
    console.log($scope.windowType)
    $scope.state=1;
    $scope.changeWindowType=function(windowType){

        QuotelService.getWindowDesigns(windowType).then(function(response){
            console.log(response);
            $scope.state=2;
            $scope.windowDesigns =response.data
        },function(response){
            console.log(response);
        });
    }
    $scope.selectedWindow=null;
    $scope.selectedWindowIndex=null;
    $scope.selectWindowDesign=function(index,design){
        $scope.windowDesigns=$scope.windowDesigns.map(function(design){
            design.css="";
            return design;
        })
        design.css="border:5px solid blue;";
        $scope.selectedWindow=design;
        $scope.selectedWindowIndex=index;
        $scope.state=3;
    }
    $scope.designCards=[];
    $scope.addDesignCard=function(){
        var obj={
            width:$scope.f2.windowWidth,
            height:$scope.f2.windowHeight,
            location:$scope.f2.windowLocation,
            quantity:$scope.f2.windowQuantity,
            glassType:$scope.f2.glassType,
            window:$scope.selectedWindow
        }
        $scope.designCards.push(obj);
        $scope.f2={
            glassType:'0'
        }
        $scope.selectedWindow=null;
        $scope.state=1;
        $scope.windowDesigns =[];
    }
    $scope.removeDesignCard=function(index){
        $scope.designCards.splice(index,1)
    }
})
