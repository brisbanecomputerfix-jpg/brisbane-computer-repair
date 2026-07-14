/* ==========================================================================
   testimonials.js - Rolling Infinite Marquees and Review Filter Dashboard
   ========================================================================== */

const reviewsData = [
  {
    author: "Margaret S.",
    location: "South Bank",
    serviceType: "Desktop Support",
    text: "I was looking for a <strong>local computer technician near me</strong> when my desktop stopped working. Ike provided <strong>same day computer repair</strong> and fixed my <strong>desktop computer repair</strong> needs right at my kitchen table. Highly recommend his <strong>computer repairs Brisbane</strong> service!"
  },
  {
    author: "Robert H.",
    location: "East Brisbane",
    serviceType: "Water Damage / Screen",
    text: "I spilt coffee on my laptop and panicked. Ike sorted out the <strong>fix laptop water damage</strong> and did an affordable <strong>laptop screen replacement brisbane</strong> at the same time. The best <strong>mobile computer repair</strong> in town."
  },
  {
    author: "John D.",
    location: "Indooroopilly",
    serviceType: "Laptop Battery",
    text: "My laptop battery wouldn't hold charge. Ike came over for a <strong>laptop battery replacement brisbane</strong> and gave me a friendly lesson on how to optimize it. Incredible <strong>laptop fix</strong>!"
  },
  {
    author: "Elizabeth K.",
    location: "Toowong",
    serviceType: "Virus Cleanup",
    text: "I got a terrifying popup saying my PC was hacked. I called Ike to <strong>fix my pc</strong>. He did a full <strong>pc cleaning service</strong> and secured my logins. Excellent <strong>mobile computer and pc repair</strong>."
  },
  {
    author: "Thomas M.",
    location: "Taringa",
    serviceType: "Motherboard Repairs",
    text: "Needed <strong>gaming computer repairs near me</strong> for my grandson's PC. Ike diagnosed a faulty GPU and performed fast <strong>hardware-level motherboard repairs</strong>. He is a true <strong>local computer geek brisbane</strong>."
  },
  {
    author: "Dorothy B.",
    location: "Newstead",
    serviceType: "Screen Replacement",
    text: "I was searching for <strong>where to fix broken laptop screen</strong> when I found Ike. He gave me a clear <strong>laptop screen repair cost</strong> upfront and completed the <strong>cracked laptop screen repair</strong> the next day. Brilliant <strong>laptop repairs brisbane</strong>!"
  },
  {
    author: "William P.",
    location: "South Bank",
    serviceType: "Data Recovery",
    text: "My old iMac crashed. I needed <strong>data recovery services brisbane</strong>. Ike recovered all my family photos and did a fast <strong>hard drive recovery brisbane</strong>. Best <strong>data retrieval brisbane</strong> service."
  },
  {
    author: "Patricia C.",
    location: "Hamilton",
    serviceType: "Lenovo Support",
    text: "Ike performed much-needed <strong>computer upgrades near me</strong> on my slow Lenovo laptop. Outstanding <strong>lenovo repairs brisbane</strong> and very senior-friendly tutoring."
  },
  {
    author: "Richard F.",
    location: "Ascot",
    serviceType: "Macbook Battery",
    text: "My Macbook Pro battery was bulging. Ike did the <strong>macbook pro battery replacement</strong> in under an hour. Highly recommend him for <strong>macbook repairs</strong> and all <strong>apple computer repairs brisbane</strong>."
  },
  {
    author: "Helen J.",
    location: "Kenmore",
    serviceType: "HP Support",
    text: "Had a blue screen error on my HP laptop. Ike sorted the <strong>hp laptop repair</strong> quickly. Great flat rate of $170 for <strong>pc repair near me</strong>."
  },
  {
    author: "Charles G.",
    location: "Chapel Hill",
    serviceType: "Dell Support",
    text: "Ike sorted out my network issues and did a quick <strong>dell computer repairs</strong> on my wife's Inspiron. Reliable <strong>computer services brisbane</strong>."
  },
  {
    author: "Susan V.",
    location: "St Lucia",
    serviceType: "New Setup",
    text: "Very helpful! Ike helped with setting up my new computer and printers, transferring my old files. Exceptional <strong>mobile computer repair</strong>."
  },
  {
    author: "Joseph B.",
    location: "Fig Tree Pocket",
    serviceType: "Slow PC / Startup",
    text: "Fast <strong>same day computer repair</strong> after my PC got infected with malware. Ike is my go-to <strong>local computer technician near me</strong>."
  },
  {
    author: "Nancy W.",
    location: "Graceville",
    serviceType: "Macbook Screen",
    text: "My Macbook screen was flickering. Ike did a wonderful <strong>macbook repairs</strong> screen replacement. No travel fees at all!"
  },
  {
    author: "Daniel S.",
    location: "Brisbane City",
    serviceType: "Desktop Support",
    text: "My office computer would not boot. Ike came in for <strong>desktop computer repair</strong> and fixed it on the spot. Great <strong>computer repairs Brisbane</strong>."
  },
  {
    author: "Sandra T.",
    location: "West End",
    serviceType: "Data Recovery",
    text: "My hard drive died with all my tax files. Ike's <strong>hard drive recovery brisbane</strong> was a lifesaver. Excellent <strong>data recovery services brisbane</strong>."
  },
  {
    author: "Paul L.",
    location: "Kangaroo Point",
    serviceType: "Water Damage / Screen",
    text: "Spilled water on my laptop. Ike managed to <strong>fix laptop water damage</strong> and did a <strong>motherboard repairs</strong> job. Saved me buying a new one."
  },
  {
    author: "Mary A.",
    location: "Coorparoo",
    serviceType: "Virus Cleanup",
    text: "I got a scam call and got scared. Ike secured my accounts and did a software <strong>pc cleaning service</strong>. He is a very patient <strong>local computer geek brisbane</strong>."
  },
  {
    author: "George E.",
    location: "Bulimba",
    serviceType: "Macbook Battery",
    text: "Ike did a <strong>laptop battery replacement brisbane</strong> on my old MacBook. Now it lasts all day. Best <strong>macbook pro battery replacement</strong> service."
  },
  {
    author: "Karen N.",
    location: "Carindale",
    serviceType: "Desktop Support",
    text: "Searched for <strong>pc repair near me</strong> and found Ike. He came to my home in Carindale and resolved my slow system. Excellent <strong>mobile computer and pc repair</strong>."
  },
  {
    author: "Kenneth H.",
    location: "Mount Gravatt",
    serviceType: "Screen Replacement",
    text: "Very reasonable <strong>laptop screen repair cost</strong> for my cracked Dell screen. Fast <strong>cracked laptop screen repair</strong>."
  },
  {
    author: "Sarah C.",
    location: "Sunnybank",
    serviceType: "Data Recovery",
    text: "Helped me move all my photos to a new external drive. Great <strong>data retrieval brisbane</strong>."
  },
  {
    author: "Edward W.",
    location: "Chermside",
    serviceType: "Gaming PC Repair",
    text: "Great <strong>gaming computer repairs near me</strong>. Ike diagnosed a bad RAM stick and fixed it. Top notch <strong>computer repairs Brisbane</strong>."
  },
  {
    author: "Betty M.",
    location: "Nundah",
    serviceType: "Virus Cleanup",
    text: "I needed to <strong>fix my pc</strong> because the printer wouldn't connect. Ike fixed it and gave me a step-by-step tutorial. Lovely man."
  },
  {
    author: "Donald R.",
    location: "Clayfield",
    serviceType: "Motherboard Repairs",
    text: "Superb <strong>apple computer repairs brisbane</strong>. Ike repaired my MacBook logic board. Very skilled at <strong>motherboard repairs</strong>."
  },
  {
    author: "Ruth O.",
    location: "Paddington",
    serviceType: "Upgrades",
    text: "Had a slow computer. Ike installed an SSD upgrade. Awesome <strong>computer upgrades near me</strong>."
  },
  {
    author: "Mark Y.",
    location: "Bardon",
    serviceType: "Slow PC / Startup",
    text: "Great <strong>mobile computer repair</strong> service. Came out to Bardon on Sunday and did a <strong>laptop fix</strong> on my Lenovo."
  },
  {
    author: "Carol I.",
    location: "Ashgrove",
    serviceType: "Screen Replacement",
    text: "Fixed my HP laptop's broken hinge and screen. Excellent <strong>hp laptop repair</strong> and <strong>laptop screen replacement brisbane</strong>."
  },
  {
    author: "Steven P.",
    location: "Milton",
    serviceType: "Screen Replacement",
    text: "I was looking for <strong>where to fix broken laptop screen</strong> nearby. Ike gave me a great quote and fixed it in Milton. Reliable <strong>laptop repairs brisbane</strong>."
  },
  {
    author: "Linda K.",
    location: "Auchenflower",
    serviceType: "Macbook Screen",
    text: "My Macbook keyboard stopped working. Ike sorted it out same-day. A+ <strong>macbook repairs</strong> service."
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const trackLeft = document.getElementById('marqueeTrackLeft');
  const trackRight = document.getElementById('marqueeTrackRight');
  const filterSuburb = document.getElementById('filterSuburb');
  const filterService = document.getElementById('filterService');
  const filteredGrid = document.getElementById('filteredReviewsGrid');

  if (!trackLeft || !trackRight) return;

  // 1. Populate Infinite Marquees
  const reviewsHalf = Math.ceil(reviewsData.length / 2);
  const leftReviews = reviewsData.slice(0, reviewsHalf);
  const rightReviews = reviewsData.slice(reviewsHalf);

  function createReviewCard(review) {
    const card = document.createElement('div');
    card.className = 'review-card speak-target';
    
    // Custom speak content for Senior Mode Text-to-Speech
    const cleanText = review.text.replace(/<\/?[^>]+(>|$)/g, ""); // Strip HTML tags for voice
    card.setAttribute('data-speak', `Review from ${review.author} in ${review.location}. Service: ${review.serviceType}. Review text: ${cleanText}`);
    
    card.innerHTML = `
      <div>
        <div class="review-stars" aria-label="5 out of 5 stars">⭐⭐⭐⭐⭐</div>
        <p class="review-text">${review.text}</p>
      </div>
      <div>
        <span class="review-author">${review.author}</span>
        <div class="review-meta">${review.location} • ${review.serviceType}</div>
      </div>
    `;

    // Hook up speak hover listener dynamically if senior mode is active
    if (document.documentElement.classList.contains('senior-active')) {
      card.addEventListener('mouseenter', handleDynamicSpeak);
      card.addEventListener('focus', handleDynamicSpeak);
    }

    return card;
  }

  function handleDynamicSpeak(e) {
    const text = e.currentTarget.getAttribute('data-speak');
    const synth = window.speechSynthesis;
    if (synth && document.documentElement.classList.contains('senior-active')) {
      synth.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.85;
      synth.speak(utterance);
    }
  }

  // Populate left track (and duplicate for infinite loop)
  leftReviews.forEach(r => trackLeft.appendChild(createReviewCard(r)));
  leftReviews.forEach(r => trackLeft.appendChild(createReviewCard(r)));

  // Populate right track (and duplicate)
  rightReviews.forEach(r => trackRight.appendChild(createReviewCard(r)));
  rightReviews.forEach(r => trackRight.appendChild(createReviewCard(r)));


  // 2. Populate Dropdown Filters
  // Extract unique suburbs
  const uniqueSuburbs = [...new Set(reviewsData.map(r => r.location))].sort();
  uniqueSuburbs.forEach(suburb => {
    const opt = document.createElement('option');
    opt.value = suburb;
    opt.textContent = suburb;
    filterSuburb.appendChild(opt);
  });

  // Extract unique service types
  const uniqueServices = [...new Set(reviewsData.map(r => r.serviceType))].sort();
  uniqueServices.forEach(service => {
    const opt = document.createElement('option');
    opt.value = service;
    opt.textContent = service;
    filterService.appendChild(opt);
  });


  // 3. Render Filtered Reviews Board
  function renderFilteredReviews() {
    filteredGrid.innerHTML = '';
    const selectedSuburb = filterSuburb.value;
    const selectedService = filterService.value;

    const filtered = reviewsData.filter(r => {
      const matchSuburb = selectedSuburb === 'all' || r.location === selectedSuburb;
      const matchService = selectedService === 'all' || r.serviceType === selectedService;
      return matchSuburb && matchService;
    });

    if (filtered.length === 0) {
      filteredGrid.innerHTML = `<div class="no-reviews-msg">No matching reviews found for these options. Try selecting another suburb or service.</div>`;
      return;
    }

    filtered.forEach(r => {
      filteredGrid.appendChild(createReviewCard(r));
    });
  }

  // Listen for filter changes
  filterSuburb.addEventListener('change', renderFilteredReviews);
  filterService.addEventListener('change', renderFilteredReviews);

  // Initial render of all reviews in grid
  renderFilteredReviews();
});
