(function(app){
  var Component = ng.core.Component;

  app.AppComponent = Component({
    selector: 'my-app',
    template:
      '<h1>Time is:</h1>' +
      '<display-time></display-time>'
  })
  .Class({
    constructor: function() {}
  });

})(window.app || (window.app = {}));
