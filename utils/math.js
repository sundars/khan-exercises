$.extend(KhanUtil, {
	// A simple random number picker
	rand: function( num ) {
		return Math.round( num * Math.random() );
	},

	// Get a random integer between min and max, inclusive
	randRange: function( min, max ) {
		return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
	},

	// Get a random nonzero integer between min and max, inclusive
	randRangeNonZero: function( min, max ) {
		var num;
		do {
			num = this.randRange( min, max );
		} while ( num === 0 );
		return num;
	},
	
	// Returns a random member of the given array
	randFromArray: function( arr ) {
		return arr[ this.rand( arr.length - 1 ) ];
	},

	// Returns a random member of arr which is not in narr
	randFromArrayNotIn: function( arr, narr ) {
		var member;
		do {
			member = this.randFromArray(arr);
		} while ( $.inArray( member, narr ) != -1 );
		return member;
	},

	// Round a number to a certain number of decimal places
	roundTo: function( precision, num ) {
		var factor = Math.pow( 10, -1 * precision ).toFixed(5);
		return Math.round( ( num * factor ).toFixed(5) ) / factor;
	}
});