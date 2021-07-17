export const showCurrentHour = (currentHourH2) => {
    const date = new Date;
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const currentHour = `Agora são ${hour}: ${minutes}: ${seconds}`
    currentHourH2.textContent = currentHour;
}