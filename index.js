DataStore = function (options) {
  var self = this;
  var dataStore = {};

  this.set = function(key, value) {

    if (Array.isArray(key)) {
      console.error('Attempting to set data, but the first parameter should be either an object or a string. Found array.')
      return false;
    }
    if (typeof key === "object") {
      // Copy the values into the data Store
      $.extend(dataStore, key)
    }
    else if (typeof key === 'string') {
      dataStore[key] = value;

      if (typeof value === 'undefined') {
        console.error('Attempting to set data, but the value of the key-value pair is ' + typeof value)
        return false;
      }
    }
    else {
      console.error('Attempting to set data, but the first parameter should be either an object or a string. Found ' + typeof key)
      return false;
    }
    return true;
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
