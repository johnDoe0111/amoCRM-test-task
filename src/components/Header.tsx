import HeaderLogo from "../assets/header/logo_welbex.png";
import { image, navMenu } from "../constants";

const Header = () => {
  return (
    <div className="flex justify-between text-white px-4 sm:px-0 py-5 sm:py-0 sm:pt-general-top-padding">
      <div className="hidden sm:block">
        <img src={HeaderLogo} alt="error" />
        <p className="pt-2.5 text-xs text-gray-500">
          крупный интегратор CRM
          <br /> в Росcии и ещё 8 странах
        </p>
      </div>

      <div className="flex justify-between text-xs sm:text-base w-74 sm:w-100">
        {navMenu.map((item) => (
          <p key={item.id} className="last:hidden sm:last:inline-block">
            <a href="#">{item.title}</a>
          </p>
        ))}
      </div>

      <div className="hidden sm:flex sm:w-74 sm:justify-between">
        <p>+7 555 555-55-55</p>
        {image.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt="heder-icon" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
