export const showCurrentHour = (getCurrentHour) => {
    const date = new Date;
    const hour = date.getHours();
    getCurrentHour.textContent = `Agora são ${hour}h`

    return hour
}