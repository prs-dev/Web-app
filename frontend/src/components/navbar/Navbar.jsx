import React from "react";

const Navbar = () => {
  return (
    <div className="h-[70px] p-[10px] bg-[#13dad0] text-white flex items-center justify-between shadow-md z-50">
      <div className="w-[70px] bg-gradient-to-t from-[#08c0d8] rounded-[10px]">
        <img className="w-[100%]" src="/assets/logo.png" alt="" />
      </div>
      <div>
        <ul className="flex gap-[10px] font-semibold">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Bhartiya Jyotish</a>
          </li>
          <li>
            <a href="#">Sahaya Bhartiye Vidhik</a>
          </li>
          <li>
            <a href="#">Natural Life Care</a>
          </li>
          <li>
            <a href="#">Panellist</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Vastu Consultancy</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-[10px]">
        <i className="fa-solid fa-bag-shopping text-[30px]"></i>
        <div className="p-[10px] rounded-[5px] border flex items-center justify-center">
          Contact Us
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
