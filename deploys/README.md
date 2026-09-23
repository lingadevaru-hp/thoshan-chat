# Deploys (process — no source)

1. `npx wrangler deploy` from the private core root.
2. Verify: homepage 200, served `<script>` passes `node --check`,
   `/api/chat` answers a greeting and falls back gracefully on gibberish.
3. Confirm the reported Version ID reaches 100% in `deployments list`.
4. Spot-check the live site plus the `?embed=1` framed mode.

Process notes, not code. The pipeline lives in the private core.
