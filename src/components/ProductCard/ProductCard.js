import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Shoes from "../../assets/air-jordan-transparent.png";
import ProductCardDetails from "./ProductCardDetails/ProductCardDetails";
import styles from "./ProductCard.module.css";

function ProductCard() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 0, 100], [30, 0, -30]);
  const rotateY = useTransform(x, [-100, 0, 100], [-30, 0, 30]);

  return (
    <div className={styles.Container}>
      <motion.div
        className={styles.CardContainer}
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.16}
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
        whileTap={{ cursor: "grabbing" }}
      >
        <div className={styles.TopContainer}>
          <div className={styles.CircleContainer}>
            <div className={styles.Circle} />
          </div>
          <h3 className={styles.ProductBrand}>Nike air</h3>
          <div className={styles.ProductContainer}>
            <motion.div
              className={styles.ShoeContainer}
              style={{ x, y, rotateX, rotateY, rotate: "-25deg", z: 100000 }}
              drag
              dragElastic={0.12}
              dragConstraints={{
                top: -50,
                left: -50,
                right: 50,
                bottom: 50,
              }}
              whileTap={{ cursor: "grabbing" }}
            >
              <img
                draggable="false"
                className={styles.Shoe}
                src={Shoes}
                alt="Shoes"
              />
            </motion.div>
          </div>
        </div>
        <div className={styles.BottomContainer}>
          <ProductCardDetails />
        </div>
      </motion.div>
    </div>
  );
}

export default ProductCard;
