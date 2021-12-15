import * as React from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import ToggleMode from './components/toggleMode';


const FooterButton = styled(Button)`
  background: ${({ theme }) => theme.header};
  color:${({ theme }) => theme.greyText};
  font-size: 14px;
  font-family: "Montserrat";
  font-weight: bold;
  border: 0;
  border-radius: 6px;
  padding: 0px;
  min-width: 46px;
  height: 46px;
  box-shadow: 0px 20px 40px rgb(57 57 57 / 10%);
`;

const ConnectWallet = styled(Button)`
    background: ${({ theme }) => theme.header};
    color:${({ theme }) => theme.greyText};
    font-family: "Montserrat";
    font-size: 13px;
    font-weight: bold;
    border: 0;
    border-radius: 6px;
    height: 46px;
    padding: 0 20px;
    text-transform: none;
    box-shadow: 0px 20px 40px rgb(57 57 57 / 10%);
`;

const Footer = ({ theme, toggleTheme }) => {
    return (
        <>
            <Stack
                direction='row'
                justifyContent="space-between"
                alignItems="flex-end"
                mt={5}
                pb={3}
            >
                <ConnectWallet>
                    Connect to a wallet
                </ConnectWallet>
                <Stack
                    direction='row'
                    justifyContent="space-between"
                    alignItems="flex-end"
                    spacing={{xs:1, sm:2, md:3}}
                >
                    <FooterButton>EN</FooterButton>
                    <ToggleMode theme = {theme} toggleTheme = {toggleTheme} />
                    <FooterButton><MoreHoriz/></FooterButton>
                </Stack>
            </Stack>
        </>
    );
}

Footer.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}
  
export default Footer;