var app = angular.module('app', []);

app.controller('Ctrl', function($scope, $sce) {
	$scope.questions = [
	"Find and Label 5 or more new words you found while reading. If you did not find 5 new words, then write down 5 things you learned while reading the passage.",
	"Why is the author writing this? What is his or her motive or purpose?",
	"Which of the author's statements are facts? Which are opinions?",
	"Write 3 or more sentence summary of what you have read, explaining in general what this passage is about.",
	"Reflect on what you have read and come up with 3 or more questions you have either about the text itself, or for the author.",
	// "Of the author's conclusions, which are justified? Which ones are not justified?"
	];
	$scope.text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis posuere dolor quis imperdiet. Pellentesque ac dignissim velit. Sed aliquam lectus vel erat porttitor, vitae pharetra nunc bibendum. In posuere magna ante, sit amet convallis leo tincidunt eu. Fusce rutrum lacus sed nulla tincidunt lobortis. Proin mattis mi ante, eu porta sem laoreet et. Praesent sagittis sagittis quam a tristique. Mauris velit purus, laoreet eget rhoncus at, vestibulum ut neque. Donec sed vestibulum nulla.\
\n\
Curabitur quis placerat dolor, quis interdum lacus. In hac habitasse platea dictumst. Duis semper quam posuere, rutrum metus in, mollis ante. In hac habitasse platea dictumst. Suspendisse iaculis eros sed ullamcorper egestas. Nam aliquet aliquet commodo. Donec semper sodales lectus, vel tincidunt tortor sagittis eget. Mauris sodales, ante ultrices sodales vulputate, diam elit congue dolor, quis aliquet lorem magna ut nibh. Aliquam dapibus ac orci at venenatis. Nunc egestas faucibus molestie. Integer aliquet sapien nec condimentum vestibulum. Integer fermentum justo nulla, non pellentesque massa suscipit sit amet. Aliquam blandit congue quam vitae tincidunt. Vivamus ac dapibus eros.\
\n\
Fusce fringilla magna eu ligula luctus faucibus. Suspendisse a ultricies metus, a gravida libero. Suspendisse sit amet mattis ligula, a dignissim erat. Morbi aliquet hendrerit ex eu lacinia. Quisque pharetra, nibh in vestibulum vulputate, est tortor ullamcorper lectus, vitae blandit enim lacus sed purus. Nunc malesuada sem id enim laoreet pretium. Quisque mattis, eros fermentum sodales laoreet, odio augue ullamcorper dui, quis pulvinar nibh lectus at turpis. Morbi non tortor in lorem aliquam aliquet eu molestie libero. Fusce egestas tristique risus, nec pulvinar metus feugiat quis. Sed convallis neque sed risus interdum faucibus. Phasellus eu neque eget mauris tincidunt blandit id ac lorem.\
\n\
Donec vitae molestie ligula. Aliquam ultrices nibh eu libero tempor, a finibus dolor feugiat. Nullam bibendum lectus diam, ac auctor nisi bibendum ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu leo lacinia, volutpat tellus nec, vulputate mi. In vehicula, velit ac cursus elementum, nunc sem posuere ante, vel dictum leo turpis vitae odio. Morbi blandit tempus vestibulum. Morbi in enim magna. Donec euismod lectus aliquam gravida ultricies. Nullam augue nibh, facilisis eget mauris vitae, fringilla consequat lorem. Suspendisse venenatis aliquam mi, id faucibus diam feugiat non.\
\n\
Curabitur vehicula malesuada eros, sit amet porta dui imperdiet quis. Curabitur et ullamcorper risus. In sed purus pellentesque, tempus justo ut, cursus erat. Nunc mi est, imperdiet ut auctor ut, bibendum vitae enim. Nunc ipsum neque, pulvinar ut dictum sit amet, aliquet quis neque. Aenean a commodo ex. Donec hendrerit, ex ut consequat finibus, ligula orci semper augue, eget blandit tortor mi ut dui. Maecenas non nisl ac risus hendrerit tristique id blandit ex. Cras fermentum dictum lorem quis facilisis. Nunc molestie lorem ac ipsum eleifend ornare ut a justo. Phasellus eget pretium justo, sed condimentum nisi. Nam tempus nisi eget varius feugiat. Ut posuere magna ac ipsum fringilla, interdum aliquam diam consectetur. Fusce condimentum massa nisi, in egestas libero suscipit eget. Quisque ante felis, pulvinar id interdum et, dapibus vel est. Curabitur posuere id felis ac mollis.\
\n\
Curabitur vehicula malesuada eros, sit amet porta dui imperdiet quis. Curabitur et ullamcorper risus. In sed purus pellentesque, tempus justo ut, cursus erat. Nunc mi est, imperdiet ut auctor ut, bibendum vitae enim. Nunc ipsum neque, pulvinar ut dictum sit amet, aliquet quis neque. Aenean a commodo ex. Donec hendrerit, ex ut consequat finibus, ligula orci semper augue, eget blandit tortor mi ut dui. Maecenas non nisl ac risus hendrerit tristique id blandit ex. Cras fermentum dictum lorem quis facilisis. Nunc molestie lorem ac ipsum eleifend ornare ut a justo. Phasellus eget pretium justo, sed condimentum nisi. Nam tempus nisi eget varius feugiat. Ut posuere magna ac ipsum fringilla, interdum aliquam diam consectetur. Fusce condimentum massa nisi, in egestas libero suscipit eget. Quisque ante felis, pulvinar id interdum et, dapibus vel est. Curabitur posuere id felis ac mollis.\
\n\
Curabitur vehicula malesuada eros, sit amet porta dui imperdiet quis. Curabitur et ullamcorper risus. In sed purus pellentesque, tempus justo ut, cursus erat. Nunc mi est, imperdiet ut auctor ut, bibendum vitae enim. Nunc ipsum neque, pulvinar ut dictum sit amet, aliquet quis neque. Aenean a commodo ex. Donec hendrerit, ex ut consequat finibus, ligula orci semper augue, eget blandit tortor mi ut dui. Maecenas non nisl ac risus hendrerit tristique id blandit ex. Cras fermentum dictum lorem quis facilisis. Nunc molestie lorem ac ipsum eleifend ornare ut a justo. Phasellus eget pretium justo, sed condimentum nisi. Nam tempus nisi eget varius feugiat. Ut posuere magna ac ipsum fringilla, interdum aliquam diam consectetur. Fusce condimentum massa nisi, in egestas libero suscipit eget. Quisque ante felis, pulvinar id interdum et, dapibus vel est. Curabitur posuere id felis ac mollis.";

	$scope.title="The Title";
	$scope.author="Author's Name"
	$scope.wordsPerPage = 750;
	$scope.breakBy=50;
	$scope.spacing = 1.25;
	$scope.textArr = $scope.text.split("\n");
	$scope.displayText = $scope.text.replace(/\n+/g,"<p>");;
	$scope.trustedHtml = $sce.trustAsHtml($scope.displayText);
	$scope.groups = [1];
	$scope.groupNum = 1;
	$scope.makeGroupsInRange = function (num) {
		var arr = [];
		for (var i = 0; i < num; i++) {
			arr.push(i)
		};
		return arr;
	}
	$scope.makeGroups = function() {
		// wpp depends on breaksBy
		// wpp = 750 for 50, 800 for 100, 450 for 1
		//  544.8764 + 44.8737Ln(X) 


		var wpp = 544.8764 + (44.8737 * Math.log($scope.breakBy));
		console.log(wpp);

		var g = Math.ceil($scope.text.split(" ").length/wpp);
		return g;
		// console.log(g,$scope.text.split(" "));
		// var arr = []
		// // return [];
		// for (var i = 0; i < g; i++) {
		// 	arr.push(i)
		// };
		// return arr;
	}
	// $scope.makeGroups = function (dtext) {
	// 	var displays = angular.copy(dtext.split(" "));
	// 	var groups = [], size = 800;

	// 	while (displays.length > 0)
	// 	    groups.push(displays.splice(0, size).join(" "));
	// 	return groups;
	// }
	// $scope.groups = $scope.makeGroups($scope.displayText);

	$scope.makeGuide = function(text) {
		if ($scope.breakBy>0) {
			var textArr = text.split(" ");
			var newText = text;
			console.log(textArr.length);
			for (var i = $scope.breakBy; i <=textArr.length; i+=$scope.breakBy) {
				textArr[i-1]+=' <span class="number">'+i+'</span>'
			}
			$scope.displayText = textArr.join(" ").replace(/\n+/g,"<p>");
			// $scope.groups = $scope.makeGroups($scope.displayText);
			$scope.trustedHtml = $sce.trustAsHtml($scope.displayText);			
			// $scope.groups = $sce.trustAsHtml($scope.groups);			
		}
		$scope.groupNum = $scope.makeGroups();
		// $scope.groups = $scope.makeGroupsInRange();
		return 

	}



});
