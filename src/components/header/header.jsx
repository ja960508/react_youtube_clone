import React, { memo, useRef } from "react";
import styles from "./header.module.css";

const Header = memo(({ handleSearchSubmit }) => {
  const inputRef = useRef();
  const handleOnClick = () => {
    handleSearchSubmit(inputRef.current.value);
  };

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearchSubmit(inputRef.current.value);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="./images/logo.png" alt="logo" />
        <h1>Youtube</h1>
      </div>
      <input
        ref={inputRef}
        type="search"
        className={styles.search}
        placeholder="Search..."
        onKeyPress={handleOnKeyPress}
      />
      <button
        type="submit"
        className={styles.searchBtn}
        onClick={handleOnClick}
      >
        <img
          src="./images/search.png"
          alt="search"
          className={styles.searchImg}
        />
      </button>
    </header>
  );
});

export default Header;
