import React from 'react';
import { useState } from 'react';
import './Portfolio.css';
import image1 from "../../assets/about - Copy.jpg";

const Portfolio = () => {
    const [toggleState, setToggleState] = useState(1);
    const [cardtoggle, setCardtoggle] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    const cardToggleTab = (index) => {
        setCardtoggle(index);
    }
    return (
        <section className="portfolio section" id="portfolio">
            <h2 className='section__title'>Portfolio</h2>
            <span className="section__subtitle">Most Recent Work</span>

            <div className="portfolio__container container">
                <div className="portfolio__tabs">
                    <div className={toggleState === 1
                        ? "portfolio__button portfolio__active button--flex"
                        : "portfolio__button button--flex"}
                        onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap portfolio__icon"></i>
                        All
                    </div>
                    <div className={toggleState === 2
                        ? "portfolio__button portfolio__active button--flex" : "portfolio__button button--flex"}
                        onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt portfolio__icon"></i>
                        Frontend
                    </div>
                    <div className={toggleState === 3
                        ? "portfolio__button portfolio__active button--flex" : "portfolio__button button--flex"}
                        onClick={() => toggleTab(3)}>
                        <i className="uil uil-briefcase-alt portfolio__icon"></i>
                        Backend
                    </div>
                </div>
                <div className="portfolio__sections">
                    <div className={toggleState === 1 ? "portfolio__content portfolio__content-active" : "portfolio__content"}>
                        <div className="portfolio__data">
                            <div className="container">
                                <div className="cards">
                                    {/* card 1 all */}
                                    <div className="card">
                                        <div class="flex justify-center items-center h-screen">
                                            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                                                <img class="w-full" src={image1} alt="Sunset in the mountains" />
                                                <div class="portfolio__card__content">
                                                    <div class="font-bold text-xl mb-2"><h3 className="portfolio__card__title">front end project 1</h3></div>
                                                    <p>
                                                        <span className='portfolio__card__button' onClick={() => cardToggleTab(1)}>View More <i
                                                            className="uil uil-arrow-right portfolio__card__button-icon"></i></span>
                                                    </p>
                                                    <div className={cardtoggle === 1 ? "portfolio__card__modal active-modal" : "portfolio__card__modal"}>
                                                        <div className="portfolio__card__modal-content">
                                                            <i onClick={() => cardToggleTab(0)} className="uil uil-times portfolio__card__modal-close"></i>
                                                            <h3 className="portfolio__card__modal-title">frontend project 1 all</h3>
                                                            <p className="portfolio__card__modal-description">
                                                                service with more than 3 years of experince. providing quality work to clients and comapanies.
                                                            </p>

                                                            <ul className="portfolio__card__modal-portfolio__card grid">
                                                                <li className="portfolio__card__modal-service">
                                                                    <i className="uil uil-check-circle portfolio__card__modal-icon"></i>
                                                                    <p className="portfolio__card__modal-info">I develop the user interface</p>
                                                                </li>
                                                                <li className="portfolio__card__modal-service">
                                                                    <i className="uil uil-check-circle portfolio__card__modal-icon"></i>
                                                                    <p className="portfolio__card__modal-info">webpage development</p>
                                                                </li>
                                                                <li className="portfolio__card__modal-service">
                                                                    <i className="uil uil-check-circle portfolio__card__modal-icon"></i>
                                                                    <p className="portfolio__card__modal-info">I create ux element interactions.</p>
                                                                </li>
                                                                <li className="portfolio__card__modal-service">
                                                                    <i className="uil uil-check-circle portfolio__card__modal-icon"></i>
                                                                    <p className="portfolio__card__modal-info">I positon your company brand.</p>
                                                                </li>
                                                                <li className="portfolio__card__modal-service">
                                                                    <i className="uil uil-check-circle portfolio__card__modal-icon"></i>
                                                                    <p className="portfolio__card__modal-info">design and mockups of products for companies</p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>



                                </div>

                            </div>


                        </div>



                    </div>

                    <div className={toggleState === 2 ? "portfolio__content portfolio__content-active" : "portfolio__content"}>
                        <div className="portfolio__data">


                            <div className="container">
                                <div className="cards">
                                    {/* card 1 */}
                                    <div className="card">
                                        <div class="flex justify-center items-center h-screen">
                                            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                                                <img class="w-full" src={image1} alt="Sunset in the mountains" />
                                                <div class="portfolio__card__content">
                                                    <div class="font-bold text-xl mb-2"><h3 className="portfolio__card__title">front end project 1</h3></div>
                                                    <p>
                                                        <span className='portfolio__card__button' onClick={() => cardToggleTab(2)}>View More <i
                                                            className="uil uil-arrow-right portfolio__card__button-icon"></i></span>
                                                    </p>
                                                    <div className={cardtoggle === 2 ? "portfolio__card__modal active-modal" : "portfolio__card__modal"}>
                                                        <div className="portfolio__card__modal-content">
                                                            <i onClick={() => cardToggleTab(0)} className="uil uil-times portfolio__card__modal-close"></i>
                                                            <h3 className="portfolio__card__modal-title">frontend project 1</h3>
                                                            <p className="portfolio__card__modal-description">
                                                                service with more than 3 years of experince. providing quality work to clients and comapanies.
                                                            </p>

                                                            <ul className="portfolio__card__modal-portfolio__card grid">
                                                                <li className="portfolio__card__modal-service">
                                                                    <i className="uil uil-check-circle portfolio__card__modal-icon"></i>
                                                                    <p className="portfolio__card__modal-info">I develop the user interface</p>
                                                                </li>
                                                                <li className="portfolio__card__modal-service">
                                                                    <i className="uil uil-check-circle portfolio__card__modal-icon"></i>
                                                                    <p className="portfolio__card__modal-info">webpage development</p>
                                                                </li>
                                                                <li className="portfolio__card__modal-service">
                                                                    <i className="uil uil-check-circle portfolio__card__modal-icon"></i>
                                                                    <p className="portfolio__card__modal-info">I create ux element interactions.</p>
                                                                </li>
                                                                <li className="portfolio__card__modal-service">
                                                                    <i className="uil uil-check-circle portfolio__card__modal-icon"></i>
                                                                    <p className="portfolio__card__modal-info">I positon your company brand.</p>
                                                                </li>
                                                                <li className="portfolio__card__modal-service">
                                                                    <i className="uil uil-check-circle portfolio__card__modal-icon"></i>
                                                                    <p className="portfolio__card__modal-info">design and mockups of products for companies</p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div class="flex justify-center items-center h-screen">
                                            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                                                <img class="w-full" src={image1} alt="Sunset in the mountains" />
                                                <div class="portfolio__card__content">
                                                    <div class="font-bold text-xl mb-2"><h3 className="portfolio__card__title">front end project 1</h3></div>
                                                    <p>
                                                        <span className='portfolio__card__button' onClick={() => cardToggleTab(2)}>View More <i
                                                            className="uil uil-arrow-right portfolio__card__button-icon"></i></span>
                                                    </p>
                                                    <div className={cardtoggle === 2 ? "portfolio__card__modal active-modal" : "portfolio__card__modal"}>
                                                        <div className="portfolio__card__modal-content">
                                                            <i onClick={() => cardToggleTab(0)} className="uil uil-times portfolio__card__modal-close"></i>
                                                            <h3 className="portfolio__card__modal-title">frontend project 1</h3>
                                                            <p className="portfolio__card__modal-description">
                                                                service with more than 3 years of experince. providing quality work to clients and comapanies.
                                                            </p>

                                                            <ul className="portfolio__card__modal-portfolio__card grid">
                                                                <li className="portfolio__card__modal-service">
                                                                    <i className="uil uil-check-circle portfolio__card__modal-icon"></i>
                                                                    <p className="portfolio__card__modal-info">I develop the user interface</p>
                                                                </li>
                                                                <li className="portfolio__card__modal-service">
                                                                    <i className="uil uil-check-circle portfolio__card__modal-icon"></i>
                                                                    <p className="portfolio__card__modal-info">webpage development</p>
                                                                </li>
                                                                <li className="portfolio__card__modal-service">
                                                                    <i className="uil uil-check-circle portfolio__card__modal-icon"></i>
                                                                    <p className="portfolio__card__modal-info">I create ux element interactions.</p>
                                                                </li>
                                                                <li className="portfolio__card__modal-service">
                                                                    <i className="uil uil-check-circle portfolio__card__modal-icon"></i>
                                                                    <p className="portfolio__card__modal-info">I positon your company brand.</p>
                                                                </li>
                                                                <li className="portfolio__card__modal-service">
                                                                    <i className="uil uil-check-circle portfolio__card__modal-icon"></i>
                                                                    <p className="portfolio__card__modal-info">design and mockups of products for companies</p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>



                                </div>


                            </div>
                        </div>

                    </div>
                    <div className={toggleState === 3 ? "portfolio__content portfolio__content-active" : "portfolio__content"}>
                        <div className="portfolio__data">
                            <div className="container">
                                <div className="cards">
                                    {/* card 1 */}
                                    <div className="card">
                                        <div class="flex justify-center items-center h-screen">
                                            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                                                <img class="w-full" src={image1} alt="Sunset in the mountains" />
                                                <div class="portfolio__card__content">
                                                    <div class="font-bold text-xl mb-2"><h3 className="portfolio__card__title">front end project 1</h3></div>
                                                    <p>
                                                        <span className='portfolio__card__button' onClick={() => cardToggleTab(2)}>View More <i
                                                            className="uil uil-arrow-right portfolio__card__button-icon"></i></span>
                                                    </p>
                                                    <div className={cardtoggle === 2 ? "portfolio__card__modal active-modal" : "portfolio__card__modal"}>
                                                        <div className="portfolio__card__modal-content">
                                                            <i onClick={() => cardToggleTab(0)} className="uil uil-times portfolio__card__modal-close"></i>
                                                            <h3 className="portfolio__card__modal-title">frontend project 1</h3>
                                                            <p className="portfolio__card__modal-description">
                                                                service with more than 3 years of experince. providing quality work to clients and comapanies.
                                                            </p>

                                                            <ul className="portfolio__card__modal-portfolio__card grid">
                                                                <li className="portfolio__card__modal-service">
                                                                    <i className="uil uil-check-circle portfolio__card__modal-icon"></i>
                                                                    <p className="portfolio__card__modal-info">I develop the user interface</p>
                                                                </li>
                                                                <li className="portfolio__card__modal-service">
                                                                    <i className="uil uil-check-circle portfolio__card__modal-icon"></i>
                                                                    <p className="portfolio__card__modal-info">webpage development</p>
                                                                </li>
                                                                <li className="portfolio__card__modal-service">
                                                                    <i className="uil uil-check-circle portfolio__card__modal-icon"></i>
                                                                    <p className="portfolio__card__modal-info">I create ux element interactions.</p>
                                                                </li>
                                                                <li className="portfolio__card__modal-service">
                                                                    <i className="uil uil-check-circle portfolio__card__modal-icon"></i>
                                                                    <p className="portfolio__card__modal-info">I positon your company brand.</p>
                                                                </li>
                                                                <li className="portfolio__card__modal-service">
                                                                    <i className="uil uil-check-circle portfolio__card__modal-icon"></i>
                                                                    <p className="portfolio__card__modal-info">design and mockups of products for companies</p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div class="flex justify-center items-center h-screen">
                                            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                                                <img class="w-full" src={image1} alt="Sunset in the mountains" />
                                                <div class="portfolio__card__content">
                                                    <div class="font-bold text-xl mb-2"><h3 className="portfolio__card__title">front end project 1</h3></div>
                                                    <p>
                                                        <span className='portfolio__card__button' onClick={() => cardToggleTab(2)}>View More <i
                                                            className="uil uil-arrow-right portfolio__card__button-icon"></i></span>
                                                    </p>
                                                    <div className={cardtoggle === 2 ? "portfolio__card__modal active-modal" : "portfolio__card__modal"}>
                                                        <div className="portfolio__card__modal-content">
                                                            <i onClick={() => cardToggleTab(0)} className="uil uil-times portfolio__card__modal-close"></i>
                                                            <h3 className="portfolio__card__modal-title">frontend project 1</h3>
                                                            <p className="portfolio__card__modal-description">
                                                                service with more than 3 years of experince. providing quality work to clients and comapanies.
                                                            </p>

                                                            <ul className="portfolio__card__modal-portfolio__card grid">
                                                                <li className="portfolio__card__modal-service">
                                                                    <i className="uil uil-check-circle portfolio__card__modal-icon"></i>
                                                                    <p className="portfolio__card__modal-info">I develop the user interface</p>
                                                                </li>
                                                                <li className="portfolio__card__modal-service">
                                                                    <i className="uil uil-check-circle portfolio__card__modal-icon"></i>
                                                                    <p className="portfolio__card__modal-info">webpage development</p>
                                                                </li>
                                                                <li className="portfolio__card__modal-service">
                                                                    <i className="uil uil-check-circle portfolio__card__modal-icon"></i>
                                                                    <p className="portfolio__card__modal-info">I create ux element interactions.</p>
                                                                </li>
                                                                <li className="portfolio__card__modal-service">
                                                                    <i className="uil uil-check-circle portfolio__card__modal-icon"></i>
                                                                    <p className="portfolio__card__modal-info">I positon your company brand.</p>
                                                                </li>
                                                                <li className="portfolio__card__modal-service">
                                                                    <i className="uil uil-check-circle portfolio__card__modal-icon"></i>
                                                                    <p className="portfolio__card__modal-info">design and mockups of products for companies</p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div class="flex justify-center items-center h-screen">
                                            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                                                <img class="w-full" src={image1} alt="Sunset in the mountains" />
                                                <div class="portfolio__card__content">
                                                    <div class="font-bold text-xl mb-2"><h3 className="portfolio__card__title">front end project 1</h3></div>
                                                    <p>
                                                        <span className='portfolio__card__button' onClick={() => cardToggleTab(2)}>View More <i
                                                            className="uil uil-arrow-right portfolio__card__button-icon"></i></span>
                                                    </p>
                                                    <div className={cardtoggle === 2 ? "portfolio__card__modal active-modal" : "portfolio__card__modal"}>
                                                        <div className="portfolio__card__modal-content">
                                                            <i onClick={() => cardToggleTab(0)} className="uil uil-times portfolio__card__modal-close"></i>
                                                            <h3 className="portfolio__card__modal-title">frontend project 1</h3>
                                                            <p className="portfolio__card__modal-description">
                                                                service with more than 3 years of experince. providing quality work to clients and comapanies.
                                                            </p>

                                                            <ul className="portfolio__card__modal-portfolio__card grid">
                                                                <li className="portfolio__card__modal-service">
                                                                    <i className="uil uil-check-circle portfolio__card__modal-icon"></i>
                                                                    <p className="portfolio__card__modal-info">I develop the user interface</p>
                                                                </li>
                                                                <li className="portfolio__card__modal-service">
                                                                    <i className="uil uil-check-circle portfolio__card__modal-icon"></i>
                                                                    <p className="portfolio__card__modal-info">webpage development</p>
                                                                </li>
                                                                <li className="portfolio__card__modal-service">
                                                                    <i className="uil uil-check-circle portfolio__card__modal-icon"></i>
                                                                    <p className="portfolio__card__modal-info">I create ux element interactions.</p>
                                                                </li>
                                                                <li className="portfolio__card__modal-service">
                                                                    <i className="uil uil-check-circle portfolio__card__modal-icon"></i>
                                                                    <p className="portfolio__card__modal-info">I positon your company brand.</p>
                                                                </li>
                                                                <li className="portfolio__card__modal-service">
                                                                    <i className="uil uil-check-circle portfolio__card__modal-icon"></i>
                                                                    <p className="portfolio__card__modal-info">design and mockups of products for companies</p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>



                                </div>


                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </section>
    );
};

export default Portfolio;