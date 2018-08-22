'use strict';

function jishosearch(info)
{
 var searchstring = info.selectionText;
 chrome.tabs.create({url: "https://jisho.org/search/" + searchstring})
}

chrome.contextMenus.create({title: 'Search Jisho.org for "%s"', contexts:["selection"], onclick: jishosearch});
