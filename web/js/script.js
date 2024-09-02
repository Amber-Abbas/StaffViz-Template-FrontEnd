
var swiper = new Swiper(".mySwiper", {
  watchSlidesProgress: true,
  slidesPerView: 7,
  autoplay: {
    delay: 2, // Delay in ms between slides
    disableOnInteraction: false, // Continue autoplay after user interaction
  },
});




function validateForm(event) {
  event.preventDefault();
  // Get the input element by its ID
  var nameInput = document.getElementById("nameInput");
  console.log("aksldfjk");

  // Log the value of the input field
  console.log(nameInput.value.length);

  // Check if the input value is empty
  console.log(nameInput);
  if (nameInput.value.length < 5) {
    // Show an error message
    var errorSpan = document.querySelector(".form-error");
    console.log(errorSpan);
    if (errorSpan) {
      errorSpan.textContent = "Name should be greater than 5 ";
    }
    return false; // Prevent form submission
  }

  // If validation passes, clear any existing error message
  var errorSpan = document.querySelector(".form-error");
  if (errorSpan) {
    errorSpan.textContent = "";
  }

  // If validation passes, allow form submission
  return true;
}
