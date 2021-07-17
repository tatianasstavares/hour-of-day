export const showCurrentHour = (getCurrentHour) => {
    const date = new Date;
    const hour = date.getHours();
    // const minutes = date.getMinutes();
    // const seconds = date.getSeconds();
    const currentHourMinutes = `Agora são ${hour}h`
    getCurrentHour.textContent = currentHourMinutes;
}