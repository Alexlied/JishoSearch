'use strict';

function jishosearch(info)
{
 var searchstring = info.selectionText;
 chrome.tabs.create({url: "https://jisho.org/search/" + searchstring})
}

chrome.contextMenus.create({title: "Search Jisho.org", contexts:["selection"], onclick: jishosearch});
