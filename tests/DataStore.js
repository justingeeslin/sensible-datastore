describe('DataStore', function() {

		beforeAll(function() {

		});

		it('should construct a DataStore', function() {
			window.theData = new DataStore();
			expect(window.theData instanceof DataStore).toBe(true)
    });

		it('should set a value from a key value pair', function() {
			theData.set('name', 'John');
			// Get the value. Is it the same value?
			expect(theData.get('name')).toBe('John');
    });

		it('should set a value from an object passed as a parameter', function() {
			theData.set({name: 'James'});
			// Get the value. Is it the same value?
			expect(theData.get('name')).toBe('James');
    });

		it('should return false if the first parameter of set is not either an object or a string key.', function() {
			var returnValue = theData.set(['name'], 'John');
			// Get the value. Is it the same value?
			expect(returnValue).toBe(false);
    });

		it('should return false if the first parameter is a key but second parameter of set is neither an object or a string.', function() {
			var returnValue = theData.set('name');
			// Get the value. Is it the same value?
			expect(returnValue).toBe(false);
		});

		it('should get a value using a key (string parameter)', function() {
			// Set a value first
			theData.set('name', 'Peter');
			// Get the value. Is it the same value?
			expect(theData.get('name')).toBe('Peter');
    });

		it('should get all data', function() {
			theData.empty();
			var allData = {'firstName': 'John', 'lastName': 'Doe'}
			// Set a value first
			theData.set(allData);
			// Get the value. Is it the same value?
			expect(theData.getAll().toString()).toBe(allData.toString());
    });

		it('should implement valueOf', function() {
			theData.empty();
			var allData = {'firstName': 'John', 'lastName': 'Doe'}
			// Set a value first
			theData.set(allData);
			// Get the value. Is it the same value?
			expect(theData.valueOf().toString()).toBe(allData.toString());
    });

		it('should implement hasOwnProperty', function() {
			var allData = {'firstName': 'John', 'lastName': 'Doe'}
			// Set a value first
			theData.set(allData);
			// Get the value. Is it the same value?
			expect(theData.hasOwnProperty('firstName')).toBe(true);
    });

		afterAll(function() {

		});

});
