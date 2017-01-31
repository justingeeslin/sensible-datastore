describe('DataStore', function() {

		beforeAll(function() {

		});

		it('should construct a DataStore', function() {
			window.theData = new DataStore();
			expect(window.theData instanceof DataStore).toBe(true)
    });

		it('should set values from an object passed as a parameter', function() {
			theData.set({name: 'John'});
			// Get the value. Is it the same value?
			expect(theData.get('name')).toBe('John');
    });

		it('should get a value using a key (string parameter)', function() {
			// Set a value first
			theData.set({name: 'John'});
			// Get the value. Is it the same value?
			expect(theData.get('name')).toBe('John');
    });

		it('should get all data', function() {
			var allData = {'firstName': 'John', 'lastName': 'Doe'}
			// Set a value first
			theData.set(allData);
			// Get the value. Is it the same value?
			expect(theData.getAll()).toBe(allData);
    });

		it('should implement valueOf', function() {
			var allData = {'firstName': 'John', 'lastName': 'Doe'}
			// Set a value first
			theData.set(allData);
			// Get the value. Is it the same value?
			expect(theData.valueOf()).toBe(allData);
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
