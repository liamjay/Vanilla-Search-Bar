'use strict';

var Service = function() {
    this.proxy_url = 'https://cors-anywhere.herokuapp.com/';
    this.api_url   = 'https://api.centralindex.com';
    this.api_key   = '6nwazmd2mc2dvbrvxjd66jyg';
    this.country   = 'ie';
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
            str: location,
            country: this.country
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

Service.prototype.getBusinesses = function(position, location, count = 10) {
    var url = this.proxy_url + this.api_url + '/v1/entity/search/what/bylocation';
    var businesses = [];

    $.ajax({
        method: 'GET',
        url: url,
        data: {
            api_key: this.api_key,
            what: position,
            where: location,
            async: false,
            country: this.country
        },
        success: function(results) {
            var success = results['success'];
            var totalRows = parseInt(results['data']['total_rows']);

            if (success === true && totalRows !== 0) {
                for (var i = 0; i < count; i++) {
                    businesses.push(results['data']['rows'][i]);
                }
            }
        }
    });

    return businesses;
}

module.exports = Service;