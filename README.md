orphanSlayer
============

Deal with orphans in website copy, from specified regions/selectors.

An Overview of Orphans
======================

An orphan is a copywriting term for a word that jumps to the next line in a body of text, be it a paragraph, heading, list item, etc. Vigilant copywriters (with a touch of OCD) tend to view orphans as an eye-sore, a blight on their copy. If you've dealt with a client that wants to eliminate this phenomenon from their website, this script does that.

How orphanSlayer Works
======================

This script ensures that the last two words in any HTML tag or selector you specify, are joined with a non-breaking-space ("&nbsp;"). This ensures that at least two words will appear on the last line of any body of text (the selector/s you specify).

How to Use it
=============

Just copy-paste the JS from orphanSlayer.js into a $(document).ready() function (requires jQuery) that you're likely already using.
