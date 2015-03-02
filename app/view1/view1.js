'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
        $scope.sortBy = 'vineyard';
        $scope.reverse = false;
        /*$scope.bottles = [
            {id:'1', vineyard: 'Chapoutier', type: 'Rouge', year: '2013', appellation: 'Cotes du Roussilon Village',
                extra: 'Occultum Lapidem', cost:'12.90', url:'http://www.chapoutier.com/cotes-du-roussillon-villages-red,occultum-lapidem-2013,wine,59.html',
                image:'img/bila-haut-occultum-lapidem-rge-e.jpg'},
            {id:'2', vineyard: 'Guigal', type: 'Rouge', year: '2009', appellation: 'Cote Rotie',
                extra: 'Blonde et Brune', cost:'12.90', url:'http://www.guigal.com/en/vins.php?id_millesime=10&id_produit=12',
                image:'img/cote_rotie_brune_et_blonde_de_guigal nouv_2_Zoom.jpeg' },
            {id:'3', vineyard: 'Cave de Saint-Desirat', type: 'Rouge', year: '2011', appellation: 'Saint Joseph',
                extra: 'Les Mariniers', cost:'9.75', url:'http://www.cave-saint-desirat.com/SAINT-JOSEPH-ROUGE-LES-MARINIERS-10.html',
                image:'img/SaintDesiratLesMariniers2010.jpg' }
        ];*/
        $http.get('bottles/bottles.json').success(function(data) {
            $scope.bottles = data;
        });

}]);
