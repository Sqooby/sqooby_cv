# 📧 Konfiguracja e-mail dla sqoobytech.pl

## Opcje konfiguracji e-mail

Ponieważ Twoja domena jest w Cloudflare, masz kilka opcji:

---

## 🔵 Opcja 1: Cloudflare Email Routing (DARMOWE) - Przekierowania

**Najprostsze rozwiązanie** - przekierowanie e-maili na istniejące konta (np. Gmail).

### Co to daje:

- ✅ Darmowe
- ✅ Możesz mieć adresy typu: `kontakt@sqoobytech.pl`, `hello@sqoobytech.pl`
- ✅ E-maile są przekierowywane na Twój istniejący e-mail (Gmail, Outlook, itp.)
- ✅ Możesz wysyłać e-maile z domeny (przez Gmail/Outlook)

### Co NIE daje:

- ❌ Brak pełnego hostingu e-mail (brak skrzynki na serwerach Cloudflare)
- ❌ Ograniczona funkcjonalność (tylko przekierowania)

### Jak skonfigurować:

1. **Włącz Email Routing w Cloudflare:**

   - Zaloguj się do [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Wybierz domenę `sqoobytech.pl`
   - Przejdź do **Email** → **Email Routing**
   - Kliknij **"Get started"**

2. **Dodaj adres e-mail:**

   - Kliknij **"Create address"**
   - Wpisz np. `kontakt@sqoobytech.pl`
   - Wybierz adres docelowy (np. Twój Gmail)
   - Zapisz

3. **Skonfiguruj wysyłanie e-maili (opcjonalne):**
   - W Gmail: Ustawienia → Konta → Wyślij e-mail jako
   - Dodaj adres `kontakt@sqoobytech.pl`
   - Zweryfikuj przez Cloudflare Email Routing

---

## 🟢 Opcja 2: Zewnętrzny dostawca poczty

Dla pełnego hostingu e-mail z własną skrzynką:

### A. Zoho Mail (DARMOWE dla 5 użytkowników)

**Zalety:**

- ✅ Darmowe dla 5 użytkowników
- ✅ 5GB przestrzeni na użytkownika
- ✅ Pełna funkcjonalność (skrzynka, kalendarz, kontakty)
- ✅ Aplikacje mobilne

**Konfiguracja:**

1. Zarejestruj się na [Zoho Mail](https://www.zoho.com/mail/)
2. Wybierz "Add Domain" i dodaj `sqoobytech.pl`
3. Zweryfikuj domenę (dodaj rekordy TXT w Cloudflare DNS)
4. Skonfiguruj rekordy MX w Cloudflare:

   ```
   Typ: MX
   Nazwa: @
   Priorytet: 10
   Wartość: mx.zoho.com

   Typ: MX
   Nazwa: @
   Priorytet: 20
   Wartość: mx2.zoho.com
   ```

5. Dodaj rekordy TXT dla SPF, DKIM, DMARC (Zoho poda dokładne wartości)

---

### B. Google Workspace (PŁATNE - ~$6/miesiąc)

**Zalety:**

- ✅ Pełna integracja z Google (Gmail, Drive, Calendar)
- ✅ 30GB przestrzeni (Business: nieograniczona)
- ✅ Najlepsza funkcjonalność

**Konfiguracja:**

1. Zarejestruj się na [Google Workspace](https://workspace.google.com/)
2. Zweryfikuj domenę
3. Skonfiguruj rekordy MX w Cloudflare (Google poda dokładne wartości)

---

### C. Microsoft 365 (PŁATNE - od $6/miesiąc)

**Zalety:**

- ✅ Pełna integracja z Microsoft (Outlook, Office)
- ✅ 50GB+ przestrzeni

---

## 🎯 Rekomendacja

Dla osoby/podstawowego użytku:

- **Cloudflare Email Routing** - jeśli wystarczy Ci przekierowanie na Gmail
- **Zoho Mail Free** - jeśli potrzebujesz pełnej skrzynki e-mail (darmowe, 5GB)

Dla profesjonalnego użytku biznesowego:

- **Google Workspace** lub **Microsoft 365**

---

## 📝 Przykładowe rekordy DNS w Cloudflare

### Dla Cloudflare Email Routing (automatycznie):

Cloudflare automatycznie doda potrzebne rekordy po włączeniu Email Routing.

### Dla Zoho Mail:

```
Typ: MX
Nazwa: @
Priorytet: 10
Wartość: mx.zoho.com

Typ: MX
Nazwa: @
Priorytet: 20
Wartość: mx2.zoho.com

Typ: TXT
Nazwa: @
Wartość: v=spf1 include:zoho.com ~all
```

### Dla Google Workspace:

```
Typ: MX
Nazwa: @
Priorytet: 1
Wartość: aspmx.l.google.com

Typ: MX
Nazwa: @
Priorytet: 5
Wartość: alt1.aspmx.l.google.com
...
(Google poda pełną listę)
```

---

## ⚠️ Ważne uwagi

1. **Zmiana rekordów MX** - Jeśli przełączasz się między dostawcami, zmiana rekordów MX może potrwać kilka godzin do propagacji.

2. **E-maile w Cloudflare Pages** - Cloudflare Pages NIE obsługuje hostingu e-mail. Wszystkie e-maile muszą być skonfigurowane osobno.

3. **Bezpieczeństwo** - Pamiętaj o skonfigurowaniu SPF, DKIM i DMARC dla lepszego bezpieczeństwa i dostarczalności e-maili.

---

## 🔗 Przydatne linki

- [Cloudflare Email Routing Docs](https://developers.cloudflare.com/email-routing/)
- [Zoho Mail Free](https://www.zoho.com/mail/)
- [Google Workspace](https://workspace.google.com/)
- [Microsoft 365](https://www.microsoft.com/microsoft-365)

