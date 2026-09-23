# Workers (sketch — no source)

Durable Object backing live voice conversations. The object owns one
voice turn at a time: transcript in, reply text plus speech audio out,
streamed over the WebSocket the browser holds open.

- Turn orchestration (prompt assembly, fallback replies)
- Speech synthesis streaming (24kHz audio chunks)
- Session affinity: one named instance serves all visitors

Implementation lives in the private core; this file only records the
boundary.
