import React from 'react';

// Components
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import { NavBar } from '../../Components/nav/NavBar';


interface Props {
    children: any
}

export const PageLayout = (props: Props) => (
    <div className={'page'}>
        <div className={'top-bar'}></div>
          <Header />
          <NavBar/>
              
        <main className={'main'} role="main">
            {props.children}
        </main>
        <Footer />
    </div>
)