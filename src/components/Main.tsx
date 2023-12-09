import { mainContent, mainContentMobile } from "../constants";

const Main = () => {
  return (
    <div className="main-bg-img sm:bg-none">
      <div className="pt-10 sm:pt-22 pl-4 sm:pl-0 pb-14 block sm:flex items-baseline justify-between">
        <div className="sm:w-97 text-white">
          <h1 className=" text-4xl sm:text-5xl leading-10 sm:leading-11">
            Зарабатывайте больше
            <br /> <span className="font-black main-span">c WELBEX</span>
          </h1>
          <p className="text-lg sm:text-sm-2 pt-2 sm:pt-8">
            Развиваем и контролируем
            <br /> продажи за вас
          </p>
        </div>

        <div className=" text-white sm:w-72 pt-11 sm:pt-0">
          <h2 className="sm:text-lg sm:ml-10 sm:text-end">
            Вместе с{" "}
            <span className="uppercase main-second-gradient">
              бесплатной консультацией
            </span>{" "}
            мы дарим:
          </h2>

          <div className="hidden sm:flex sm:flex-wrap text-white even:text-end">
            {mainContent.map((item) => (
              <div
                key={item.id}
                className="sm:max-w-xs-2 sm:pt-7 sm:even:ml-10"
              >
                <h3 className="sm:text-lg sm:font-medium">{item.title}</h3>
                <p className="sm:text-base">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-between w-64 pt-5 sm:hidden ">
            {mainContentMobile.map((item) => (
              <div className="flex items-center " key={item.id}>
                <div className="border-bg border w-3" />
                <div className="ml-2 text-sm-3 uppercase">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hidden sm:flex justify-end text-white sm:pt-16">
        <button className="main-button py-5 px-9">Получить консультацию</button>
      </div>
    </div>
  );
};

export default Main;
