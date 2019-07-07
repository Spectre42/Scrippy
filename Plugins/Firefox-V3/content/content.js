/***************************************************************************
Copyright © 2016, 2017 Gary
This file is part of Scrippy

    Scrippy is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Scrippy is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>
***************************************************************************/
/***************************************************************************
    GLOBALY VARS
    
    *Var for element that user clicked
    *Vars for menu and the selected strings/payloads
***************************************************************************/
//element clicked on the current tab.
let clickedEl = null;
//String to be encoded
let selectedText = "";
//Encoded String
let encodedText = "";
//Decode String
let decodeText = "";
/**********Quick SQL**********/
const quickSQL1 = "'OR 1=1";
const quickSQL2 = "'ORDER BY";
const quickSQL3 = "'SELECT @@version";
const quickSQL4 = "'SELECT schema_name FROM information_schema.schemata;";
const quickSQL5 = "'UNION ALL SELECT LOAD_FILE(‘/etc/passwd’)";
/**********Quick XSS**********/
const quickXss1 = "<script /*%00*/>/*%00*/alert(1)/*%00*/</script /*%00*/";
const quickXss2 = "<script /*%00*/>/*%00*/document.cookie/*%00*/</script /*%00*/\"";
/**********Favourites**********/
let fav1 = inputValues(), fav2 = inputValues(), fav3 = inputValues(),
fav4 = inputValues(), fav5 = inputValues(), fav6 = inputValues(),
fav7 = inputValues(), fav8 = inputValues(), fav9 = inputValues(), fav10 = inputValues();

/***************************************************************************
 GET STORED STIRINGS/PAYLOADS FROM OPTIONS PAGE STORAGE

 *Input function gets the input values from the options
 *and sets the global vars to equal the items in the chrome.storage
 ***************************************************************************/
// Restores values stored in storage.
function inputValues() {
    browser.storage.local.get({
            storedMyFav1: ''
            , storedMyFav2: ''
            , storedMyFav3: ''
            , storedMyFav4: ''
            , storedMyFav5: ''
            , storedMyFav6: ''
            , storedMyFav7: ''
            , storedMyFav8: ''
            , storedMyFav9: ''
            , storedMyFav10: ''
        , }, //function that places the values stored in storage and puts them in the input boxes
        function (items) {
            fav1 = items.storedMyFav1;
            fav2 = items.storedMyFav2;
            fav3 = items.storedMyFav3;
            fav4 = items.storedMyFav4;
            fav5 = items.storedMyFav5;
            fav6 = items.storedMyFav6;
            fav7 = items.storedMyFav7;
            fav8 = items.storedMyFav8;
            fav9 = items.storedMyFav9;
            fav10 = items.storedMyFav10;
        });
}
/***************************************************************************
    GET RIGHT CLICKED ELEMENT
    
    *on mouse click update clicked element
***************************************************************************/
// listener to determine what element the user right clicked on
document.addEventListener("mousedown", function (event) {
    //right click
    if (event.button === 2) {
        clickedEl = event.target.id;
    }
}, true);
/***************************************************************************
    ON MESSANGER LISTENER
    
    *Listens for message to be recived - on doing so checks menu 
     and fires correct menu var
***************************************************************************/
//Context Menu ID that was clicked
browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log(request.menuId);
    switch (request.menuId) {
        case '20':
            document.getElementById(clickedEl).value = quickSQL1;
            break;
        case '21':
            document.getElementById(clickedEl).value = quickSQL2;
            break;
        case '22':
            document.getElementById(clickedEl).value = quickSQL3;
            break;
        case '23':
            document.getElementById(clickedEl).value = quickSQL4;
            break;
        case '24':
            document.getElementById(clickedEl).value = quickSQL5;
            break;
        case '25':
            document.getElementById(clickedEl).value = quickSQL6;
            break;
        case '26':
            document.getElementById(clickedEl).value = quickSQL7;
            break;
        case '27':
            document.getElementById(clickedEl).value = quickSQL8;
            break;
        case '28':
            document.getElementById(clickedEl).value = quickSQL9;
            break;
        case '29':
            document.getElementById(clickedEl).value = quickSQL10;
            break;
        case '30':
            document.getElementById(clickedEl).value = fav1;
            break;
        case '31':
            document.getElementById(clickedEl).value = fav2;
            break;
        case '32':
            document.getElementById(clickedEl).value = fav3;
            break;
        case '33':
            document.getElementById(clickedEl).value = fav4;
            break;
        case '34':
            document.getElementById(clickedEl).value = fav5;
            break;
        case '35':
            document.getElementById(clickedEl).value = fav6;
            break;
        case '36':
            document.getElementById(clickedEl).value = fav7;
            break;
        case '37':
            document.getElementById(clickedEl).value = fav8;
            break;
        case '38':
            document.getElementById(clickedEl).value = fav9;
            break;
        case '39':
            document.getElementById(clickedEl).value = fav10;
            break;
        case '40':
            getSelectionText();
            encodeBase64();
            document.getElementById(clickedEl).value = encodedText;
            break;
        case '41':
            getSelectionText();
            encodeURL();
            document.getElementById(clickedEl).value = encodedText;
            break;
        case '50':
            document.getElementById(clickedEl).value = quickXss1;
            break;
        case '51':
            document.getElementById(clickedEl).value = quickXss2;
            break;
        case '60':
            getSelectionText();
            decodeBase64();
            document.getElementById(clickedEl).value = decodeText;
            break;
        case '61':
            getSelectionText();
            decodeURL();
            document.getElementById(clickedEl).value = decodeText;
            break;
        case '62':
            document.getElementById(clickedEl).value = quickXss5;
            break;
        default:
            sendResponse({
                something: "Dont got it"
            });
            console.log('Something Unexpected  has happened, menu item : ' + request.menuId.value + ' was clicked');
    }
    sendResponse({
        gotIt: "Got it"
    });
});
/***************************************************************************
    ENCODE & Decode

    *Get selected string
    *Encode/Decode base64 encoding
    *Encode/Decode URL encoding
    *paste over highlighted string      
****************************************************************************/
//Get selected string
//http://stackoverflow.com/a/5379408/2213003
function getSelectionText() {
    let activeEl = document.activeElement;
    let activeElTagName = activeEl ? activeEl.tagName.toLowerCase() : null;
    if (
        (activeElTagName === "textarea" || activeElTagName === "input") && /^(?:text|textarea|search|password|tel|url)$/i.test(activeEl.type) && (typeof activeEl.selectionStart == "number")) {
        selectedText = activeEl.value.slice(activeEl.selectionStart, activeEl.selectionEnd);
    }
    else if (window.getSelection) {
        selectedText = window.getSelection().toString();
    }
    return selectedText;
}
//Encode to Base64
function encodeBase64() {
    //Do encoding on selected text
    encodedText = window.btoa(selectedText);
    return encodedText;
}
//Encode to URL
function encodeURL() {
    encodedText = encodeURIComponent(selectedText);
    return encodedText;
}
//Decode to Base64
function decodeBase64() {
    //Do encoding on selected text
    decodeText = window.atob(selectedText);
    return decodeText;
}
//Decode to URL
function decodeURL() {
    decodeText = decodeURIComponent(selectedText);
    return decodeText;
}