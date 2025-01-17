// Functionto move the Hand's
function updateClock() {
  // Searching current time
  const now = new Date();
  const seconds = now.getSeconds(); // Get second-number (0-59)
  const minutes = now.getMinutes(); // Get min-number (0-59)
  const hours = now.getHours(); // Get hour-number (0-23)
  // Angle calculer
  const secondDegrees = (seconds / 60) * 360 + 180; // moving secondhand 6° (360° / 60), start +90°
  const minuteDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 180; // moving minhande
  const hourDegrees = ((hours % 12) / 12) * 360 + (minutes / 60) * 30 + 180; // moving hourhande
  // Select hand
  const secondHand = document.querySelector(".second-hand"); // Select secondhand
  const minHand = document.querySelector(".min-hand"); // Select minhand
  const hourHand = document.querySelector(".hour-hand"); // Select hourhand
  // Hand rotation
  secondHand.style.transform = `rotate(${secondDegrees}deg)`; // Rotate secondhand
  minHand.style.transform = `rotate(${minuteDegrees}deg)`; // Rotate minhand
  hourHand.style.transform = `rotate(${hourDegrees}deg)`; // Rotate hourhand
}
// Update every second
setInterval(updateClock, 1000);
updateClock(); // Call updateClock() function
