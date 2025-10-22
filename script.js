// Background music autoplay setup
window.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('birthdayAudio');
  
  audio.play().catch(() => {
    // If autoplay is blocked, start when user first taps anywhere
    document.body.addEventListener('click', () => {
      audio.play();
    }, { once: true });
  });
});


function candleOut() {
  // Hide the flame with fade effect
  const flame = document.getElementById("flame");
  flame.style.opacity = "0";
  
  // Fade out the entire cake section
  const cakeSection = document.getElementById("cake-section");
  setTimeout(() => {
    cakeSection.classList.add("fade-out");
  }, 500);
  
  // After fade out, show fireworks
  setTimeout(() => {
    cakeSection.classList.add("hidden");
    const fireworksSection = document.getElementById("fireworks-section");
    fireworksSection.classList.remove("hidden");
    
    // Create and add the fireworks GIF only when needed
    const fireworksGif = document.getElementById("fireworks-gif");
    fireworksGif.style.backgroundImage = "url('https://media0.giphy.com/media/v1.Y2lkPTZjMDliOTUyMTE1dG4wcmVpMDF0MWJoNXprZHJsajh1emN2bjE5Mm1zZ2xsY2E0YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/S3bp48refqWzwxx70g/giphy.gif')";
    
    
    
    // After fireworks, show gift boxes
    setTimeout(() => {
      fireworksSection.classList.add("hidden");
      const giftsSection = document.getElementById("gifts-section");
      giftsSection.classList.remove("hidden");
    }, 5000); // Fireworks plays for 5 seconds
  }, 1500); // Wait for cake fade out
}

function showGift(type) {
  const giftPopup = document.getElementById("gift-popup");
  const giftContent = document.getElementById("gift-content");
  
  // Set gift content based on type
  if (type === "flowers") {
    giftContent.innerHTML = `
      <h3>🌹 Titi's Bouquet 🌹</h3>
      <p>Just for you❤️! Special flowers for a special person, may these virtual flowers bring as much joy as you bring to others.</p>
      <img src="https://github.com/758-Marlo/Birthday/blob/main/IMG_4851.jpeg?raw=true" alt="Beautiful Roses" style="max-width: 100%; height: auto; margin-top: 20px; border-radius: 10px;">
    `;
  } else if (type === "poem") {
    giftContent.innerHTML = `
      <h3>📜 A Special Poem</h3>
      <p style="font-family: 'Poppins', sans-serif; font-size: 18px; line-height: 1.8; color:black; text-align: center;">
      The sun rises again for its 6575th time,<br>
      Yet today its glow feels ever so divine,<br>
      A celebration for the world to know,<br>
      To mark the birth of one so fine.<br><br>

      A rose that blooms, ohh how beautiful darling dear,<br>
      For your smiles bring nothing but cheer,<br>
      Ever lucid, sweet with nothing to fear,<br>
      So complete, even a prideful captain would jump ship.<br><br>

      Today's your day, so laugh, so shine,<br>
      As you are forever priceless by design,<br>
      With another year, may all align,<br>
      Another reason for continued joy and peace of mind.<br><br>

      So let your path be bright with nothing to fright,<br>
      Ever so brilliant, beneath his light,<br>
      And though chapters may have changed,<br>
      My hope for your best still remains.<br><br>

      <b><u>H</u></b>onest, <b><u>O</u></b>pen-hearted, <b><u>P</u></b>erseverant, <b><u>E</u></b>ndearing,<br>
      Your name woven from the artists that drew you, forever treasured.<br>
      And what I'm trying to say is… HAPPY BIRTHDAY HOPE 🎉🎂🥳 a star so bright.<br><br>

      ~<br>
      Much love,<br>
      Marlan
      </p>
    `;
  } else if (type === "affirmations") {
    giftContent.innerHTML = `
      <h3>🫶Affirmations🫶</h3>
      <p style="font-family: 'Poppins', sans-serif; font-size: 18px; line-height: 1.8; color:black; text-align: center;">
      ~Every Birthday is a reminder that you're a Gift~<br>
      ~You're meant for greatness and all the love the world has to offer~<br>
      ~You radiate strength in kindness and warmth through the coldest nights~<br>
      ~Your yap sessions is like music to the ears…contagious in nature~<br>
      ~You've come so far for yourself and there is still so much ahead of you~<br>
      ~A butterfly not meant to be held but admired in its beauty~<br>
      ~The world is better with you in it~<br>
      ~Your eyes are open doors to what must be paradise~<br>
      ~The way you carry yourself is an art form~<br>
      ~Ofc your forehead is mesmerizing~<br>
      ~The way you smile is all together perfect~<br>
      ~You're a true blessing~<br><br>

      You are fearfully and wonderfully made.(Psalm 139:14).<br><br>

      She is clothed with strength and dignity, and she laughs without fear of the future. (Proverbs 31:25).<br><br>

      For wisdom will enter your heart, and knowledge will be pleasant to your soul.(Proverbs 2:10).<br><br>

      She is more precious than rubies; nothing you desire can compare with her. (Proverbs 3:15).<br><br>

      For I know the plans I have for you,' declares the Lord, 'plans to prosper you and not to harm you, plans to give you hope and a future. (Jeremiah 29:11)
      </p>
    `;
  } else if (type === "collage") {
    giftContent.innerHTML = `
      <h3>🖼️ Photo Collage</h3>
      <p>Just a few cherished pictures of an amazing person<br>
      <img src="https://raw.githubusercontent.com/758-Marlo/Birthday/refs/heads/main/IMG_5071.png" 
         alt="Photo Collage" 
         style="max-width: 95%; height: auto; margin-top: 20px; border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.3);">
  </p>
    `;
  } else if (type === "pets") {
    giftContent.innerHTML = `
      <h3>🐾 Thought that I would forget the most important gift🙃?</h3>
      <img src="https://raw.githubusercontent.com/758-Marlo/Birthday/refs/heads/main/IMG_4927.jpeg" 
           alt="Cute pet" 
           style="max-width: 100%; border-radius: 15px; margin-top: 20px;">
    `;
  }
  
  // Show the popup
  giftPopup.classList.remove("hidden");
}

function closeGift() {
  const giftPopup = document.getElementById("gift-popup");
  giftPopup.classList.add("hidden");
}