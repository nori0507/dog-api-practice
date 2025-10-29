console.log("script.js loaded");

async function getDogFact() {
  const response = await fetch("https://dogapi.dog/api/facts");
  const data = await response.json();
  const fact = data.facts[0];
  
  // Update the DOM with the dog fact
  const output = document.getElementById("dog-fact-output"); 
  output.textContent = fact;
}

getDogFact()


const button = document.getElementById("fetch-dog-btn"); 

button.addEventListener("click", function () { 
  getDogFact(); 
});