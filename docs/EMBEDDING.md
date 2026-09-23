# Embedding (guide — no source)

The chat is designed to be embedded by exactly one family of sites:

- Framing policy: `Content-Security-Policy: frame-ancestors
  https://lingadevaru.in https://*.lingadevaru.in` (no other origin).
- Embed URL: `https://chat.lingadevaru.in?embed=1` (compact chrome).
- Host page keeps a slide-over panel; the iframe mounts once and is
  never unmounted, so sessions survive toggles and navigation.
- Theme sync: host posts `{type:'thoshan-theme', id}`; untrusted origins
  are ignored by the frame.
- Dashboard note: edge WAF/Bot Fight challenges must skip this hostname,
  because challenge pages are unframeable by design (see the itch.io
  widget incident for the identical failure mode).

Mechanics, not code. Implementation lives in the private core.
