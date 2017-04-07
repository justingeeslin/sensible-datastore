# sensible-datastore

A class for storing data inside of a private data member accessible only by Setters and Getters.

[![Build Status](https://travis-ci.org/justingeeslin/sensible-datastore.svg?branch=master)](https://travis-ci.org/justingeeslin/sensible-datastore) [![Code Climate](https://codeclimate.com/github/justingeeslin/sensible-datastore/badges/gpa.svg)](https://codeclimate.com/github/justingeeslin/sensible-datastore)[![Test Coverage](https://codeclimate.com/github/justingeeslin/sensible-datastore/badges/coverage.svg)](https://codeclimate.com/github/justingeeslin/sensible-datastore/coverage)

## Usage

```JavaScript
const DataStore = require('sensible-datastore');
var myData = new DataStore();
myData.set({firstName: 'John', lastName: 'Doe'});
myData.set('middleName', "Wayne");
var firstName = myData.get('firstName');
```

Optionally, you might want to empty the data store completely

```JavaScript
myData.empty()
```

Optionally, you might want all the data at once.

```JavaScript
var data = myData.getAll()
```

## Installing via NPM
`npm install --save https://github.com/justingeeslin/sensible-datastore`

## Testing
`npm test`

## Other Notes
Uses jQuery's Extend.
