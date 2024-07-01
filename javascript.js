document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementsByClassName("nosubmit")[0];
  
  form.addEventListener('submit', function(event) {
      event.preventDefault(); 
      
      var searchit = form.querySelector('input[type="search"]').value;
      if (searchit === "earbuds") {
          window.location.href = "airpodes.html";
      } else if (searchit === "headphones") {
          window.location.href = "headphones.html";
      } 
      else if(searchit==="smartwatch"){ 
        window.location.href="smartwatch.html";
      }
      else {
          window.location.href = "index.html";
      }
  });
});

//main page pic change
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); 
}

//automatic scroll
function autoScrollImages() {
  var itemsDiv = document.querySelector('.items-div');
  itemsDiv.scrollLeft += 1;
 } 
setInterval(autoScrollImages, 70);

//timer
var countDownDate = new Date("may 14, 2024 22:37:25").getTime();
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("timer").innerHTML = hours + "h "+ minutes + "m " + seconds + "s ";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);


document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  let query = document.getElementById('searchInput').value.toLowerCase();
  if (query.trim() !== '') {
      // Perform search logic
      searchItems(query);
  } else {
      alert('Please enter a search query.');
  }
});

function searchItems(query) {
  // Loop through items on other pages and search for matching ones
  let items = document.querySelectorAll('.box1 h4');
  let matchingItems = [];
  items.forEach(function(item) {
      let itemName = item.innerText.toLowerCase();
      if (itemName.includes(query)) {
          matchingItems.push(item.parentNode.parentNode); // Parent node of h4 is div.box1
      }
  });
  
  // Display search results or notify if no results found
  if (matchingItems.length > 0) {
      // Clear previous search results
      document.querySelectorAll('.box1').forEach(function(item) {
          item.style.display = 'none';
      });
      // Display matching items
      matchingItems.forEach(function(item) {
          item.style.display = 'block';
      });
  } else {
      alert('No items found matching your search.');
  }
}


