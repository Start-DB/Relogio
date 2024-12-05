import { useEffect, useState } from "react";
import { Card } from "../../components/card";
import { Container } from "./style";
import { getCurrentTime } from "../../functions/get-current-time";

interface Time {
    hour: number;
    minutes: number;
    seconds: number;
}

export function Home() {
   
    const [time, setTime] = useState<Time>({ hour: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            const currentTime = getCurrentTime();
            setTime(currentTime);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Container>
            <Card number={time.hour} />
            <Card number={time.minutes} />
            <Card number={time.seconds} />
        </Container>
    );
}
