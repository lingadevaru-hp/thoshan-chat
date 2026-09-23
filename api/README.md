# API surface (contracts only — no source)

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/chat` | POST `{message}` | One assistant turn → `{reply}` |
| `/api/search` | POST `{q}` | Retrieval over the site index |
| `/api/stt` | POST audio bytes | Speech-to-text fallback → `{text}` |
| `/api/verify` | POST `{token}` | Turnstile check → sets `thc` cookie |
| `/` (WebSocket upgrade) | WS | Live voice turn stream |

Auth model: browser cookie from `/api/verify`; unconfigured deployments
fail open. Robots policy: search crawlers allowlisted, AI training
crawlers refused with 403.

Request/response shapes above are the stable contract; handlers live in
the private core.
