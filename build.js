// Vercel build: copies /public to /dist and writes config.js from environment variables.
const fs = require('fs'), path = require('path');
const out = 'dist';
fs.rmSync(out, { recursive: true, force: true });
fs.cpSync('public', out, { recursive: true });
const cfg = {
  SUPABASE_URL: process.env.SUPABASE_URL || '',
  SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY || '',
  DEMO_ADMIN_PASSWORD: process.env.DEMO_ADMIN_PASSWORD || 'bellabliss2026'
};
fs.writeFileSync(path.join(out, 'config.js'), 'window.BB_CONFIG=' + JSON.stringify(cfg) + ';');
console.log(cfg.SUPABASE_URL ? 'Build OK: Supabase mode' : 'Build OK: DEMO mode (no Supabase keys set)');
