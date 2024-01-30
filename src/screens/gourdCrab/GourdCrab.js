import DEER from "../../assets/gourdCrab/deer.jpg";
import GOURD from "../../assets/gourdCrab/gourd.jpg";
import CHICKEN from "../../assets/gourdCrab/chicken.jpg";
import FISH from "../../assets/gourdCrab/fish.jpg";
import CRAB from "../../assets/gourdCrab/crab.jpg";
import SHRIMP from "../../assets/gourdCrab/shrimp.jpg";
import { useState } from "react";
import { useEffect } from "react";
import WhoBetPage from "../../components/gourdCrab/WhoBetPage";
import PopupWhoBet from "../../components/custom/PopupWhoBet";

const GourdCrab = () => {
  const [numbers, setNumbers] = useState([]);

  const handleRoll = () => {
    const num1 = Math.floor(Math.random() * 6) + 1;
    const num2 = Math.floor(Math.random() * 6) + 1;
    const num3 = Math.floor(Math.random() * 6) + 1;
    const numbers = [num1, num2, num3];
    setNumbers(numbers);
  };

  useEffect(() => {
    let isActive = true;
    if (isActive && numbers && numbers.length > 0) {
      const tdElements = document.querySelectorAll("table.board td");
      let arr = [];
      numbers.forEach((number, index) => {
        const td = tdElements[number - 1];
        createImageResult(td, arr);
      });
      const history = document.getElementById("history");
      // create wrapper
      const divWrapper = document.createElement("div");
      arr.map((el) => divWrapper.appendChild(el));
      history.appendChild(divWrapper);
    }
    return () => {
      isActive = false;
    };
  }, [numbers]);

  const createImageResult = (td, arr) => {
    const image = td.querySelector("img");
    // create div image
    const divImage = document.createElement("div");
    divImage.className = "p-1 rounded w-[80px]";

    // create image
    const imageResult = document.createElement("img");
    imageResult.src = image.src;
    imageResult.alt = image.alt;
    imageResult.className = "w-[100px] h-[50px]";
    // append child
    divImage.appendChild(imageResult);
    arr.push(divImage);
  };

  return (
    <section id="gourdCrab" className="max-w-7x h-[200vh] mx-auto">
      <div className="main flex-center gap-10 pt-5">
        <div className="flex-col-center">
          <h1 className="text-[56px]">Bầu Cua</h1>
          <table className="board border">
            <tr>
              <td className="p-2 text-center font-bold">
                <div class="square border">
                  <img src={DEER} alt="deer" className="w-[250px] h-[250px]" />
                  <span>Nai</span>
                </div>
              </td>
              <td className="p-2 text-center font-bold">
                <div class="square border">
                  <img
                    src={GOURD}
                    alt="gourd"
                    className="w-[250px] h-[250px]"
                  />
                  <span>Bầu</span>
                </div>
              </td>
              <td className="p-2 text-center font-bold">
                <div class="square border">
                  <img
                    src={CHICKEN}
                    alt="chicken"
                    className="w-[250px] h-[250px]"
                  />
                  <span>Gà</span>
                </div>
              </td>
            </tr>
            <tr>
              <td className="p-2">
                <div class="square border text-center font-bold">
                  <img src={FISH} alt="fish" className="w-[250px] h-[250px]" />
                  <span>Cá</span>
                </div>
              </td>
              <td className="p-2">
                <div class="square border text-center font-bold">
                  <img src={CRAB} alt="crab" className="w-[250px] h-[250px]" />
                  <span>Cua</span>
                </div>
              </td>
              <td className="p-2">
                <div class="square border text-center font-bold">
                  <img
                    src={SHRIMP}
                    alt="shrimp"
                    className="w-[250px] h-[250px]"
                  />
                  <span>Tôm</span>
                </div>
              </td>
            </tr>
            <tr className="text-center">
              <td></td>
              <td className="p-1">
                <button
                  onClick={handleRoll}
                  id="roll"
                  className="cursor-pointer p-2 border rounded w-[100px] bg-orange-600"
                >
                  ROLL
                </button>
              </td>
              <td></td>
            </tr>
          </table>
        </div>
        <WhoBetPage />
      </div>
      <div className="px-24">
        <h3 className="font-semibold text-[24px] px-3 text-white">History:</h3>
        <div
          id="history"
          className="px-2 py-1 border flex-items-center flex-wrap"
        ></div>
      </div>
    </section>
  );
};

export default GourdCrab;
