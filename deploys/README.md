# Deploys (process — no source)

1. Deploy from the private core's `catalyst-pilot/` with the Catalyst CLI (live target).
2. Verify: homepage 200, chat API answers a greeting and falls back gracefully on gibberish.
3. Spot-check the live site plus the `?embed=1` framed mode.
4. Rollback path only: `npx wrangler deploy` from the private core root, then
   served `<script>` passes `node --check` and Version ID reaches 100%.

Process notes, not code. The pipeline lives in the private core.
