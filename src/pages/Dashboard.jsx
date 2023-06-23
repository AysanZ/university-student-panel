import React from "react";
import { useStateContext } from "../contexts/ContextProvider";
import lessons from "../data/lessons.json";
import { LineChart } from "../components";
import css from "./styles/Dashboard.module.css";

const Dashboard = () => {
  const { currentColor, currentMode } = useStateContext();

  return (
    <div className={css.wrapper}>
      <div className={css.statistics}>
        <div
          className={`bg-white dark:text-gray-200 dark:bg-secondary-dark-bg ${css.static}`}
        >
          <div>
            <span>All Courses</span>
            <span style={{ color: currentColor }}>04/06</span>
          </div>
          <img src="./images/dash1.svg" alt="student" />
        </div>

        <div
          className={`bg-white dark:text-gray-200 dark:bg-secondary-dark-bg ${css.static}`}
        >
          <div>
            <span>All Projects</span>
            <span style={{ color: currentColor }}>40/60</span>
          </div>
          <img src="./images/dash2.svg" alt="student" />
        </div>

        <div
          className={`bg-white dark:text-gray-200 dark:bg-secondary-dark-bg ${css.static}`}
        >
          <div>
            <span>Test Attended</span>
            <span style={{ color: currentColor }}>30/50</span>
          </div>
          <img src="./images/dash3.svg" alt="student" />
        </div>

        <div
          className={`bg-white dark:text-gray-200 dark:bg-secondary-dark-bg ${css.static}`}
        >
          <div>
            <span>Test Passed</span>
            <span style={{ color: currentColor }}>15/20</span>
          </div>
          <img src="./images/dash4.svg" alt="student" />
        </div>
      </div>

      <div
        className={`bg-white dark:text-gray-200 dark:bg-secondary-dark-bg ${css.container}`}
      >
        <div className={css.header}>Today's Lessons</div>

        {lessons.map((item, i) => (
          <div className={css.lesson}>
            <span style={{ backgroundColor: currentColor }}>{item.course}</span>

            <span>
              <span>{item.time}</span>
              <span>{item.class} </span>
            </span>
          </div>
        ))}
      </div>

      <LineChart />
    </div>
  );
};

export default Dashboard;
