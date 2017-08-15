'use strict';

var Service = function() {
    this.proxy_url = 'https://cors-anywhere.herokuapp.com/';
    this.api_url   = 'https://api.centralindex.com';
    this.api_key   = '6nwazmd2mc2dvbrvxjd66jyg';
}

Service.prototype.getCategories = function(category) {
    var url = this.proxy_url + this.api_url + '/v1/autocomplete/category';
    var categories = [];

    $.ajax({
        method: 'GET',
        url: url,
        data: {
            api_key: this.api_key,
            str: category
        },
        success: function(results) {
            var success = results['success'];
            var suggestions = results['data']['suggestions'];

            if (success === true && suggestions.length > 0) {
                for (var i = 0; i < suggestions.length; i++) {
                    categories.push(suggestions[i]);
                }
            }
        }
    });

    return categories;
}

Service.prototype.getLocations = function(location) {
    var url = this.proxy_url + this.api_url + '/v1/autocomplete/location';
    var locations = [];
    
    $.ajax({
        method: 'GET',
        url: url,
        data: {
            api_key: this.api_key,
            str: location
        },
        success: function(results) {
            var success     = results['success'];
            var suggestions = results['data']['suggestions'];

            if (success === true && suggestions.length > 0) {
                for (var i = 0; i < suggestions.length; i++) {
                    locations.push(suggestions[i]);
                }
            }
        }
    });

    return locations;
}

module.exports = Service;