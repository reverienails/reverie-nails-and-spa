// =====================================================
// CURRENT SPECIALS - EASY TO SWITCH WHICH SPECIAL SHOWS
// =====================================================
//
// This file controls the "Current Special" banner on the homepage.
//
// HOW TO CHANGE WHICH SPECIAL IS DISPLAYED:
// 1. Add or edit specials in the "specials" object below (each has a key like "basic").
// 2. Set "current" to the key of the special you want right now (e.g. "basic").
// 3. Each special must have a "folder" that matches its subfolder under assets/Current Specials/.
// 4. Save and hard refresh the page (Ctrl/Cmd + Shift + R).
//
// Photos are automatically pulled from the matching subfolder (basic/, fourth of jully/, etc.).
// Drop any photo(s) into the subfolder — the site will pick a real one that loads.
// No need to list filenames here.

const specialsData = {
  // === CHANGE THIS TO SWITCH THE DISPLAYED SPECIAL ===
  // Use the key of the special you want to show right now (e.g. "basic" or "july4")
  current: "july4",

  specials: {
    "basic": {
      title: 'Military • Teacher • Student Discounts',
      description: 'We proudly offer special pricing every day for military, teachers, and students. Just ask for details!',
      tag: 'Everyday',           // optional - remove line if no tag
      folder: 'basic'            // photos in assets/Current Specials/basic/
    },
    "july4": {
      title: 'Stars, Stripes & Sparkle Pedicure<br><span class="text-base font-normal text-[#B89A94]">(Limited time: June 26 – July 4)</span>',
      description: `<p class="mb-2">Get ready for the 4th with our festive Stars, Stripes & Sparkle pedicure!</p>

<ul class="list-disc pl-5 my-2">
  <li><strong>$50 Pedicure</strong> — Kids 10 and under get $8 off!</li>
  <li>Fourth of July themed <strong>Jell-o shot</strong></li>
  <li><strong>Prize Box</strong> for kids</li>
  <li>Firework-themed massage oil that leaves you sparkling for your next adventure</li>
</ul>

<p class="mt-2">Perfect for your holiday plans — whether you’re keeping it chill at home or heading out to celebrate.</p>

<p class="mt-1"><strong>Book your spot now while availability lasts. Walk-ins welcome!</strong></p>`,
      tag: 'Limited Time',
      folder: 'fourth of jully'   // photos in assets/Current Specials/fourth of jully/
    }
    // Add more like "spring", "fall", "holiday" etc.
  },

  defaultText: 'Come relax with us — your time to unwind is waiting.'
};