window.onload = function (e) {
  moment.tz.add([
    // "America/Los_Angeles|PST PDT|80 70|0101|1Lzm0 1zb0 Op0",
    "America/New_York|EST EDT|50 40|0101|1Lz50 1zb0 Op0",
  ]);
  var $clock = $("#countdown"),
    eventTime = moment.tz("2020-08-10T00:00:00", "America/New_York"),
    currentTime = moment().tz("America/New_York"),
    diffTime = eventTime - currentTime,
    duration = moment.duration(diffTime, "milliseconds"),
    interval = 1000;

  // console.log(eventTime, currentTime, diffTime, duration);

  // if time to countdown
  if (diffTime > 0) {
    // Show clock
    // $clock.show();

    var $d = $('<span class="part d" ></span>').appendTo($clock),
      $h = $('<span class="part h" ></span>').appendTo($clock),
      $m = $('<span class="part m" ></span>').appendTo($clock),
      $s = $('<span class="part s" ></span>').appendTo($clock);

    setInterval(function () {
      duration = moment.duration(
        duration.asMilliseconds() - interval,
        "milliseconds"
      );
      var d = moment.duration(duration).days(),
        h = moment.duration(duration).hours(),
        m = moment.duration(duration).minutes(),
        s = moment.duration(duration).seconds();

      d = $.trim(d).length === 1 ? "0" + d : d;
      h = $.trim(h).length === 1 ? "0" + h : h;
      m = $.trim(m).length === 1 ? "0" + m : m;
      s = $.trim(s).length === 1 ? "0" + s : s;

      // show how many hours, minutes and seconds are left
      $d.text(d + "d");
      $h.text(h + "h");
      $m.text(m + "m");
      $s.text(s + "s");
    }, interval);
  } else {
    $clock.html("<span class='launching'>launching...</span>");
  }
};

// window.onload = function () {
//   // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
//   let vh = window.innerHeight * 0.01;
//   // Then we set the value in the --vh custom property to the root of the document
//   document.documentElement.style.setProperty("--vh", `${vh}px`);
//   // We listen to the resize event
//   window.addEventListener("resize", () => {
//     // We execute the same script as before
//     let vh = window.innerHeight * 0.01;
//     document.documentElement.style.setProperty("--vh", `${vh}px`);
//   });

//   function countdownTimer() {
//     const difference = +new Date(2020, 7, 10, 0, 0, 0, 0) - +new Date();
//     let remaining = "Launching...";

//     if (difference > 0) {
//       const parts = {
//         d: (difference / (1000 * 60 * 60 * 24)).toFixed(0),
//         h: ((difference / (1000 * 60 * 60)) % 24).toFixed(0),
//         m: ((difference / 1000 / 60) % 60).toFixed(0),
//         s: ((difference / 1000) % 60).toFixed(0),
//       };

//       remaining = Object.keys(parts)
//         .map((part) => {
//           if (!parts[part]) return;
//           return `<span class="part ${part}"><span class="digits">${(
//             "0" + parts[part]
//           ).slice(-2)}${part}</span></span>`;
//         })
//         .join(" ");
//     }

//     document.getElementById("countdown").innerHTML = remaining;
//   }

//   countdownTimer();
//   setInterval(countdownTimer, 1000);
// };
