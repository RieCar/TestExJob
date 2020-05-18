import React from 'react'
import '../../app/layout/index.css';
import { Header } from '../Header';
import { NavBar } from '../nav/NavBar';
export default function HomePage() {
    return (
        <div className="home">
              <Header />
              <NavBar/>
        </div>
    )
}
