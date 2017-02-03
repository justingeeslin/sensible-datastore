DataStore = function (options) {
  var self = this;
  var dataStore = {};

  this.set = function(data) {
    dataStore = data;
  }

  this.get = function(key) {
    return dataStore[key];
  }

  this.getAll = this.valueOf = function() {
    return dataStore;
  }

  this.hasOwnProperty = function(key) {
    return dataStore.hasOwnProperty(key)
  }

  this.empty = function() {
    dataStore = {};
  }

  return this;
};

if (typeof module !== "undefined") {
  module.exports = DataStore
}
