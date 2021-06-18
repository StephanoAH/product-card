import React from "react";
import styles from "./ProductCard.module.css";

function ProductCard() {
  return (
    <div className={styles.Container}>
      <div className={styles.CardContainer}>
        <div className={styles.TopContainer}>
          <div className={styles.CircleContainer}>
            <div className={styles.Circle} />
          </div>
          <div className={styles.ProductContainer}>
            <h3 className={styles.ProductBrand}></h3>
            <img className={styles.ProductImg} src="" alt="" />
          </div>
        </div>
        <div className={styles.BottomContainer}>
          {/* TODO: Add a ProductCardDetail component */}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
