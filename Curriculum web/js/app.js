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
    $scope.experience=[
        {
            title:'Team Leader (web devevelopment team - INEGI)',
            interval:'October 2015 - Date',
            description:'Managing and coordination of the partners and working groups engaged in project work. Deal with the customers the best solution for their problem.'
        },
        {
            title:'Web developer (INEGI)',
            interval:'April 2015 - Date',
            description:'Building many kind of applications like ETL (DB Load Automation), Report applications, Inventory control, etc...',
            subTopics:['.Net',' HTML',' CSS',' Bootstrap',' Materialize',' JS',' JQuery',' AngularJs',' fusionChartsJs',' SQL Server (development and maintenance of procedures, functions, etc)']
        },
        {
            title:'Application Support Technician (Softtek)',
            interval:'January 2014 - April 2015',
            description:'Support to different instances of business applications, ticket resolution'
        },
        {
            title:'Freelance Developer (external clients)',
            interval:'January 2013 - Date',
            description:'build some business web solutions from different clients: Web page and admin tool (currently), Billing Sistems, POS (Point of sales)',
            subTopics:[' HTML',' CSS',' SASS',' Bootstrap',' Materialize',' JS',' JQuery',' AngularJs','PHP (slim micro-framework, Larabel)',' MySql (development and maintenance of procedures, functions, etc)','FireBase','IONIC',' Ruby on Rails']

        },
    ]
    $scope.aptitudes=[
        {
            nombre:'HTML/HTML5',
            percent:'100%'
        },
        {
            nombre:'CSS/CSS3',
            percent:'90%'
        },
        {
            nombre:'SASS',
            percent:'90%'
        },
        {
            nombre:'CSS Frameworks (Bootstrap, materialize)',
            percent:'100%'
        },
        {
            nombre:'JS',
            percent:'100%'
        },
        {
            nombre:'JQuery',
            percent:'90%'
        },
        {
            nombre:'AngularJs',
            percent:'100%'
        },
        {
            nombre:'PHP',
            percent:'95%'
        },
        {
            nombre:'Laravel (PHP framework)',
            percent:'90%'
        },
        {
            nombre:'Slim (PHP framework)',
            percent:'90%'
        },
        {
            nombre:'Ruby on Rails',
            percent:'85%'
        },
        {
            nombre:'Ionic',
            percent:'75%'
        },
        {
            nombre:'MySql (Programmability)',
            percent:'85%'
        },
        {
            nombre:'SQL Server (Programmability)',
            percent:'80%'
        },
        {
            nombre:'FireBase',
            percent:'85%'
        },
    ]
//console.log(JSON.stringify($scope.cards))
})