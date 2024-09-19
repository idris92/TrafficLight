import styled from "styled-components";


const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'

}

const device={
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
}
export const Button = styled.button`
  display: flex;
  color: white;
  background: #008002;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #008002;
  border-radius: 3px;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background: white;
  align-items: center;
  justify-content: center;
  
`

export const TrafficBoard = styled.div`
width: 80%;
background: #2d2c2b;
min-height: 80vh;
height: 100%;
border: none;
border-radius: 4px;

@media  ${device.mobileS}{
    width: 100%;
  }
@media  ${device.tablet}{
    width: 80%;
  }

`

export const LargeHBox = styled.div<{ $inputColor?: string; $justifyContent?:string; $alignItems?:string;}>`
display: flex;
flex-direction: row;
width: 100%;
height: auto;
min-height: 30vh;
background: ${props => props.$inputColor || 'white'};
border: none;
border-radius: 4px;
justify-content: ${props => props.$justifyContent || 'left'};
align-items: ${props => props.$alignItems || 'left'};
`


export const SmallHBox = styled.div<{ $inputColor?: string; $flexDirection?:string; }>`
display: flex;
flex-direction: ${props => props.$flexDirection || 'row'};
justify-content: center;
align-items: center;
width: 100%;
height: auto;
min-height: 20vh;
background: ${props => props.$inputColor || '#2d2c2b'};
border: none;
border-radius: 2px;
`

export const SmallVBox = styled.div`
display: flex;
min-width: 20%;
height: auto;
background: #2d2c2b;
border: none;
border-radius: 2px;
justify-content: center;
align-items: center;
color: white;
border-left: 4px solid #fdff57;
border-right: 4px solid #fdff57;
@media  ${device.mobileS}{
    min-width: 30%;
  }
@media  ${device.tablet}{
    min-width: 20%;
  }
`

export const LargeVBox = styled.div`
min-width: 40%;
height: auto;
background: white;
@media ${device.mobileS}{
    min-width: 35%;
  }
@media  ${device.tablet}{
    min-width: 40%;
  }
`

export const TrafficWrapper = styled.div<{ $height?: string;}>`
display: flex;
flex-direction: column;
width: 80px;
height: 160px;
background: #ebbf33;
border: none;
border-radius: 4px;
justify-content: center;
align-items: center;
gap: 4px;
padding: 8px;
`

export const Signal = styled.div<{ $inputColor?: string; }>`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background: ${props => props.$inputColor == 'red'? '#fb0604' : props.$inputColor == 'green'? '#058304' : props.$inputColor === 'yellow'? '#fdff57': '#cd9a2d'};
`
