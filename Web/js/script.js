function changeGreeting() {
  const quotes = [
    "Keep going, you’re doing great!",
    "Study hard, achieve more!",
    "Every day is a new chance to learn!",
    "Knowledge is your superpower!",
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById('greeting').textContent = randomQuote;
}
