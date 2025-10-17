
export function calcTimeLeft(targetDate) {
    if (!targetDate) targetDate = new Date().setHours(23, 59, 59, 999)
    const oneHoureMs = 60 * 60 * 1000
    const oneMinuteMs = 60 * 1000
    const oneSecondMs = 1000

    const timeLeft = targetDate - new Date().getTime()

    if (timeLeft > 0) {
        const hours = Math.trunc(timeLeft / oneHoureMs)
        const minutes = Math.trunc((timeLeft % oneHoureMs) / oneMinuteMs)
        const seconds = Math.trunc(((timeLeft % oneHoureMs) % oneMinuteMs) / oneSecondMs)
        return {hours, minutes, seconds}
    }else {
       return {hours : 0 , minutes: 0, seconds: 0}
    }

}