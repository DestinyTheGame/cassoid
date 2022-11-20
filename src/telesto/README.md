# Telesto

When there is something wrong in the cassoid foundry, just blame Telesto. This
component is designed to be used as dedicated error page, or in case an
unexpected error happens when rendering, manipulating the page.

The component is designed to be a full page take over. Either as page it self
or a modal that is rendered on top of everything.

## Props

- `title` The title of the modal, defaults to `TELESTO`.
- `reason` Some useful information on why the page broke, defaults to `TELESTO`.

## Design

The component is designed after the in-game popups that happened during the
small "TELESTO" event.

![telesto](https://images.mein-mmo.de/medien/2022/11/destiny2-telesto-bug-uuedate.jpg)

The background will be replaced with a glitched telesto wallpaper that is
[currently hosted on Bungie.net](https://www.bungie.net/pubassets/pkgs/171/171893/d2_Community_Telesto_2022_1920x1080.jpg)
