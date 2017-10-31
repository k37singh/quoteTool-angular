app.controller('QuoteSheetCtrl', ['$scope', function($scope) {
    $scope.user = {
      title: 'Developer',
      email: 'ipsum@lorem.com',
      firstName: 'John',
      lastName: 'Smoth',
      company: 'Google',
      address: '1600 Some Pkwy',
      city: 'Brampton',
      state: 'ON',
      biography: 'Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!',
      postalCode: 'L2V3W4'
    };

    $scope.states = ('AB BC MB NB NL NS NT NU ON PE QC SK YT').split(' ').map(function(state) {
        return {abbrev: state};
      });

}]);