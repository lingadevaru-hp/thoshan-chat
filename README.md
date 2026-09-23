# thoshan-chat (activity mirror)
# Thoshan Chat

Personal portfolio chatbot at **chat.lingadevaru.in** — visitors chat with Thoshan
about his projects, experience, skills, and contact details. Wiki-matched navy +
lime theme, no emojis, ChatGPT-grade interaction polish.

**Stack:** Cloudflare Workers (UI + API), Durable Objects voice agent
(`@cloudflare/voice` WebSocket voice channel), Workers AI
(`@cf/zai-org/glm-4.7-flash`), AI Search knowledge base. No build step —
single-file frontend embedded in `src/worker.ts`.

## Features

### Chat core
- Landing-first flow: centered hero + input pill; thread view opens on first send
- Multi-chat sidebar (collapsible, starts closed), persisted to localStorage
- Honest history: entries created only on first send, never faked
- Sidebar search across titles + message text; in-chat message filter
- New chat returns to landing; empty chats never stored
- Export chat as Markdown, copy transcript, copy share text, clear chat
- Message actions per reply: Copy, Listen (TTS), Regenerate
- Contextual follow-up suggestion chips after each answer (rotating sets)
- Char counter, auto-growing composer, Enter-to-send / Shift+Enter newline
- Type-anywhere: keystrokes auto-focus the composer; auto-focus on mode switch
- Auto-scroll with scroll-lock + "Jump to latest" pill when reading history

### Human-feel responses (research-backed)
- 3-phase sequence per reply: Thinking dots -> "Thoshan is typing" escalation
  -> caret-streamed answer -> single final Markdown render (no flicker)
- Randomized 0.9-2.3s deliberation pause; streaming at reading speed
- Stop-generating button; partial answers marked when stopped early
- 20s API timeout with graceful offline handling; thinking indicator always
  removed, a reply always lands

### Voice
- Speech-to-text: Web Speech API dictation + MediaRecorder voice-socket fallback
- Text-to-speech replies with on/off toggle and speed slider
- Auto-send after dictation (optional)

### Brain (backend)
- 19 resume-grounded canned answers (greeting, identity, capabilities,
  projects overview, FOSS Coin, Thoshan Flash, Insurance D-App, experience,
  skills, education, contact, availability, location, achievements,
  hackathons, interests, thanks/bye, are-you-real)
- 3 rotating tiered fallbacks, each ending with options + contact path
- AI Search retrieval + LLM for long-tail questions; all failures degrade to
  the graceful fallback, never raw errors

### Header: site + language + theme switching
- Home icon links back to the main site (`lingadevaru.in`)
- Globe icon opens the portfolio-language menu (same 8 locale subdomains
  as the main site: en/kn/hi/ja/ml/ta/te/gu, each in a new tab)
- Palette icon (same mark as the main site) opens the theme panel:
  all 22 main-site themes (Tokyo Night default; Catppuccin, Gruvbox,
  Nord, …), with search, Light/Dark badges, full keyboard
  support (`T` opens, arrows move, Enter applies, Esc closes)
- Theme tokens (`--t-*`) are ported verbatim from the main site, so text,
  backgrounds and brand accents stay readable on every theme; the choice
  syncs with the main site via the shared `thoshan-site-theme` key;
  Tokyo Night is the default
- Mobile: header keeps wordmark + language/theme + voice/settings
  (home lives in the drawer); drawer Site/Language/Theme sections are
  collapsible — expanded on desktop, collapsed on mobile

### PWA + mobile
- Installable: manifest, 192/512 (+maskable) icons, apple-touch-icon,
  theme-color, iOS meta; service worker (navigations network-first,
  assets cache-first, `/api/*` bypassed)
- Responsive: slide-in sidebar with tap-outside scrim + in-sidebar close,
  tuned hero offset and headline scale on small screens

### Bot protection
- `/robots.txt`: only Googlebot (search), BraveBot and DuckDuckBot allowed;
  Gemini/AI training (Google-Extended), all AI/RAG crawlers, other search
  engines, archives and link-preview fetchers disallowed; default-deny
  (`User-agent: * Disallow: /`)
- Edge User-Agent gate: blocked bots that ignore robots.txt get HTTP 403
- Security headers on HTML: `nosniff`, `frame-ancestors` framing
  allowlist (`lingadevaru.in` + `*.lingadevaru.in` only — main site embeds
  the chat in a slide-over panel via `?embed=1`), strict referrer
- Dashboard (manual): WAF Managed Challenge on `chat.lingadevaru.in`
  (24h `cf_clearance`, `/api/*` + verified bots exempt) + **Block AI Bots**
  + **AI Labyrinth** — replace the WAF challenge with Layer 4 below once
  live (avoids a double interstitial); keep Cloudflare
  **managed robots.txt OFF**
  (when ON it overrides the Worker's `/robots.txt` at the edge);
  no Tunnel needed (Workers run on Cloudflare edge,
  there is no origin server to hide)

### Human-verification gate (Layer 4, themed)
- First-visit humans get a navy/lime verification page (Turnstile widget,
  dark theme) instead of Cloudflare's generic interstitial
- Success sets a signed 5-minute HttpOnly cookie (`thc`, HMAC-SHA256);
  `/api/*` requires it (bots POSTing directly get 403); page auto-reloads
  into the gate on expiry and auto-resends the pending message after
  re-verifying
- Googlebot/BraveBot/DuckDuckBot bypass the gate (indexing unaffected);
  `/robots.txt` and static assets always served
- Setup: dashboard Turnstile → Add widget (domains `chat.lingadevaru.in`,
  `localhost`) → put sitekey in `GATE_SITEKEY`, then
  `npx wrangler secret put TURNSTILE_SECRET` and
  `npx wrangler secret put GATE_KEY`; gate is fail-open until configured

## Development

```bash
npm install
npx wrangler deploy   # ships to chat.lingadevaru.in
```

Feature work goes on branches, merged via pull request (`gh pr create`,
`gh pr merge`). Deploys run from `main` after merge.

## Knowledge base

- AI Search instance `thoshan-chat` (website crawl of lingadevaru.in + uploads)
- Resume source: `lingadevaru resume.pdf` (repo-private)
- Canned answers live in `cannedReply()` in `src/worker.ts` — edit there for
  instant, model-independent responses
