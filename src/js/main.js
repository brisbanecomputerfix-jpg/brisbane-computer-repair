/* ==========================================================================
   main.js - Interactive Accordions, Suburb Routing, and Pre-Selection
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  
  // 1. FAQ Accordion Toggle
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const item = question.parentElement;
      const isActive = item.classList.contains('active');
      
      // Close all FAQs first for clean layout
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
      
      if (!isActive) {
        item.classList.add('active');
        
        // Auto speech if in senior mode
        if (document.documentElement.classList.contains('senior-active')) {
          const answerText = item.querySelector('.faq-answer').textContent;
          const synth = window.speechSynthesis;
          if (synth) {
            synth.cancel();
            const utterance = new SpeechSynthesisUtterance(answerText);
            utterance.rate = 0.85;
            synth.speak(utterance);
          }
        }
      }
    });
  });

  // 2. Interactive Remote Control Problem Selector
  const remoteButtons = document.querySelectorAll('.remote-btn');
  const detailsPanel = document.getElementById('activeServiceDetails');
  
  // Detailed service copy map for the details panel
  const serviceDetailsMap = {
    wontStart: {
      title: "💻 Computer Won't Turn On / Hard to Start",
      desc: "Whether it is a desktop PC or a laptop, a computer that won't turn on can be stressful. Ike will test your power supply, battery, motherboard, and components right in front of you. Most startup issues are fixed on-site within an hour.",
      benefit: "No travel fee, fixed $170 labor, and same-day service.",
      cta: "Call Ike now for same-day startup troubleshooting.",
      formProblem: "wontStart",
      formDevice: "Desktop PC"
    },
    scamWarning: {
      title: "⚠️ Suspicious Message, Email or Phone Call",
      desc: "Did you get a scary popup warning saying your computer is locked, or a call from someone claiming to be from your bank or ISP? Do not panic. Ike specializes in senior digital security support. He will run deep clean scans, secure your passwords, set up spam blockers, and give you simple tutorials on how to spot scams.",
      benefit: "Full malware clean-up & setup of trusted, easy security tools.",
      cta: "Call Ike immediately to audit your computer security.",
      formProblem: "scamWarning",
      formDevice: "Laptop"
    },
    setupComputer: {
      title: "🔌 Help Setting Up a New Computer or Printer",
      desc: "Just bought a new PC, iMac, iPad, or printer and feeling overwhelmed by wires and accounts? Ike will come to your Brisbane home, unbox everything, connect it to your Wi-Fi, install your programs, and transfer your old photos and documents safely. He will also show you how to use it in plain English.",
      benefit: "Includes a friendly 15-minute tutorial showing you how to do basic tasks.",
      cta: "Schedule a friendly computer setup visit with Ike.",
      formProblem: "setupComputer",
      formDevice: "Printer / Wi-Fi"
    },
    brokenScreen: {
      title: "🍏 Apple Mac Repair / Broken Laptop Screen / Liquid Spill",
      desc: "Spilled tea on your laptop, or dropped your MacBook? Ike is an Apple specialist who can do micro-soldering, liquid damage cleanup, and screen replacements. Don't pay exorbitant Apple Store prices or wait weeks for repairs.",
      benefit: "Fixed labor rate, fast component sourcing, and No Fix No Fee.",
      cta: "Get your screen or liquid damage assessed today.",
      formProblem: "brokenScreen",
      formDevice: "Apple Mac"
    }
  };

  remoteButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const problemKey = btn.getAttribute('data-problem');
      const details = serviceDetailsMap[problemKey];
      
      if (details && detailsPanel) {
        // Update details panel content
        const panelTitle = detailsPanel.querySelector('.panel-title');
        const panelDesc = detailsPanel.querySelector('.panel-desc');
        const panelBenefit = detailsPanel.querySelector('.panel-benefit');
        const panelCta = detailsPanel.querySelector('.panel-cta-text');
        
        panelTitle.textContent = details.title;
        panelDesc.textContent = details.desc;
        panelBenefit.textContent = details.benefit;
        panelCta.textContent = details.cta;
        
        // Show details panel with animations
        detailsPanel.style.display = 'block';
        detailsPanel.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Pre-select form dropdown values based on selection
        const formProblem = document.getElementById('problemCategory');
        const formDevice = document.getElementById('deviceType');
        if (formProblem) formProblem.value = details.formProblem;
        if (formDevice) formDevice.value = details.formDevice;
        
        // Dynamic voice read-out if senior mode is enabled
        if (document.documentElement.classList.contains('senior-active')) {
          const synth = window.speechSynthesis;
          if (synth) {
            synth.cancel();
            const speakText = `${details.title}. ${details.desc} ${details.benefit}`;
            const utterance = new SpeechSynthesisUtterance(speakText);
            utterance.rate = 0.85;
            synth.speak(utterance);
          }
        }
      }
    });
  });

  // 3. Connect details panel button directly to contact form scroll
  const panelBookBtn = document.getElementById('panelBookBtn');
  if (panelBookBtn) {
    panelBookBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const contactSec = document.getElementById('contact');
      if (contactSec) {
        contactSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  // 4. Clickable Suburb Tags - Auto Scroll and Select Suburb
  const clickableSuburbs = document.querySelectorAll('.suburb-tag-btn');
  clickableSuburbs.forEach(btn => {
    btn.addEventListener('click', () => {
      const suburbName = btn.getAttribute('data-suburb');
      const formSuburb = document.getElementById('contactSuburb');
      
      if (formSuburb && suburbName) {
        formSuburb.value = suburbName;
        
        // Scroll to form
        const contactSec = document.getElementById('contact');
        if (contactSec) {
          contactSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        
        // Speech announcement
        if (document.documentElement.classList.contains('senior-active')) {
          const synth = window.speechSynthesis;
          if (synth) {
            synth.cancel();
            const utterance = new SpeechSynthesisUtterance(`Selected suburb ${suburbName}. Scrolling down to the contact form.`);
            utterance.rate = 0.85;
            synth.speak(utterance);
          }
        }
      }
    });
  });

  // 5. Back-to-Top Button Smooth Scroll
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    // Show button when scrolled down
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });
    
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
