
presentation.controller('fontIconController', function($scope){

    $scope.fontIcons =  ['a','b','c','d'];
    $scope.iconNames = ['calculate','calendar','command','contract'];
    $scope.size = 16;
    $scope.color = '#003D61';
    $scope.sizes = [16,24,48];

    $scope.getClosestSize = function(size){
        if(size < 16)
            return 16;
        if(size >= 16 && size < 24){
            return 16;
        }
        if(size >= 24 && size < 48){
            return 24;
        }
        return 48;
    }
});


