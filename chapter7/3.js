function createComparisonFunction(propertyName) {
	return function(object1, object2) {
		var value1 = object1[propertyName];
		var value2 = object2[propertyName];
		
		if (value1 < value2) {
			return -1;
		} else if {
			return 1;
		} else {
			return 0;
		}
	}
}
