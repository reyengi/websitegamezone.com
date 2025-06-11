window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

function toggleMenu() {
    const toggleMenu = document.querySelector('.toggleMenu');
    const navbar = document.querySelector('.navbar');
    toggleMenu.classList.toggle('active');
    navbar.classList.toggle('active');
}

let list = document.querySelectorAll('.list');
let card = document.querySelectorAll('.card');

for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', function() {
        for (let j = 0; j < list.length; j++) {
            list[j].classList.remove('active');
        }
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');

        for (let k = 0; k < card.length; k++) {
            card[k].classList.remove('active');
            card[k].classList.add('hide');

            if (card[k].getAttribute('data-item') == dataFilter || dataFilter == 'all') {
                card[k].classList.remove('hide');
                card[k].classList.add('active');
            }
        }
    });
}

const searchInput = document.getElementById('gameSearch'); 
if (searchInput) {
    searchInput.addEventListener('input', function() {
        const filter = searchInput.value.toLowerCase();
        card.forEach(c => {
            const title = c.querySelector('h2')?.textContent.toLowerCase() || '';
            if (title.includes(filter)) {
                c.style.display = '';
            } else {
                c.style.display = 'none';
            }
        });
    });
}

function sendToGmail(event) {
    event.preventDefault(); 

    const name = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const subject = encodeURIComponent("Contact Form Message from " + name);
    const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    const mailtoLink = `mailto:reynaldogonzales0124@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
}
