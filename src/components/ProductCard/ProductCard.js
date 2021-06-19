import React from "react";
import Shoes from "../../assets/air-jordan-transparent.png";
import styles from "./ProductCard.module.css";

function ProductCard() {
  return (
    <div className={styles.Container}>
      <div className={styles.CardContainer}>
        <div className={styles.TopContainer}>
          <div className={styles.CircleContainer}>
            <div className={styles.Circle} />
          </div>
          <h3 className={styles.ProductBrand}>Nike air</h3>
          <div className={styles.ProductContainer}>
            <div className={styles.ShoeContainer}>
              <img className={styles.Shoe} src={Shoes} alt="Shoes" />
            </div>
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
