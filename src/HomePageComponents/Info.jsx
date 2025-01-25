import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdCloseFullscreen } from "react-icons/md";

function Info() {
  const [currentOpenTab, setCurrentOpenTab] = useState(0);

  function changeCurrentTab(value) {
    setCurrentOpenTab(value);
  }
  return (
    <section className="min-h-screen grid grid-cols-2 px-48 py-16 gap-8">

      <div className="bg-[url('assets/images/rec_3.jpg')] bg-center bg-cover"></div>

      <div className="w-2/3 flex flex-col bg-black gap-[0.1rem]">
        {/* //* Add content for the cards  */}
        <div className={`bg-white py-4 transition-all ${currentOpenTab == 0 ? "flex-auto" : "flex-initial"}`}>
          <div onClick={() => changeCurrentTab(0)} className="flex justify-between items-center">
            <h1 className="font-MontserratBold text-2xl">Lorem ipsum dolor sit.</h1>
            {
              (currentOpenTab == 0)
                ? <MdCloseFullscreen />
                : <RxHamburgerMenu />
            }
          </div>
          {
            (currentOpenTab == 0)
              ? <p className="pt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. At quos, ipsum nemo iste aut, sapiente eveniet officia, nesciunt voluptatibus sunt veniam facilis error impedit laboriosam molestiae obcaecati nulla nostrum aliquid tempora. Molestias ex, facere maxime voluptatibus fugit vel non consequuntur. Iusto fuga debitis perferendis dolores sequi optio animi, ratione ex, repellendus, nihil unde. Inventore corporis quibusdam optio eligendi, mollitia blanditiis!</p>
              : <span />
          }
        </div>

        <div className={`bg-white py-4 transition-all ${currentOpenTab == 1 ? "flex-auto" : "flex-initial"}`}>
          <div onClick={() => changeCurrentTab(1)} className="flex justify-between items-center">
            <h1 className="font-MontserratBold text-2xl">Lorem ipsum dolor sit.</h1>
            {
              (currentOpenTab == 1)
                ? <MdCloseFullscreen />
                : <RxHamburgerMenu />
            }
          </div>
          {
            (currentOpenTab == 1)
              ? <p className="pt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. At quos, ipsum nemo iste aut, sapiente eveniet officia, nesciunt voluptatibus sunt veniam facilis error impedit laboriosam molestiae obcaecati nulla nostrum aliquid tempora. Molestias ex, facere maxime voluptatibus fugit vel non consequuntur. Iusto fuga debitis perferendis dolores sequi optio animi, ratione ex, repellendus, nihil unde. Inventore corporis quibusdam optio eligendi, mollitia blanditiis!</p>
              : <span />
          }
        </div>
        
        <div className={`bg-white py-4 transition-all ${currentOpenTab == 2 ? "flex-auto" : "flex-initial"}`}>
          <div onClick={() => changeCurrentTab(2)} className="flex justify-between items-center">
            <h1 className="font-MontserratBold text-2xl">Lorem ipsum dolor sit.</h1>
            {
              (currentOpenTab == 2)
                ? <MdCloseFullscreen />
                : <RxHamburgerMenu />
            }
          </div>
          {
            (currentOpenTab == 2)
              ? <p className="pt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. At quos, ipsum nemo iste aut, sapiente eveniet officia, nesciunt voluptatibus sunt veniam facilis error impedit laboriosam molestiae obcaecati nulla nostrum aliquid tempora. Molestias ex, facere maxime voluptatibus fugit vel non consequuntur. Iusto fuga debitis perferendis dolores sequi optio animi, ratione ex, repellendus, nihil unde. Inventore corporis quibusdam optio eligendi, mollitia blanditiis!</p>
              : <span />
          }
        </div>
        
      </div>
    </section>
  )
}

export default Info;
