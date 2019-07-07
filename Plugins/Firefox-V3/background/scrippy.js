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
    CONTEXT MENU
    
    *Create context menu items
    *Get favorites form storage 
***************************************************************************/
// Restores values stored in chrome.storage.
document.addEventListener('DOMContentLoaded', menuTitles);

function menuTitles() {
    browser.storage.local.get({
            storedMyFav1Title: ''
            , storedMyFav2Title: ''
            , storedMyFav3Title: ''
            , storedMyFav4Title: ''
            , storedMyFav5Title: ''
            , storedMyFav6Title: ''
            , storedMyFav7Title: ''
            , storedMyFav8Title: ''
            , storedMyFav9Title: ''
            , storedMyFav10Title: ''
        , }, //function that gets menu titles form chrome storage and sets the global vars to that value
        function (items) {
            // Create context menu type variable so that its easily changed for all of them - not set currently
            var type = ["all"];
            /**********Create Parent items 1 - 19**********/
            browser.contextMenus.create({
                "id": "1"
                , "title": "Scrippy"
                , "contexts": ["all"]
            });
            browser.contextMenus.create({
                "id": "2"
                , "title": "SQL"
                , "parentId": "1"
                , "contexts": ["all"]
            });
            browser.contextMenus.create({
                "id": "4"
                , "title": "XSS"
                , "parentId": "1"
                , "contexts": ["all"]
            });
            browser.contextMenus.create({
                "id": "8"
                , "title": "Command"
                , "parentId": "1"
                , "contexts": ["all"]
            });
            browser.contextMenus.create({
                "id": "3"
                , "title": "Favourite Injections"
                , "parentId": "1"
                , "contexts": ["all"]
            });
            browser.contextMenus.create({
                "id": "6"
                , "title": "Encode"
                , "parentId": "1"
                , "contexts": ["all"]
            });
            browser.contextMenus.create({
                "id": "7"
                , "title": "Decode"
                , "parentId": "1"
                , "contexts": ["all"]
            });
            /**********SQL 20-29**********/
            browser.contextMenus.create({
                "id": "20"
                , "title": "'OR 1=1"
                , "parentId": "2"
                , "contexts": ["all"]
            });
            browser.contextMenus.create({
                "id": "21"
                , "title": "'ORDER BY"
                , "parentId": "2"
                , "contexts": ["all"]
            });
            browser.contextMenus.create({
                "id": "22"
                , "title": "'SELECT @@version"
                , "parentId": "2"
                , "contexts": ["all"]
            });
            browser.contextMenus.create({
                "id": "23"
                , "title": "'SELECT schema_name..."
                , "parentId": "2"
                , "contexts": ["all"]
            });
            browser.contextMenus.create({
                "id": "24"
                , "title": "'UNION ALL SELECT LOAD_FILE(‘/etc/passwd’)"
                , "parentId": "2"
                , "contexts": ["all"]
            });
            /**********Favourite Injections 30-39**********/
            browser.contextMenus.create({
                "id": "30"
                , "title": items.storedMyFav1Title
                , "parentId": "3"
                , "contexts": ["all"]
            });
            browser.contextMenus.create({
                "id": "31"
                , "title": items.storedMyFav2Title
                , "parentId": "3"
                , "contexts": ["all"]
            });
            browser.contextMenus.create({
                "id": "32"
                , "title": items.storedMyFav3Title
                , "parentId": "3"
                , "contexts": ["all"]
            });
            browser.contextMenus.create({
                "id": "33"
                , "title": items.storedMyFav4Title
                , "parentId": "3"
                , "contexts": ["all"]
            });
            browser.contextMenus.create({
                "id": "34"
                , "title": items.storedMyFav5Title
                , "parentId": "3"
                , "contexts": ["all"]
            });
            browser.contextMenus.create({
                "id": "35"
                , "title": items.storedMyFav6Title
                , "parentId": "3"
                , "contexts": ["all"]
            });
            browser.contextMenus.create({
                "id": "36"
                , "title": items.storedMyFav7Title
                , "parentId": "3"
                , "contexts": ["all"]
            });
            browser.contextMenus.create({
                "id": "37"
                , "title": items.storedMyFav8Title
                , "parentId": "3"
                , "contexts": ["all"]
            });
            browser.contextMenus.create({
                "id": "38"
                , "title": items.storedMyFav9Title
                , "parentId": "3"
                , "contexts": ["all"]
            });
            browser.contextMenus.create({
                "id": "39"
                , "title": items.storedMyFav10Title
                , "parentId": "3"
                , "contexts": ["all"]
            });
            /**********Encode 40-49**********/
            browser.contextMenus.create({
                "id": "40"
                , "title": "Base64"
                , "parentId": "6"
                , "contexts": ["selection"]
            });
            browser.contextMenus.create({
                "id": "41"
                , "title": "URL"
                , "parentId": "6"
                , "contexts": ["selection"]
            });
            /**********XSS 50-59**********/
            browser.contextMenus.create({
                "id": "50"
                , "title": "Alert"
                , "parentId": "4"
                , "contexts": ["all"]
            });
            browser.contextMenus.create({
                "id": "51"
                , "title": "Document Cookie"
                , "parentId": "4"
                , "contexts": ["all"]
            });
            /**********Decode 60-69**********/
            browser.contextMenus.create({
                "id": "60"
                , "title": "Decode Base64"
                , "parentId": "7"
                , "contexts": ["selection"]
            });
            browser.contextMenus.create({
                "id": "61"
                , "title": "Decode URL"
                , "parentId": "7"
                , "contexts": ["selection"]
            });
        });
}
/***************************************************************************
    ON CLICK LISTENER - SEND MESSAGE TO CONTENT.JS 
    
    *Create on click event listener
    *Create message and send menu id clicked to content.js
***************************************************************************/
// Create an on click event listener that calls a function when triggered 
browser.contextMenus.onClicked.addListener(function (info, tab) {
    //console.log("Menu item ID: " + info.menuItemId + " was clicked");
    //console.log("info: " + JSON.stringify(info));
    browser.tabs.query({
        active: true
        , currentWindow: true
    }, function (tabs) {
        browser.tabs.sendMessage(tabs[0].id, {
            menuId: info.menuItemId
        }, function (response) {
            if (typeof response !== "undefined" && response.gotIt === "Got it") {
                console.log("Got it!");
            }
            else {
                //console.log("somethings up...")
            }
        });
    });
});