# Website design for reverie nails — Grok Build Project Rules

This is the dedicated workspace for the **public salon website**.

**Session:** `reverienailstxWebsiteMGT` — website **and** Reverie Nails and Spa web presence (Google, social, directories, reviews). Not the booking app (`final-touches-before-launch` / `/book`) unless Joseph asks to link the two.

**Who:** Joseph (Joe) Aragon, Reverie Nails and Spa. Treat him as the decision-maker for public changes.

## Project Overview
- Project name: reverienailstxWebsiteMGT
- Live site: https://www.reverienailstx.com (GitHub Pages, repo `reverienails/reverie-nails-and-spa`, branch `main`, CNAME `www.reverienailstx.com`)
- Local files: `C:\Users\josep\Desktop\reverie-nails` (this folder is the live deploy root — not the nested `website design for reverie nails/` copy)
- Goal: Small website updates plus Google/Meta/directory presence, NAP consistency, reviews, specials
- **Public change rule:** Never publish, post, or edit live Google/Meta/website listings without explicit approval. After Joseph approves a change, enact it without a second confirmation.

## Canonical business facts (NAP)
Use this everywhere unless Joseph says otherwise:
- **Name:** Reverie Nails and Spa (`Nails` plural)
- **Address:** 4613 West Bailey Boswell Rd, **Ste 101**, **Saginaw**, TX 76179 (zip is Saginaw; many old listings said Fort Worth)
- **Phone:** (682) 224-5688
- **Hours:** Mon–Fri 9:30 AM–7:30 PM · Sat 9:00 AM–7:00 PM · Sun 11:00 AM–6:00 PM
- **Positioning:** Walk-ins first. No appointment required. Booking is a **plus** (specific tech, skip the wait, get in quicker) — not “highly recommended.”
- Instagram: https://www.instagram.com/reverienailspa (`@reverienailspa`)
- Facebook: https://www.facebook.com/reverienailandspa/

## Accounts (do not dump passwords)
- **Google Business owner:** `reverienailandspa@gmail.com` (display name Tina Nguyen). GBP lives on this account (`authuser=1` when both are signed in).
- **Joseph personal Google:** `josephanthonyaragon@gmail.com` — manager-side Gmail; **0** Business Profiles on this account. Switch to the salon Gmail for listing edits.
- **Instagram:** logged in as `reverienailspa` (web edit: https://www.instagram.com/accounts/edit/). Bio is 150-character limited.
- **Facebook:** `facebook.com/reverienailandspa` — often needs a fresh sign-in after Brave restart.
- Everyday browser is **Brave** (Default profile). Chrome DevTools MCP uses an empty isolated profile — it will **not** have salon logins.
- To attach to Brave: fully quit `brave.exe`, clear `User Data\Singleton*`, relaunch with `--remote-debugging-port=9222 --remote-allow-origins=* --user-data-dir="C:\Users\josep\AppData\Local\BraveSoftware\Brave-Browser\User Data" --profile-directory=Default`. Port dies if a normal Brave instance is already running. Sessions sometimes drop on kill.

## Google Business Profile
- Public Maps: [Reverie Nails and Spa](https://www.google.com/maps/place/Reverie+Nails+and+Spa/@32.8804623,-97.3937718,17z/data=!3m1!4b1!4m6!3m5!1s0x864ddf68e29a7769:0x66492a7fc21013f8)
- Owner IDs: `n/1287027436026357857`, `fid=7370468993373574136`
- Manager UI: https://business.google.com/u/1/locations (salon Gmail)
- Second listing on same account: Modified Jewelry - Permanent Jewelry, same street (do not mix them up)
- Owner planning: **Accepts walk-ins**, **Appointment not required**. Public Maps may still show a Google-inferred “Appointments recommended” chip — that is not the owner toggle.
- Description should lead with walk-ins, Ste 101, Saginaw, phone, hours.
- Instagram URL on GBP was wrongly `instagram.com/reverienailslandspa/` (extra “land”); correction to `@reverienailspa` was submitted (may still be pending).
- Google Posts / Q&A UIs are flaky from automation; try the owner Search dashboard (`Posts`, `Add a post`) or Maps.

## Site conventions
- Static HTML + Tailwind CDN. Specials: `assets/Current Specials/specials-data.js` (`current` key + matching subfolder). Images jpg/png only (not PDF). Current special (as of 2026-08): VIP giveaway, folder `give away`, closes Aug 31 2026, winners Sep 1.
- Homepage walk-in surfaces: hero badge/CTAs (Call / Directions / Book ahead), trust bar, `#walk-in` block, FAQ + FAQ schema, booking subtitle, hours line. Keep that tone; don’t pile on extra walk-in sentences.
- Schema URL should be `https://www.reverienailstx.com` (old leftover was `reverienailspa.com`).
- Push live: commit on `main` and `git push origin main` (GitHub Pages).

## Directory notes (as last audited)
- **Yelp:** REVERIE NAIL, Fort Worth, no suite; hours match; claimed; weaker rating than Google.
- **Birdeye:** claimed free profile (Joseph Aragon / salon email / salon phone). Hours editor: https://reviews.birdeye.com/claim/register/business-hours/?bid=170093907069001 — last set to salon hours. City field may reject Saginaw (geocoder prefers Fort Worth).
- **MapQuest:** website wrongly pointed at reveriephotoco.com; support ticket filed from `reverienailandspa@gmail.com` (verify-email already clicked). Paid Yext claim not used.
- **Apple Maps:** hours/phone/website generally match; Fort Worth; no suite.

## Voice / copy
Walk-ins welcome — come by during open hours, no appointment needed. Booking is a plus for a specific technician or a locked-in time. Warm, neighborhood, Saginaw. Don’t over-promise wait times.

## General Guidelines
- Keep the project structure clean and organized (use logical folders: src/, assets/, components/, pages/, styles/, etc.)
- Always use `search_replace` for edits unless creating brand new files.
- After significant changes, suggest running builds/tests or previewing the site.
- Use `todo_write` for any task with 3+ distinct steps.

## Web Development Best Practices
- Use semantic HTML and accessible markup.
- Keep CSS organized (prefer Tailwind, CSS modules, or a clean component-based approach depending on stack).
- Write clean, modern JavaScript (or TypeScript if chosen).
- Mobile-first responsive design.
- Fast loading: optimize images, lazy load where appropriate.
- Clear separation of concerns (structure / style / behavior).

## Git & Version Control
- Commit frequently with clear messages.
- Use branches for larger features.
- Never commit secrets, `.env` files with keys, or large binaries.

## Session Hygiene (Important)
- Use `/compact` when context grows large.
- Use `/new` when switching to a completely different task.
- Always reference files with `@path` when discussing them.
- This folder is your primary working directory for this website.

## When Adding New Pages / Features
- Create a short plan first (or use plan mode).
- Update this AGENTS.md with any new project-specific conventions.
- Add a note in README.md about major sections.

This file is automatically read by Grok on every session started in or under this directory.

