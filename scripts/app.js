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
