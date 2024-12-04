const catFactBtn = document.getElementById("catFactBtn");
const catFactDisplay = document.getElementById("catFact");

function fetchCatFact() {
  return fetch("https://catfact.ninja/fact")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch a cat fact");
      }
      return response.json();
    })
    .then((data) => data.fact);
}

// Function to display "Loading..." for 5 seconds before showing the fact
function displayFactWithDelay() {
  catFactDisplay.textContent = "Loading...";

  // Use Promise to wait before fetching the cat fact
  new Promise((resolve) => setTimeout(resolve, 1000))
    .then(() => fetchCatFact())
    .then((fact) => {
      catFactDisplay.textContent = fact;
    })
    .catch((error) => {
      catFactDisplay.textContent = `Error: ${error.message}`;
    });
}

// Add event listener to the button
catFactBtn.addEventListener("click", displayFactWithDelay);
