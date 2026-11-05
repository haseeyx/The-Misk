// /* ============================================================
//    MISK — Shared Product Data + Cart Helpers
//    ============================================================ */

// var PRODUCTS = [
//   /* ================= NEW ARRIVALS ================= */
//   {
//     id:'festive-ruby', brand:'Scarlet Ruby', name:'Festive Ruby 3pc', price:7800,
//     img:'new arrivals/ruby/R1.PNG',
//     link:'new arrivals/ruby/ruby.html',
//     sizes:['S','M','L'], available:['L'],
//   collections:['new-arrivals','embroidered'],
//       tags:['Festive','Embroidered']
//   },
//   {
//     id:'emerald-mandarin', brand:'Aura', name:'Emerald Mandarin Collar 2pc', price:4500,
//     img:'new arrivals/aura/1.png',
//     link:'new arrivals/aura/aura.html',
//     sizes:['S','M','L'], available:['L'],
//     collections:['new-arrivals','solids'],   // 👈 also in Solids
//     tags:['Daily','Minimal']
//   },
//   {
//     id:'emerald-floral', brand:'Mirana', name:'Emerald Floral Embroidered 2pc', price:7200,
//     img:'new arrivals/mirana/1.png',
//     link:'new arrivals/mirana/mirana.html',
//     sizes:['S','M','L'], available:['M'],
//     collections:['new-arrivals'],
//     tags:['Embroidered','Festive']
//   },

//   /* ================= NEW ARRIVALS + BEST SELLERS ================= */
//   {
//     id:'farshi-white', brand:'Naaz', name:'Farshi Shalwar — White', price:4800,
//     img:'new arrivals/naaz/n2.PNG',
//     link:'new arrivals/naaz/naaz.html',
//     sizes:['S','M','L'], available:['S','M','L'],
//     collections:['new-arrivals','best-sellers'],
//     tags:['Farshi','Gota']
//   },
//   {
//     id:'midnight-black', brand:'Zar-e-Siyaah', name:'Midnight Black 3pc', price:7500,
//     img:'new arrivals/zar/Z11.JPEG',
//     link:'new arrivals/zar/zar.html',
//     sizes:['S','M','L'], available:['S','M','L'],
//   collections:['new-arrivals','best-sellers','embroidered'],
//       tags:['Formal','Festive']
//   },

//   /* ================= BEST SELLERS + BASICS ================= */
//   {
//     id:'khaki-printed', brand:'Khaki', name:'Printed Lawn 2pc', price:6200,
//     img:'best/khaki/K1.PNG',
//     link:'best/khaki/khaki.html',
//     sizes:['S','M','L'], available:[],
//     soldOut:true,
//     collections:['best-sellers','basics'],
//     tags:['Printed','Lawn']
//   },

//   /* ================= BEST SELLERS ONLY ================= */
//   {
//     id:'noor-maroon', brand:'Noor', name:'Maroon Cutwork Shirt 2pc', price:14500,
//     img:'best/noor/N11.jpeg',
//     link:'best/noor/noor.html',
//     sizes:['S','M','L'], available:[],
//     soldOut:true,
//   collections:['best-sellers','formal'],
//       tags:['Cutwork','Embroidered']
//   },
//     /* ================= FORMALS ONLY ================= */
// {
//   id:'twilight-sage-vine', brand:'Twilight Bloom', name:'Sage Floral Vine 3pc', price:16500,
//   img:'formal/twi/T11.jpeg',
//   link:'formal/twi/twilight.html',
//   sizes:['S','M','L'], available:['M'],
//   collections:['formal'],
//   tags:['Russian Silk','Embroidered']
// },
//   {
//     id:'boxy-white', brand:'Boxy', name:'Long Embroidered Shirt — White', price:7500,
//     img:'best/boxy/w4.jpeg',
//     link:'best/boxy/boxy.html?id=white',
//     sizes:['S','M','L'], available:[],
//     soldOut:true,
//   collections:['best-sellers','embroidered'], 
//      tags:['Embroidered','White']
//   },
//   {
//     id:'boxy-green', brand:'Boxy', name:'Long Embroidered Shirt — Green', price:7500,
//     img:'best/boxy/g2.jpeg',
//     link:'best/boxy/boxy.html?id=green',
//     sizes:['S','M','L'], available:[],
//     soldOut:true,
//   collections:['best-sellers','embroidered'],
//       tags:['Embroidered','Green']
//   },

//   /* ================= BASICS ONLY ================= */
//   {
//     id:'tea-pink-embroidered', brand:'Riaa', name:'Tea Pink Embroidered 2pc', price:4650,
//     img:'basic/riaa/RI1.jpeg',
//     link:'basic/riaa/riaa.html',
//     sizes:['S','M','L'], available:['M'],
//     collections:['basics'],
//     tags:['Embroidered','Daily']
//   },
//   {
//     id:'black-embroidered', brand:'Naya', name:'Black Embroidered 2pc', price:3800,
//     img:'basic/naya/N1.PNG',
//     link:'basic/naya/naya.html',
//     sizes:['S','M','L'], available:[],
//     soldOut:true,
//     collections:['basics'],
//     tags:['Embroidered','Daily']
//   },

//   /* ================= SOLIDS ONLY ================= */
//   {
//     id:'amethyst-boat-cowl', brand:'Amethyst', name:'Royal Blue Boat Cowl 2pc', price:3200,
//     img:'solid/ame/am1.PNG',
//     link:'solid/ame/amethyst.html',
//     sizes:['S','M','L'], available:[],
//     soldOut:true,
//     collections:['solids'],
//     tags:['Cowl','Embellished']
//   },
//   {
//     id:'sage-v-pleat', brand:'Sage', name:'Green V-Pleat Long Shirt 2pc', price:0,
//     img:'solid/sage/s1.PNG',
//     link:'solid/sage/sage.html',
//     sizes:['S','M','L'], available:[],
//     soldOut:true,
//     priceTBA:true,               // 👈 price not provided yet
//     collections:['solids'],
//     tags:['Pleated','Long Shirt']
//   },
//  {
//   id:'solenne-stone', brand:'Solenne', name:'Soft Hue Stone Work 2pc', price:4500,
//   img:'solid/sole/S11.PNG',
//   link:'solid/sole/solenne.html',
//   sizes:['S','M','L'], available:['S'],
//   collections:['solids','embroidered'],
//     tags:['Stone Work','Embellished']
// },
//   {
//     id:'ruby-fringe', brand:'Ruby', name:'Fringes & Buttons 2pc', price:3500,
//     img:'solid/ruby/r1.PNG',
//     link:'solid/ruby/ruby.html',
//     sizes:['S','M','L'], available:[],
//     soldOut:true,
//     collections:['solids'],
//     tags:['Georgette','Fringes']
//   },
//   {
//     id:'flare-button', brand:'Flare', name:'Straight-Cut Button-Down 2pc', price:3800,
//     img:'solid/flair/f1.PNG',
//     link:'solid/flair/flare.html',
//     sizes:['S','M','L'], available:[],
//     soldOut:true,
//     collections:['solids'],
//     tags:['Georgette','Off White']
//   },
//     /* ================= EMBROIDERED ONLY ================= */
// {
//   id:'airra-purple-kurta', brand:'Airra', name:'Royal Purple Floral Kurta 2pc', price:4500,
//   img:'embro/airra/A11.jpeg',
//   link:'embro/airra/airra.html',
//   sizes:['S','M','L'], available:['M'],
//   collections:['embroidered'],
//   tags:['Floral','Kurta']
// },

// ];

// /* ---------- Cart helpers ---------- */
// function getCart(){
//   let raw = [];
//   try { raw = JSON.parse(localStorage.getItem('cart') || '[]'); } catch(e) { raw = []; }
//   return raw;
// }
// function saveCart(cart){
//   localStorage.setItem('cart', JSON.stringify(cart));
//   updateCartBadge();
// }
// function findProduct(id){ return PRODUCTS.find(p => p.id === id); }
// function cartCount(){ return getCart().reduce((s,i) => s + (i.qty || 0), 0); }
// function cartSubtotal(){
//   return getCart().reduce((sum, item) => {
//     const p = findProduct(item.id);
//     return sum + ((p && p.price ? p.price : 0) * item.qty);
//   }, 0);
// }
// function updateCartBadge(){
//   const count = cartCount();
//   document.querySelectorAll('#cartCount, .cart-badge').forEach(el => {
//     el.textContent = count;
//   });
// }
// updateCartBadge();






/* ============================================================
   MISK — Shared Product Data + Cart Helpers
   ============================================================ */

var PRODUCTS = [
  /* ================= NEW ARRIVALS ================= */
  {
    id:'festive-ruby', brand:'Scarlet Ruby', name:'Festive Ruby 3pc', price:7800,
    img:'new arrivals/ruby/R1.PNG',
    link:'new arrivals/ruby/ruby.html',
    sizes:['S','M','L'], available:['L'],
    collections:['new-arrivals','embroidered'],
    tags:['Festive','Embroidered']
  },
  {
    id:'emerald-mandarin', brand:'Aura', name:'Emerald Mandarin Collar 2pc', price:4500,
    img:'new arrivals/aura/1.png',
    link:'new arrivals/aura/aura.html',
    sizes:['S','M','L'], available:['L'],
    collections:['new-arrivals','solids'],
    tags:['Daily','Minimal']
  },
  {
    id:'emerald-floral', brand:'Mirana', name:'Emerald Floral Embroidered 2pc', price:7200,
    img:'new arrivals/mirana/1.png',
    link:'new arrivals/mirana/mirana.html',
    sizes:['S','M','L'], available:['M'],
    collections:['new-arrivals'],
    tags:['Embroidered','Festive']
  },

  /* ================= NEW ARRIVALS + BEST SELLERS ================= */
  {
    id:'farshi-white', brand:'Naaz', name:'Farshi Shalwar — White', price:4800,
    img:'new arrivals/naaz/n2.PNG',
    link:'new arrivals/naaz/naaz.html',
    sizes:['S','M','L'], available:['S','M','L'],
    collections:['new-arrivals','best-sellers'],
    tags:['Farshi','Gota']
  },
  {
    id:'midnight-black', brand:'Zar-e-Siyaah', name:'Midnight Black 3pc', price:7500,
    img:'new arrivals/zar/Z11.JPEG',
    link:'new arrivals/zar/zar.html',
    sizes:['S','M','L'], available:['S','M','L'],
    collections:['new-arrivals','best-sellers','embroidered'],
    tags:['Formal','Festive']
  },

  /* ================= BEST SELLERS + BASICS ================= */
  {
    id:'khaki-printed', brand:'Khaki', name:'Printed Lawn 2pc', price:6200,
    img:'best/khaki/K1.PNG',
    link:'best/khaki/khaki.html',
    sizes:['S','M','L'], available:[],
    soldOut:true,
    collections:['best-sellers','basics'],
    tags:['Printed','Lawn']
  },

  /* ================= BEST SELLERS ONLY ================= */
  {
    id:'noor-maroon', brand:'Noor', name:'Maroon Cutwork Shirt 2pc', price:14500,
    img:'best/noor/N11.jpeg',
    link:'best/noor/noor.html',
    sizes:['S','M','L'], available:[],
    soldOut:true,
    collections:['best-sellers','formal'],
    tags:['Cutwork','Embroidered']
  },

  /* ================= FORMALS ONLY ================= */
  {
    id:'twilight-sage-vine', brand:'Twilight Bloom', name:'Sage Floral Vine 3pc', price:16500,
    img:'formal/twi/T11.jpeg',
    link:'formal/twi/twilight.html',
    sizes:['S','M','L'], available:['M'],
    collections:['formal'],
    tags:['Russian Silk','Embroidered']
  },
  {
    id:'boxy-white', brand:'Boxy', name:'Long Embroidered Shirt — White', price:7500,
    img:'best/boxy/w4.jpeg',
    link:'best/boxy/boxy.html?id=white',
    sizes:['S','M','L'], available:[],
    soldOut:true,
    collections:['best-sellers','embroidered'],
    tags:['Embroidered','White']
  },
  {
    id:'boxy-green', brand:'Boxy', name:'Long Embroidered Shirt — Green', price:7500,
    img:'best/boxy/g2.jpeg',
    link:'best/boxy/boxy.html?id=green',
    sizes:['S','M','L'], available:[],
    soldOut:true,
    collections:['best-sellers','embroidered'],
    tags:['Embroidered','Green']
  },

  /* ================= BASICS ONLY ================= */
  {
    id:'tea-pink-embroidered', brand:'Riaa', name:'Tea Pink Embroidered 2pc', price:4650,
    img:'basic/riaa/RI1.jpeg',
    link:'basic/riaa/riaa.html',
    sizes:['S','M','L'], available:['M'],
    collections:['basics'],
    tags:['Embroidered','Daily']
  },
  {
    id:'black-embroidered', brand:'Naya', name:'Black Embroidered 2pc', price:3800,
    img:'basic/naya/N1.PNG',
    link:'basic/naya/naya.html',
    sizes:['S','M','L'], available:[],
    soldOut:true,
    collections:['basics'],
    tags:['Embroidered','Daily']
  },

  /* ================= SOLIDS ONLY ================= */
  {
    id:'amethyst-boat-cowl', brand:'Amethyst', name:'Royal Blue Boat Cowl 2pc', price:3200,
    img:'solid/ame/am1.PNG',
    link:'solid/ame/amethyst.html',
    sizes:['S','M','L'], available:[],
    soldOut:true,
    collections:['solids'],
    tags:['Cowl','Embellished']
  },
  {
    id:'sage-v-pleat', brand:'Sage', name:'Green V-Pleat Long Shirt 2pc', price:0,
    img:'solid/sage/s1.PNG',
    link:'solid/sage/sage.html',
    sizes:['S','M','L'], available:[],
    soldOut:true,
    priceTBA:true,
    collections:['solids'],
    tags:['Pleated','Long Shirt']
  },
  {
    id:'solenne-stone', brand:'Solenne', name:'Soft Hue Stone Work 2pc', price:4500,
    img:'solid/sole/S11.PNG',
    link:'solid/sole/solenne.html',
    sizes:['S','M','L'], available:['S'],
    collections:['solids','embroidered'],
    tags:['Stone Work','Embellished']
  },
  {
    id:'ruby-fringe', brand:'Ruby', name:'Fringes & Buttons 2pc', price:3500,
    img:'solid/ruby/r1.PNG',
    link:'solid/ruby/ruby.html',
    sizes:['S','M','L'], available:[],
    soldOut:true,
    collections:['solids'],
    tags:['Georgette','Fringes']
  },
  {
    id:'flare-button', brand:'Flare', name:'Straight-Cut Button-Down 2pc', price:3800,
    img:'solid/flair/f1.PNG',
    link:'solid/flair/flare.html',
    sizes:['S','M','L'], available:[],
    soldOut:true,
    collections:['solids'],
    tags:['Georgette','Off White']
  },

  /* ================= EMBROIDERED ONLY ================= */
  {
    id:'airra-purple-kurta', brand:'Airra', name:'Royal Purple Floral Kurta 2pc', price:4500,
    img:'embro/airra/A11.jpeg',
    link:'embro/airra/airra.html',
    sizes:['S','M','L'], available:['M'],
    collections:['embroidered'],
    tags:['Floral','Kurta']
  }
];

/* ---------- Cart helpers ---------- */
function getCart(){
  let raw = [];
  try { raw = JSON.parse(localStorage.getItem('cart') || '[]'); } catch(e) { raw = []; }
  return raw;
}
function saveCart(cart){
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartBadge();
}
function findProduct(id){ return PRODUCTS.find(p => p.id === id); }
function cartCount(){ return getCart().reduce((s,i) => s + (i.qty || 0), 0); }
function cartSubtotal(){
  return getCart().reduce((sum, item) => {
    const p = findProduct(item.id);
    return sum + ((p && p.price ? p.price : 0) * item.qty);
  }, 0);
}
function updateCartBadge(){
  const count = cartCount();
  document.querySelectorAll('#cartCount, .cart-badge').forEach(el => {
    el.textContent = count;
  });
}
updateCartBadge();

/* ============================================================
   ★ EXPORT — makes PRODUCTS + helpers reachable from ANY script
   This is the line that actually fixes search. Without it,
   window.PRODUCTS is only guaranteed if products.js is a
   classic script AND not served from cache. With it, it works
   even in a module context and survives cache confusion.
   ============================================================ */
window.PRODUCTS = PRODUCTS;
window.MISK = {
  PRODUCTS,
  getCart,
  saveCart,
  findProduct,
  cartCount,
  cartSubtotal,
  updateCartBadge
};

/* Debug — check the browser console to confirm the file loaded */
console.log(
  '%c[Misk] products.js loaded — ' + PRODUCTS.length + ' products',
  'color:#2B4664;font-weight:600'
);
console.log('[Misk] window.PRODUCTS =', Array.isArray(window.PRODUCTS) ? window.PRODUCTS.length + ' items' : window.PRODUCTS);