import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__social">
                    <p className="footer__text">Find us online</p>
                    <div className="footer__link-wrap">
                        <NavLink to="https://facebook.com/" className="footer__link">
                            <img src="./images/footer/Facebook.svg" alt="" className="footer__link-logo" />
                        </NavLink>
                        <NavLink to="https://instagram.com/" className="footer__link">
                            <img src="./images/footer/Instagram.svg" alt="" className="footer__link-logo" />
                        </NavLink>
                        <NavLink to="https://twitter.com/" className="footer__link">
                            <img src="./images/footer/Twitter.svg" alt="" className="footer__link-logo" />
                        </NavLink>
                        <NavLink to="https://youtube.com/" className="footer__link">
                            <img src="./images/footer/Youtube.svg" alt="" className="footer__link-logo" />
                        </NavLink>
                    </div>
                </div>
                <div className="footer__data">
                    <p className="footer__email">email@example.com</p>
                    <p className="footer__phone">+ 12 34 567 89 01</p>
                </div>
            </div>
        </footer>
    )
}