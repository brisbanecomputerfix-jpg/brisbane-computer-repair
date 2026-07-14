/* ==========================================================================
   callback-handler.js - Advanced Senior-friendly Form Submissions
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('callbackForm');
  const popup = document.getElementById('successPopup');
  const popupText = document.getElementById('popupMsg');
  const countdownText = document.getElementById('popupCountdown');
  
  if (!form || !popup) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // 1. Gather values
    const nameInput = document.getElementById('seniorName');
    const phoneInput = document.getElementById('seniorPhone');
    const suburbSelect = document.getElementById('contactSuburb');
    const deviceSelect = document.getElementById('deviceType');
    const problemSelect = document.getElementById('problemCategory');
    const preferenceSelect = document.getElementById('contactPreference');
    
    const name = nameInput ? nameInput.value.trim() : "";
    const phone = phoneInput ? phoneInput.value.trim() : "";
    const suburb = suburbSelect ? suburbSelect.value : "";
    const device = deviceSelect ? deviceSelect.value : "computer";
    const problemText = problemSelect ? problemSelect.options[problemSelect.selectedIndex].text : "tech issue";
    const preference = preferenceSelect ? preferenceSelect.value : "Phone Call";

    // 2. Simple validation (must have name, phone and suburb)
    if (!name) {
      alert("Please enter your name so Ike knows who to speak with.");
      nameInput.focus();
      return;
    }
    if (!phone) {
      alert("Please enter your phone number so Ike can contact you.");
      phoneInput.focus();
      return;
    }
    if (!suburb) {
      alert("Please select your suburb so Ike knows your mobile service location.");
      suburbSelect.focus();
      return;
    }

    // 3. Customize senior-friendly success message
    popupText.innerHTML = `
      <strong>Thank you, ${name}!</strong><br><br>
      Ike has received your booking request for your <strong>${device}</strong> in <strong>${suburb}</strong>.<br><br>
      Ike will contact you via <strong>${preference}</strong> at <strong>${phone}</strong> within 1 hour.
    `;

    // 4. Show popup
    popup.classList.add('active');

    // Speech announcement for success
    if (document.documentElement.classList.contains('senior-active')) {
      const synth = window.speechSynthesis;
      if (synth) {
        synth.cancel();
        const speakText = `Thank you ${name}. Ike has received your request for your ${device} in ${suburb} and will contact you via ${preference} at ${phone} shortly.`;
        const utterance = new SpeechSynthesisUtterance(speakText);
        utterance.rate = 0.85;
        synth.speak(utterance);
      }
    }

    // 5. Start 10-second countdown to close (giving seniors plenty of time to read)
    let secondsLeft = 10;
    countdownText.textContent = `This window will close in ${secondsLeft} seconds...`;

    const timer = setInterval(() => {
      secondsLeft--;
      if (secondsLeft <= 0) {
        clearInterval(timer);
        closePopup();
      } else {
        countdownText.textContent = `This window will close in ${secondsLeft} seconds...`;
      }
    }, 1000);

    // Store timer on elements to cancel if manually closed
    popup.dataset.timerId = timer;

    // 6. Reset form
    form.reset();
  });

  // Handle closing popup
  const closeBtn = popup.querySelector('.popup-close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', closePopup);
  }

  function closePopup() {
    popup.classList.remove('active');
    // Clear interval timer if it exists
    if (popup.dataset.timerId) {
      clearInterval(Number(popup.dataset.timerId));
      popup.dataset.timerId = "";
    }
  }
});
