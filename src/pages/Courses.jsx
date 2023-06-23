import React from "react";
import { Header } from "../components";
import { AiFillStar } from "react-icons/ai";
import cartData from "../data/cart.json";
import { useStateContext } from "../contexts/ContextProvider";
import css from "./styles/Courses.module.css";

const Courses = () => {
  const { currentColor, currentMode } = useStateContext();

  const handleClick = () => {};

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Page" title="Courses" />

      <div className={css.container}>
        {cartData.map((item, i) => (
          <div className={css.cart}>
            <span className={css.tag}> {item.tag} </span>

            <span className={css.gray}>

              <span> {item.lessons} </span>

              <span>
                {" "}
                <AiFillStar color="#FF9415" /> {item.star}{" "}
              </span>
            </span>

            <div className={css.title}>
              <span> {item.title} </span>
              <span>
                {" "}
                <span>ID :</span> <span> {item.id} </span>{" "}
              </span>
            </div>

            <span>
              <img src={item.src} alt="" />
              <span>{item.teacher}</span>
            </span>
            
            <button
              className={css.btn}
              onClick={handleClick}
              style={{ backgroundColor: currentColor }}
            >
              Add
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
