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

    autocompleteResults.style.display = 'block';
}

ViewHelper.prototype.generatePleaseWait = function(element) {
    var autocompleteResults = document.getElementById(element);
    autocompleteResults.innerHTML = '<li class="list-group-item">' +
        '<i class="fa fa-spinner" aria-hidden="true"></i> Please wait' + 
        '</li>';

    autocompleteResults.style.display = 'block';
}

ViewHelper.prototype.generateNoneFound = function(element) {
    var autocompleteResults = document.getElementById(element);
    autocompleteResults.innerHTML = '<li class="list-group-item">' +
        '<i class="fa fa-exclamation-triangle" aria-hidden="true"></i> None Found' + 
        '</li>';

    autocompleteResults.style.display = 'block';
}

ViewHelper.prototype.setInputValue = function(elementId, parentElement) {
    var elem  = document.getElementById(elementId);
    var value = elem.innerHTML;

    var input = document.getElementById(parentElement);
    input.value = value;
}

module.exports = ViewHelper;