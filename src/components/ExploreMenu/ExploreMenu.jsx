import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Menu</h1>
      <p className="explore-menu-text">
        Discover our delicious menu with a variety of cuisines to satisfy your
        cravings.
      </p>
      <div className="explore-menu-list-container">
        <div className="explore-menu-list">
          {[...menu_list, ...menu_list, ...menu_list].map((item, index) => (
            <div
              key={`${item.menu_name}-${index}`}
              className={`explore-menu-list-item ${
                category === item.menu_name ? "active" : ""
              }`}
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt={item.menu_name}
              />
              <p>{item.menu_name}</p>
            </div>
          ))}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
