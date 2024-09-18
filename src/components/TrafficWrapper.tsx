
import { Signal, TrafficWrapper } from "@/styles";
import React from "react";


type InputProps = {
  light: 'red' | 'yellow' | 'green' | '';
};

const Traffic = ({ light }: InputProps) => {
 

  return (
    <TrafficWrapper>
        <Signal $inputColor={light === 'red' ? light :""}></Signal>
        <Signal $inputColor={light === 'yellow' ? light :""}></Signal>
        <Signal $inputColor={light === 'green'? light :''}></Signal>
    </TrafficWrapper>
  );
};

export default Traffic;
