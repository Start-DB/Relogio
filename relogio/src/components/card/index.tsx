import { Container, Number } from "./styles";

interface cardProps{
    number: number;
}

export function Card({number}: cardProps){
    return(
        <Container>
            <Number>{number}</Number>
        </Container>
    );
}