// ==UserScript==
// @name         Google Favicon
// @namespace    https://greasyfork.org/en/users/943407-webchantment
// @version      1.3
// @description  Display Favicons on Google Search
// @author       Webchantment
// @include      https://www.google.tld/search?q=*
// @grant        none
// ==/UserScript==

(function() {

	/**SETTINGS**/
	const iconSize = 16; //use 16 or 24

	const organic = document.querySelectorAll("#search > * cite");
	const topAds = document.querySelectorAll("#tads > * span[role='text']");
	const bottomAds = document.querySelectorAll("#tadsb > * span[role='text']");

	organic.forEach(o => { prependFavicon(o, o.firstChild.wholeText, false); });
	topAds.forEach(t => { prependFavicon(t, t.getAttribute("data-dtld"), true); });
	bottomAds.forEach(b => { prependFavicon(b, b.getAttribute("data-dtld"), true); });

	function prependFavicon(element, domain, isAd)
	{
		if (domain.startsWith("http") || isAd)
		{
			const favicon = document.createElement("img");
			favicon.src = `https://www.google.com/s2/favicons?domain=${domain}&sz=${iconSize}`;
			favicon.style = "vertical-align: middle;";

			element.prepend(" ");
			element.prepend(favicon);
		}
	}

})();