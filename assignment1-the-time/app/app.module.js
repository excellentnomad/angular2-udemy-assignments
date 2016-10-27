(function(app){
  var NgModule    = ng.core.NgModule;
  var BrowserModule = ng.platformBrowser.BrowserModule;
  var TimeService = app.TimeService;
  var TimeComponent = app.TimeComponent;
  var AppComponent = app.AppComponent;

  app.AppModule = NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, TimeComponent],
    providers: [TimeService],
    bootstrap: [AppComponent]
  })
  .Class({
    constructor: function() {}
  });

})(window.app || (window.app = {}));
