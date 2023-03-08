import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Button from "../atoms/Button";
import Cards from "../atoms/Cards";

const divStyle = {
  display: "flex",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "768px",
  width: "100%",
};

const slideImages = [
  {
    url: "/images/image-home1.jpg",
    caption: "SEHJIRA Deaf Foundation",
    desc: "Yayasan SEHJIRA (Sehat Jiwa Raga) merupakan yayasan yang menaungi dan memberikan perlindungan bagi para penyandang disabilitas khususnya disabilitas rungu/Tuli.",
  },
  {
    url: "/images/image-home2.jpg",
    caption: "SEHJIRA Deaf Foundation",
    desc: "Yayasan SEHJIRA (Sehat Jiwa Raga) merupakan yayasan yang menaungi dan memberikan perlindungan bagi para penyandang disabilitas khususnya disabilitas rungu/Tuli.",
  },
  {
    url: "/images/image-home3.jpg",
    caption: "SEHJIRA Deaf Foundation",
    desc: "Yayasan SEHJIRA (Sehat Jiwa Raga) merupakan yayasan yang menaungi dan memberikan perlindungan bagi para penyandang disabilitas khususnya disabilitas rungu/Tuli.",
  },
  {
    url: "images/image-home4.jpg",
    caption: "SEHJIRA Deaf Foundation",
    desc: "Yayasan SEHJIRA (Sehat Jiwa Raga) merupakan yayasan yang menaungi dan memberikan perlindungan bagi para penyandang disabilitas khususnya disabilitas rungu/Tuli.",
  },
  {
    url: "images/image-home5.jpg",
    caption: "SEHJIRA Deaf Foundation",
    desc: "Yayasan SEHJIRA (Sehat Jiwa Raga) merupakan yayasan yang menaungi dan memberikan perlindungan bagi para penyandang disabilitas khususnya disabilitas rungu/Tuli.",
  },
];

const responsiveSet = [
  {
    breakpoint: 800,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 2,
    },
  },
  {
    breakpoint: 1000,
    settings: {
      slidesToScroll: 2,
      slidesToShow: 3,
    },
  },
];

const Glock = () => {
  return (
    <div className="slide-container  ">
      <Slide
        duration={3000}
        slidesToShow={1}
        slidesToScroll={2}
        responsive={responsiveSet}
      >
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <Cards image="/images/f.jpg" caption={slideImage.caption} />
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Glock;
