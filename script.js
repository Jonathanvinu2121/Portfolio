// Shrink navbar on scroll
window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 30) {
      navbar.classList.add("shrink");
    } else {
      navbar.classList.remove("shrink");
    }
  });
  
  // Highlight nav link on scroll
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links li a");
  
  window.addEventListener("scroll", () => {
    let current = "";
  
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 60) {
        current = section.getAttribute("id");
      }
    });
  
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });

// 🌟 Intersection Observer for fade-in animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.1
});

// 📦 Observe each .fade-in section
document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));


let navbar = document.getElementById("navbar");
let isScrolling;

window.addEventListener("scroll", () => {
  navbar.classList.add("shrink");

  // Clear previous timeout
  clearTimeout(isScrolling);

  // Set new timeout to detect scroll stop
  isScrolling = setTimeout(() => {
    navbar.classList.remove("shrink");
  }, 400); // 400ms after scroll stops
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const successMessage = document.getElementById("successMessage");

  form.addEventListener("submit", function (e) {
    
    const formData = new FormData(form);
    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        successMessage.classList.remove("hidden");
        form.reset();
        setTimeout(() => {
          successMessage.classList.add("hidden");
        }, 4000);
      } else {
        alert("There was a problem. Try again.");
      }
    }).catch(error => {
      console.error(error);
      alert("Error sending message.");
    });
  });
});

// Modal Logic for Certification Preview
function openModal(imageSrc) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImage");
  modal.style.display = "block";
  modalImg.src = imageSrc;
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

// Close modal when user clicks outside the image
window.addEventListener("click", function(event) {
  const modal = document.getElementById("modal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

form.addEventListener("submit", function() {
  const button = form.querySelector("button");
  button.innerHTML = "Sending...";
  setTimeout(() => {
    successMessage.classList.remove("hidden");
    button.innerHTML = "Send";
  }, 2000); // Simulating 2 seconds for demo
});

