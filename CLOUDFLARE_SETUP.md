# 🚀 Konfiguracja Cloudflare Pages

## Kroki konfiguracji:

### 1. Zaloguj się do Cloudflare Dashboard
- Przejdź na: https://dash.cloudflare.com/
- Zaloguj się do swojego konta

### 2. Utwórz nowy projekt Pages
1. W menu bocznym wybierz **"Workers & Pages"**
2. Kliknij **"Create application"**
3. Wybierz zakładkę **"Pages"**
4. Kliknij **"Connect to Git"**

### 3. Połącz repozytorium GitHub
1. Wybierz **GitHub** jako źródło
2. Zaloguj się do GitHub (jeśli wymagane)
3. Wybierz repozytorium: **Sqooby/sqooby_cv**
4. Kliknij **"Begin setup"**

### 4. Konfiguracja Build Settings

**Project name:** `sqooby-cv` (lub dowolna nazwa)

**Production branch:** `main`

**Framework preset:** `Next.js` (Cloudflare automatycznie wykryje Next.js)

**Build command:** `npm run build`

**Build output directory:** `.next` (dla Next.js z adapterem) lub `out` (jeśli używasz static export)

**Root directory:** `/` (zostaw puste lub `/`)

### 5. Environment Variables (jeśli potrzebne)
Jeśli używasz zmiennych środowiskowych (np. dla EmailJS):
1. Przejdź do **Settings** → **Environment variables**
2. Dodaj zmienne dla **Production**, **Preview**, **Branch previews**

**Przykład dla EmailJS:**
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### 6. Deploy!
1. Kliknij **"Save and Deploy"**
2. Poczekaj na zakończenie buildu (około 2-5 minut)
3. Twoja strona będzie dostępna pod adresem: `https://sqooby-cv.pages.dev` (lub wybraną nazwą)

### 7. (Opcjonalnie) Custom Domain
1. W ustawieniach projektu → **Custom domains**
2. Kliknij **"Set up a custom domain"**
3. Wpisz swoją domenę
4. Dodaj rekordy DNS zgodnie z instrukcjami (Cloudflare może to zrobić automatycznie)

---

## ⚙️ Ważne informacje:

- **Automatyczne deploys:** Każdy push do brancha `main` spowoduje automatyczny redeploy
- **Preview deployments:** Cloudflare automatycznie tworzy preview dla każdego PR
- **Node.js version:** Cloudflare używa Node.js 18.x (domyślnie)
- **Build time:** Około 2-5 minut dla Next.js

---

## 🔧 Ewentualne problemy:

### Problem: Build fails
**Rozwiązanie:** 
- Sprawdź logi buildu w Cloudflare Dashboard
- Upewnij się, że wszystkie zależności są w `package.json`
- Sprawdź czy Node.js version jest kompatybilna

### Problem: Strona się nie ładuje
**Rozwiązanie:**
- Sprawdź czy `build output directory` jest poprawne
- Dla Next.js: `.next` (z adapterem) lub `out` (static export)

### Problem: Obrazy się nie ładują
**Rozwiązanie:**
- Sprawdź ścieżki do obrazów (używaj `/images/...` nie `./images/...`)
- Upewnij się, że pliki są w folderze `public/`

---

## 📝 Alternatywa: Static Export (prostsze, ale bez SSR)

Jeśli chcesz użyć static export (prostsze, ale niektóre funkcje Next.js nie będą działać):

1. Zaktualizuj `next.config.js`:
```js
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Wymagane dla static export
  },
}
```

2. W Cloudflare Pages ustaw:
   - **Build output directory:** `out`
   - Reszta bez zmian

---

**Gotowe!** 🎉

Twoje portfolio będzie dostępne na Cloudflare Pages z automatycznym HTTPS, globalnym CDN i szybkim ładowaniem!

