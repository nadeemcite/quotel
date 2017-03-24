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
        $scope.meshAllowed=(design.mesh!='0');
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
    $scope.validateForm2=function(){
        if($scope.f2.windowWidth=='')return false;
        if($scope.f2.windowHeight=='')return false;
        if($scope.f2.windowLocation=='')return false;
        if($scope.f2.windowQuantity=='')return false;
        if($scope.f2.glassType=='0')return false;
        return true;
    }
    $scope.status3to4=function(){
        if($scope.state==3 && $scope.validateForm2()){
            $scope.state=4;
        }
    }
    $scope.removeDesignCard=function(index){
        $scope.designCards.splice(index,1)
    }
})
app.directive('onlyNumber', function () {
    return {
        restrict: 'A'
        , require: 'ngModel'
        , link: ['scope', 'element', 'attrs', 'modelCtrl', function (scope, element, attrs, modelCtrl) {
            modelCtrl.$parsers.push(function (input) {
                return input ? parseFloat(input) : "";
            });
        }]
        , scope: {
            'allowDecimal': '='
        }
        , controller: ['$scope', '$element', function ($scope, $element) {
            $element.on('keypress', function (event) {
                if (!$scope.allowDecimal && (event.which < 48 || event.which > 57)) {
                    event.preventDefault();
                }
                if ((event.which != 46 || $element.val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
                    event.preventDefault();
                }
            });

            function checkVal() {
                if ($element.val() != '') {
                    $element.addClass('has-value');
                }
                else {
                    $element.removeClass('has-value');
                    $element.removeClass('ng-dirty');
                }
            }
            checkVal();
            $element.change(checkVal);
            $element.click(checkVal);
            $element.blur(checkVal);
        }]
    }
});
