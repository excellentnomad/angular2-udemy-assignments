(function(app){
  var Class = ng.core.Class;

  app.TimeService = new Class({
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

})(window.app || (window.app = {}));
