const images = document.querySelectorAll('.slider-img');
const controlls = document.querySelectorAll('.controlls');
let imageIndex = 0;

function show(index) {
    images.forEach((image) => {
        image.classList.remove('active');
    });
    images[index].classList.add('active');
    imageIndex = index;
}

controlls.forEach((controll) => {
    controll.addEventListener('click', (event) => {
        const target = event.target;
        if (target.classList.contains('prev')) {
            let index = imageIndex - 1;
            if (index < 0) {
                index = images.length - 1;
            }
            show(index);
        } else if (target.classList.contains('next')) {
            let index = imageIndex + 1;
            if (index >= images.length) {
                index = 0;
            }
            show(index);
        }
    });
});
