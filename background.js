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

chrome.contextMenus.create({title: 'Search Jisho.org for "%s"', contexts:["selection"], onclick: jishoSearchWord});
//chrome.contextMenus.create({title: 'Search Jisho.org for "%s" as kanji', contexts:["selection"], onclick: jishoSearchKanji});
