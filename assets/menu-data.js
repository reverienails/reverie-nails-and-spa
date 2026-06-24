// =============================================
// Reverie Nails and Spa - Menu Data
// =============================================
// 
// INSTRUCTIONS FOR UPDATING THE MENU:
// 1. Edit the categories and services below.
// 2. Each service should have: name, duration, price, description.
// 3. Save the file. Refresh the website to see changes.
// 
// You can add new categories or services easily.
// When you're ready with the full real menu, paste it here or send it to me
// and I'll format it properly into this structure.
// =============================================

const menuData = {
  // Custom signature selection for the homepage teaser (3 columns).
// Pedicures column now merges complete regular + luxe lists (with scrollable area for space).
// Full menu baseline from reverie Menu 2026.pdf (including cocktails). Home page signature for Nail Services (now titled Gel Manicures) and Other Offerings use custom from text files (special cased in render only; full menu data unchanged).
  signature: {
    categoryIds: ["pedicures", "nail-services", "other-offerings"],
    services: {
      "pedicures": ["THE CLASSIC", "THE PEPPERMINT", "THE LAVENDER", "THE MILK & HONEY", "THE ALOE VERA", "THE HAWAIIAN"],
      "luxe-pedicures": ["THE COLLAGEN CRYSTAL", "THE JELLY SPA", "ROSÉ ALL DAY", "THE DIAMOND VIP", "THE RED GLOW"],
      "nail-services": ["Classic Gel Manicure", "Aloe Vera Gel Manicure", "Reverie Organic Gel Manicure", "GEL ONLY (HANDS)", "GEL ONLY (TOES)", "Adding gel on with pedicure"],

    }
  },

  categories: [
    {
      id: "pedicures",
      name: "Pedicures",
      icon: "fa-shoe-prints",
      services: [
        {
          name: "THE CLASSIC",
          duration: "30 min treatment",
          price: 30,
          description: "Toe-tally Basic! Our standard pedicure consists of your general nail care of trimming, cuticle and callus removal along with relaxing hot towels for the feet.",
          massage: "5min massage"
        },
        {
          name: "THE PEPPERMINT",
          duration: "40 min treatment",
          price: 38,
          description: "It’s Mint to be! Cool, soothe, and revive tired feet with this refreshing peppermint pedicure! Includes your general nail care, hydrating leg masque, and paraffin wax.",
          massage: "10min massage"
        },
        {
          name: "THE LAVENDER",
          duration: "50 min treatment",
          price: 48,
          description: "Lavender you long time! This relaxing pedicure will put you at ease. It includes the general nail care, sugar scrub exfoliation, hydrating leg masque, paraffin wax, and hot stones.",
          massage: "15min massage"
        },
        {
          name: "THE MILK & HONEY",
          duration: "50 min treatment",
          price: 48,
          description: "Milk it, Honey! A scrumptious pedicure with a sweet scent of delight includes the general nail care, sugar scrub exfoliation, hydrating leg masque, paraffin wax, and hot stones.",
          massage: "15min massage"
        },
        {
          name: "THE ALOE VERA",
          duration: "50 min treatment",
          price: 50,
          description: "Aloe Gorgeous! This hydrating pedicure will bring moisture right back onto your legs. Using fresh aloe vera’s hydrating properties into a leg masque. It includes the general nail care, sugar scrub exfoliation, hydrating leg masque, paraffin wax, and hot stones.",
          massage: "15min massage"
        },
        {
          name: "THE HAWAIIAN",
          duration: "55 min treatment",
          price: 55,
          description: "Tropic like it's hot! Escape to paradise with this island-inspired pedicure using fresh orange and cucumber. It includes the general nail care, sugar scrub exfoliation, hydrating leg masque, paraffin wax, hot stones.",
          massage: "18min massage"
        }
      ]
    },
    {
      id: "luxe-pedicures",
      name: "Luxe Pedicures",
      icon: "fa-spa",
      services: [
        {
          name: "THE COLLAGEN CRYSTAL",
          duration: "55 min treatment",
          price: 60,
          description: "Glow big or glow home! A luxury pedicure formulated to relieve stress and rejuvenate the vibrancy of skin producing collagen production to diminish fine lines and wrinkles for a youthful glow. (20min massage)"
        },
        {
          name: "THE JELLY SPA",
          duration: "60 min treatment",
          price: 65,
          description: "Get jelly with it! Dip your feet into a warm, plush jelly soak that melts stress away while deeply hydrating the skin. This unique pedicure includes a gentle exfoliation, nourishing mask, and a soothing massage, leaving your legs and feet silky smooth, soft, and glowing with moisture. (22min massage)"
        },
        {
          name: "ROSÉ ALL DAY",
          duration: "65 min treatment",
          price: 75,
          description: "Sip, Soak, and Slay! Start off by dipping your feet into a luxe plush pink jelly. Fun and bubbly! Dissolved into a rose scented water bath topped with a scrumptious bath rose petals. Finish with luxurious rose-scented products for a fresh, floral glow. Top it off with a glass of Rosé for a total chic and fun pampering experience! Includes general nail and leg care. (25min massage)"
        },
        {
          name: "THE DIAMOND VIP",
          duration: "70 min treatment",
          price: 85,
          description: "Shine bright like this pedi! Indulge in five steps of pure luxury. This radiant experience begins with a Vitamin E-infused soak to soothe and sanitize, followed by a gentle Diamond Sugar Scrub to exfoliate and hydrate dry skin. A detoxifying Diamond Mask draws out impurities for a flawless glow, while our Diamond Serum Massage Oil stimulates circulation and deeply relaxes tired legs. Finish with our ultra-nourishing Diamond Body Butter Cream. Top this pedicure off with a leg steam treatment and candle wax massage. (25min leg steam + 5min hand massage)"
        },
        {
          name: "THE RED GLOW",
          duration: "70 min treatment",
          price: 90,
          description: "Red-y, set, glow! Glow deeper and detox stronger with Red Glow. This rejuvenating pedicure begins with activated charcoal-infused products to draw out toxins, cleanse pores, and deeply purify the skin. Followed by LED red light therapy to boost collagen, calm inflammation, and promote cellular renewal. Finished with a hydrating massage and polish of your choice—your feet will feel refreshed, radiant, and renewed. (25min leg massage + 5min hand massage)"
        }
      ]
    },
    {
      id: "manicures",
      name: "Manicures",
      icon: "fa-hand-sparkles",
      services: [
        {
          name: "THE CLASSIC",
          duration: "",
          price: 20,
          description: "Standard basic clean up manicure that consists of natural general nail care with relaxing hot towel and hand massage."
        },
        {
          name: "THE ALOE VERA",
          duration: "",
          price: 30,
          description: "This manicure includes your general nail care along with fresh aloe vera for a hydrating arm mask with paraffin wax and 8 minute neck and hand massage."
        },
        {
          name: "THE REVERIE ORGANIC",
          duration: "",
          price: 40,
          description: "Our signature manicure includes organic products along with arm exfoliation and hand mask treatment for smooth, rejuvenated arms and hands. Enjoy this with a 12 min neck and hand massage along with hot stones, and collagen gloves."
        }
      ]
    },
    {
      id: "nail-services",
      name: "Gel Manicures",
      icon: "fa-gem",
      services: [
        // Gel Manicures
        {
          name: "Classic Gel Manicure",
          duration: "",
          price: 38,
          description: ""
        },
        {
          name: "Aloe Vera Gel Manicure",
          duration: "",
          price: 48,
          description: ""
        },
        {
          name: "Reverie Organic Gel Manicure",
          duration: "",
          price: 58,
          description: ""
        }
      ]
    },
    {
      id: "dipping-powder",
      name: "Dipping Powder",
      icon: "fa-hand-sparkles",
      services: [
        {
          name: "Color Set",
          duration: "",
          price: 40,
          description: "Adding Tips $5"
        },
        {
          name: "Classic Dip Manicure",
          duration: "",
          price: 52,
          description: ""
        },
        {
          name: "Aloe Vera Dip Manicure",
          duration: "",
          price: 60,
          description: ""
        },
        {
          name: "Reverie Organic Dip Manicure",
          duration: "",
          price: 68,
          description: ""
        },
        {
          name: "Dip Ombre",
          duration: "",
          price: 55,
          description: ""
        }
      ]
    },
    {
      id: "solar-sets",
      name: "Solar Sets",
      icon: "fa-sun",
      services: [
        {
          name: "Pink and White Full Set",
          duration: "",
          price: 55,
          description: ""
        },
        {
          name: "Pink and White Fill",
          duration: "",
          price: 50,
          description: ""
        },
        {
          name: "Pink Fill",
          duration: "",
          price: 35,
          description: ""
        },
        {
          name: "Color Set",
          duration: "",
          price: 45,
          description: ""
        },
        {
          name: "Same Color Fill",
          duration: "",
          price: 40,
          description: ""
        },
        {
          name: "Solar Ombre",
          duration: "",
          price: 60,
          description: ""
        },
        {
          name: "Solar Ombre Fill",
          duration: "",
          price: 55,
          description: ""
        }
      ]
    },
    {
      id: "acrylic-powder",
      name: "Acrylic Powder",
      icon: "fa-gem",
      services: [
        {
          name: "Full Sets (with regular polish)",
          duration: "",
          price: 40,
          description: ""
        },
        {
          name: "Fills w/ polish",
          duration: "",
          price: 35,
          description: ""
        },
        {
          name: "Full Sets w/ Gel",
          duration: "",
          price: 55,
          description: ""
        },
        {
          name: "Fill w/ Gel",
          duration: "",
          price: 50,
          description: ""
        }
      ]
    },
    {
      id: "builder-gel",
      name: "Builder Gel",
      icon: "fa-gem",
      services: [
        {
          name: "Full Set",
          duration: "",
          price: 55,
          description: ""
        },
        {
          name: "Fill",
          duration: "",
          price: 50,
          description: ""
        }
      ]
    },
    {
      id: "gel-x",
      name: "Gel X",
      icon: "fa-gem",
      services: [
        {
          name: "Full Set",
          duration: "",
          price: 70,
          description: ""
        },
        {
          name: "Fill w/ Builder Gel",
          duration: "",
          price: 50,
          description: ""
        }
      ]
    },
    {
      id: "add-ons-for-nails",
      name: "Add Ons For Nails",
      icon: "fa-plus",
      services: [
        {
          name: "French",
          duration: "",
          price: "5-15",
          description: "depending on Curve and Color"
        },
        {
          name: "Length",
          duration: "",
          price: "5+",
          description: ""
        },
        {
          name: "Shape",
          duration: "",
          price: 5,
          description: ""
        },
        {
          name: "Designs",
          duration: "",
          price: "5+",
          description: "Includes Cat Eye, Gems/Charms, Hand Drawn, Multiple colors 3+, Specialty nails ask for pricing"
        }
      ]
    },
    {
      id: "kids-menu",
      name: "Kid's Menu (8 and Under)",
      icon: "fa-child",
      services: [
        {
          name: "MANICURE",
          duration: "",
          price: 15,
          description: ""
        },
        {
          name: "PEDICURE",
          duration: "",
          price: 25,
          description: ""
        },
        {
          name: "POLISH (HANDS)",
          duration: "",
          price: 10,
          description: ""
        },
        {
          name: "POLISH (TOES)",
          duration: "",
          price: 10,
          description: ""
        },
        {
          name: "GEL HANDS",
          duration: "",
          price: 18,
          description: ""
        },
        {
          name: "GEL TOES",
          duration: "",
          price: 20,
          description: ""
        }
      ]
    },
    {
      id: "waxing",
      name: "Waxing",
      icon: "fa-fire",
      services: [
        {
          name: "EYEBROWS",
          duration: "",
          price: 12,
          description: ""
        },
        {
          name: "LIP",
          duration: "",
          price: 10,
          description: ""
        },
        {
          name: "CHIN",
          duration: "",
          price: 10,
          description: ""
        },
        {
          name: "SIDEBURNS",
          duration: "",
          price: 18,
          description: ""
        },
        {
          name: "FULL FACE",
          duration: "",
          price: 40,
          description: ""
        },
        {
          name: "UNDERARMS",
          duration: "",
          price: "25+",
          description: ""
        },
        {
          name: "HALF ARMS",
          duration: "",
          price: "30+",
          description: ""
        },
        {
          name: "FULL ARMS",
          duration: "",
          price: "40+",
          description: ""
        },
        {
          name: "HALF LEGS",
          duration: "",
          price: "40+",
          description: ""
        },
        {
          name: "FULL LEGS",
          duration: "",
          price: "55+",
          description: ""
        },
        {
          name: "HALF BACK",
          duration: "",
          price: "40+",
          description: ""
        },
        {
          name: "FULL BACK",
          duration: "",
          price: "55+",
          description: ""
        },
        {
          name: "STOMACH",
          duration: "",
          price: "25+",
          description: ""
        },
        {
          name: "BIKINI",
          duration: "",
          price: "45+",
          description: ""
        },
        {
          name: "BRAZILIAN",
          duration: "",
          price: "65+",
          description: ""
        }
      ]
    },
    {
      id: "non-alcoholic",
      name: "Non-Alcoholic",
      icon: "fa-glass-martini",
      services: [
        {
          name: "Tea",
          duration: "",
          price: "",
          description: ""
        },
        {
          name: "Vietnamese Coffee",
          duration: "",
          price: "",
          description: ""
        },
        {
          name: "Strawberry Slushy",
          duration: "",
          price: "",
          description: ""
        },
        {
          name: "Moctails",
          duration: "",
          price: "",
          description: ""
        },
        {
          name: "Soft Drinks",
          duration: "",
          price: "",
          description: "Coke, Sprite, Doctor Pepper, Diet Coke, Diet Dr. Pepper, Coke Zero"
        },
        {
          name: "Water",
          duration: "",
          price: "",
          description: ""
        },
        {
          name: "Reverie Special Shirley Temple",
          duration: "",
          price: "",
          description: ""
        },
        {
          name: "Juice (Apple, Cranberry, Pineapple)",
          duration: "",
          price: "",
          description: ""
        }
      ]
    },
    {
      id: "alcohol",
      name: "Alcohol",
      icon: "fa-wine-glass",
      services: [
        {
          name: "Wine (Red, White, Champagne)",
          duration: "",
          price: "",
          description: ""
        }
      ]
    },
    {
      id: "speciality-cocktails",
      name: "Speciality Cocktails",
      icon: "fa-cocktail",
      services: [
        {
          name: "Old Fashioned",
          duration: "",
          price: "",
          description: "Whiskey, bitters, syrup"
        },
        {
          name: "Moscow Mule (Vodka/Tequila)",
          duration: "",
          price: "",
          description: "Lime, Ginger beer"
        },
        {
          name: "Tequila Sunrise",
          duration: "",
          price: "",
          description: "Tequila, orange juice, grenadine"
        },
        {
          name: "Lemon Drop Martini",
          duration: "",
          price: "",
          description: "Vodka, Orange liqueur, Lemon juice"
        },
        {
          name: "Espresso Martini",
          duration: "",
          price: "",
          description: "Vodka, Fresh espresso, coffee liquor, syrup"
        },
        {
          name: "Mimosa",
          duration: "",
          price: "",
          description: "Orange, pineapple, cranberry"
        },
        {
          name: "Peach Bellini",
          duration: "",
          price: "",
          description: "Peach juice, champagne, peach"
        },
        {
          name: "Margarita",
          duration: "",
          price: "",
          description: "Frozen / on the rocks"
        },
        {
          name: "Italian Margarita",
          duration: "",
          price: "",
          description: "An on the rocks margarita w/ amaretto"
        }
      ]
    },
    {
      id: "signature-cocktails",
      name: "Signature Cocktails",
      icon: "fa-star",
      services: [
        {
          name: "Starburst Sparkler",
          duration: "",
          price: "",
          description: "Vodka, Sparkling ice Starburst, zero sugar, sparkling water"
        },
        {
          name: "Vietnamese Espresso Martini",
          duration: "",
          price: "",
          description: "Espresso Martini, but more sweet"
        },
        {
          name: "Lychee Luxe Martini",
          duration: "",
          price: "",
          description: "Vodka, lychee syrup, boba, and a hint of something floral"
        },
        {
          name: "Joe’s Mai Tai",
          duration: "",
          price: "",
          description: "All the sweetness, no Kick!"
        }
      ]
    }
  ]
};

// Helper function for the teaser on the homepage.
// Respects the custom signature selection above.
function getSignatureServices() {
  const sig = menuData.signature;
  const result = [];

  if (sig && sig.categoryIds && sig.categoryIds.length > 0) {
    // Use custom signature picks
    sig.categoryIds.forEach(catId => {
      const category = menuData.categories.find(c => c.id === catId);
      if (!category) return;

      const selectedNames = sig.services && sig.services[catId] ? sig.services[catId] : [];

      if (selectedNames.length > 0) {
        // Use the exact services listed, in the order provided
        selectedNames.forEach(name => {
          const service = category.services.find(s => s.name === name);
          if (service) {
            result.push({
              ...service,
              category: category.name
            });
          }
        });
      } else {
        // Fallback: first 4 services of this category
        category.services.slice(0, 4).forEach(service => {
          result.push({
            ...service,
            category: category.name
          });
        });
      }
    });
  } else {
    // No custom signature defined — fall back to first 3 from each category
    menuData.categories.forEach(cat => {
      cat.services.slice(0, 3).forEach(service => {
        result.push({
          ...service,
          category: cat.name
        });
      });
    });
  }

  return result;
}

// Make it available globally
window.menuData = menuData;
window.getSignatureServices = getSignatureServices;