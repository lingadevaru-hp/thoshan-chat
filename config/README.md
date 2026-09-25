# Config surface (names only — never values)

Live config lives in the private core's `catalyst-pilot/catalyst.json`
(Slate app + `chat-api` function). The rollback Worker's
`wrangler.toml` bindings (names only — never values):

- `VOICE_AGENT` — Durable Object (SQLite) for live voice turns
- `CHAT_SEARCH` — AI Search instance over the site index
- `AI` — Workers AI (speech-to-text model)
- Human-gate secrets — held as environment config only, never committed,
  never mirrored (see the private core's secret handling)

Live route `chat.lingadevaru.in` is served by Catalyst; the Worker custom
domain below belongs to the rollback copy. Names above
(except redacted secrets) are the stable surface; values live in the
dashboard and the private core.
