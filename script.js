const accBtn = document.querySelectorAll('.accordion');

accBtn.forEach(btn => {
    btn.addEventListener('click', function (event) {
        const clickedBtn = event.currentTarget;
        const accContent = clickedBtn.nextElementSibling;
        const plusIcon = clickedBtn.querySelector('.icon-plus');
        const minusIcon = clickedBtn.querySelector('.icon-minus');

        // Toggle the 'active' class
        clickedBtn.classList.toggle('active');

        if(accContent.style.maxHeight) {
            accContent.style.maxHeight = null;
            plusIcon.style.display = 'inline-block';
            minusIcon.style.display = 'none';
        } else {
            accContent.style.maxHeight = accContent.scrollHeight + 'px';
            plusIcon.style.display = 'none';
            minusIcon.style.display = 'inline-block';
        }
    })

})