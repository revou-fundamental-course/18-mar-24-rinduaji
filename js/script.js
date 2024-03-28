    const form = document.querySelector('form');
    const inputName = document.getElementById('input-name');
    const inputEmail = document.getElementById('input-email');
    const selectOption = document.getElementById('select-option');
    const submitButton = document.getElementById('submit');
  
    // Validasi Form
    submitButton.addEventListener('click', function (e) {
      e.preventDefault();
  
      let isValid = true;
  
      // Validasi Nama
      if (inputName.value.trim() === '') {
        displayError('error-name', 'Please enter your name');
        isValid = false;
      } else {
        removeError('error-name');
      }
  
      // Validasi Email
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(inputEmail.value.trim())) {
        displayError('error-email', 'Please enter a valid email address');
        isValid = false;
      } else {
        removeError('error-email');
      }
  
      // Validasi Pilihan
      if (selectOption.value === '') {
        displayError('error-select-option', 'Please select an option');
        isValid = false;
      } else {
        removeError('error-select-option');
      }
  
      // Jika Form Valid
      if (isValid) {
        // Tampilkan Data yang Diisi
        const formData = {
          name: inputName.value.trim(),
          email: inputEmail.value.trim(),
          option: selectOption.value
        };
        alert(JSON.stringify(formData));
  
        // Reset Form
        form.reset();
      }
    });
  
    // Fungsi untuk Menampilkan Pesan Kesalahan
    function displayError(id, message) {
      const errorElement = document.getElementById(id);
      errorElement.textContent = message;
    }
  
    // Fungsi untuk Menghapus Pesan Kesalahan
    function removeError(id) {
      const errorElement = document.getElementById(id);
      errorElement.textContent = '';
    }
  
    // Button Navigation
    const homeButton = document.querySelector('.nav-container > button:nth-child(1)');
    const packageButton = document.querySelector('.nav-container > button:nth-child(2)');
    const callButton = document.querySelector('.nav-container > button:nth-child(3)');
  
    homeButton.addEventListener('click', function () {
      scrollTo('.section-content-container');
    });
  
    packageButton.addEventListener('click', function () {
      scrollTo('.section-package-container');
    });
  
    callButton.addEventListener('click', function () {
      scrollTo('.section-call-container');
    });
  
    // Fungsi untuk Scroll ke Element dengan Class Tertentu
    function scrollTo(className) {
      const element = document.querySelector(className);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  
    // image slider
   // image slider
const sliderImages = document.querySelectorAll(".image-slider img");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let currentSlide = 0;

// Function to show slide
function showSlide(slideIndex) {
    if (slideIndex >= sliderImages.length) {
        currentSlide = 0;
    } else if (slideIndex < 0) {
        currentSlide = sliderImages.length - 1;
    }

    sliderImages.forEach(img => {
        img.style.display = "none";
    });

    sliderImages[currentSlide].style.display = "block";
}

// Show first slide on page load
showSlide(currentSlide);

// Next Button Click
nextButton.addEventListener("click", function () {
    currentSlide++;
    showSlide(currentSlide);
});

// Previous Button Click
prevButton.addEventListener("click", function () {
    currentSlide--;
    showSlide(currentSlide);
});
