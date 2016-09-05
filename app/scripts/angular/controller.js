app.controller("mainCtrl",mainCtrl);
app.controller("homeCtrl",homeCtrl);
app.controller("detailCtrl",detailCtrl);


function mainCtrl($scope,$http,$location,$window,$interval){

    $http.get('/users')
        .then(function(response) {
        	$scope.data = response.data;
       })
}

function homeCtrl($scope,$http){

	$scope.firstName = 'John';
  $scope.catalog = 'history'

  $scope.searchBooks = function (para){
    $scope.catalog = para;
    $http.get('/books',{params:{catalog:para}})
         .then(function(response) {
          $scope.data = response.data;
         })
  }

}


function detailCtrl($scope,$http,$location){

  $scope.para = GetRequest();

  $scope.init=function(){
     getDetail($scope.para.id);
  }

  function getDetail(id){
    $http.get('/bookdetail',{params:{id:id}})
         .then(function(response) {
          $scope.data = response.data;
         })
  }


  function GetRequest() {   
    var url = location.search; //获取url中"?"符后的字串   
    var theRequest = new Object();   
    if (url.indexOf("?") != -1) {  
        var str = url.substr(1);   
        strs = str.split("&");   
        for(var i = 0; i < strs.length; i ++) {  
            theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);   
        }   
    }   
    return theRequest;   
  } 

}

app.controller("indexCtrl", function($scope) {
	$scope.username = 'Conan';
	$scope.items = ['name1','name2','name3']
})

/*app.controller("homeCtrl", function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
});*/

app.directive("helloWorld",function(){
	 return {
        template : "<h1>{{username}} Made by a directive!</h1>",
        link: function ($scope, element, attr) {
        	console.log($scope.username);
        }
    };
})