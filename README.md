# do-denver-card

Rendering code for a personal plans card. `card.js` draws whatever data the page puts in `window.DD`; no data is stored here.

Pages load it by commit hash with an integrity hash, so a new commit has no effect until the page's pin is updated.
