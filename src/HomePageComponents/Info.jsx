import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdCloseFullscreen } from "react-icons/md";

function Info() {
  const [currentOpenTab, setCurrentOpenTab] = useState(0);

  function changeCurrentTab(value) {
    setCurrentOpenTab(value);
  }
  return (
    <section className="bg-gray-200 sm:min-h-screen sm:grid sm:grid-cols-2 px-4 md:px-24 xl:px-48 py-8 md:py-16 gap-8">
      <div className="bg-[url('./assets/images/rec_3.jpg')] sm:block hidden bg-center bg-cover"></div>

      <div className="lg:w-2/3 flex flex-col bg-black gap-[0.1rem]">
        {/* //* Add content for the cards  */}
        <div
          className={`bg-gray-200 py-4 transition-all ${
            currentOpenTab == 0 ? "flex-auto" : "flex-initial"
          }`}
        >
          <div
            onClick={() => changeCurrentTab(0)}
            className="flex justify-between items-center"
          >
            <h1 className="font-MontserratBold text-2xl">
            The Importance of Renewable Energy
            </h1>
            {currentOpenTab == 0 ? <MdCloseFullscreen /> : <RxHamburgerMenu />}
          </div>
          {currentOpenTab == 0 ? (
            <p className="pt-4">
              Renewable energy is essential for combating climate change and building a sustainable future. By harnessing natural resources like solar, wind, and hydropower, we can reduce our reliance on fossil fuels and lower greenhouse gas emissions. Transitioning to clean energy not only helps protect the environment but also promotes energy security, creates green jobs, and boosts economic growth. Embracing renewable energy today ensures a cleaner, healthier planet for future generations. Let's power our world sustainably!
            </p>
          ) : (
            <span />
          )}
        </div>

        <div
          className={`bg-gray-200 py-4 transition-all ${
            currentOpenTab == 1 ? "flex-auto" : "flex-initial"
          }`}
        >
          <div
            onClick={() => changeCurrentTab(1)}
            className="flex justify-between items-center"
          >
            <h1 className="font-MontserratBold text-2xl">
            Clean Energy: The Path to a Greener World
            
            </h1>
            {currentOpenTab == 1 ? <MdCloseFullscreen /> : <RxHamburgerMenu />}
          </div>
          {currentOpenTab == 1 ? (
            <p className="pt-4">
              Renewable energy is the key to a sustainable and environmentally friendly future. By utilizing solar, wind, and geothermal power, we can dramatically reduce our carbon footprint. This shift not only combats climate change but also enhances energy security, lowers pollution, and provides long-term economic benefits. As technology advances, renewable energy becomes more accessible and efficient, making it easier for individuals and businesses to adopt. Together, we can build a cleaner, healthier planet for future generations.
            </p>
          ) : (
            <span />
          )}
        </div>

        <div
          className={`bg-gray-200 py-4 transition-all ${
            currentOpenTab == 2 ? "flex-auto" : "flex-initial"
          }`}
        >
          <div
            onClick={() => changeCurrentTab(2)}
            className="flex justify-between items-center"
          >
            <h1 className="font-MontserratBold text-2xl">
            Why We Need to Embrace Renewable Energy
            
            </h1>
            {currentOpenTab == 2 ? <MdCloseFullscreen /> : <RxHamburgerMenu />}
          </div>
          {currentOpenTab == 2 ? (
            <p className="pt-4">
              Shifting to renewable energy sources like solar, wind, and hydropower is crucial to creating a sustainable world. These clean energy options help reduce greenhouse gas emissions, mitigate climate change, and ensure a more secure and reliable energy future. By embracing renewable technologies, we can reduce pollution, improve public health, and stimulate green job growth. Renewable energy provides endless opportunities for a cleaner, more sustainable future. Let’s make the shift to renewable energy today for a better tomorrow.
            </p>
          ) : (
            <span />
          )}
        </div>
      </div>
    </section>
  );
}

export default Info;
