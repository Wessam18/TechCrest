import React from 'react';
import { Link } from "react-router-dom";
import apple from '../img/apple.png';
import dell from '../img/dell.png';
import asus from '../img/asus.png';
import canon from '../img/canon.png';
import honor from '../img/honor.png';
import hp from '../img/hp.png';
import huawei from '../img/huawei.jpeg';
import lenovo from '../img/lenovo.png';
import samsung from "../img/samsung.jpeg";
import xiamoi from "../img/xiamoi.png"; // Correct typo
import infinix from "../img/infinix2.png";
import anker from "../img/anker.png";
import msi from "../img/Msi.jpg";
import "../styles/Header.css"; // Link to your CSS file

const BrandShowcase = () => {
  const brands = [
    { src: infinix, alt: 'Infinix', route: '/products/brand/infinix' },
    { src: msi, alt: 'MSI', route: '/products/brand/msi' },
    { src: huawei, alt: 'Huawei', route: '/products/brand/huawei' },
    { src: asus, alt: 'Asus', route: '/products/brand/asus' },
    { src: lenovo, alt: 'Lenovo', route: '/products/brand/lenovo' },
    { src: honor, alt: 'Honor', route: '/products/brand/honor' },
    { src: hp, alt: 'HP', route: '/products/brand/hp' },
    { src: samsung, alt: 'Samsung', route: '/products/brand/samsung' },
    { src: anker, alt: 'Anker', route: '/products/brand/anker' },
    { src: canon, alt: 'Canon', route: '/products/brand/canon' },
    { src: xiamoi, alt: 'Xiaomi', route: '/products/brand/xiaomi' },
    { src: dell, alt: 'Dell', route: '/products/brand/dell' },
    { src: apple, alt: 'Apple', route: '/products/brand/apple' },
  ];

  return (
    <div className="section">
      <div className="section-title">
        <h2>Our Trusted Brands</h2>
      </div>
      <div id="brand-showcase" className="container">
        <div className="row brand-row">
          {brands.map((brand, index) => (
            <div key={index} className="col-md-2 col-sm-4 col-xs-6">
              <Link to={brand.route}>
                <img src={brand.src} alt={brand.alt} className="brand-logo" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandShowcase;
