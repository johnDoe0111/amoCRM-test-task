import { footerContent, image } from "../constants";

const Footer = () => {
  return (
    <div className="pt-4 pl-4 sm:pt-32 sm:pl-0 pb-14 sm:pb-5">
      <div className="sm:flex justify-between">
        {footerContent.map((item) => (
          <div key={item.id}>
            <h3 className="footer-h3 uppercase text-xs sm:text-sm font-bold mb-3 pt-7 sm:pt-0">
              {item.title}
            </h3>
            <div className="max-h-40 sm:max-h-40 flex flex-col flex-wrap max-w-xs-3 sm:max-w-max">
              {item.subtitles.map((subtitle, index) => (
                <p
                  key={subtitle.id}
                  className={
                    index > 4
                      ? "ml-3 sm:ml-12 text-white pt-2 text-sm sm:text-base"
                      : " text-white pt-2 text-sm sm:text-base"
                  }
                >
                  {subtitle.title}
                </p>
              ))}
            </div>
          </div>
        ))}

        <div className="text-white sm:text-end">
          <h3 className="footer-h3 uppercase text-xs sm:text-sm font-bold pt-7 sm:pt-0">
            Контакты
          </h3>
          <p className="pt-5 font-medium">+7 555 555-55-55</p>
          <div className="flex items-center sm:justify-end pt-5">
            {image.map((item, index) => (
              <img
                className={index > 0 ? "ml-3" : ""}
                key={item.id}
                src={item.image}
                alt="footer-icon"
              />
            ))}
          </div>
          <p className="pt-5 text-sm sm:text-base">
            Москва, Путевой проезд 3с1, к 902
          </p>
        </div>
      </div>

      <div className="sm:flex sm:justify-end text-white pt-12 sm:pt-8 text-xs">
        <div>
          <p>©WELBEX 2022. Все права защищены.</p>
          <p className="sm:text-end">Политика конфиденциальности</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
