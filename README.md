# Sketch LA - website visual preview

Clickable visual prototype of the six-page Sketch LA website (Boothco sketchbot hire).

- React + TypeScript + Vite, hash-based routing between six pages:
  Home, Experiences, Styles, Customisation, Setups, Get a quote.
- Visual preview only: the quote form is intentionally inert
  (`fieldset disabled`, no submit handler, nothing is sent or stored),
  and the WhatsApp/Email buttons are placeholders for go-live.
- Images in `src/photos/` are concept artwork and vendor sample crops
  (Foto Master platform examples), labelled as such in the page copy.

## Run locally

```
npm install
npm run dev
```

Then open the printed local URL. `npm run build` produces a static `dist/`.
