const windowWidth = 1200;
const windowHeight = 1200;


function init() {

    for (let i = 0; i < 1000; i++) {
        const toLeft = Math.round(Math.random() * windowWidth);
        const toTop = Math.round(Math.random() * windowHeight / 2);

        const stars = document.querySelector(".star_space");
        const starDiv = document.createElement('div');
        starDiv.classList.add('star');
        stars.appendChild(starDiv);
        // stars.appendTo('.star_space');


    }
}
init();
