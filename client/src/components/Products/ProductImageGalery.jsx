import React from 'react';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import useProductStore from "@/Store/Procuts/ProductStore.js";
import "../../assets/css/Product-Image-gallery.css"
const ProductImageGalery = () => {
    const {ProductDetail} = useProductStore();

    let Images = [
        {
            original: ProductDetail[0]["details"]["img1"],
            thumbnail: ProductDetail[0]["details"]["img1"],
        },
        {
            original: ProductDetail[0]["details"]["img2"],
            thumbnail: ProductDetail[0]["details"]["img2"],
        },
        {
            original: ProductDetail[0]["details"]["img3"],
            thumbnail: ProductDetail[0]["details"]["img3"],
        },
        {
            original: ProductDetail[0]["details"]["img4"],
            thumbnail: ProductDetail[0]["details"]["img4"],
        },
        {
            original: ProductDetail[0]["details"]["img6"],
            thumbnail: ProductDetail[0]["details"]["img6"],
        },
        {
            original: ProductDetail[0]["details"]["img7"],
            thumbnail: ProductDetail[0]["details"]["img7"],
        },
        {
            original: ProductDetail[0]["details"]["img8"],
            thumbnail: ProductDetail[0]["details"]["img8"],
        },
    ];
    return (

            <div className="h-auto">
                <ImageGallery className="w-fit h-auto" autoPlay={true} showThumbnails={true} showPlayButton={false}
                              showFullscreenButton={false} items={Images} showPrevButton={false}/>
            </div>



    );
};

export default ProductImageGalery;
