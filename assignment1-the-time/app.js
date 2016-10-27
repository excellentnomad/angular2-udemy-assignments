(function(){
  var Component = ng.core.Component;
  var NgModule    = ng.core.NgModule;
  var BrowserModule = ng.platformBrowser.BrowserModule;
  var platformBrowserDynamic = ng.platformBrowserDynamic.platformBrowserDynamic;
  var Class = ng.core.Class;

  var TimeService = new Class({
    constructor: function() {
      this.currentTime = new Date();
    },

    getCurrentTimeOnce: function() {
      return new Date();
    },

    getCurrentTime: function(delay, callback) {
      var self = this;
      callback(this.getCurrentTimeOnce());
      setInterval(function() {
        callback(self.getCurrentTimeOnce());
      }, delay);
    }
  });

  var TimeComponent = Component({
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

  var AppComponent = Component({
    selector: 'my-app',
    template:
      '<h1>Time is:</h1>' +
      '<display-time></display-time>'
  })
  .Class({
    constructor: function() {}
  });

  var AppModule = NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, TimeComponent],
    providers: [TimeService],
    bootstrap: [AppComponent]
  })
  .Class({
    constructor: function() {}
  });

  platformBrowserDynamic().bootstrapModule(AppModule);
}());
