'use strict';

function jishoSearchWord(info)
{
 var searchstring = info.selectionText;
 chrome.tabs.create({url: "https://jisho.org/search/" + searchstring})
}

function jishoSearchKanji(info)
{
 var searchstring = info.selectionText;
 chrome.tabs.create({url: "https://jisho.org/search/" + searchstring + "%20%23kanji"})
}

function jishoSearchSentences(info)
{
 var searchstring = info.selectionText;
 chrome.tabs.create({url: "https://jisho.org/search/" + searchstring + "%20%23sentences"})
}

function jishoSearchNames(info)
{
 var searchstring = info.selectionText;
 chrome.tabs.create({url: "https://jisho.org/search/" + searchstring + "%20%23names"})
}

chrome.contextMenus.create({title: 'Search for "%s"', contexts:["selection"], onclick: jishoSearchWord});
chrome.contextMenus.create({title: 'Search kanji for "%s"', contexts:["selection"], onclick: jishoSearchKanji});
chrome.contextMenus.create({title: 'Search sentences for "%s"', contexts:["selection"], onclick: jishoSearchSentences});
chrome.contextMenus.create({title: 'Search names for "%s"', contexts:["selection"], onclick: jishoSearchNames});
