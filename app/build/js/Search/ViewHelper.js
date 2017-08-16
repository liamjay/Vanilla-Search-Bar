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
module.exports = ViewHelper;