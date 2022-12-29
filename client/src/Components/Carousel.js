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
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: '/assets/Carousel_Images/image_2.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: '/assets/Carousel_Images/image_3.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3'
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
        <img crossorigin="anonymous" src={item.src} alt={item.altText} width="100%" height="400px" />
        <div className="carousel-overlay"></div>
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} style={{ display: "block" }} />
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