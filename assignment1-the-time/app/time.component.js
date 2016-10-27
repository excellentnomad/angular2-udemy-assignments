(function(app){
  var Component = ng.core.Component;
  var TimeService = app.TimeService;

  app.TimeComponent = Component({
    selector: 'display-time',
    template: '<p>{{currentTime}}</p>'
  })
  .Class({
    constructor: [TimeService, function TimeComponent(timeService) {
      var self = this;
      timeService.getCurrentTime(1000, function(currentTime) {
        self.currentTime = currentTime;
      });
    }]
  });

})(window.app || (window.app = {}));
