let toggle = document.querySelector('.toggle');
let topbar = document.querySelector('.topbar');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');
let theme = document.querySelector('.theme');
let body = document.querySelector('body');
toggle.onclick = function(){
    toggle.classList.toggle('active');
    topbar.classList.toggle('active');
    navigation.classList.toggle('active');
    main.classList.toggle('active');
}

// theme switch
theme.onclick = function() {
    body.classList.toggle('dark');
}

// active class for mobile devices
function toggleMenu(){
    let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');
navigation.classList.remove('active');
main.classList.remove('active');
}

const form = document.querySelector("form");
const modal = document.getElementById("successModal");
const closeModal = document.getElementById("closeModal");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent default form submission
    const formData = new FormData(form);

    fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
            Accept: "application/json",
        },
    })
        .then((response) => {
            if (response.ok) {
                form.reset();
                modal.classList.remove("hidden"); // Show the modal
            } else {
                alert("Oops! There was a problem submitting your form.");
            }
        })
        .catch(() => {
            alert("Oops! There was a problem submitting your form.");
        });
});

// Close modal on button click
closeModal.addEventListener("click", () => {
    modal.classList.add("hidden"); // Hide the modal
});
