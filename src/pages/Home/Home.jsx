import React from 'react';
import './Home.css';
import Button from '../../components/Button/Button';

const Home = () => {
    return (
        <div className="home-container">
            <h1 className="title">Book of Mormon Translations</h1>
            <div className="pdf-container">
                <div className="pdf-item">
                    <h3 className="pdf-title">Simplified Version</h3>
                    <p className="pdf-description">A fresh take on the scriptures, with simplified language for easier reading!</p>
                    <embed src="/bom-simplified.pdf" type="application/pdf" className="pdf-viewer" />
                    <a href="/bom-simplified.pdf" download className="download-button">Download Simplified PDF</a>
                </div>
                <div className="pdf-item">
                    <h3 className="pdf-title">Western Version</h3>
                    <p className="pdf-description">Ride through the scriptures with a western twist. Yeehaw!</p>
                    <embed src="/bom-western.pdf" type="application/pdf" className="pdf-viewer" />
                    <a href="/bom-western.pdf" download className="download-button">Download Western PDF</a>
                </div>
                <div className="pdf-item">
                    <h3 className="pdf-title">Southern Version</h3>
                    <p className="pdf-description">Bless your heart, this version is as sweet as Southern hospitality!</p>
                    <embed src="/bom-southern.pdf" type="application/pdf" className="pdf-viewer" />
                    <a href="/bom-southern.pdf" download className="download-button">Download Southern PDF</a>
                </div>
            </div>
            {/**<Button text="About Us" to="/about" />*/}
        </div>
    );
};

export default Home;
