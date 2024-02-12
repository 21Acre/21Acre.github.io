//loader

window.addEventListener("load", function() {
  // Hide the loader
  document.querySelector(".loader-wrapper").style.display = "none";
  // Show the content
  document.querySelector(".content").classList.remove("hidden");
});


//drop downs for more information

function toggleDropdown(id) {
    var dropdown = document.getElementById(id);
    var dropdowns = document.querySelectorAll('.dropdown-content');
    
    dropdowns.forEach(function(item) {
      if (item.id !== id) {
        item.classList.remove('active');
      }
    });

    dropdown.classList.toggle('active');
  }

  //our team


const cards = document.querySelectorAll(".grid-item");
cards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    cards.forEach((el) => el.classList.remove("active"));
    item.classList.add("active");
  });
});

//slider

document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      targetElement.scrollIntoView({ behavior: 'smooth' });
    });
  });
});


//massaging

function sendMessage() {
  // Get form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Simple validation
  if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      alert("Please fill in all fields.");
      return;
  }

  // Construct email body
  var body = "Name: " + name + "\n";
  body += "Email: " + email + "\n";
  body += "Message: " + message;

  // Send email
  var mailtoLink = "mailto:youremail@example.com" + "?subject=Message from " + name + "&body=" + encodeURIComponent(body);

  // Open default email client
  window.location.href = mailtoLink;

  // Display confirmation message for 2 seconds
  document.getElementById("confirmation").style.display = "block";
  setTimeout(function() {
      document.getElementById("confirmation").style.display = "none";
  }, 2000);
}

