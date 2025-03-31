//Get the button:
mybutton = document.getElementById('myBtn');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
mybutton.style.display = 'block';
} else {
mybutton.style.display = 'none';
}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
document.body.scrollTop = 0; // For Safari
document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

var typed = new typed(".auto-type", {
	strings: ["Web Developer", "Designer", "Backend Developer"],
	typeSpeed: 150,
	backSpeed: 150,
	loop: true,
});

const filter = document.getElementById("filter");
const item = document.querySelectorAll("tbody tr");

filter.addEventListener("input"，(e) => filterData(e.target.value));

function filterData(search) {
  items.forEach((item) => {
    if (item.innerText.toLowerCase().includes(search.toLowerCase())){
      item.classList.remove('none');
    } else {
      item.classList.add('none');
    }
  });
}