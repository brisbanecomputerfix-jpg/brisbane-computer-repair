/* ==========================================================================
   senior-mode.js - Accessibility Controls and Text-To-Speech
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('seniorModeToggle');
  if (!toggleBtn) return;

  const htmlElement = document.documentElement;
  let speechSynth = window.speechSynthesis;
  let isSpeakingEnabled = false;

  // 1. Initialize Senior Mode from Local Storage
  const isSeniorModeActive = localStorage.getItem('senior-mode-active') === 'true';
  if (isSeniorModeActive) {
    activateSeniorMode();
  }

  // 2. Toggle Click Handler
  toggleBtn.addEventListener('click', () => {
    if (htmlElement.classList.contains('senior-active')) {
      deactivateSeniorMode();
    } else {
      activateSeniorMode();
    }
  });

  // 3. Activation Logic
  function activateSeniorMode() {
    htmlElement.classList.add('senior-active');
    localStorage.setItem('senior-mode-active', 'true');
    toggleBtn.innerHTML = '<span class="icon">✨</span> Standard Mode';
    
    // Announce mode swap
    speak("Senior Mode is now active. Text is larger, and I will read items out loud when you hover your mouse or tap on them.");
    
    // Enable hover listener
    enableSpeechOnHover();
  }

  // 4. Deactivation Logic
  function deactivateSeniorMode() {
    htmlElement.classList.remove('senior-active');
    localStorage.setItem('senior-mode-active', 'false');
    toggleBtn.innerHTML = '<span class="icon">👵</span> Senior Mode';
    
    if (speechSynth) {
      speechSynth.cancel();
    }
    
    // Disable hover listeners
    disableSpeechOnHover();
  }

  // 5. Speech Synthesis Helper
  function speak(text) {
    if (!speechSynth) return;
    
    // Cancel active speech to avoid overlapping
    speechSynth.cancel();

    // Small timeout ensures clean start
    setTimeout(() => {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.85; // Speak slightly slower for clarity
      utterance.pitch = 1.05; // Slightly warmer/friendlier tone
      
      // Select a friendly English voice if available
      const voices = speechSynth.getVoices();
      const preferredVoice = voices.find(v => v.lang.startsWith('en') && v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Premium'));
      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }
      
      speechSynth.speak(utterance);
    }, 50);
  }

  // 6. Speak-On-Hover Management
  function handleHoverSpeech(e) {
    if (!htmlElement.classList.contains('senior-active')) return;
    
    const target = e.currentTarget;
    let textToSpeak = "";

    // Read custom read attributes first (for cleaner explanations), then fallback to textContent
    if (target.hasAttribute('data-speak')) {
      textToSpeak = target.getAttribute('data-speak');
    } else {
      textToSpeak = target.textContent || target.innerText;
    }

    if (textToSpeak.trim()) {
      speak(textToSpeak);
    }
  }

  function enableSpeechOnHover() {
    const targets = document.querySelectorAll('.speak-target');
    targets.forEach(el => {
      el.addEventListener('mouseenter', handleHoverSpeech);
      el.addEventListener('focus', handleHoverSpeech);
    });
  }

  function disableSpeechOnHover() {
    const targets = document.querySelectorAll('.speak-target');
    targets.forEach(el => {
      el.removeEventListener('mouseenter', handleHoverSpeech);
      el.removeEventListener('focus', handleHoverSpeech);
    });
  }

  // If already active on load, run listener setup
  if (isSeniorModeActive) {
    enableSpeechOnHover();
  }
});
