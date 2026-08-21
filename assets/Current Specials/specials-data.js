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
  current: "giveaway",

  specials: {
    "giveaway": {
      title: 'The Reverie VIP Giveaway<br><span class="text-base font-normal text-[#B89A94]">One year of luxury nails — three winners</span>',
      description: `<p class="mb-2">We’re celebrating our community with three exclusive VIP cards. Enter on Instagram for a chance to win a year of luxury nails.</p>
<ul class="list-disc pl-5 my-2">
  <li><strong>Grand prize — VIP Gold:</strong> 25% off for 1 year</li>
  <li><strong>2nd prize — VIP Silver:</strong> 20% off for 1 year</li>
  <li><strong>3rd prize — VIP Bronze:</strong> 15% off for 6 months</li>
</ul>
<p class="mb-1 font-medium text-[#2C2824]">How to enter</p>
<ul class="list-disc pl-5 my-2">
  <li>Follow <a class="underline text-[#E85A9C] hover:text-[#2C2824]" href="https://www.instagram.com/reverienailspa" target="_blank" rel="noopener noreferrer">@ReverieNailSpa</a></li>
  <li>Like the giveaway post</li>
  <li>Tag friends in the comments — every tagged friend is 1 entry (unlimited)</li>
  <li>Share to your story and tag us for a bonus entry</li>
</ul>
<p class="mt-2">Giveaway closes <strong>August 31, 2026 at 11:59 PM CST</strong>. Winners announced <strong>September 1, 2026</strong> on our Instagram story and page.</p>
<p class="mt-1"><a class="font-medium underline text-[#E85A9C] hover:text-[#2C2824]" href="https://www.instagram.com/reverienailspa" target="_blank" rel="noopener noreferrer">Enter on Instagram →</a></p>`,
      tag: 'Giveaway',
      folder: 'give away',
      imageFit: 'contain'
    },
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