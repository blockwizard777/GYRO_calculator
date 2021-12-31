import * as React from 'react';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import './css/stake.css'

const Title = styled.div`
  color:${({ theme }) => theme.greyText};
  font-size: 11px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
`
const Value = styled.div`
  color:${({ theme }) => theme.text};
  font-size: 24px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
`
const Section = styled(Grid)`
  background: ${({ theme }) => theme.section};
  padding: 16px;
  border-radius: 6px;
  padding-bottom: 20px;
`
const StackSection = styled(Stack)`
  background: ${({ theme }) => theme.section};
  border-radius: 6px;
  box-shadow: 0px 20px 40px rgba(57, 57, 57, 0.03);
`
const TabSection = styled(Stack)`
  background: ${({ theme }) => theme.tabSection};
  padding : 4px;
  border-radius: 6px;
  width: 100%;
`
const TabButton = styled(Button)`
  color:${({ theme }) => theme.greyText};
  font-size: 16px;
  font-family: "Montserrat";
  font-weight: bold;
  border: 0;
  border-radius: 6px;
  padding: 0px;
  height: 40px;
  width: 100%;
  text-transform: none;
`;

const TabActiveButton = styled(Button)`
  color:${({ theme }) => theme.colorText};
  background: ${({ theme }) => theme.activeButton};
  font-size: 16px;
  font-family: "Montserrat";
  font-weight: bold;
  border: 0;
  border-radius: 4px;
  padding: 0px;
  height: 50px;
  width: 100%;
  text-transform: none;
`
const Hr = styled.hr`
  background: linear-gradient(108.61deg, #2102CA 5.35%, #9A4ED7 92.18%);
  margin-top: 22px!important;
  border: 0;
  height: 1px;
  width: 100%;
  font-size: 14px;
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
  font-family: "Montserrat";
  line-height: 20px;
  width: 70px;
  margin-right: 24px!important;
`
const StatusStake = styled(Stack)`
  width: 100%;
  div {
    font-size: 14px;
    &:first-child {
      padding-left: 30px;
      color: #9A9A9D;
    }
    &:nth-child(2) {
      padding-right: 30px;
      font-weight: 600;
      color: ${({theme}) => theme.greyText};
    }
  }
`

const ApproveButton = styled(Button)`
  background: linear-gradient(108.61deg, #2102CA 5.35%, #9A4ED7 92.18%);
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.05), 0px 16px 50px rgba(102, 45, 145, 0.09);
  border-radius: 4px;
  width: 100%;
  height: 50px;
  color: #EBEBEB;
  font-weight: 600;
  font-size: 16px;
  font-family: "Montserrat";
  text-transform: none;
  margin-top: 28px!important;
`

export default function Stake() {
  return (
    <>
      <Stack
        direction="row"
        spacing={{xs:1, sm:2}}
        justifyContent="space-between"
        alignItems="center"
        mt={3}
      >
        <Section item xs={6}>
          <Title>APY</Title>
          <Value>9,300%</Value>
        </Section>
        <Section item xs={6}>
          <Title>Time until rebase</Title>
          <Value>5h 57m</Value>
        </Section>
      </Stack>

      <StackSection
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        p={3}
        mt={3}
      >
        <TabSection
          direction="row"
          spacing={{xs:1, sm:2}}
          justifyContent="space-between"
          alignItems="center"
        >
          <TabActiveButton>Stake</TabActiveButton>
          <TabButton>Unstake</TabButton>
        </TabSection>

        <Hr/>

        <TabSection
          direction="row"
          spacing={{xs:1, sm:2}}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid pl={3} pt={2} pb={2}>
            <div className="inputStake">0</div>
            <span className="inputStakeTitle">Balance 0</span>
          </Grid>
          <GetValueButton>MAX</GetValueButton>
        </TabSection>

        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          width= "100%"
          style={{marginTop: '24px'}}
        >
          <StatusStake
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <div>Balance</div>
            <div>0.0 GYRO</div>
          </StatusStake>
          <StatusStake
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <div>Staked</div>
            <div>1.1 sGYRO</div>
          </StatusStake>
          <StatusStake
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <div>Next reward amount</div>
            <div>0.01 sGYRO</div>
          </StatusStake>
          <StatusStake
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <div>Next rebase yield  </div>
            <div>0.6219%</div>
          </StatusStake>
          <StatusStake
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <div>ROI (5-day rate)</div>
            <div>9.7123%</div>
          </StatusStake>
        </Stack>

        <ApproveButton>Approve</ApproveButton>
      </StackSection>
    </>
  );
}