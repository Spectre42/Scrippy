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
var url = chrome.extension.getURL("payloads.json");
$(document).ready(function () {
    $('#moreSQLPayloads').DataTable({
        "ajax": url
        , scrollY: '52vh'
        , scrollCollapse: true
    });
});
