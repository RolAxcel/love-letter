function typeWriter(element, text, speed, callback) {
    let i = 0;
    element.innerHTML = ""; // Clear the element
    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed); // Recursive call for typing the next character
      } else if (callback) {
        callback(); // Callback once typing is done
      }
    }
    type();
  }

  function greetUser() {
    // Get the value from the input field
    let userName = document.getElementById("userName").value;

    // Get the greeting message element
    let greetingMessage = document.getElementById("greetingMessage");

    // Text to display after the user's name
    let additionalText = `Hey, My heart has been whispering something to me, and I think it’s finally time to tell you..... (,,>﹏<,,)

I just can’t stop thinking about how amazing you are. 
You’re honestly so attractive,
but.............
it’s more than just that. 

There’s something about you that keeps me thinking about you all the time.

Hmmm.
hmmmmmm..
Uhmmmmmmmmm...
                          I LIKE YOU 🥰💖

For so many reasons. 
I like your flaws, your imperfections, and the way they make you so perfectly you. 💖
I love your personality, your vibe, and how you just light up everything around you. 💖
Your style is effortless, and your smile... it just makes everything better.💖

I made this code just to show you how deeply I’m in love with you. Every line of it reflects how I feel.🥰

But no pressure, okay? 
You don’t have to feel the same way. 
I just needed to get this off my chest for my own peace of mind. 
Take care.😊💖`;

    // If the user enters a name, start the typing effect
    if (userName.trim() !== "") {
      // Show the greeting message with typing animation for the name
      typeWriter(greetingMessage, `Hello, ${userName}!`, 100, function () {
        // After the name is typed, type the additional message
        setTimeout(function () {
          typeWriter(greetingMessage, additionalText, 50);
        }, 1000); // Add a 1-second pause before typing the additional text
      });
      // greetingMessage.style.backgroundColor = "#e63946"; // Red background
      greetingMessage.style.display = "block"; // Show the message
    } else {
      greetingMessage.textContent = "Please enter your name.";
      greetingMessage.style.backgroundColor = "#dc3545"; // Red background
      greetingMessage.style.display = "block"; // Show the message
    }
  }