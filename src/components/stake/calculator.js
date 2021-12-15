import * as React from 'react';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import './css/calculator.css';
import InputGroup from './components/inputGroup';
import Slider from './components/slider';

const Title = styled.div`
    margin-top: 20px;
    margin-left: 15px;
    h3{
        margin : 0px;
    }
    span {
        font-weight: 500;
        font-size: 11px;
        color:#9A9A9D;
    }
`
const Hr = styled.hr`
    background: linear-gradient(90deg, #FF2680 4.22%, #932CE3 93.12%);
    margin-top: 16px;
    border: 0;
    height: 1px;
    width: 100%;
    font-size: 14px;
`
const VericalHR = styled.div`
    border-left: 1px solid #9A9A9D;
    height: 36px;
    width: 1px;
`

const StackSection = styled(Stack)`
    background: ${({ theme }) => theme.section};
    border-radius: 6px;
    box-shadow: 0px 20px 40px rgb(57 57 57 / 3%);
`
const Section = styled(Grid)`
    margin-left: 0px!important;
    span{
        font-weight: 500;
        font-size: 11px;
        color: #9A9A9D;
    }
    div{
        font-weight: 600;
        font-size: 24px;
        color: ${({ theme }) => theme.text}; 
    }
`
const GetValueButton = styled(Button)`
    background: ${({ theme }) => theme.getButton};
    color: ${({ theme }) => theme.getButtonColor};
    border: solid 2px transparent;
    background-image: ${({ theme }) => theme.gradient};
    background-origin: border-box;
    box-shadow: 2px 1000px ${({ theme }) => theme.getButton} inset;
    border-radius: 6px;
    font-weight: 600;
    font-size: 16px;
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

const StatusStake = styled(Stack)`
  width: 100%;
  div {
    font-size: 14px;
    &:first-child {
      color: #9A9A9D;
    }
    &:nth-child(2) {
      font-weight: 600;
      color: ${({theme}) => theme.greyText};
    }
  }
`

export default function Calculator() {
    return (
        <>
            <Title>
                <h3>Calculator</h3>
                <span>Estimate your returns</span>
            </Title>

            <Hr/>

            <StackSection
                direction="row"
                spacing={{xs:1, sm:2}}
                justifyContent="space-between"
                alignItems="center"
                mt={3}
                p={3}
            >
                <Section item xs={6}>
                    <span>GYRO Price</span>
                    <div>$274.16</div>
                </Section>
                <Section item xs={1}>
                    <VericalHR/>
                </Section>
                <Section item xs={5}>
                    <span>Current APY</span>
                    <div>424,094.2%</div>
                </Section>
            </StackSection>

            <InputGroup
                value={0}
                button='Max'
                title='sGYRO Balance: 15'
            />

            <InputGroup
                value={0}
                button='Current'
                title='APY (%)'
            />

            <InputGroup
                value={0}
                button='Current'
                title='GYRO price at purchase ($)'
            />

            <InputGroup
                value={0}
                button='Current'
                title='Projected GYRO market price ($)'
            />

            <Slider/>

            <StackSection
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                width= "100%"
                mt={3}
                p={3}
            >
                <StatusStake
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <div>Your Initial investment</div>
                    <div>$0</div>
                </StatusStake>
                <StatusStake
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <div>Current value</div>
                    <div>$0</div>
                </StatusStake>
                <StatusStake
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <div>GYRO rewards estimate</div>
                    <div>0 GYRO</div>
                </StatusStake>
                <StatusStake
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <div>Projected return</div>
                    <div>$0</div>
                </StatusStake>
            </StackSection>
        </>
    );
}