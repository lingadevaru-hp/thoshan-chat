# Architecture (notes — no source)

Single-file Worker (`src/worker.ts` in the private core): routes, gates,
APIs, and the entire HTML/CSS/JS chat UI in one template literal.

- **Landing-first flow:** composer + suggestion chips; threads render on
  first send. History in `localStorage`, never fabricated.
- **Honest scope:** portfolio-grounded answers; unknown topics deflect
  instead of inventing. No emojis in UI. Navy `#12121f` + lime `#c6f135`.
- **Voice:** browser speech recognition first, server transcription
  (Whisper) fallback, WAV fallback after that. Read-aloud replies optional.
- **Themes:** 22 palettes shared with the main site, two-way synced via
  `postMessage` when embedded.
- **PWA:** manifest, icons, offline service worker for the shell.

Decisions, not code. Implementation lives in the private core.
