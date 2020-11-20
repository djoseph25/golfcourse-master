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
		src:
			'https://images.squarespace-cdn.com/content/v1/5d235ff1fdd42c0001908e34/1562685061647-XOBFV1A43EFZFD9GWSTN/ke17ZwdGBToddI8pDm48kFuTfCR-ecbutRwos0iLHIB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UQVuJKS7mjfjN6oCX1vq1U0gQAbe6lCSD94X_54gkwnMS0NPeaHDG8GIWiWpcKQ6cg/careysheffield12thhole%2B0361_EDIT.jpg?format=2500w',
		caption: 'Slide 1',
		altText: 'A RARE COLLECTION OF AMENITIES',
	},

	{
		src:
			'https://images.squarespace-cdn.com/content/v1/5d235ff1fdd42c0001908e34/1563902827463-IC7L6JAF82D2D9W26M2B/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/0P8A6163-Edit.jpg?format=2500w',
		caption: 'Slide 2',
		altText: 'A PLACE TO CALL HOME',
	},
	{
		src:
			'https://images.squarespace-cdn.com/content/v1/5d235ff1fdd42c0001908e34/1563902636396-B4MJRWI6ZSG2XPUQFTAA/ke17ZwdGBToddI8pDm48kFmfxoboNKufWj-55Bgmc-J7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iXS6XmVv7bUJ418E8Yoc1hjuviiiZmrL38w1ymUdqq4JaGeFUxjM-HeS7Oc-SSFcg/csheffieldberry+0146.JPG?',
		caption: 'Slide 3',
		altText: 'DEFINE BY INFORMAL ELEGANCE',
	},
	{
		src:
			'https://images.squarespace-cdn.com/content/v1/5d235ff1fdd42c0001908e34/1563906274847-X91UP78UDOZZVXPB3N1L/ke17ZwdGBToddI8pDm48kFmfxoboNKufWj-55Bgmc-J7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iXS6XmVv7bUJ418E8Yoc1hjuviiiZmrL38w1ymUdqq4JaGeFUxjM-HeS7Oc-SSFcg/careysheffieldbull+0241_edit.jpg?format=2500w',
		caption: 'Slide 4',
		altText: 'THIS IS ISLEWORTH',
	},
];

const Carousels = (props) => {
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
        <img src={item.src} className='images' />
        <CarouselCaption captionText={item.altText}  className='text-align'/>
      </CarouselItem>
    );
  });

  return (
    <Carousel
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

export default Carousels;