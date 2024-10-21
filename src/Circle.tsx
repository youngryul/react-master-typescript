import styled from "styled-components"
import {useState} from "react";

interface ContainerProps {
    bgColor:string;
    borderColor:string;
}
interface CircleProps {
    bgColor:string;
    borderColor?:string;
    text?:string;
}

const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 200px;
    background-color: ${props => props.bgColor};
    border-radius:100px;
    border: 1px solid ${(props) => props.borderColor};
`;

function Circle({bgColor, borderColor, text="default text"}:CircleProps) {
    const [value, setValue] = useState<number|string>(0); // useState에서 타입스크립트 쓰는 방법(자주 사용하진 않음)
    setValue(2);
    return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>{text}</Container>;
}

export default Circle;
