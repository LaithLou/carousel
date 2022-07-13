import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

const RIGHT_ARROW = ".bi-arrow-right-circle";

it("matches snapshot", function () {
  const { container } = render(
    <Carousel photos={TEST_IMAGES} title="images for testing" />
  );
  expect(container).toMatchSnapshot();
});

it("works when you click on the right arrow", function () {
  const { container } = render(
    <Carousel photos={TEST_IMAGES} title="images for testing" />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(RIGHT_ARROW);
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});

it("works when you click on the left arrow", function () {
  const { container } = render(
    <Carousel photos={TEST_IMAGES} title="images for testing" />
  );

  const RightArrow = container.querySelector(RIGHT_ARROW);
  fireEvent.click(RightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const LeftArrow = container.querySelector(".bi-arrow-left-circle");
  fireEvent.click(LeftArrow);

  // expect the first image to show, but not the second.
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
});

// check left arrow missing on 1st image
// .not.toHaveClass for left arrow

it("left arrow doesn't display on first image", function () {
  const { container, debug } = render(
    <Carousel photos={TEST_IMAGES} title="images for testing" />
  );

  console.log("line 73");
  debug(container);

  expect(
    container.querySelector(".bi-arrow-left-circle")
  ).not.toBeInTheDocument();
});

it("right arrow doesn't display on last image", function () {
  const { container, debug } = render(
    <Carousel photos={TEST_IMAGES} title="images for testing" />
  );
  const RightArrow = container.querySelector(RIGHT_ARROW);
  fireEvent.click(RightArrow);
  fireEvent.click(RightArrow);

  debug(container);
  //TODO: global variable for repeated strings
  expect(container.querySelector(RIGHT_ARROW)).not.toBeInTheDocument();
});
