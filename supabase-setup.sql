-- Run this once in your Supabase project's SQL Editor.
-- Dashboard → SQL Editor → New Query → paste → Run

-- 1. Table: one row per post, running like total
create table if not exists post_likes (
  post_id text primary key,
  likes   integer not null default 0
);

-- 2. Row Level Security: public read, no direct writes (only via the function below)
alter table post_likes enable row level security;

create policy "public read"
  on post_likes for select
  using (true);

-- 3. Atomic increment: inserts the first like or bumps the existing count
create or replace function increment_likes(pid text)
returns integer language sql security definer as $$
  insert into post_likes (post_id, likes)
  values (pid, 1)
  on conflict (post_id)
  do update set likes = post_likes.likes + 1
  returning likes;
$$;

grant execute on function increment_likes to anon;

-- Done. Grab your Project URL and anon key from:
-- Settings → API → Project URL  +  Project API keys → anon / public
-- Then paste both into the LIKES config in app.js.
