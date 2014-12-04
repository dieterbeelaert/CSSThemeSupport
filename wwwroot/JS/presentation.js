
var presentation = angular.module('presentation',['ngAnimate']);

presentation.controller('presentationCtrl', function($scope){
	
	$scope.slides = [];
	$scope.numberOfSlides = $('.slide').length;
	$scope.index = 0;

	//show first slide on startup:
	$scope.slides[$scope.index] = true;
	$scope.test = 'hello world';

	$scope.doNext = function(){
		$scope.slides[$scope.index] = false;	
		$scope.index++;
		$scope.slides[$scope.index] = true;
	}

	$scope.doPrevious = function(){
		$scope.slides[$scope.index] = false;
		$scope.index--;
		$scope.slides[$scope.index] = true;
	}
	

	$scope.initSlides = function(){
		for(var i = 0; i < $scope.numberOfSlides; i++){
			$scope.slides[i] = false;
		}

	}

	$scope.keyPress = function(event){
		var keyCode = event.keyCode;
   		console.log(keyCode);
	       if(keyCode === 40){
	       		$scope.doNext();
			event.preventDefault();
	       }else if(keyCode === 38){
	       		$scope.doPrevious();
			event.preventDefault();
	       }	       
	}
});

presentation.controller('SassController',function($scope,$http){
	$scope.input = '';
	$scope.output = '';
	$scope.minify = false;

	$scope.examples = [];

	$scope.compile = function(){
	console.log("compiling....");
		$http({method:'POST',url:'/sass', data: {'sass':$scope.input,'minify':$scope.minify}})
			.success(function(data){$scope.output = data})
				.error(function(err){console.log(err)});
	}

	$scope.setInput = function(index){
		$scope.input = $scope.examples[index];
	}

	$scope.setExamples = function(){
		$scope.examples[0] = '$color: #0000FF;\r\rbody{\r\tbackground-color: $color;\r}\r\r a{\r\tcolor:$color;\r}';
		$scope.examples[1] = '@mixin border-radius($radius) { \r\t-webkit-border-radius: $radius;\r\t-moz-border-radius: $radius;\r\t-ms-border-radius:';
		$scope.examples[1] +='$radius;\r\tborder-radius: $radius;\r}\r\r.box { @include border-radius(10px); }';
		$scope.examples[2] = 'body{\r\tbackground-color:#0000FF;\r\r\ta{\r\t\t\tcolor:#0000FF;\r\t\t}\r}\r';
		$scope.examples[3] = '.message {\r\t border: 1px solid #ccc;\r\t padding: 10px;\r\tcolor: #333;\r}\r';
		$scope.examples[3] += '.success {\r\t @extend .message;\r\tborder-color: green;\r}\r';
		$scope.examples[3] += '.error {\r\t@extend .message;\r\tborder-color: red;\r}\r';
		$scope.examples[3] += '.warning {\r\t@extend .message;\r\tborder-color: yellow;\r}';
		$scope.examples[4] = '.container{ width: 100%; }\r\rarticle[role="main"]{\r\tfloat: left;\r\twidth: 600px / 960px * 100%;\r}\r\r';
		$scope.examples[4] += 'aside[role="complimentary"] {\r\tfloat: right;\r\twidth: 300px / 690px * 100%;\r}';
		$scope.examples[5] = '@mixin setColor($type){\rp{\r  @if $type == ocean {\r color: blue; \r  } @else if $type == matador { \r color: red;\r}';
		$scope.examples[5] += '@else if $type == monster {\r color: green;\r} @else {\r  color:black\r}\r}\r}';
		$scope.examples[5] += '\r\r.monster{\r   @include setColor(monster)\r}\r\r.test{\r  @include setColor(null)\r}\r\r.matador{\r  @include setColor(matador)\r}';	
		$scope.examples[6] = '@each $animal in puma, sea-slug, egret, salamander {\r  .#{$animal}-icon{\r     background-image: url("/images/#{$animal}.png");\r     }\r}';		
	}
	$scope.setExamples();
});


