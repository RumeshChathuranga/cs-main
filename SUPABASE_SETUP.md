# Supabase Setup Guide

Follow these steps once to connect the blog admin panel to a real database.

---

## 1. Create a Supabase Project

1. Go to **https://supabase.com** and sign up (use your personal Gmail for now).
2. Click **"New project"** → give it a name like `aiesec-cs-blog`.
3. Choose a region closest to Sri Lanka (e.g. **Singapore**).
4. Wait ~2 minutes for the project to provision.

---

## 2. Create the Blog Posts Table

In your Supabase project, go to **SQL Editor** and run this SQL:

```sql
-- Create the blog_posts table
CREATE TABLE blog_posts (
  id            uuid            DEFAULT gen_random_uuid() PRIMARY KEY,
  title         text            NOT NULL,
  excerpt       text            NOT NULL DEFAULT '',
  content       text            NOT NULL DEFAULT '',
  category      text            NOT NULL,
  cover_image_url text,
  author_name   text            NOT NULL,
  author_avatar_url text,
  read_time     integer         NOT NULL DEFAULT 5,
  status        text            NOT NULL DEFAULT 'draft',
  published_at  timestamptz,
  created_at    timestamptz     NOT NULL DEFAULT now(),
  updated_at    timestamptz     NOT NULL DEFAULT now(),
  created_by    uuid            REFERENCES auth.users(id)
);

-- Enable Row Level Security
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Anyone can read published posts (public blog)
CREATE POLICY "Public can read published posts"
  ON blog_posts FOR SELECT
  USING (status = 'published');

-- Authenticated users (editors) can do everything
CREATE POLICY "Editors can manage all posts"
  ON blog_posts FOR ALL
  USING (auth.role() = 'authenticated');
```

---

## 3. Add Your Environment Variables

Open the file `.env.local` in the project root and replace the placeholder values:

```
VITE_SUPABASE_URL=https://YOUR_PROJECT_ID.supabase.co
VITE_SUPABASE_ANON_KEY=YOUR_ANON_KEY_HERE
```

To find these values:

- In Supabase, go to **Project Settings → API**
- Copy **Project URL** → paste as `VITE_SUPABASE_URL`
- Copy **anon / public** key → paste as `VITE_SUPABASE_ANON_KEY`

---

## 4. Create Editor Accounts

Editors log in with their email + password. To create an account:

1. In Supabase, go to **Authentication → Users**
2. Click **"Add user"** → **"Create new user"**
3. Enter the editor's email and a secure password
4. Click **"Create user"**

Repeat for each editor. They can then log in at `/admin` on your website.

> **To change a password later:** Authentication → Users → find the user → "Send password reset email" or manually update.

---

## 5. Transfer the Project (When Handing Over)

When you leave the IM team:

1. In Supabase, go to **Project Settings → General**
2. Scroll to **"Transfer Project"**
3. Enter the new person's email
4. They accept via email → they become the new owner

No data is lost during transfer.

---

## 6. Set Up a Storage Bucket for Image Uploads ⚠️ Required

The admin panel now supports direct image uploads. Run this in **SQL Editor** to enable it:

```sql
-- Create a public bucket for blog images
INSERT INTO storage.buckets (id, name, public)
VALUES ('blog-images', 'blog-images', true)
ON CONFLICT (id) DO NOTHING;

-- Anyone can view uploaded images (public blog)
CREATE POLICY "Anyone can view blog images"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'blog-images');

-- Logged-in editors can upload images
CREATE POLICY "Editors can upload blog images"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'blog-images' AND auth.role() = 'authenticated');

-- Logged-in editors can delete their uploaded images
CREATE POLICY "Editors can delete blog images"
  ON storage.objects FOR DELETE
  USING (bucket_id = 'blog-images' AND auth.role() = 'authenticated');
```

After running this SQL, editors can:

- **Upload images from their computer** directly in the Cover Image field and the rich text editor
- **Paste a URL** if they prefer to link an external image
- Images are stored permanently in Supabase Storage and served via a public CDN URL

---

## Summary of URLs

| URL                     | What it does             |
| ----------------------- | ------------------------ |
| `/blog`                 | Public blog listing page |
| `/blog/:id`             | Individual blog article  |
| `/admin`                | Editor login page        |
| `/admin/dashboard`      | Manage all posts         |
| `/admin/posts/new`      | Write a new post         |
| `/admin/posts/:id/edit` | Edit an existing post    |
