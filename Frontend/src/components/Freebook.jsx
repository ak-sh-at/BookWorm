import React, { useEffect } from "react";
import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import '../index.css'
function Freebook() {
  const filterData = list.filter((data) => data.category === "free");
  console.log(filterData);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2x1 container mx-auto md:px-20 px-4 mb-8">
        <div>
          <h1 className="font-blod text-xl pb-2">Free Books Below!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam ab
            eligendi aut accusamus tenetur. Adipisci eligendi nulla omnis
            dolorum illo quia. Fugit, optio explicabo autem iusto illo error
            quos in.
          </p>
        </div>

        <div className="mt-5">
          <Slider {...settings}>
            {filterData.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;
