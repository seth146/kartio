# kartio — landing page

Landing page s poradovníkom (waitlist) pre **kartio** — cloudový ambulantný
informačný softvér pre ambulancie klinickej psychológie na Slovensku.

## Stack

- [Next.js 14](https://nextjs.org/) (App Router, TypeScript)
- [Supabase](https://supabase.com/) — ukladanie záujemcov do tabuľky `waitlist`
- Nasadenie: [Vercel](https://vercel.com/)

## Lokálny vývoj

```bash
npm install
cp .env.example .env.local   # doplňte NEXT_PUBLIC_SUPABASE_ANON_KEY
npm run dev
```

Aplikácia beží na http://localhost:3000.

## Environment premenné

| Premenná                        | Popis                                            |
| ------------------------------- | ------------------------------------------------ |
| `NEXT_PUBLIC_SUPABASE_URL`      | URL Supabase projektu (`kartio-be`).             |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Publishable (anon) kľúč — bezpečný pre klienta.  |

Kľúče nájdete v Supabase dashboard → **Project Settings → API**.

## Databáza

Schéma je verzovaná v `supabase/migrations/`. Tabuľka `waitlist` má zapnuté RLS
a povoľuje verejnosti iba `INSERT` (zápis do poradovníka), nie čítanie. Dáta
číta len `service_role` (Supabase dashboard / admin nástroj).

Migrácie sa nasadzujú cez prepojenie GitHub ↔ Supabase.

## Štruktúra

```
app/                 # Next.js App Router (layout, page, štýly)
components/           # WaitlistForm (client component)
lib/                 # Supabase klient
supabase/migrations/ # SQL migrácie (tabuľka waitlist + RLS)
```
