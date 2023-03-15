const hint1 = document.querySelector('.hint1');
const popup = document.querySelector('#popup');
const closeBtn = document.querySelector('#close-btn');

hint1.addEventListener('click', function() {
    popup.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
    popup.style.display = 'none';
});
