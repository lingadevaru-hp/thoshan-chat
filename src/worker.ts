// thoshan-chat — public interface surface. Implementation is private.
// Module: edge entry point (routes, human gates, API + HTML UI).
//
// Request flow:
//   1. Serve robots.txt / PWA assets / service worker
//   2. WebSocket upgrades route to the voice agent object
//   3. Human-verification gate (Turnstile) for browsers, fail-open
//      when unconfigured; crawlers allowlisted, AI bots refused
//   4. JSON APIs: chat turn, AI search, speech-to-text
//   5. HTML chat UI (single-file template) with embed (?embed=1)
//      and page-context (?page=slug) modes
//   6. Framing allowlisted to lingadevaru.in + *.lingadevaru.in only
//
// Bodies live in the private core; signatures below are the stable surface.

export {}; // routes + gate + UI template live in the private core
