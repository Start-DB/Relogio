
export interface Time {
    hour: number;
    minutes: number;
    seconds: number;
}


export function getCurrentTime(): Time {
    const today = new Date();

    return {
        hour: today.getHours(),
        minutes: today.getMinutes(),
        seconds: today.getSeconds(),
    };
}
