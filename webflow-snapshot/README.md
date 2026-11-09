# LA Sketch: recovered public Webflow snapshot

Recovered on 9 November 2026 from:

* https://la-sketch.webflow.io/
* https://la-sketch.webflow.io/experiences

This is a copy of the publicly served website, not an official Webflow ZIP export. Both pages report their last publication as 7 November 2026 at 03:50:02 UTC. Later edits saved only in Webflow Designer are **not included**.

## Run it

From this folder:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000/ in a browser. Experiences is at http://localhost:8000/experiences/index.html. A web server is recommended instead of double-clicking HTML files.

## Included

* Home and Experiences HTML, with links between them and the existing section anchors.
* Published CSS, JavaScript, images, image variants and Montserrat fonts stored locally in `assets/`.
* Existing page copy, styles, navigation, mobile menu and artwork from the public version.
* A source URL and SHA-256 record for downloaded files in `recovery-manifest.json`.

Third-party scripts retain their existing copyright and license notices. Included vendor sample artwork remains subject to its owner's rights. Its inclusion does not grant other people permission to reuse it.

## Limits and deliberate changes

* This does not include the Webflow Designer project, editable native structure, unpublished draft edits, account settings, private submissions or any CMS database.
* This is static HTML/CSS/JavaScript, not a conversion to Astro or a connection to Sanity. It is not automatically synced with Webflow.
* Enquiry submission is intentionally blocked by `snapshot-form-guard.js`. Submitting shows a message instead of sending data. A form service or server handler must be connected and checked before accepting real enquiries.
* Asset URLs and page links were rewritten to local paths. Integrity attributes were removed because CSS asset paths changed. Google font loading was replaced with local font files; no design changes were made.
* Existing Webflow branding links and runtime badge resources can still refer to Webflow. The recovered scripts have not been stripped or relicensed.
* No hosting or deployment has been configured. Making the repository public does not itself publish a functioning website.

## Checks

Compared live and recovered pages at 1420px and 393px widths. All images loaded after scrolling, with no JavaScript page errors. Each recovered page had the same document height as its source at both widths. The mobile navigation opened and showed five links. The local form guard prevented submission propagation. Images of both versions were inspected, but this is not a guarantee of every interaction or browser.

The original React/Vite prototype is preserved on the `visual-prototype` branch. This snapshot is a separate version and should not be mistaken for those source components or the newer unpublished Webflow design.
