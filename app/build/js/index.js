'use strict';

var Service = require('./Search/Service');
Service     = new Service();

var categoryInput = document.getElementById('position');
var locationInput = document.getElementById('location');

categoryInput.addEventListener('input', function() {
    var value = this.value;

    if (value.length > 1) {
        var categories = Service.getCategories(value);
        console.log(categories);
    }
});

locationInput.addEventListener('input', function() {
    var value = this.value;

    if (value.length > 1) {
        var locations = Service.getLocations(value);
        console.log(locations);
    }
});


