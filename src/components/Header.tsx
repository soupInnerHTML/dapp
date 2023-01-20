/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useMemo, useState} from 'react';
import {Contract, ethers, Signer} from "ethers";
import getContract from "../eth/getContract";
import metamaskIcon from '../assets/images/metamask_logo.svg'
import copyIcon from '../assets/images/copy.svg'
import trunc from "../utils/trunc";
import copyToClipboard from "../utils/copyToClipboard";
import Logo from "./Logo";

const {ethereum} = window

const Header: React.FC = () => {
  const [wallet, setWallet] = useState<string | null>(null)
  const [contract, setContract] = useState<Contract | null>(null)
  const [signer, setSigner] = useState<Signer | null>(null)

  useEffect(() => {
    if(wallet) {
      ethereum.on('accountsChanged', (accounts) => setWallet(accounts[0]));
      ethereum.on('chainChanged', () => alert('network changed'))
    }

    return () => ethereum.removeAllListeners()
  }, [wallet])

  async function connectWallet() {
    if(ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      setSigner(provider.getSigner());
      const accounts = await provider.send('eth_requestAccounts', [])
      setContract(getContract(provider))
      setWallet(accounts[0])
    }
    else {
      alert('Please install Metamask')
    }
  }
  const parsedWalletName = useMemo(() => wallet && trunc(wallet, 14), [wallet]);
  return (
    <header className={'header'}>
      <Logo className={'header__logo'}/>
      {wallet ? <button onClick={() => copyToClipboard(wallet)} className={'header__wallet'}>
        <img src={metamaskIcon} alt={''}/>
        <p>{parsedWalletName}</p>
        <img src={copyIcon} alt={''}/>
      </button> : <button className={'header__connect-wallet'} onClick={connectWallet}>Connect wallet</button>}
    </header>
  );
};

export default Header;
