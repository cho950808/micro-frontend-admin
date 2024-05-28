import React from 'react';
import { container, wrapper } from "./index.css";

const Footer = () => {
    return (
        <footer className={`${container}`}>
            <div className={`${wrapper}`}>
               <h2>micro-Frontend-Admin Footer</h2>
            </div>
        </footer>
    );
};

export default Footer;