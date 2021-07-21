import {showCurrentHour} from './currentHour.js'
import {showCurrentImg} from './currentImg.js'


const currentHourP = document.querySelector('.show-hour');

const currentHour = showCurrentHour(currentHourP)

showCurrentImg(currentHour)
