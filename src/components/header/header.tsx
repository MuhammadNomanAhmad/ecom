import "./header.css";
import logo from "../../assets/images/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import CategoriesDropdown from "../common/select/select";
import { useState } from "react";

const Header = () => {

 

  
  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-2 ">
              <img src={logo} alt="logo is not found" sizes="" />
            </div>
            {/* Header Search Start Here */}
            <div className="col-sm-5">
              <div className="headerSearch d-flex align-items-center">
                <div className="selecrDrop cursor">All Categories</div>
                <div className="search">
                  <input type="text" placeholder="Search for items...." />
                  <SearchIcon className="searchIcon cursor" />
           
                </div>
              </div>
            </div>

            {/* Header Search End Here */}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
