import '../styles/footer.css';
import { FaFacebook, FaGoogle, FaTwitter, FaInstagramSquare, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="custom-bg text-white lg:px-40 p-4">
            <div className="flex mb-4">
                <p className="btn btn-outline-light btn-floating m-1" role="button">
                    <FaFacebook />
                </p>
                <p className="btn btn-outline-light btn-floating m-1" role="button">
                    <FaGoogle />
                </p>
                <p className="btn btn-outline-light btn-floating m-1" role="button">
                    <FaTwitter />
                </p>
                <p className="btn btn-outline-light btn-floating m-1" role="button">
                    <FaInstagramSquare />
                </p>
                <p className="btn btn-outline-light btn-floating m-1" role="button">
                    <FaLinkedin />
                </p>
            </div>
            <p className="text-center">&copy; TechCrest {new Date().getFullYear()}</p>
        </footer>
    );
};

export default Footer;
