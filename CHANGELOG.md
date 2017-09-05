#  CHANGELOG  #

##  Version 0  ##

###  0.2:

####  0.2.0

#####  NEW.

+ Theming support has been added (Issue #1)[https://github.com/marrus-sh/writer/issues/1]! The following themes are supported:
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

+ A `<meta>` element with viewport information has been added to support mobile devices (Issue #10)[https://github.com/marrus-sh/writer/issues/10].
+ Footer links now visually respond to hover (Issue #9)[https://github.com/marrus-sh/writer/issues/9].

#####  CHANGED.

* Default filename for files is now capped at 40 characters (plus the 4-character `.txt` extension) rather than 18.
* The upload button now has a `tabindex` property to make it accessible via keyboard navigation (Issue #4)[https://github.com/marrus-sh/writer/issues/4].
* The internal code style has changed (Issue #12)[https://github.com/marrus-sh/writer/issues/12]
* A missing `g` flag leading to an improper word-count has been added (Issue #15)[https://github.com/marrus-sh/writer/issues/15].

#####  REMOVED.

- The default browser outline on focused topbar elements has been removed, since they are visually distinguished by other means (Issue #7)[https://github.com/marrus-sh/writer/issues/7].
    - However, this appears to have no effect for `<button>` elements on Firefox, probably because of button shadow DOM.

####  0.1.0

#####  NEW.

+ Initial release
