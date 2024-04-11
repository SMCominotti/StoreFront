import { useState } from "react";
import {
  RiAddLine,
  RiPieChartLine,
  RiMenu3Fill,
  RiUser3Line,
  RiCloseLine,
  RiArrowDownSLine,
  } from "react-icons/ri";
import Sidebar from "./components/shared/Sidebar";
import ProductListCar from "./components/shared/ProductListCar"
import ProductListCard from "./components/shared/ProductListCard"
import Header from "./components/shared/Header"

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };

  const toggleOrders= () =>{
    setShowOrder(!showOrder);
    setShowMenu(false);
  }

  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      <ProductListCar/>
      {/* Menú movil */}
      <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-2xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button className="p-2">
          <RiUser3Line />
        </button>
        <button className="p-2">
          <RiAddLine />
        </button>
        <button onClick={toggleOrders} className="p-2">
          <RiPieChartLine />
        </button>
        <button onClick={toggleMenu} className="text-white p-2">
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </nav>
      <main className="lg:pl-32 lg:pr-96 pb-20">
        <div className="md:p-8 p-4">
          <Header/> 
            <div className=" flex items-center justify-between mb-16">
            <h2 className="text-xl text-gray-300 m-3">Choose Dishes</h2>
            <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
              <RiArrowDownSLine /> Dine in
            </button>
          </div>
          {/* card */}
            <ProductListCard/>
         </div>
      </main>
    </div>
  );
}

export default App;
