import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
    return (
        <div className="header">
            <nav>
                <ul>
                    <li>
                        <Link to="/clients">Clients</Link>
                    </li>
                    <li>
                        <Link to="/produits">Produits</Link>
                    </li>
                    <li>
                        <Link to="/factures">Factures</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;