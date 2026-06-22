// Photos for the "Our Philosophy" section (the large image on the right of the philosophy text).
// A random photo is chosen from this list every time the page loads for variety.
//
// HOW TO ADD / UPDATE PHOTOS:
// 1. Drop your new photo file into this folder (assets/Our Philosophy/).
//    Recommended: .jpg or .png, good quality, matching the warm studio vibe.
// 2. Add an entry to the array below:
//    {
//      src: 'assets/Our Philosophy/your-new-photo.jpg',
//      alt: 'Short description for accessibility and SEO'
//    },
// 3. Save this file and hard refresh the page (Ctrl/Cmd + Shift + R).
//
// You can have as many as you want — one will be picked at random on each visit.
// The image appears in the "Our Philosophy" area with the caption below it.

const philosophyImages = [
  {
    src: 'assets/Our Philosophy/studio-1.jpg',
    alt: 'Warm and inviting interior of Reverie Nails and Spa'
  }
  // Add more photos here for random rotation
];