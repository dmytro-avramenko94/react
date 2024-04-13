import { HomeAPI } from "../../data/home-page"
import { NavLink } from "react-router-dom";
import Collection from "../Collection/Collection";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export function Card() {
    return (
        <div className="instructions__row">
            {HomeAPI.instructions.cards.map((item, index) => (
                <div className="instructions__card">
                    <div key={index} className="instructions__icons">
                        <h5 className="instructions__card-title">{item.title}</h5>
                        <img className="instructions__icon" src={'/images/instructions/' + item.icon} alt="img" />
                    </div>
                    <p className="instructions__description">
                        {item.description}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default function Home() {
    console.log(HomeAPI);
    return (
        <>
            <section className="hero">
                <div className="hero__container container">
                    <img src="./images/hero-img.jpg" alt="" className="hero__image" />
                    <div className="hero__content">
                        <h1 className="h1 hero__title">
                            {HomeAPI.title}
                        </h1>
                        <p className="p1 hero__description">
                            {HomeAPI.description}
                        </p>
                        <div className="hero__owner">
                            <img src={'/images/' + HomeAPI.owner.image} alt="" />
                            <div className="hero__owner-container">
                                <h5 className="hero__name">{HomeAPI.owner.name}</h5>
                                <p className="hero__position">{HomeAPI.owner.position}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="tabs">
                <h1 className="tabs__title">
                    <Tabs>
                        <TabList>
                            <Tab>Title 1</Tab>
                            <Tab>Title 2</Tab>
                        </TabList>

                        <TabPanel>
                            <h2>Any content 1</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 2</h2>
                        </TabPanel>
                    </Tabs>
                </h1>
            </section>
            <Collection />
            {/* home list */}
            <section className="navigation">
                <div className="navigation__container container">
                    <NavLink to='/shop' className="navigation__link" >
                        <img src="./images/home-nav/nav-1.png" alt="" className="navigation__img" />
                        <p className="navigation__text">Shop</p>
                    </NavLink>
                    <NavLink to='/collection' className="navigation__link" >
                        <img src="./images/home-nav/nav-1.png" alt="" className="navigation__img" />
                        <p className="navigation__text">Collection</p>
                    </NavLink>
                    <NavLink to='/incubator' className="navigation__link" >
                        <img src="./images/home-nav/nav-3.png" alt="" className="navigation__img" />
                        <p className="navigation__text">Incubator</p>
                    </NavLink>
                </div>
            </section>
            <section className="instructions">
                <div className="instructions__container container">
                    <header className="instructions__header">
                        {/* {HomeAPI.instructions.title} */}
                        <img src="./images/instructions/instr-header.png" alt="" className="instructions__header-img" />
                    </header>
                    <Card />
                </div>
            </section>
        </>
    )
}