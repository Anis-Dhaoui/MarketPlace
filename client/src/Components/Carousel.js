import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: '/assets/Carousel_Images/image_1.jpg',
    altText: 'Selling only the best things online',
    caption: 'It is more than just sales'
  },
  {
    src: '/assets/Carousel_Images/image_2.jpg',
    altText: 'More than just a reliable e-commerce platform',
    caption: 'We will not let you down'
  },
  {
    src: '/assets/Carousel_Images/image_3.jpg',
    altText: 'Real e-commerce adventure',
    caption: 'Your e-commerce venture starts here'
  }
];

const SlideShow = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img crossOrigin="anonymous" src={item.src} alt={item.altText} width="100%" height="400px" />
        <div className="carousel-overlay"></div>
        <CarouselCaption captionText={item.caption} captionHeader={item.altText} style={{ display: "block" }} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      id="top-header-carousel"
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default SlideShow;