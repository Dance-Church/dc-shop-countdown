window.onload = function () {
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  // We listen to the resize event
  window.addEventListener("resize", () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });

  function countdownTimer() {
    const difference = +new Date("2020-08-10") - +new Date();
    let remaining = "Time's up!";

    if (difference > 0) {
      const parts = {
        d: (difference / (1000 * 60 * 60 * 24)).toFixed(0),
        h: ((difference / (1000 * 60 * 60)) % 24).toFixed(0),
        m: ((difference / 1000 / 60) % 60).toFixed(0),
        s: ((difference / 1000) % 60).toFixed(0),
      };

      remaining = Object.keys(parts)
        .map((part) => {
          if (!parts[part]) return;
          return `<span class="part ${part}"><span class="digits">${(
            "0" + parts[part]
          ).slice(-2)}${part}</span></span>`;
        })
        .join(" ");
    }

    document.getElementById("countdown").innerHTML = remaining;
  }

  countdownTimer();
  setInterval(countdownTimer, 1000);
};
