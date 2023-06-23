import { useStateContext } from "../contexts/ContextProvider";
import { item } from "../contexts/personalDetails";
import { MdEdit } from "react-icons/md";
import { data } from "../contexts/personalDetails";
import css from "./styles/Profile.module.css";

const Profile = () => {
  const { currentColor, currentMode } = useStateContext();

  function detail(i) {
    return Object.values(data)[i];
  }

  return (
    <div className={css.wrapper}>
      <div
        className={`bg-white dark:text-gray-200 dark:bg-secondary-dark-bg ${css.container}`}
      >
        <div className={css.header}>
          <img
            src="./avatar2.jpg"
            alt="prof"
            style={{ border: `3px solid ${currentColor}` }}
          />

          <span>
            <span>{data.Name}</span>
            <span>{data.Faculty}</span>
          </span>
        </div>

        <div className={css.main}>
          <div className={css.details}>
            <span className={css.head}>Personal Details :</span>

            {item.map((item, i) => (
              <div className={css.item} style={{ color: currentColor }}>
                <span>{item.icon}</span>

                <span>
                  <span> {item.title} </span>
                  <span> {detail(i)} </span>
                </span>
              </div>
            ))}
          </div>

          <div className={css.about}>
            <span className={css.head}>About Me</span>

            <p>
              <p>Hello I am Daisy Parks</p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur officia deserunt mollit anim id est
              laborum. Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam inventore
              veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              <p>Education</p>
              <p>2008 - 2009</p> Secondary Schooling at xyz school of secondary
              education, Mumbai. <p>2011 - 2012</p> Higher Secondary Schooling
              at xyz school of higher secondary education, Mumbai.{" "}
              <p>2012 - 2015</p> Bachelor of Science at Abc College of Art and
              Science, Chennai. <p>2015 - 2017</p>
              Master of Science at Cdm College of Engineering and Technology,
              Pune.
            </p>
            
            <MdEdit size={25} style={{ marginTop: "30px", color: "#9185DF" }} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
