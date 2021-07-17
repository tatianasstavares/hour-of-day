
export const showCurrentImg = (img) => {

    const date = new Date;
    const currentHour = date.getHours();
    // const currentHour = 8
    // console.log(currentHour);

    if (currentHour >= 6 && currentHour < 12) {
        img.src = 'img/day.jpg'
        document.body.style.background = '#ffeb3b'
    } 
    
    if (currentHour >= 12 && currentHour <= 18) {
        img.src = 'img/afternoon.jpg'
        document.body.style.background = '#ffe0b2';
    } else {
        img.src = 'img/night.jpg'
        document.body.style.background = '#9e9e9e'
    }     
}
