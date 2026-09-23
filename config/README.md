# Config surface (names only — never values)

Bindings referenced by `wrangler.toml` in the private core:

- `VOICE_AGENT` — Durable Object (SQLite) for live voice turns
- `CHAT_SEARCH` — AI Search instance over the site index
- `AI` — Workers AI (speech-to-text model)
- Human-gate secrets — held as environment config only, never committed,
  never mirrored (see the private core's secret handling)

Routes: `chat.lingadevaru.in` as a Worker custom domain. Names above
(except redacted secrets) are the stable surface; values live in the
dashboard and the private core.
