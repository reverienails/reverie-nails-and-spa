// Moments at Reverie. The page shows 8 of these at random.
const galleryImages = [
  {
    src: 'assets/img/photo-1-1080.webp',
    srcset: 'assets/img/photo-1-400.webp 400w, assets/img/photo-1-800.webp 800w, assets/img/photo-1-1080.webp 1080w',
    width: 1080,
    height: 1350,
    alt: 'Nail work done in house at Reverie Nails and Spa'
  },
  {
    src: 'assets/img/photo-2-1080.webp',
    srcset: 'assets/img/photo-2-400.webp 400w, assets/img/photo-2-800.webp 800w, assets/img/photo-2-1080.webp 1080w',
    width: 1080,
    height: 1350,
    alt: 'Nail work done in house at Reverie Nails and Spa'
  },
  {
    src: 'assets/img/photo-3-1080.webp',
    srcset: 'assets/img/photo-3-400.webp 400w, assets/img/photo-3-800.webp 800w, assets/img/photo-3-1080.webp 1080w',
    width: 1080,
    height: 1350,
    alt: 'Nail work done in house at Reverie Nails and Spa'
  },
  {
    src: 'assets/img/photo-4-1080.webp',
    srcset: 'assets/img/photo-4-400.webp 400w, assets/img/photo-4-800.webp 800w, assets/img/photo-4-1080.webp 1080w',
    width: 1080,
    height: 1350,
    alt: 'Nail work done in house at Reverie Nails and Spa'
  },
  {
    src: 'assets/img/photo-5-1080.webp',
    srcset: 'assets/img/photo-5-400.webp 400w, assets/img/photo-5-800.webp 800w, assets/img/photo-5-1080.webp 1080w',
    width: 1080,
    height: 1350,
    alt: 'Nail work done in house at Reverie Nails and Spa'
  },
  {
    src: 'assets/img/photo-6-1080.webp',
    srcset: 'assets/img/photo-6-400.webp 400w, assets/img/photo-6-800.webp 800w, assets/img/photo-6-1080.webp 1080w',
    width: 1080,
    height: 1350,
    alt: 'Nail work done in house at Reverie Nails and Spa'
  },
  {
    src: 'assets/img/photo-7-1080.webp',
    srcset: 'assets/img/photo-7-400.webp 400w, assets/img/photo-7-800.webp 800w, assets/img/photo-7-1080.webp 1080w',
    width: 1080,
    height: 1350,
    alt: 'Nail work done in house at Reverie Nails and Spa'
  },
  {
    src: 'assets/img/photo-8-1080.webp',
    srcset: 'assets/img/photo-8-400.webp 400w, assets/img/photo-8-800.webp 800w, assets/img/photo-8-1080.webp 1080w',
    width: 1080,
    height: 1350,
    alt: 'Nail work done in house at Reverie Nails and Spa'
  },
  {
    src: 'assets/img/photo-9-1080.webp',
    srcset: 'assets/img/photo-9-400.webp 400w, assets/img/photo-9-800.webp 800w, assets/img/photo-9-1080.webp 1080w',
    width: 1080,
    height: 1350,
    alt: 'Nail work done in house at Reverie Nails and Spa'
  },
  {
    src: 'assets/img/photo-10-1080.webp',
    srcset: 'assets/img/photo-10-400.webp 400w, assets/img/photo-10-800.webp 800w, assets/img/photo-10-1080.webp 1080w',
    width: 1080,
    height: 1350,
    alt: 'Nail work done in house at Reverie Nails and Spa'
  },
  {
    src: 'assets/img/photo-11-1080.webp',
    srcset: 'assets/img/photo-11-400.webp 400w, assets/img/photo-11-800.webp 800w, assets/img/photo-11-1080.webp 1080w',
    width: 1080,
    height: 1350,
    alt: 'Nail work done in house at Reverie Nails and Spa'
  },
  {
    src: 'assets/img/photo-12-1080.webp',
    srcset: 'assets/img/photo-12-400.webp 400w, assets/img/photo-12-800.webp 800w, assets/img/photo-12-1080.webp 1080w',
    width: 1080,
    height: 1350,
    alt: 'Nail work done in house at Reverie Nails and Spa'
  },
  {
    src: 'assets/img/photo-13-1080.webp',
    srcset: 'assets/img/photo-13-400.webp 400w, assets/img/photo-13-800.webp 800w, assets/img/photo-13-1080.webp 1080w',
    width: 1080,
    height: 1350,
    alt: 'Nail work done in house at Reverie Nails and Spa'
  },
  {
    src: 'assets/img/photo-14-1080.webp',
    srcset: 'assets/img/photo-14-400.webp 400w, assets/img/photo-14-800.webp 800w, assets/img/photo-14-1080.webp 1080w',
    width: 1080,
    height: 1350,
    alt: 'Nail work done in house at Reverie Nails and Spa'
  },
  {
    src: 'assets/img/photo-15-1080.webp',
    srcset: 'assets/img/photo-15-400.webp 400w, assets/img/photo-15-800.webp 800w, assets/img/photo-15-1080.webp 1080w',
    width: 1080,
    height: 1350,
    alt: 'Nail work done in house at Reverie Nails and Spa'
  },
  {
    src: 'assets/img/heart-nail-1600.webp',
    srcset: 'assets/img/heart-nail-400.webp 400w, assets/img/heart-nail-800.webp 800w, assets/img/heart-nail-1600.webp 1600w',
    width: 1600,
    height: 2000,
    alt: 'Heart nail art at Reverie Nails and Spa'
  },
  {
    src: 'assets/img/salon-interior-1600.webp',
    srcset: 'assets/img/salon-interior-400.webp 400w, assets/img/salon-interior-800.webp 800w, assets/img/salon-interior-1600.webp 1600w',
    width: 1600,
    height: 1200,
    alt: 'Reverie Nails and Spa salon interior'
  }
];
