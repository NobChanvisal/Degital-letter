// Set wedding date (change to your date)

const targetDate = new Date("2026-04-16").getTime();

// Convert number to Khmer number
function toKhmerNumber(num) {
  const khmerNums = ["០", "១", "២", "៣", "៤", "៥", "៦", "៧", "៨", "៩"];
  return num.toString().replace(/[0-9]/g, function (d) {
    return khmerNums[d];
  });
}

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = toKhmerNumber(
    String(days).padStart(2, "0"),
  );
  document.getElementById("hours").innerHTML = toKhmerNumber(
    String(hours).padStart(2, "0"),
  );
  document.getElementById("minutes").innerHTML = toKhmerNumber(
    String(minutes).padStart(2, "0"),
  );
  document.getElementById("seconds").innerHTML = toKhmerNumber(
    String(seconds).padStart(2, "0"),
  );
}

setInterval(updateCountdown, 1000);
updateCountdown();

const boxes = document.querySelectorAll(".box-animate");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

boxes.forEach((box) => {
  observer.observe(box);
});
