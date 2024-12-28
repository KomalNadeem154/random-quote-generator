let quotes = [
    "The best way to predict the future is to create it.",
    "Life is what happens when you're busy making other plans.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "In the middle of every difficulty lies opportunity.",
    "It does not matter how slowly you go as long as you do not stop."
];

function generatecode() {
    let randomIndex = Math.floor(Math.random() * quotes.length); 
    document.getElementById("quote").textContent = quotes[randomIndex]; 
    document.getElementById("para").style.display = "none"; 
}
