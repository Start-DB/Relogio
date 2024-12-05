export function formatTime(time: number): string {
    const timeInString = String(time);

    const isValid = timeInString.length === 2;

    if (isValid) return timeInString;

    const newTime = timeInString.padStart(2, '0');

    return newTime;
}
