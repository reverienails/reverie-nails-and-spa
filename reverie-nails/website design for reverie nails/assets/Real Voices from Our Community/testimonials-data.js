// Testimonials data for the "Real Voices from Our Community" section.
// The three review bubbles are populated from this list and shown in random order on each page load.
//
// HOW TO ADD / UPDATE:
// 1. Drop new review avatar photos into this folder.
// 2. Add a new object to the array below with the image path, quote, name, and date/meta.
// 3. Save and refresh.
//
// If you add more than 3, the code can be updated to pick 3 random ones. Currently it uses all (shuffled).

const testimonials = [
  {
    image: 'assets/Real Voices from Our Community/review 1.jpg',
    quote: '"Always love my experience here! A day one customer. Joe is always great and friendly staff. Trang did her thing on my valentines nails. What do you mean....of course I\'ll be back. 😊"',
    name: 'Hatimah Doobraj',
    date: '3 months ago'
  },
  {
    image: 'assets/Real Voices from Our Community/review 2.jpg',
    quote: '"I have been going to Reverie for several years! It\'s always very clean, relaxing and a great experience. I love being able to get my nails and toes done at the same time to save me time! They are always accommodating and perform excellent service."',
    name: 'Krista Thomas',
    date: '4 months ago'
  },
  {
    image: 'assets/Real Voices from Our Community/review 3.jpg',
    quote: '"Amazing, I have been going to Reverie nail and spa with family and friends for close to 2 years now. The setting is beautiful, the service impeccable. The owner a fun, friendly host who treats each client like a vip. I absolutely love them, each nail tech is kind, well trained and helpful. For our feet we go with Holly a gentle very thorough therapist, for my nails I absolutely love Lam, ..."',
    name: 'Local Guide',
    date: '2 years ago'
  }
];