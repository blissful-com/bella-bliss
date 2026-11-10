# BellaBliss – Beauty Salon & Spa Website

Static website (HTML/CSS/JS) + Supabase database for bookings. Deploy: GitHub -> Vercel.

## Folder structure
```
bellabliss/
├─ public/
│  ├─ index.html            # poori website
│  └─ images/               # sari photos
├─ supabase/
│  ├─ migrations/20261029000000_init.sql   # tables + security (RLS) + functions
│  └─ seed.sql                              # admin email add karne ke liye
├─ build.js                 # Vercel build: env variables -> config.js
├─ package.json
├─ vercel.json
├─ .env.example
└─ .gitignore
```

## Step 1 – GitHub par push
Terminal se (folder ke andar):
```
git init
git add .
git commit -m "BellaBliss website"
git branch -M main
git remote add origin https://github.com/AAPKA-USERNAME/bellabliss.git
git push -u origin main
```
(Pehle github.com par khali repo `bellabliss` bana lein.)
Bina terminal ke: repo page par **Add file -> Upload files** mein folder ke andar ki sari cheezein drag karein (`public`, `supabase`, `build.js`, `package.json`, `vercel.json`, `.env.example`, `.gitignore`, `README.md`).

## Step 2 – Supabase (database)
1. supabase.com -> **New project**.
2. **SQL Editor** -> `supabase/migrations/20261029000000_init.sql` ka poora text paste karke **Run**.
3. **Authentication -> Sign In / Providers -> Email**: "Allow new users to sign up" ko **OFF** karein.
4. **Authentication -> Users -> Add user**: apna admin email + password banayein.
5. SQL Editor mein `supabase/seed.sql` chalayein (email apna likh kar).
6. **Project Settings -> API** se copy karein: **Project URL** aur **anon public key**.

## Step 3 – Vercel par deploy
1. vercel.com -> GitHub se login -> **Add New -> Project** -> `bellabliss` repo import.
2. Framework Preset: **Other**. (Build Command / Output Directory `vercel.json` se khud set ho jati hain.)
3. **Environment Variables** mein ye 2 add karein (Step 2 wali values):
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
4. **Deploy**. 1-2 minute mein aap ka link `https://bellabliss-xxxx.vercel.app` ban jayega.

Env variables baad mein badalne par Vercel -> Deployments -> **Redeploy** karein.

## Admin dashboard
Website ke footer mein **Admin Login** -> Supabase wala admin email + password -> saari bookings dekhein, Confirm / Done / Cancel karein.

## Demo mode
Agar Supabase keys set nahi hain to site demo mode mein chalti hai: bookings sirf usi browser mein save hoti hain aur admin password `DEMO_ADMIN_PASSWORD` (default `bellabliss2026`) hota hai. Live site ke liye Supabase zaroor set karein.

## Apni details badalna
`public/index.html` mein address, phone (`+92 300 1234567`), email, prices (`const SV=[...]`) aur hours (`const HR=[...]`) search karke badal dein.

## Local test
```
node build.js
npx serve dist
```
## Security notes
- anon key public hoti hai; bookings ki hifazat database ki RLS policies karti hain (SQL mein shamil).
- Photos sirf wohi lagayein jin ka aap ko istemal ka haq ho.
