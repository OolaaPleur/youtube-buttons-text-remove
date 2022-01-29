// ==UserScript==
// @name        remove dislike button
// @namespace   Violentmonkey Scripts
// @grant       none
// @version     1.0
// @author      -
// @description 21.12.2021, 23:11:18
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// ==/UserScript==

// window.addEventListener('load', function() {

// }, false);

youtubePageChange();

function youtubePageChange()
{
  var aTags = document.getElementsByTagName("yt-formatted-string");
  var dislikeText = "Не нравится";
  var shareText = "Поделиться"
  var downloadText = "Скачать";
  var saveToPlaylistText = "Сохранить"
  var found;
  
  console.log('goostart');
  for (var i = 0; i < aTags.length; i++) {
    if (aTags[i] != 'undefined' && aTags[i] != null) {
  if (aTags[i].innerHTML == dislikeText) {
    console.log(aTags[i]);
    found = aTags[i];
    found.innerHTML = "";
    console.log('goofin');
    break;
  }
    }
}
  
    for (var i = 0; i < aTags.length; i++) {
    if (aTags[i] != 'undefined' && aTags[i] != null) {
  if (aTags[i].innerHTML == shareText) {
    console.log(aTags[i]);
    found = aTags[i];
    found.innerHTML = "";
    console.log('goofin');
    break;
  }
    }
}
  
    for (var i = 0; i < aTags.length; i++) {
    if (aTags[i] != 'undefined' && aTags[i] != null) {
  if (aTags[i].innerHTML == downloadText) {
    console.log(aTags[i]);
    found = aTags[i];
    found.innerHTML = "";
    console.log('goofin');
    break;
  }
    }
}
  
      for (var i = 0; i < aTags.length; i++) {
    if (aTags[i] != 'undefined' && aTags[i] != null) {
  if (aTags[i].innerHTML == saveToPlaylistText) {
    console.log(aTags[i]);
    found = aTags[i];
    found.innerHTML = "";
    console.log('goofin');
    break;
  }
    }
}
  
  
  if (found == 'undefined' || found == null) {
  console.log('google');
  setTimeout(function() {
  youtubePageChange();
}, 500);
}
}

