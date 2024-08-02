import React, { useState } from "react";
import Title from "../componants/common/Title";
// import styles from "../style/products/products.module.css";
import ProductsTab from "../componants/products/productsTab/ProductsTab";
import ProductsGallery from "../componants/products/productsGallery/ProductsGallery";

function Products() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className={styles.productsContainer}>
      <Title
        title="Our Products"
        desc="Our Product is Very Confertable For KIds."
      />
      <div className={styles.productsContainerInner}>
        <ProductsTab activeTab={activeTab} setActiveTab={setActiveTab} />
        <ProductsGallery activeTab={activeTab} />
      </div>
    </div>
  );
}

export default Products;
