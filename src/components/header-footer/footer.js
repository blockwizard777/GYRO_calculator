import { useState, useEffect } from "react";
import { func, string } from 'prop-types';
import styled from 'styled-components';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import ToggleMode from './components/toggleMode';
import Web3 from "web3";
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import Fortmatic from 'fortmatic';
import sGYROToken from '../../contract/sGYRO.json'


const Footer = ({ theme, toggleTheme, setGyroBalance }) => {

    // Web3modal instance
    const [web3, setWeb3] = useState(0);
    const [web3Modal, setWeb3Modal] = useState(null);
    const [accounts, setAccounts] = useState([]);
    const [tokenInstance, setTokenInstance] = useState(null);
    const [gyroToken, setGyroToken] = useState(0);
    
    // Chosen wallet provider given by the dialog window
    let [provider, setProvider] = useState(null);
    // Address of the selected account

    /**
       @ Web3
       @ Connect Wallet
       @ Get Wallet address
       @ Get Balance of Wallet
    */
    
    const init = async () => {
        
        console.log("Initializing example");
        console.log("WalletConnectProvider is", WalletConnectProvider);
        console.log("Fortmatic is", Fortmatic);
        console.log("window.web3 is", window.web3, "window.ethereum is", window.ethereum);

        const providerOptions = {
          walletconnect: {
            package: WalletConnectProvider,
            options: {
              rpc: {
                56: 'https://bsc-dataseed.binance.org/'
              },
              network:'binance'
            }
          },
        };
      
        let web3_Modal = new Web3Modal({
          cacheProvider: false, // optional
          providerOptions, // required
          disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
        });
  
        await setWeb3Modal(web3_Modal);
        console.log("Web3Modal instance is", web3Modal);
        
    }
    
    async function fetchAccountData() {
  
    }
      
    async function refreshAccountData() {

        // If any current data is displayed when
        // the user is switching acounts in the wallet
        // immediate hide this data
        // Disable button while UI is loading.
        // fetchAccountData() will take a while as it communicates
        // with Ethereum node via JSON-RPC and loads chain data
        // over an API call.
        await fetchAccountData(provider);
    }
  
    async function onConnect() {

        console.log("Opening a dialog", web3Modal);
        try {
            provider = await web3Modal.connect();
        } catch(e) {
            console.log("Could not get a wallet connection", e);
            return;
        }
        console.log(provider);
        setProvider(provider);
        console.log(provider);
        console.log('provider accounts changed')
        // Subscribe to accounts change
        provider.on("accountsChanged", (accounts) => {
            fetchAccountData();
        });
        console.log('provider chain changed')
        // Subscribe to chainId change
        provider.on("chainChanged", (chainId) => {
            fetchAccountData();
        });
        console.log('provider network changed')
        // Subscribe to networkId change
        provider.on("networkChanged", (networkId) => {
            fetchAccountData();
        });
        
        await refreshAccountData();
    }
  
    async function onDisconnect() {
  
        console.log("Killing the wallet connection", provider);
      
        // TODO: Which providers have close method?
        if(provider.close) {
          await provider.close();
          // If the cached provider is not cleared,
          // WalletConnect will default to the existing session
          // and does not allow to re-scan the QR code with a new wallet.
          // Depending on your use case you may want or want not his behavir.
          await web3Modal.clearCachedProvider();
          setProvider(null);
        }
    }

    useEffect(()=>{
        init()
    },[])

    useEffect(()=>{
        onConnect()
    },[web3Modal])

    useEffect(()=>{
        // Get a Web3 instance for the wallet
        console.log(provider)
        const WEB3 = new Web3(provider);
        setWeb3(WEB3);
    },[provider])

    useEffect(()=>{
        console.log(web3)
        if (web3){
            const tokenInstance_temp = new web3.eth.Contract(
                sGYROToken,
                '0xdc93eb0eb1bf2ac6da14b3ee54a8d7fbb15bb058'
            );
            setTokenInstance(tokenInstance_temp)
        }
    },[web3])

    async function accountsData() {
        if (web3){
            try{
                const accounts_temp = await web3.eth.getAccounts();
                setAccounts(accounts_temp)      
                console.log(accounts_temp)
            } catch (e) {
                console.log(e)
            }
            
        }
    }
    useEffect(()=>{
        console.log(web3)
        accountsData()
    },[web3])


    async function getsGyroBalance() {

        if (tokenInstance && accounts){
            try {
                let userTokens = await tokenInstance.methods.balanceOf(accounts[0]).call();
                setGyroToken(userTokens)
            } catch (e) {

            }
        }
    }

    useEffect(()=>{
        console.log(tokenInstance)
        console.log(accounts)
        getsGyroBalance()
    },[accounts, tokenInstance])

    useEffect(()=>{
        console.log(gyroToken/10**9)
        if(gyroToken)
            setGyroBalance(gyroToken/10**9)
    },[gyroToken])

    
    return (
        <>
            <Stack
                direction='row'
                justifyContent="space-between"
                alignItems="flex-end"
                mt={5}
                pb={3}
            >
                <ConnectWallet onClick={() => { onConnect() }}>
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

Footer.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
    setGyroBalance : func.isRequired
}
  
export default Footer;