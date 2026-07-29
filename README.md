# NovaGlide Tech Solutions

A Next.js (App Router) web app: users register, describe what they need, and
track the status of their request. Admins see and manage all incoming
requests.

## Pages

- `/` — landing page (services, how it works, CTA)
- `/register`, `/login` — auth
- `/request` — logged-in users submit a request
- `/dashboard` — logged-in users see the status of their own requests
- `/admin` — admin-only view of all requests, with status control

## Setup

1. Copy environment variables:
   ```
   cp .env.example .env.local
   ```

2. Create a Firebase project at https://console.firebase.google.com
   - Enable **Authentication → Sign-in method → Email/Password**
   - Enable **Firestore Database** (start in production mode)
   - Go to Project Settings → General → Your apps → add a Web app, copy the
     config values into `.env.local`

3. Set `NEXT_PUBLIC_ADMIN_EMAILS` in `.env.local` to your own email
   (comma-separated if you want more than one admin). Only these emails can
   open `/admin`.

4. Add these Firestore security rules (Firestore → Rules) so users can only
   read their own requests, and only admins can update status:

   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /requests/{requestId} {
         allow create: if request.auth != null
           && request.resource.data.uid == request.auth.uid;
         allow read: if request.auth != null
           && (resource.data.uid == request.auth.uid
               || request.auth.token.email in ["your-admin-email@example.com"]);
         allow update: if request.auth != null
           && request.auth.token.email in ["your-admin-email@example.com"];
       }
     }
   }
   ```
   Replace the admin email(s) to match `NEXT_PUBLIC_ADMIN_EMAILS`.

5. Install and run:
   ```
   npm install
   npm run dev
   ```

## Design

Dark background, blue → purple → pink gradient accent, glass-panel cards.
This intentionally echoes the visual language of the personal portfolio
(joyuusuf) without sharing a codebase, so both feel related but distinct.

## Images you need to add

The hero background and the "work we've delivered" carousel expect real image
files in `public/images/`. Placeholders won't render until you add these:

| File                                   | Used for                          | Suggested size |
| --------------------------------------- | ---------------------------------- | --------------- |
| `public/images/hero-bg.jpg`             | Hero section background            | 1920x1080 or larger, landscape |
| `public/images/showcase-agriconnect.jpg`| Carousel slide 1 (AgriConnect)      | 1200x750 |
| `public/images/showcase-foundersfund.jpg`| Carousel slide 2 (Founders Fund)  | 1200x750 |
| `public/images/showcase-debtpadi.jpg`   | Carousel slide 3 (DebtPadi)         | 1200x750 |

**For the hero background**, look for something abstract and dark, so white
text stays readable over it: a dark tech/network pattern, a subtle circuit or
particle texture, or a moody dark gradient photo. Search terms that tend to
work well on Unsplash or Pexels: "dark technology abstract", "network
particles dark background", "abstract gradient dark". Avoid busy photos with
faces or lots of detail, they fight with the text on top.

**For the showcase slides**, a real screenshot of each project (AgriConnect,
Founders Fund, DebtPadi) works better than stock photos, it's actual proof of
work. A clean browser screenshot of the dashboard/landing page for each is
ideal. Crop to a similar aspect ratio (roughly 16:10) so the carousel doesn't
jump in height between slides.

Free, license-safe sources: https://unsplash.com and https://pexels.com (both
allow free commercial use, no attribution required, though crediting is
appreciated).

Once you have the files, just drop them into `public/images/` with the exact
filenames above, no code changes needed.

## Notes

- This is a working scaffold, not a finished product. Before going live:
  add loading skeletons, form validation edge cases, email notifications on
  new requests, and a way for admins to reply to a request (currently
  status-only).
- The admin check is client-side via `NEXT_PUBLIC_ADMIN_EMAILS` plus
  Firestore rules enforcing it server-side. Don't rely on the client check
  alone, the Firestore rules are what actually protect the data.