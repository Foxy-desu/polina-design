import React from "react";
import useImage from "../../../custom-hooks/use-image";
import styles from "./photo-frame.module.scss";

const ErrorItem = ({ path, info }) => {
  return <img src={path} alt={info} />;
};
const SuccessItem = ({ setStyle, type, loading, image, info }) => {
  return (
    <div className={`${styles["photo-frame"]}${" " + setStyle(type)}`}>
      {loading ? (
        <div>{"загрузка"}</div>
      ) : (
        <div className={styles["photo-frame__wrap"]}>
          <img
            className={styles["photo-frame__image"]}
            width={167}
            height={223}
            src={image}
            alt={info}
          />
        </div>
      )}
    </div>
  );
};

export const PhotoFrame = ({ path, info, type }) => {
  const { loading, error, image } = useImage(path);

  function setStyle(type) {
    const types = {
      designed: "photo-frame_designed",
      plain: "photo-frame_plain",
    };

    for (let [key, value] of Object.entries(types)) {
      if (type === key) return styles[value];
    }
    return "";
  }

  return error ? (
    <ErrorItem path={path} info={info} />
  ) : (
    <SuccessItem
      info={info}
      type={type}
      image={image}
      loading={loading}
      setStyle={setStyle}
    />
  );
};
