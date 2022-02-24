import './App.css';
import {   Routes , Route } from 'react-router-dom';
import routes from './pages/index'

import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
    PhantomWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
require('@solana/wallet-adapter-react-ui/styles.css');



function App() {
 // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
 const network = WalletAdapterNetwork.Devnet;

 // You can also provide a custom RPC endpoint.
 const endpoint = useMemo(() => clusterApiUrl(network), [network]);

 // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
 // Only the wallets you configure here will be compiled into your application, and only the dependencies
 // of wallets that your users connect to will be loaded.
 const wallets = useMemo(
     () => [
         new PhantomWalletAdapter()
     ],
     [network]
 );


    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
        <Routes >
            {
            routes.map((data,index) => (
                <Route onUpdate={() => window.scrollTo(0, 0)} exact={true} path={data.path} element={data.component} key={index} />
            ))
            }
      </Routes>
      </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
}

export default App;
