# 🚀 Instrukcja wdrożenia na Cloudflare Pages

## Krok 1: Przygotowanie projektu

Projekt jest już skonfigurowany do eksportu statycznego. Wszystkie potrzebne zmiany zostały wprowadzone w `next.config.js`.

## Krok 2: Wdrożenie przez Cloudflare Dashboard

### A. Połącz repozytorium GitHub

1. Zaloguj się do [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Przejdź do **Pages** (w menu po lewej)
3. Kliknij **"Create a project"**
4. Wybierz **"Connect to Git"**
5. Autoryzuj Cloudflare do dostępu do GitHub
6. Wybierz repozytorium: `Sqooby/sqooby_cv`
7. Kliknij **"Begin setup"**

### B. Konfiguracja Build Settings

W ustawieniach buildowania ustaw:

- **Project name:** `sqooby-cv` (lub dowolna nazwa)
- **Production branch:** `main` (lub `master` - w zależności od Twojej gałęzi)
- **Framework preset:** `Next.js (Static HTML Export)`
- **Build command:** `npm run build`
- **Build output directory:** `out`
- **Root directory:** `/` (zostaw puste lub `/`)

**Ważne:** Po kliknięciu "Save and Deploy", Cloudflare automatycznie zbuduje i wdroży projekt.

### C. Dodanie własnej domeny (sqoobytech.pl)

1. Po udanym wdrożeniu, przejdź do projektu w Cloudflare Pages
2. Kliknij na zakładkę **"Custom domains"**
3. Kliknij **"Set up a custom domain"**
4. Wpisz: `sqoobytech.pl`
5. Cloudflare automatycznie doda rekordy DNS:
   - CNAME dla `sqoobytech.pl` → `[twój-projekt].pages.dev`
   - CNAME dla `www.sqoobytech.pl` → `[twój-projekt].pages.dev`

**Uwaga:** Jeśli domena jest już w Cloudflare, rekordy DNS zostaną dodane automatycznie. Jeśli domena jest w innym rejestratorze, dodaj ręcznie rekordy CNAME wskazane przez Cloudflare.

6. Poczekaj na propagację DNS (zazwyczaj kilka minut)
7. SSL/HTTPS jest automatycznie włączony przez Cloudflare

## Krok 3: Automatyczne wdrożenia

Cloudflare automatycznie wdraża nowe wersje przy każdym push do głównej gałęzi (main/master).

**Preview deployments:** Każdy Pull Request automatycznie otrzymuje własny URL preview.

## ✅ Gotowe!

Twoja strona będzie dostępna pod adresem:
- `https://sqoobytech.pl`
- `https://www.sqoobytech.pl`
- `https://[twój-projekt].pages.dev` (domyślny URL Cloudflare)

---

## 🔧 Troubleshooting

### Problem: Build się nie udaje

**Rozwiązanie:**
1. Sprawdź logi buildowania w Cloudflare Pages
2. Upewnij się, że `Build output directory` jest ustawione na `out`
3. Sprawdź czy wszystkie zależności są w `package.json`

### Problem: Strona nie wyświetla się poprawnie

**Rozwiązanie:**
1. Sprawdź czy wszystkie pliki w `public/` są committowane do Git
2. Upewnij się, że ścieżki do obrazów używają `/images/...` (zaczynają się od `/`)

### Problem: Domena nie działa

**Rozwiązanie:**
1. Sprawdź rekordy DNS w panelu Cloudflare
2. Upewnij się, że domena ma status "Active" w Cloudflare Pages
3. Poczekaj na propagację DNS (może trwać do 24h, zwykle kilka minut)

---

## 📚 Dodatkowe zasoby

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Cloudflare Pages with Next.js](https://developers.cloudflare.com/pages/framework-guides/nextjs/)



