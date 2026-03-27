# Cooka (Static Cooking Site)

Minimal multi-page cooking site for GitHub Pages. No build step. Optional Supabase data.

## Pages
- `index.html` Home
- `recipes.html` Recipe list
- `recipe.html` Recipe detail (`?id=...`)

## Language
German and Turkish via a simple switcher. The current language is stored in `localStorage` and preserved in the URL (`?lang=de` or `?lang=tr`).

## Run Locally
Open `index.html` in a browser.

## Optional Supabase
If you want live data instead of demo data:
1. Create a Supabase project.
2. Create a `recipes` table with:
   - `id` (uuid or int, primary key)
   - `title` (text or JSON)
   - `summary` (text or JSON)
   - `persons` (int)
   - `rating` (float)
   - `time_min` (int)
   - `categories` (text array or JSON)
   - `ingredients` (text array or JSON)
   - `nutrition` (JSON with `kcal`, `protein_g`, `carbs_g`, `fat_g`)
   - `image_url` (text, optional)
   - `steps` (text array or JSON, optional)
3. Add a few rows.
4. Fill in `SUPABASE_URL` and `SUPABASE_ANON_KEY` in `js/supabase.js`.

If keys are blank, the site uses demo data.

## Deploy (GitHub Pages)
1. Push to GitHub.
2. Repo Settings → Pages.
3. Deploy from branch `main` (root).
