

window.addEventListener('DOMContentLoaded', (event) => {
    const requiredFields = document.querySelectorAll('input[required]');

    requiredFields.forEach((field) => {

        const label = document.querySelector(`label[for="${field.id}"]`);

        if (label) {
            const asterisk = document.createElement('span');
            asterisk.textContent = ' *';
            asterisk.style.color = 'red';
            label.appendChild(asterisk);
        }
    });
});

window.addEventListener('DOMContentLoaded', (event) => {
    const requiredFields = document.querySelectorAll('select[required]');

    requiredFields.forEach((field) => {

        const label = document.querySelector(`label[for="${field.id}"]`);

        if (label) {
            const asterisk = document.createElement('span');
            asterisk.textContent = ' *';
            asterisk.style.color = 'red';
            label.appendChild(asterisk);
        }

    });
});

