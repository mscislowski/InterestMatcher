var app = angular.module('homeModule');

var mainRef = new Firebase("https://interestmatcher.firebaseio.com/");

app.controller('ChatController',['$scope','publicChatMessages',
	function($scope, publicChatMessages){

		console.log('psst');

		$scope.messages = publicChatMessages;

		var fullID = mainRef.getAuth().uid;
		var fbString = "facebook:";

		$scope.facebookID = fullID.substring(fbString.length,fullID.length);
		console.log("Just the ID:"  + $scope.facebookID);
		// Function used to add a new post.
		$scope.addMessage = function(){

			$scope.messages.$add({
				author: mainRef.getAuth().facebook.displayName,
				content: $scope.message,
				facebookID: $scope.facebookID,

			});

			console.log('Data sent?');
			// Reset title and content.
			//$scope.newPostTitle = '';
			$scope.post = '';
		}
	}
]);