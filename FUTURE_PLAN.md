# Reverie Nails and Spa — Future Development Plan

This document outlines two main future initiatives:
1. Building a full, detailed Menu page
2. Building a simple custom Booking System

---

## 1. Full Menu Page

### Goal
Create a dedicated, beautiful, and easy-to-maintain full menu page that matches the warm, modern, and community-oriented aesthetic of the current site.

### Recommended Approach

**Option A (Recommended): Dedicated `menu.html` page + JavaScript Data**

- Create a new file: `menu.html`
- Store all menu data in a clean JavaScript object/array (or a separate `menu-data.js` file)
- Dynamically render sections using JavaScript
- Use the same fonts (Satoshi + Playfair Display), colors, and design language

**Why this is best:**
- Very easy for you to update later (just edit the data, no design work needed)
- Full control over aesthetics and user experience
- Can add filters (by category, price, duration, etc.)
- Still fully static (free hosting)

### Suggested Structure for the Menu Page

- **Hero / Intro** (short and warm)
- **Filterable Categories** (tabs or buttons): All / Manicures / Pedicures / Enhancements / Lashes / Waxing / Other
- **Section Cards** with:
  - Service name
  - Duration
  - Price
  - Short description
  - "Book Now" button (that pre-fills the booking form if possible)
- Clean, airy layout with good use of white space
- Mobile-friendly (collapsible sections or good stacking)

### Future Enhancements (when ready)
- Online booking integration (auto-populate selected service)
- Seasonal or limited-time services highlighted
- Packages section

---

## 2. Booking System Options

You currently have a basic 3-step booking form that only shows an alert. Here are realistic paths forward, ranked by effort vs value:

### Option 1: Email-Only Booking (Easiest & Recommended to Start)
**How it works:**
- User fills out the multi-step form
- On submit, the form sends an email to you (via Formspree, EmailJS, or Netlify Forms)
- You manually check availability and reply

**Pros:**
- Very fast to implement
- No monthly cost
- Full design control
- Good enough while you're still small

**Cons:**
- Manual availability management
- No automatic confirmations or calendar sync

**Implementation Difficulty:** Low (1–2 days of work)

---

### Option 2: Email + Google Calendar Sync (Good Middle Ground)
**How it works:**
- Form submits to you via email
- You (or a simple script) add the appointment to a shared Google Calendar
- Optional: Use Google Apps Script to send automatic confirmation emails

**Pros:**
- Better than pure manual
- Still free or very low cost
- You stay in control

**Cons:**
- Some setup required
- Availability still mostly manual

**Implementation Difficulty:** Medium

---

### Option 3: Lightweight Custom Booking System (Long-term Best)
**How it works:**
- Front-end: Keep the beautiful multi-step form you already have
- Back-end: Simple database (Supabase, Firebase, or even Google Sheets + API)
- Features:
  - Real-time availability (basic version)
  - Automatic email confirmations
  - Admin dashboard (simple view of bookings)
  - Possibly time slot blocking

**Pros:**
- Matches your exact aesthetic and flow
- No expensive monthly SaaS fees
- You own the data and experience
- Can grow with you

**Cons:**
- More development time
- Requires some ongoing maintenance

**Implementation Difficulty:** Medium-High (can be done in phases)

---

### Option 4: Use a Booking Platform (GlossGenius, Vagaro, Square, etc.)
**When to choose this:**
- You want real-time online booking + payments + client management quickly
- You’re okay with their design limitations and fees

**Recommendation:** Only go this route if you decide you *don’t* want to build custom.

---

## My Current Recommendation (Updated with new info)

**Important Context from you:**
- You need to book **multiple technicians**.
- You are currently doing **50–100 appointments per week**.

With this volume + multiple technicians, a pure manual email system will likely become painful very quickly (double bookings, constant back-and-forth, technician conflicts, etc.).

### Revised Phased Recommendation

**Phase 1 – Next 4–6 weeks (While finishing the website)**
- Finish the current website design and content.
- Improve the existing booking form to at least let clients select a preferred technician.
- Set up a clean, structured email notification system + a shared Google Calendar (or one calendar per technician).
- This is a short-term bridge while we decide on the long-term solution.

**Phase 2 – Next 2–4 months (Recommended)**
Choose one of the following paths:

**Path A – Adopt a proper booking platform** (Strongly recommended at this volume)
- Tools like **GlossGenius**, **Vagaro**, **Schedulicity**, or **Square Appointments**.
- Pros: Real-time availability per technician, online payments, client management, reminders, marketing tools.
- Cons: Monthly fees + design limitations.

**Path B – Build a lightweight custom booking system**
- Use something like **Supabase** (free tier available) + a clean frontend that matches your aesthetic.
- We can build this in phases:
  - Phase 2.1: Form that saves to a database + email confirmations.
  - Phase 2.2: Basic technician availability calendar.
  - Phase 2.3: Admin dashboard for you to manage bookings.
- Pros: Full design control, no (or very low) monthly fees, you own the data.
- Cons: More development time and some ongoing maintenance.

**My honest opinion at your current volume:**
With 50–100 appointments per week and multiple technicians, I would lean toward **Path A** (a good booking platform) unless you have strong reasons to avoid monthly fees and really want full custom control. Building and maintaining a reliable multi-technician booking system takes more work than most people expect.

That said, if you strongly prefer to stay custom, we can build something practical in stages.

---

## Next Steps & Questions (Updated)

Thanks for the additional important context. This significantly changes the scope:

**Your requirements:**
- Clients should be able to choose a **specific technician** (important), but also have the option to book with "anyone" (general appointments).
- The system must work well for **front desk staff** — easy to read and manually take appointments.
- Must support **online booking** through the website.
- On the admin/scheduling side, you need to:
  - Build schedules for **20–40 technicians**.
  - Categorize technicians by skills/services they can perform.
  - Set **hourly capacity limits** by skill type (e.g., max number of gel services that can be booked in any given hour across the salon).

This is no longer a simple booking form. This is a proper multi-staff scheduling and capacity management system.

### Updated Recommendation (Based on Your Full Requirements)

Given everything you've described — 50–100 appointments per week, 20–40 technicians, skill categorization, hourly capacity limits by service type, client choice of specific technician *or* general booking, plus the need for a usable front desk view — this is now a **real multi-staff scheduling system**, not a simple booking form.

**Honest Assessment:**
Building something that properly handles all of the above from scratch is significantly more complex (and time-consuming) than a basic custom form. Most people underestimate how much work goes into reliable staff scheduling + capacity management at this scale.

**My current recommendation:**

**Strongly consider a proper salon booking platform** (Path A) rather than building custom, *unless* you have very strong reasons to avoid monthly fees and are willing to invest real development time.

Good platforms in this category (GlossGenius, Vagaro, Booksy, etc.) are literally built for exactly the complexity you're describing:
- Multiple technicians with different skills
- Clients choosing specific techs or "any available"
- Hourly service capacity limits
- Strong front desk calendar views
- Online booking that matches your rules

**If you still want to explore building custom**, we would need to treat it as a proper project with clear phases, and it would likely involve a real backend (Supabase/Firebase + custom admin dashboard). It would no longer be "simple."

---

**Phase 1 (Recommended regardless of long-term path)**
While we figure out the long-term solution:
- Finish the current website.
- Improve the existing booking form to support technician selection (specific tech vs any).
- Use a clean email system + shared calendars as a bridge.

**Phase 2 Decision Point**
You have decided to go with **Path A** — using a professional booking platform/service.

- This will be implemented **after the website is launched and activated**.
- For the initial launch, all booking CTAs have been updated to say "(Coming Soon)" with a note encouraging people to call.
- Key requirements to evaluate platforms against:
  - Support for 20–40 technicians
  - Strong front desk / admin calendar experience (full control for staff)
  - Clients can choose a specific technician or book a general service (any qualified tech)
  - Ability to categorize technicians by skills
  - Hourly capacity limits by skill type
  - Good online booking experience + excellent in-person booking tools

Add this as a post-launch project.

---

## Questions to Move Forward

To give you the best next steps, please answer these:

1. **Current process** — How are you currently handling bookings and technician scheduling today? (Google Calendar, paper, another app, etc.)

2. **Priorities** — What’s most important to you right now?
   - Speed (get something decent working quickly)
   - Low/no monthly cost
   - Full custom design and control
   - Strong automation (real-time availability, automatic confirmations, etc.)

3. **Technicians** — How many technicians do you currently have, and do different technicians offer different services?

4. **Must-have features** (even in a simple system):
   - Clients choosing a specific technician?
   - Online payments / deposits?
   - Automatic email/SMS confirmations and reminders?
   - Anything else?

---

Once you reply, I can give you a clear recommended path (with pros/cons and rough effort) and we can decide whether to start building something or evaluate platforms.

Would you like me to revise the plan document with this new information first, or should we discuss your answers to the questions above?