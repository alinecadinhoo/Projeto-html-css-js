document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
    const contactList = document.getElementById('contact-list');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const nameInput = document.getElementById('name');
        const phoneInput = document.getElementById('phone');

        const name = nameInput.value;
        const phone = phoneInput.value;

        if (name.trim() === '' || phone.trim() === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${name}</td>
            <td>${phone}</td>
        `;

        contactList.appendChild(newRow);

        nameInput.value = '';
        phoneInput.value = '';
    });
});
