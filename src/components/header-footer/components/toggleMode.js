import React from 'react'
import { func, string } from 'prop-types';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import { ReactComponent as DarkIcon } from './icons/dark_sun.svg';
import { ReactComponent as LightIcon } from './icons/light_sun.svg';

const ToggleContainer = styled(Button)`
  background: ${({ theme }) => theme.section};
  color:${({ theme }) => theme.greyText};
  border: 0;
  border-radius: 6px;
  padding: 0px;
  min-width: 46px;
  height: 46px;
  svg {
    height: auto;
    width: 2.5rem;
    transition: all 0.3s linear;
    
    // sun icon
    &:first-child {
      width: 24px;
    }
  }
  box-shadow: 0px 20px 40px rgb(57 57 57 / 10%);
`;

const Toggle = ({ theme, toggleTheme }) => {

  return (
    <ToggleContainer onClick={toggleTheme}>
        {theme == 'dark' ? <LightIcon /> : <DarkIcon /> }
    </ToggleContainer>
  );

};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle;