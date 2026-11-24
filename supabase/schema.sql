-- Snapshot único por conta. O app envia o IndexedDB inteiro como JSON.
create table if not exists public.snapshots (
  user_id uuid primary key references auth.users(id) on delete cascade,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.snapshots enable row level security;

drop policy if exists "snapshots_do_dono" on public.snapshots;

create policy "snapshots_do_dono"
  on public.snapshots
  for all
  to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- O SQL Editor não concede DML por padrão às roles da API.
grant select, insert, update, delete on table public.snapshots to authenticated;
