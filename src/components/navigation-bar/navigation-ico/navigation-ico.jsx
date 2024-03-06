import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import styles from "./navigation-ico.module.scss";
import useImage from "../../../custom-hooks/use-image";

const ErrorItem = ({ handleCheck, sectionId, icoPath, content }) => {
  return (
    <li className={styles["nav-bar__list-item"]} onClick={handleCheck}>
      <a className={styles["nav-bar__logo"]} href={"#" + sectionId}>
        <img
          className={styles["nav-bar__logo-img"]}
          src={icoPath}
          alt={content}
        />
      </a>
    </li>
  );
};
const SuccessItem = ({
  setClickedId,
  id,
  handleCheck,
  loading,
  sectionId,
  image,
  content,
}) => {
  return (
    <li
      className={styles["nav-bar__list-item"]}
      onClick={() => {
        setClickedId(id);
        handleCheck();
      }}
    >
      {loading ? (
        "загрузка логотипа"
      ) : (
        <Link className={styles["nav-bar__logo"]} to={"/#" + sectionId}>
          <img
            className={styles["nav-bar__logo-img"]}
            src={image}
            alt={content}
          />
        </Link>
      )}
    </li>
  );
};
export const NavigationIco = ({
  content,
  sectionId,
  icoPath,
  id,
  setClickedId,
  clickHandler = false,
}) => {
  const { loading, error, image } = useImage(icoPath);
  function handleCheck() {
    if (clickHandler) clickHandler();
  }

  return error ? (
    <ErrorItem
      handleCheck={handleCheck}
      sectionId={sectionId}
      icoPath={icoPath}
      content={content}
    />
  ) : (
    <SuccessItem
      setClickedId={setClickedId}
      id={id}
      handleCheck={handleCheck}
      loading={loading}
      sectionId={sectionId}
      image={image}
      content={content}
    />
  );
};
