-- Waitlist / poradovník pre kartio
-- Ukladá záujemcov o spustenie ambulantného informačného softvéru.

create extension if not exists "pgcrypto";

create table if not exists public.waitlist (
  id           uuid primary key default gen_random_uuid(),
  email        text not null,
  name         text,
  organization text,
  note         text,
  source       text default 'landing',
  created_at   timestamptz not null default now(),
  constraint waitlist_email_format check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$')
);

-- Jeden e-mail sa do poradovníka zapíše len raz.
create unique index if not exists waitlist_email_unique
  on public.waitlist (lower(email));

comment on table public.waitlist is 'Záujemcovia o kartio – zoznam čakateľov (waitlist).';

-- Row Level Security: verejnosť môže iba VKLADAŤ, nie čítať.
alter table public.waitlist enable row level security;

-- Anonymní aj prihlásení návštevníci sa môžu zapísať (INSERT).
drop policy if exists "waitlist_public_insert" on public.waitlist;
create policy "waitlist_public_insert"
  on public.waitlist
  for insert
  to anon, authenticated
  with check (true);

-- Žiadny SELECT/UPDATE/DELETE pre verejnosť — dáta číta iba service role
-- (napr. z admin nástroja alebo Supabase dashboardu), ktorý RLS obchádza.
