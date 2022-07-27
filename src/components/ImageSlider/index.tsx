import Slider from 'react-slick';
import React from 'react';

const contentStyle: React.CSSProperties = {
  color: '#fff',
  background: '#364d79',
};

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
};

interface Props {
  data: string[];
}

const ImageSlider: React.FC<Props> = ({ data }) => {
  return (
    <Slider {...settings}>
      {data.map((d, idx) => (
        <div key={idx} style={contentStyle}>
          <img style={{ width: '100%', maxWidth: '400px', margin: 'auto' }} src={d} alt={d} />
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
