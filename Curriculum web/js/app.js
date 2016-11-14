var app=angular.module('seguros',['ui.materialize','ngRoute'])


.config(["$routeProvider",function ($routeProvider) {
    $routeProvider
    .when("/",
    {
        templateUrl: 'views/main.html',
        controller: "appControl"
    })
    .when("/ft",
    {
        templateUrl: 'views/firstTemplate.html',
        controller: "appControl"
    })
    .otherwise({
        redirectTo:"/"
    })

    //console.log(app);
}])
.controller('appControl', function($scope){
	$scope.cards=new JSON.constructor()
	$scope.cards[0]=new JSON.constructor()
	$scope.cards[1]=new JSON.constructor()
	$scope.cards[0]={
        title:'title',
        subtitle:'sub title',
		img:'img/default.jpg',
		content:'esta madre si funciona',
		link:'http://www.google.com',
		titleLink:'linkation',
	}
	$scope.cards[1]={
		title:'titulo',
		img:'img/nature1.jpg',
		content:'esta madre si funciona',
		link:'http://www.google.com',
		titleLink:'BLABLABLA',
	}

	$scope.manyTabs = [{
        icon: 'mdi-image-filter-drama',
		img:'img/default.jpg',
        title: 'First',
        content: 'Lorem ipsum dolor sit amet.'
    },{
        icon: 'mdi-maps-place',
		img:'img/default.jpg',
        title: 'Second',
        content: 'Lorem ipsum dolor sit amet.'
    },{
        icon: 'mdi-social-whatshot',
        title: 'Third',
        content: 'Lorem ipsum dolor sit amet.'
    }
];
//console.log(JSON.stringify($scope.cards))
})