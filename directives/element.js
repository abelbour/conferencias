app.directive('element', function() {
    return {
        scope: {
            bind: '='
        },
        restrict: 'E',
       // replace: true,
        templateUrl: function(tElement, tAttrs) {
            return tAttrs.template;
        }
    };
});