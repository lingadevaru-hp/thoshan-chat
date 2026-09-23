# Thoshan Chat

### 💬 Proxy repository — public build journal & developer catalog

This is the **proxy repository** of Thoshan Chat — the chat app behind
[chat.lingadevaru.in](https://chat.lingadevaru.in). The complete implementation
lives in its **private core repository**; this proxy exists so the work can
still be followed openly:

- **Interface catalog** — every module listed with its responsibility, so the
  architecture stays reviewable without exposing implementation.
- **Shipping log** — each merge in the core lands here as a release note
  (`releases/`) and activity entry (`ACTIVITY.md`), synced automatically.
- **Design notes** — architecture, features, and embedding decisions
  in `docs/`.

## What it is

A single-file Cloudflare Worker serving a full chat experience: themed
single-page UI, voice input with server transcription fallback, read-aloud
replies, persistent conversation history, and a slide-over embed mode so the
main portfolio site can host the chat in a side panel (`?embed=1`).

## Structure (sketch — no source)

| Path | Responsibility |
|------|----------------|
| `src/worker.ts` | Edge entry: routes, bot gates, API surface |
| `workers/` | Durable voice agent (turn-taking, speech) |
| `api/` | HTTP + WebSocket endpoint contracts |
| `docs/` | Architecture, features, embedding guide |
| `config/` | Binding surface (no secrets) |
| `deploys/` | Deploy process and verification checklist |
| `scripts/` | Helper script catalog |
| `releases/` | Per-change release notes |

Interface sketches describe **what each module does**; bodies live in the
private core and are never mirrored here.

## 🤝 Collaborate

Ideas, UX feedback, or voice-quality notes? Write to
[contact@lingadevaru.in](mailto:contact@lingadevaru.in). Useful,
well-described proposals may be granted access to the relevant source —
just ask, and include what you'd contribute and why.
