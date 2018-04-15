#  CHANGELOG  #

##  Version 0  ##

###  0.4:

####  0.4.0

#####  NEW.

+ Music added (hosted via <https://archive.org/>):
    + [MAAP Excursion One](https://archive.org/details/LUXXAr051402-01) [CC BY-NC-ND 3.0]
    + [Ghosts I](https://archive.org/details/nineinchnails_ghosts_I_IV) [CC BY-NC-SA 3.0]
    + [Future, and It Doesn't Work](https://archive.org/details/Future_and_It_Doesnt_Work-4777) [CC BY-NC-ND 3.0]
    + rain.mp3 (Own work; from public domain sources) [CC0]
+ New themes:
    + Old Vampire (minimal black + red)
    + Digital (see <http://scoutshonour.com/digital/>)
    + Modern (minimalist white)
+ Can now be run as an Electron app via `npm start`.

#####  CHANGED.

* Changes to code style.

#####  REMOVED.

- The old footer has been removed.

###  0.3:

####  0.3.1

#####  CHANGED.

* Fixed `white-space` on theme selector.

####  0.3.0

#####  NEW.

+ "Clear document" button ([Issue #6](https://github.com/marrus-sh/writer/issues/6)).
+ `accesskey`s added (these only work when the text area is not focused) ([Issue #2](https://github.com/marrus-sh/writer/issues/2)).

#####  CHANGED.

* HTML has been cleaned up slightly and buttons are now better-defined.
* Time is now 12-hour by default, but can be clicked to switch to 24-hour ([Issue #19](https://github.com/marrus-sh/writer/issues/19)).
* Wrapping is disabled on the topbar ([Issue #16](https://github.com/marrus-sh/writer/issues/16)).

###  0.2:

####  0.2.0

#####  NEW.

+ Theming support has been added ([Issue #1](https://github.com/marrus-sh/writer/issues/1))! The following themes are supported:
    + Basic (blue)
    + Wine
    + Orange
    + Pink
    + Legendary (blue + tan)
    + New Legendary (green + tan)
    + Vampire (black + red)

###  0.1:

####  0.1.1

#####  NEW.

+ A `<meta>` element with viewport information has been added to support mobile devices ([Issue #10](https://github.com/marrus-sh/writer/issues/10)).
+ Footer links now visually respond to hover ([Issue #9](https://github.com/marrus-sh/writer/issues/9)).

#####  CHANGED.

* Default filename for files is now capped at 40 characters (plus the 4-character `.txt` extension) rather than 18.
* The upload button now has a `tabindex` property to make it accessible via keyboard navigation ([Issue #4](https://github.com/marrus-sh/writer/issues/4)).
* The internal code style has changed ([Issue #12](https://github.com/marrus-sh/writer/issues/12)).
* A missing `g` flag leading to an improper word-count has been added ([Issue #15](https://github.com/marrus-sh/writer/issues/15)).

#####  REMOVED.

- The default browser outline on focused topbar elements has been removed, since they are visually distinguished by other means ([Issue #7](https://github.com/marrus-sh/writer/issues/7)).
    - However, this appears to have no effect for `<button>` elements on Firefox, probably because of button shadow DOM.

####  0.1.0

#####  NEW.

+ Initial release
