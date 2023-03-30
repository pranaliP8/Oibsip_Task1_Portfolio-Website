// Function to show/hide the "scroll to top" button
function toggleScrollBtn() {
  const scrollBtn = document.getElementById("scrollBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
}



// Function to scroll to the top of the page
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Add event listener to show/hide the "scroll to top" button
window.onscroll = function() {
  toggleScrollBtn();
};
