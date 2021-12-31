import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import { func, string, number } from 'prop-types';
import '../css/calculator.css';


const StackSection = styled(Stack)`
    background: ${({ theme }) => theme.section};
    border-radius: 6px;
    box-shadow: 0px 20px 40px rgb(57 57 57 / 3%);
`
const GetValueButton = styled(Button)`
    background: ${({ theme }) => theme.getButton};
    color: #E0289D;
    border: solid 2px transparent;
    background-image: linear-gradient(90deg, #FF2680, #932CE3);;
    background-origin: border-box;
    box-shadow: 2px 1000px ${({ theme }) => theme.getButton} inset;
    border-radius: 6px;
    font-weight: 600;
    font-size: 16px;
    font-family: "Montserrat";
    line-height: 20px;
    width: 120px;
`
const Input = styled.input`
    width: 80%;
    background: ${({ theme }) => theme.input};
    color: ${({ theme }) => theme.text};
    font-weight: 600;
    font-size: 20px;
    border: 1px solid ${({ theme }) => theme.inputBorder};
    border-radius: 8px;
    padding: 5px;
    padding-left: 24px;
    margin-right: 16px;
`
const InputGroup = ({button, value, title, handleButton, handleInput, name}) => {
    return (
        <>
            <StackSection
                direction="column"                
                justifyContent="center"
                alignItems="left"
                spacing = {1}
                mt={3}
                p={1}
            >
                <span className='inputTitle'>{title}</span>
                <Stack
                    direction="row"                
                    justifyContent="space-between"
                    alignItems="center"
                    width="100%"
                >
                    <Input type="number" value={value} placeholder='Amount' name={name}  onChange={handleInput}/>
                    <GetValueButton onClick={handleButton}>{button}</GetValueButton>
                </Stack>
            </StackSection>
        </>
    );
}

InputGroup.propTypes = {
    button: string.isRequired,
    value: number.isRequired,
    title: string.isRequired,
    handleButton: func.isRequired,
    handleInput: func.isRequired,
    name: string.isRequired
}

export default InputGroup;