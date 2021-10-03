import React, { useState } from 'react';
import customer1 from './images/customer-img-1.jpg';
import customer2 from './images/customer-img-2.jpg';
import customer3 from './images/customer-img-3.jpg';
import team1 from './images/team-member-1.jpg';
import team2 from './images/team-member-2.jpg';
import team3 from './images/team-member-3.jpg';
import formEmail from './images/form-img.png';
import './App.css';

function App() {
    const [isOpen1, setisOpen1] = useState(false);
    const [isOpen2, setisOpen2] = useState(false);
    const [isOpen3, setisOpen3] = useState(false);

    return (
        <div className='root'>
            {/* ================= */}
            <div className='section-hero' id='home'>
                <div className='nav-content'>
                    <a href='#home' className='nav-link'>
                        Design
                    </a>
                    <a href='#customers' className='nav-link'>
                        Customers
                    </a>
                    <a href='#team' className='nav-link'>
                        Team
                    </a>
                    <a href='#contact' className='nav-link'>
                        Contact
                    </a>
                </div>

                <div className='animation-float' />
                <div className='header'>NOSEY CAT</div>
                <div className='logo'>
                    <i class='fas fa-cat'></i>
                </div>
                <h1 className='section-hero-content'>
                    THE FINEST SERVICE TO GET TO MAKE SURE THAT THE DESIGN OF
                    YOUR PRODUCT LOOKS AMAZING.
                </h1>
            </div>
            {/* ================= */}
            <div className='section-customers' id='customers'>
                <h1 className='customer-title'>CUSTOMERS</h1>

                <div className='customer-container'>
                    {/* Customer 1 */}
                    <div className='customer-box'>
                        <i class='fas fa-quote-left'></i>
                        <img
                            className='customer-img'
                            src={customer1}
                            alt='c1'
                        />
                        <span>Jane Lee</span>
                        <div className='stars'>
                            <i class='fas fa-star'></i>
                            <i class='fas fa-star'></i>
                            <i class='fas fa-star'></i>
                            <i class='fas fa-star'></i>
                            <i class='fas fa-star-half-alt'></i>
                        </div>
                        <p className='customer-comment'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Doloribus perferendis a quibusdam enim nostrum
                            cum, commodi illo maiores. Architecto, corrupti!
                        </p>
                    </div>
                    {/* Customer 2 */}
                    <div className='customer-box'>
                        <i class='fas fa-quote-left'></i>
                        <img
                            className='customer-img'
                            src={customer2}
                            alt='c2'
                        />
                        <span>Jhon Doe</span>
                        <div className='stars'>
                            <i class='fas fa-star'></i>
                            <i class='fas fa-star'></i>
                            <i class='fas fa-star'></i>
                            <i class='fas fa-star'></i>
                            <i class='fas fa-star-half-alt'></i>
                        </div>
                        <p className='customer-comment'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Doloribus perferendis a quibusdam enim nostrum
                            cum, commodi illo maiores. Architecto, corrupti!
                        </p>
                    </div>
                    {/* Customer 3 */}
                    <div className='customer-box'>
                        <i class='fas fa-quote-left'></i>
                        <img
                            className='customer-img'
                            src={customer3}
                            alt='c3'
                        />
                        <span>Sarah Smith</span>
                        <div className='stars'>
                            <i class='fas fa-star'></i>
                            <i class='fas fa-star'></i>
                            <i class='fas fa-star'></i>
                            <i class='fas fa-star'></i>
                            <i class='fas fa-star'></i>
                        </div>
                        <p className='customer-comment'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Doloribus perferendis a quibusdam enim nostrum
                            cum, commodi illo maiores. Architecto, corrupti!
                        </p>
                    </div>
                </div>
            </div>
            {/* ================= */}
            <div className='section-team' id='team'>
                <h1 className='team-title'>TEAM</h1>
                <div className='team-contaner'>
                    {/* team 1 */}
                    <div className='team-member-box'>
                        <div className='team-image-contaner'>
                            <img className='team-image' src={team1} alt='t1' />
                        </div>
                        <h3 className='team-name'>
                            Nick Smiths <span>(Designer)</span>
                        </h3>
                        <div className='skills'>
                            <span>Photoshop</span>
                            <span>Figma</span>
                            <span>HTML5</span>
                            <span>CSS3</span>
                            <span>JavaScript</span>
                        </div>

                        <div className='btn-team'>Projects</div>
                        <div
                            className='detail-button'
                            onClick={() => setisOpen1(!isOpen1)}>
                            <div
                                className={`detail-button-line ${
                                    isOpen1 ? 'rotate' : ''
                                }`}></div>
                        </div>
                        <div
                            className={`detail-content ${
                                isOpen1 ? 'show-details' : ''
                            }`}>
                            <h1 className='detail-content-title'>About Me</h1>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Voluptatibus quaerat quibusdam
                                labore commodi, provident recusandae assumenda
                                molestiae eos, eaque doloribus est. Odit facilis
                                suscipit modi blanditiis expedita minus iure!
                                Quas nemo doloribus maxime quidem consequuntur
                                ipsam fugit ipsum, nostrum esse.
                            </p>
                        </div>
                    </div>
                    {/* team 2 */}
                    <div className='team-member-box'>
                        <div className='team-image-contaner'>
                            <img className='team-image' src={team2} alt='t2' />
                        </div>
                        <h3 className='team-name'>
                            Bob Brwon <span>(Designer)</span>
                        </h3>
                        <div className='skills'>
                            <span>React JS</span>
                            <span>Three JS</span>
                            <span>HTML5</span>
                            <span>CSS3</span>
                            <span>JavaScript</span>
                        </div>

                        <div className='btn-team'>Projects</div>
                        <div
                            className='detail-button'
                            onClick={() => setisOpen2(!isOpen2)}>
                            <div
                                className={`detail-button-line ${
                                    isOpen2 ? 'rotate' : ''
                                }`}></div>
                        </div>
                        <div
                            className={`detail-content ${
                                isOpen2 ? 'show-details' : ''
                            }`}>
                            <h1 className='detail-content-title'>About Me</h1>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Voluptatibus quaerat quibusdam
                                labore commodi, provident recusandae assumenda
                                molestiae eos, eaque doloribus est. Odit facilis
                                suscipit modi blanditiis expedita minus iure!
                                Quas nemo doloribus maxime quidem consequuntur
                                ipsam fugit ipsum, nostrum esse.
                            </p>
                        </div>
                    </div>
                    {/* team 3 */}
                    <div className='team-member-box'>
                        <div className='team-image-contaner'>
                            <img className='team-image' src={team3} alt='t3' />
                        </div>

                        <h3 className='team-name'>
                            Bard Hardz <span>(Developer)</span>
                        </h3>
                        <div className='skills'>
                            <span>Node JS</span>
                            <span>Mongo DB</span>
                            <span>HTML5</span>
                            <span>CSS3</span>
                            <span>JavaScript</span>
                        </div>

                        <div className='btn-team'>Projects</div>
                        <div
                            className='detail-button'
                            onClick={() => setisOpen3(!isOpen3)}>
                            <div
                                className={`detail-button-line ${
                                    isOpen3 ? 'rotate' : ''
                                }`}></div>
                        </div>
                        <div
                            className={`detail-content ${
                                isOpen3 ? 'show-details' : ''
                            }`}>
                            <h1 className='detail-content-title'>About Me</h1>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Voluptatibus quaerat quibusdam
                                labore commodi, provident recusandae assumenda
                                molestiae eos, eaque doloribus est. Odit facilis
                                suscipit modi blanditiis expedita minus iure!
                                Quas nemo doloribus maxime quidem consequuntur
                                ipsam fugit ipsum, nostrum esse.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section Contact */}
            <div className='section-contact' id='contact'>
                <h1 className='customer-title'>CONTACT</h1>

                <div className='contact-container'>
                    <div className='contact-image-container'>
                        <img src={formEmail} alt='formEmail' />
                    </div>
                    <div className='form'>
                        <input type='text' placeholder='Name' />
                        <input type='text' placeholder='Email' />
                        <textarea
                            className='text-area'
                            placeholder='Message'
                            name=''
                            id=''
                            cols='30'
                            rows='10'></textarea>
                        <button className='form-btn'>Send</button>
                    </div>
                </div>
            </div>
            <a href='#home' className='scroll-top'>
                <i class='fas fa-arrow-up'></i>
            </a>
        </div>
    );
}

export default App;
