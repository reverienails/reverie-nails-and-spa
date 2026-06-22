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
// Photos are automatically pulled from the matching subfolder (basic/, july4/, etc.).
// Drop any photo(s) into the subfolder — the site will pick a real one that loads.
// No need to list filenames here.

const specialsData = {
  // === CHANGE THIS TO SWITCH THE DISPLAYED SPECIAL ===
  // Use the key of the special you want to show right now (e.g. "basic" or "july4")
  current: "basic",

  specials: {
    "basic": {
      title: 'Military • Teacher • Student Discounts',
      description: 'We proudly offer special pricing every day for military, teachers, and students. Just ask for details!',
      tag: 'Everyday',           // optional - remove line if no tag
      folder: 'basic'            // photos in assets/Current Specials/basic/
    },
    "july4": {
      title: 'Boom Boom Pedicure',
      description: 'Celebrate the fourth of July with this pedicure',
      tag: 'Limited Time',
      folder: 'fourth of jully'   // photos in assets/Current Specials/fourth of jully/
    }
    // Add more like "spring", "fall", "holiday" etc.
  },

  defaultText: 'Come relax with us — your time to unwind is waiting.'
};