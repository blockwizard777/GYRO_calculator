import * as React from 'react';
import { func, string, number, element } from 'prop-types';
import styled from 'styled-components';
import Stack from '@mui/material/Stack';
import SliderUnstyled from '@mui/base/SliderUnstyled';

const StackSection = styled(Stack)`
  background: ${({ theme }) => theme.section};
  border-radius: 6px;
  h3{
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 20px;
  }
  box-shadow: 0px 20px 40px rgb(57 57 57 / 3%);
`
const StyledSlider = styled(SliderUnstyled)`
  color: #1976d2;
  height: 4px;
  width: 100%;
  padding: 13px 0;
  display: inline-block;
  position: relative;
  cursor: pointer;
  touch-action: none;
  -webkit-tap-highlight-color: transparent;
  opacity: 0.75;
  &:hover {
    opacity: 1;
  }

  & .MuiSlider-rail {
    display: block;
    position: absolute;
    width: 100%;
    height: 6px;
    border-radius: 6px;
    background-color: transparent;
    opacity: 0.38;
    border: 2px solid #cb96f4;
  }

  & .MuiSlider-track {
    display: block;
    position: absolute;
    height: 6px;
    background: linear-gradient(90deg, #FF2680 4.22%, #932CE3 93.12%);
    border-radius: 10px;
  }

  & .MuiSlider-thumb {
    position: absolute;
    width: 20px;
    height: 20px;
    margin-left: -6px;
    margin-top: -7px;
    box-sizing: border-box;
    border-radius: 50%;
    outline: 0;
    border: 2px solid #932CE3;
    background-color: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`


export default function CustomizedSlider() {
  return (
    
    <StackSection
      mt={3}
      pl={3}
      pr={3}
      pt={1}
      pb={3}
    >
      <h3>155 days</h3>
      <StyledSlider defaultValue={10} />
    </StackSection>
    
  );
}