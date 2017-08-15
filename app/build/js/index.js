'use strict';

var Service = require('./Search/Service');
Service     = new Service();

var ViewHelper = require('./Search/ViewHelper');
ViewHelper     = new ViewHelper();

var categoryInput = document.getElementById('position');
var locationInput = document.getElementById('location');

categoryInput.addEventListener('input', function() {
    var value = this.value;
    var positionElem = 'position-autocomplete';

    var positionAutoComplete = document.getElementById(positionElem);
    positionAutoComplete.style.display = 'none';

    if (value.length > 1) {
        ViewHelper.generatePleaseWait(positionElem);

        var categories = Service.getCategories(value);
        
        setTimeout(function() {
            if (categories.length > 0) {
                ViewHelper.generateAutoComplete(positionElem, categories);
            } else {
                ViewHelper.generateNoneFound(positionElem);
            }
        }, 2000);
        
    }
});

locationInput.addEventListener('input', function() {
    var value = this.value;
    var locationElem = 'location-autocomplete';

    var locationAutoComplete = document.getElementById(locationElem);
    locationAutoComplete.style.display = 'none';

    if (value.length > 1) {
        ViewHelper.generatePleaseWait(locationElem);

        var locations = Service.getLocations(value);
        
        setTimeout(function() {
            if (locations.length > 0) {
                ViewHelper.generateAutoComplete(locationElem, locations);

                var listItems = document.querySelectorAll('.autocomplete li');

                for (var i = 0; i < listItems.length; i++) {
                    listItems[i].addEventListener('click', function(e) {
                        ViewHelper.setInputValue(e.target.id, 'location')
                    });
                }
            } else {
                ViewHelper.generateNoneFound(locationElem);
            }
        }, 2000);
    }
});