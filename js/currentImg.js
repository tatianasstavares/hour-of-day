const img = document.querySelector('img');

export const showCurrentImg = (currentHour) => {
    if (currentHour >= 6 && currentHour < 12) {
        img.src = 'img/day.jpg'
        document.body.style.background = '#ffeb3b'
    } else if (currentHour >= 12 && currentHour <= 18) {
        img.src = 'img/afternoon.jpg'
        document.body.style.background = '#ffe0b2';
    } else {
        img.src = 'img/night.jpg'
        document.body.style.background = '#9e9e9e'
    }     
}
