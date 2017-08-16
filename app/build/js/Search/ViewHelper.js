'use strict';

var ViewHelper = function() {}

ViewHelper.prototype.generateAutoComplete = function(element, suggestions) {
    var autocompleteResults = document.getElementById(element);
    autocompleteResults.innerHTML = '';

    for (var i = 0; i < suggestions.length; i++) {
        autocompleteResults.innerHTML
        += '<li class="list-group-item" id="' + element + '-' +  
            i + '">' + suggestions[i].name + '</li';
    }

    this.showElement(element);
}

ViewHelper.prototype.generatePleaseWait = function(element) {
    var autocompleteResults = document.getElementById(element);
    autocompleteResults.innerHTML = '<li class="list-group-item">' +
        '<i class="fa fa-spinner" aria-hidden="true"></i> Please wait' + 
        '</li>';

    this.showElement(element);
}

ViewHelper.prototype.generateNoneFound = function(element) {
    var autocompleteResults = document.getElementById(element);
    autocompleteResults.innerHTML = '<li class="list-group-item">' +
        '<i class="fa fa-exclamation-triangle" aria-hidden="true"></i> None Found' + 
        '</li>';

    this.showElement(element);
}

ViewHelper.prototype.setInputValue = function(elementId, inputElement, autoCompleteElem) {
    var elem  = document.getElementById(elementId);
    var value = elem.innerHTML;

    var input = document.getElementById(inputElement);
    input.value = value;

    this.hideElement(autoCompleteElem);
}

ViewHelper.prototype.hideElement = function(elementId) {
    var elem = document.getElementById(elementId);
    elem.style.display = 'none';
}

ViewHelper.prototype.showElement = function(elementId) {
    var elem = document.getElementById(elementId);
    elem.style.display = 'block';
}

ViewHelper.prototype.generateBusinessList = function(list) {
    var listContainer = document.getElementById('business-list');
    listContainer.innerHTML = '';

    var content = '';
    
    for (var i = 0; i < list.length; i++) {
        content += '<li class="media">' +
            '<div class="media-body">' +
                '<h4><a href="http://www.yourlocal.ie/company/' + list[i]['_id'] + '">' +
                    list[i]['name']['name'] +
                '</a></h4>' +
                '<p>' + list[i]['postal_address']['building_number'] + ' ' 
                    + list[i]['postal_address']['address1'] + ' ' 
                    + list[i]['postal_address']['address2'] + ' '
                    + list[i]['postal_address']['town'] + ' '
                    + list[i]['postal_address']['postcode'] +
                '</p>' +
                '<p><i class="fa fa-tag" aria-hidden="true"></i> ';

        for (var j = 0; j < list[i]['categories'].length; j++) {
            content += list[i]['categories'][j]['category_name'] + ' ';
        }

        content += '</p>';

        content += '<hr />' +
            '</div>'
        '</li>';    
    }

    listContainer.innerHTML = content;
}

module.exports = ViewHelper;