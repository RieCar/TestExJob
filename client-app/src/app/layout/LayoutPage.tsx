import React from 'react';
import "../layout/style/layoutpage.scss";

// Components
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import { NavBar } from '../../Components/nav/NavBar';


interface Props {
    children: any
}

export const PageLayout = (props: Props) => (
    <div className={'page'}>
        <div className={'top-bar'}>
          <Header />
          <NavBar/>
        </div>
        <main className={'main'} role="main">
            {props.children}
        </main>
        <Footer />
    </div>
)