import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import GalleryCard from "./GalleryCard";
import {
  Kid,
  Children,
  Boy,
} from "../../../data/productsPageData";

function ProductsGallery(props) {
  const { activeTab } = props;
  const products = [
    Kid,
    Children,
    Boy,
  ];

  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry gutter="16px">
        {products[activeTab].map(function (img, index) {
          return (
            <GalleryCard src={img.src} title={img.title} Real={img.Real} Discount={img.Discount} desc={img.desc} />
          );
        })}
      </Masonry>
    </ResponsiveMasonry>
  );
}

export default ProductsGallery;
