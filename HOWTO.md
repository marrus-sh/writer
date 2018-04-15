#  KibiWriter Users Guide  #

##  Installation and Usage  ##

KibiWriter can be opened and ran from any web browser. Most features require JavaScript. You can access a version hosted through GitHub pages at <https://marrus-sh.github.com/writer/>, or you can download the app and open it yourself. KibiWriter does not need to be hosted on a server or compiled before it is run.

If you prefer, you can run KibiWriter inside an Electron shell. You can use `npm start` to run KibiWriter once its dependencies are installed.

The music of KibiWriter requires internet access to play as it is hosted externally through [archive.org](https://archive.org). However, the remainder of the app will run fine without internet access.

##  Creating, Opening, and Saving  #

The clear, upload, and download buttons are in the top bar and can be used to create, open, and save files. KibiWriter does not save your work for you. Files are opened and saved in plain text.

KibiWriter will not warn you if clearing or uploading will erase unsaved work in the current document. It is recommended that you save your work frequently to prevent accidental loss.

##  Fonts  ##

You may select from one of five fonts for use with KibiWriter. This only affects the editing panel and this choice is not saved. The font options are:

1. Sans-Serif
2. Serif
3. Cursive
4. Monospace
5. Fantasy

Your browser defaults will be used when determining the value of these typefaces. With Electron, defaults have been provided.

##  Themes  ##

KibiWriter has a number of themes available in a dropdown, and you may select any one of them to change your editing experience. You may choose from the following themes:

1. Basic
2. Wine
3. Orange
4. Pink
5. Legendary
6. New Legendary
7. Vampire
8. Old Vampire
9. Digital
10. Modern

##  Audio  ##

You may choose an audio track to play while you write, if you prefer. The tracks available are as follows:

1. _MAAP Excursion One_ by The Lights Galaxia
2. _Ghosts I_ by Nine Inch Nails
3. _Future, and It Doesn't Work_ by Starscream
4. _rain.mp3_

An internet connection is required for playing audio from the Internet Archive.

##  Meta Information  ##

In the bottom bar of KibiWriter, you will see the current time alongside word and character counts. Words are sequences of letters separated by spaces; characters are Unicode scalars including punctuation and spaces. The system used to count words and characters is inspired by WordPress.

The time defaults to AM/PM representation but you can toggle it to 24-hour mode by clicking.

##  Input methods  ##

In the bottom bar, you can change your input method—this only has an effect on ASCII inputs. Many of these input methods are for typing the private-use characters used by the LANGDEV Project and you will need a font (like [Unifont LANGDEV](https://github.com/langdev-project/unifont-langdev)) in order to display them.

The available input methods are as follows:

1. `Bkde`: Bencode, a simple substitution cypher for Latin text. The following characters have special mappings:
    + `|`/`\`: Produces the "Ch"/"ch" characters.
    + `{`/`}`: Produces left/right double quotes.
    + `<`/`>`: Produces left/right single quotes.
2. `Latn`: Latin, traditional ASCII text.
3. `Sevi`: Sevensi. Vowels do not produce characters. Upper/lower case is ignored. `|`/`\` is used for Λ̷ and `/`/`?` is used for Ɂ.
4. `Sevr`: Runic Sevensi. Follows the same rules as Sevensi proper.
5. `osv-Latn`: Latin, but for use transcribing Sevensi. This input method expects a US-like keyboard layout because a number of symbol characters have been shifted around. `Æ`/`Å` take the place of the brackets (square brackets can be found to the left of parentheses). `+` takes the place of `=`, which takes the place of `` ` ``, and the shift forms of `+`/`-` are `*` and `/`. `Λ̷` and `Ɂ` are in the same places as with Sevensi; `?` has been moved to take the place of `$`. `&` can be found in place of `^`.
