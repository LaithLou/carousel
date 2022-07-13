import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";

/** Carousel: displays images and arrows to navigate through them
 *
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 *
 * State:
 * - currCardIdx: integer for current card index
 *
 * App --> Carousel --> Card
 */
function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);

  const currCard = photos[currCardIdx];
  const total = photos.length;

  //Increments currCardIdx state by 1
  function goForward() {
    setCurrCardIdx(currCardIdx + 1);
  }

  //Decreases currCardIdx state by 1
  function goBackward() {
    setCurrCardIdx(currCardIdx - 1);
  }

  // FIXME: can't generate left arrow after image 1; can't get rid of right arrow for image 3
  // know currCardIdx
  // when 1 --> just right arrow
  // when 3 --> just left arrow

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        {currCardIdx === 1 && <i></i>}
        {currCardIdx > 1 && (
          <i className="bi bi-arrow-left-circle" onClick={goBackward} />
        )}
        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        {currCardIdx < 3 && (
          <i className="bi bi-arrow-right-circle" onClick={goForward} />
        )}
        {currCardIdx === 3 && <i></i>}
      </div>
    </div>
  );
}

export default Carousel;
