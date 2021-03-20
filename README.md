# Supporting Extensions

Breeze uses the following open-source `browser extensions` to provide advanced privacy and security when browsing the internet while improving the experience at the same time.

These extensions have been modified (while keeping their core purpose the same) to fit our preferences as well as to be able to communicate with other internal services within Breeze.

They are integrated into Breeze (meaning users cannot see or interact with them in a traditional way) using the following patches:

-  [internal-extensions-installer.patch](../../../breeze-core/tree/main/patches/core/breeze/internal-extensions-installer.patch)

-  [hide-internal-extensions.patch](../../../breeze-core/tree/main/patches/core/breeze/hide-internal-extensions.patch)

These extensions are updated regularly through our own update server.

## uBlock Origin

![uBlock Origin](misc/uBlock.png  "uBlock Origin")

_"[uBlock Origin](https://github.com/gorhill/uBlock) is an efficient blocker add-on for various browsers. Fast, potent, and lean."_

### Integration into Breeze

Changes made to the original extension can be summed up as:

- The `assets.json` file has been modified to fit our filter list preferences.

- Added the file `/js/component.js` to help with providing blocking statistics to [`Privacy Master Controller`](../../../privacy-master-controller) and to manage the filter-list manipulation that is explained [here](../../../privacy-master-controller#popup-elements).

- Modified the file `/js/background.js` to change some default settings of the extension to fit our preferences.

- Modified the file `/js/traffic.js` to provide blocking statistics to [`Dashboard`](../../../breeze-dashboard).

- Modified the page that appears when a domain has been caught in a filter list to fit a Breeze flavor.

## Privacy Badger

![Privacy Badger](misc/privacyBadger.png  "Privacy Badger")

  _"[Privacy Badger](https://github.com/EFForg/privacybadger) is a browser extension that automatically learns to block invisible trackers. Instead of keeping lists of what to block, Privacy Badger automatically discovers trackers based on their behavior."_

### Integration into Breeze

Changes made to the original extension can be summed up as:

- Modified the file `/js/background.js` to change some default settings of the extension to fit our preferences as well as to provide blocking statistics to [`Dashboard`](../../../breeze-dashboard).

- Added the file `/js/component.js` to help with providing blocking statistics to [`Privacy Master Controller`](../../../privacy-master-controller).

- Modified the widget replacement style to fit a Breeze flavor.

## ClearURLs

![ClearURLs](misc/clearURLs.png  "ClearURLs")

_"[ClearURLs](https://gitlab.com/KevinRoebert/ClearUrls) is a browser extension that will automatically remove tracking elements from URLs to help protect your privacy when browsing through the Internet."_
 
### Integration into Breeze

Changes made to the original extension can be summed up as:

- Modified the file `/core_js/badgedHandler.js` to help with providing blocking statistics to [`Privacy Master Controller`](../../../privacy-master-controller) and changed the way ClearURLs handles the block count upon refreshing a page (Cumulative -> Reset upon refresh).

## HTTPS Everywhere

![HTTPS Everywhere](misc/HTTPSEverywhere.png  "HTTPS Everywhere")

_"[HTTPS Everywhere](https://github.com/EFForg/https-everywhere/) is a browser extension that encrypts your communications with many major websites, making your browsing more secure."_

### Integration into Breeze

Changes made to the original extension can be summed up as:

- Modified the "No HTTPS" warning page to fit a Breeze flavor.

## Cookie AutoDelete

![Cookie AutoDelete](misc/CAD.png  "Cookie AutoDelete")

_"[Cookie AutoDelete](https://github.com/Cookie-AutoDelete/) is a browser extension that deletes cookies and other browsing site data as soon as the tab closes, domain changes, browser restarts, or a combination of those events."_

### Integration into Breeze

The integration of Cookie AutoDelete is currently on hold and the extension does not do anything. However, users can still access the extension's settings page located at

[chrome-extension://bilnggnhajjcfjieeghjkngldbpaekkl/settings/settings.html](chrome-extension://bilnggnhajjcfjieeghjkngldbpaekkl/settings/settings.html) if they wish to modify it on their own.

## Credits

We would like to thank the hardworking developers responsible for making such important, powerful and essential extensions and keeping them open-source.

## License

See [LICENSE](LICENSE)
