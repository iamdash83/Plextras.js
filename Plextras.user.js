// ==UserScript==
// @name         Plextras.js Userscript version
// @version      1
// @author       Andrewiankidd.co.uk
// @match        *://app.plex.tv/*
// @include     /^http(s)?:\/\/(.*):32400\//
// @downloadURL https://github.com/andrewiankidd/Plextras.js/blob/master/Plextras.user.js
// @updateURL https://github.com/andrewiankidd/Plextras.js/blob/master/Plextras.user.js
// ==/UserScript==

(function () {
    var script = document.createElement('script');
    script.src = 'https://andrewiankidd.co.uk/ext/mimefix/?gitfile=Plextras.template&cssBGColor=%230039e6&cssTopbarColor=black&showCustomBackgroundImage=false&autohideSidebar=true&autoHideSidebarMobileOnly=false&biggerThumbnailsOnMobile=true&showArtWorkBackground=true&showEpisodeSpecificArtwork=true&ShowExpandedExtras=true&hideMovieExtras=false&hideCastList=false&autoSignIn=false&hideRelatedMedia=false&customHeader=Custom+Links&customLinks=J0VtYnknOidIdHRwOi8vYXBwLmVtYnkudHYnLCdZb3VUdWJlLkFwcCc6J1lvdVR1YmU6Ly8n';
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);
})();
