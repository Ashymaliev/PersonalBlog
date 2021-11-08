const modalBtn = document.querySelectorAll('[data-modal]');
const body = document.body;
const modal = document.querySelectorAll('.modal');

modalBtn.forEach(item => {
    item.addEventListener('click', event => {
        let $this = event.currentTarget;
        let modalId = $this.getAttribute('data-modal');
        let modal = document.getElementById(modalId);

        modal.classList.add('show');
        body.classList.add('no-scroll');
    });
});

modalClose.forEach(item => {
    item.addEventListener('click', event => {
        let currentModal = event.target.closest('.modal');

        closeModal(currentModal);
    });
});

modal.forEach(item => {
    item.addEventListener('click', event => {
        let currentModal = event.target;

        closeModal(currentModal);
    });
});

function closeModal(currentModal) {
    currentModal.classList.remove('show');
    body.classList.remove('no-scroll');
}
