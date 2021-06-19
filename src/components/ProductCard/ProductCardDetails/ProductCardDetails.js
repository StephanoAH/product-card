import React from "react";
import styles from "./ProductCardDetails.module.css";
import NikeLogo from "../../../assets/nike-logo.png";

function ProductCardDetails() {
  return (
    <div className={styles.Container}>
      <p className={styles.BrandName}>Nike</p>
      <div className={styles.ProductContainer}>
        <h4 className={styles.ProductName}>AIR JORDAN 1 MID SE GC</h4>
        <h4 className={styles.ProductPrice}>430$</h4>
      </div>
      <div className={styles.ProductContainer}>
        <h5 className={styles.ProductCTA}>Your next shoes</h5>
        <button className={styles.ProductBtn}>BUY</button>
      </div>
      <div className={styles.BrandLogoContainer}>
        <img className={styles.BrandLogo} src={NikeLogo} alt="Brand logo" />
      </div>
    </div>
  );
}

export default ProductCardDetails;
