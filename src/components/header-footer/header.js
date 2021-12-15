import * as React from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { ReactComponent as DarkIcon } from './components/icons/dark_logo.svg';
import { ReactComponent as LightIcon } from './components/icons/light_logo.svg';


const HeaderButton = styled(Button)`
    color:${({ theme }) => theme.text};
    font-size: 14px;
    font-family: "Montserrat";
    font-weight: bold;
    border: 0;
    border-radius: 6px;
    padding: 0px;
    height: 40px;
    text-transform: none;
`;

const HeaderActiveButton = styled(Button)`
    color: white;
    background: linear-gradient(108.61deg, #2102CA 5.35%, #9A4ED7 92.18%);
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.05), 0px 16px 50px rgba(102, 45, 145, 0.09);
    font-size: 14px;
    font-family: "Montserrat";
    font-weight: bold;
    border: 0;
    border-radius: 6px;
    padding: 0px;
    height: 40px;
    text-transform: none;
`

const LogButton = styled(Button)`
    padding: 0px;
    min-width: 24px;
    box-shadow: 0px 20px 40px rgba(57, 57, 57, 0.03);
`;

const MenuStack = styled(Stack)`
    background: ${({ theme }) => theme.header};
    color:${({ theme }) => theme.text};   
    padding : 4px;
    border-radius: 4px;
    box-shadow: 0px 20px 40px rgba(57, 57, 57, 0.03);
`;

const Header = ({ theme }) => {
    return (
        <>
            <Stack
                direction='row'
                justifyContent="space-between"
                alignItems="center"
                mt={3}
            >
                <LogButton>
                    {theme == 'dark' ? <DarkIcon /> : <LightIcon /> }
                </LogButton>

                <MenuStack
                    direction='row'
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={1}
                >
                    <HeaderButton>Dash</HeaderButton>
                    <HeaderActiveButton>Stake</HeaderActiveButton>
                    <HeaderButton>Bond</HeaderButton>
                </MenuStack>
            </Stack>
        </>
    );
}

Header.propTypes = {
    theme: string.isRequired
}
  
export default Header;