document.addEventListener('DOMContentLoaded', function () {
    const paymentOptionSelect = document.getElementById('payment_option');
    const installmentCountGroup = document.getElementById('installmentCountGroup');

    paymentOptionSelect.addEventListener('change', function () {
        if (this.value === 'Installment') {
            installmentCountGroup.classList.remove('hidden');
        } else {
            installmentCountGroup.classList.add('hidden');
        }
    });

    const studentForm = document.getElementById('studentForm');
    studentForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Perform form submission logic here
        console.log('Form submitted:', new FormData(studentForm));
    });
});
