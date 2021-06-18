function slider () {
    const slideElement = document.querySelector('.offer__slider-wrapper img'),
          prevSlideButton = document.querySelector('.offer__slider-counter .offer__slider-prev'),
          nextSlideButton = document.querySelector('.offer__slider-counter .offer__slider-next'),
          currentSlideCount = document.querySelector('#current'),
          totalSlidesCount = document.querySelector('#total');

    let currentSlideNumber = 1;
    currentSlideCount.innerHTML = `01`;

    axios.get('http://localhost:3000/slides').then(data => {
        const totalSlideNumber = `` + Object.entries(data.data[0]).length;
        totalSlidesCount.innerHTML = `0${totalSlideNumber}`;
    });
    nextSlideButton.addEventListener('click', () => {
        if (currentSlideNumber != 4) {
            currentSlideNumber++;
            axios.get('http://localhost:3000/slides').then(data => {
                slideElement.classList.add('fade');
                slideElement.src = data.data[0]["slide_" + currentSlideNumber];
            });
            currentSlideCount.innerHTML = `0${currentSlideNumber}`;
            slideElement.classList.remove('fade');
        } 
    });
    prevSlideButton.addEventListener('click', () => {
        if (currentSlideNumber != 1) {
            currentSlideNumber--;
            axios.get('http://localhost:3000/slides').then(data => {
                slideElement.classList.add('fade');
                slideElement.src = data.data[0]["slide_" + currentSlideNumber];
            });
            currentSlideCount.innerHTML = `0${currentSlideNumber}`;
            slideElement.classList.remove('fade');
        }
    });

    // Slides navigation

    const dots = Array.from(document.querySelectorAll('.dot'));
    dots[0].classList.add('active');
    dots.forEach(item => {
        item.addEventListener('click', (event) => {
            dots.forEach(item => {
                item.classList.remove('active');
            });
            const index = dots.indexOf(event.target) + 1;
            axios.get('http://localhost:3000/slides').then(data => {
                slideElement.classList.add('fade');
                slideElement.src = data.data[0]["slide_" + index];
            });
            currentSlideCount.innerHTML = `0${index}`;
            slideElement.classList.remove('fade');
            currentSlideNumber = index;
            event.target.classList.add('active');
        });
    });
}

export default slider;