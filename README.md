# when.fibe.gg

Small landing for people who want to try Fibe but aren't yet eligible for general production or staging use. Replaces `promo.fibe.gg/beta/`.

Two paths:

1. **Subscribe** via Buttondown — get the one-shot email when the next wave opens.
2. **Ask for a spot** — email `beta@fibe.gg` with the use case.

Sibling design to [why.fibe.gg](https://why.fibe.gg) / [where.fibe.gg](https://where.fibe.gg) / [whats.fibe.gg](https://whats.fibe.gg). Phoenix Terminal palette, single-file static, no build step.

## Structure

```
when.fibe.gg/
├── index.html                      # the page
├── assets/{style.css, script.js}   # styles + minimal interactions
├── img/                            # favicons + OG (mirrored from why.fibe.gg)
├── CNAME                           # when.fibe.gg
├── robots.txt, sitemap.xml, site.webmanifest, .nojekyll
├── .github/workflows/deploy.yml    # GitHub Pages publish on push to main
└── README.md
```

## Local preview

No build step. Serve the directory with any static server:

```sh
python3 -m http.server 5181
# or
npx --yes serve -p 5181 .
```

Then open <http://localhost:5181/>.

## Buttondown form

The subscribe form posts to:

```
https://buttondown.com/api/emails/embed-subscribe/fibe.gg
```

It opens the subscription confirmation in a popup window via the `target="popupwindow"` + `onsubmit` pattern Buttondown recommends for embeds. `script.js` then swaps the form for a "Thanks, we'll email you" message so the page itself doesn't sit there looking unchanged.

To switch newsletters, change the URL in `index.html` (`form[action]`) and the powered-by link.

## beta@fibe.gg

The mailto link uses a pre-filled subject so messages land in a recognizable bucket. Adjust in `index.html` if the inbox or routing changes.

## Family

- [fibe.gg](https://fibe.gg) — the product.
- [why.fibe.gg](https://why.fibe.gg) — six paths through the workshop.
- [where.fibe.gg](https://where.fibe.gg) — EU Digital Sovereignty deck.
- [whats.fibe.gg](https://whats.fibe.gg) — user guide & skill library.
- [when.fibe.gg](https://when.fibe.gg) — *this site.*

## License

© fibe.gg — all rights reserved.
