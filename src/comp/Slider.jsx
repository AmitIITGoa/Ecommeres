import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 30px;
  height: 30px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const ArrowIcon = styled.div`
  width: 16px;
  height: 16px;
  border: solid black;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${(props) =>
    props.direction === "left" ? "rotate(135deg)" : "rotate(-45deg)"};
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 50vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 80%;
  max-height: 80%;
`;

const Image = styled.img`
  padding : 10px ;
  max-width: 80%;
  max-height: 80%;
  object-fit: cover;
  margin: 10px ;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 20px;
  width: 35%;
`;

const Title = styled.h1`
  font-size: 30px;
`;

const Desc = styled.p`
  margin: 20px 0px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
`;

const Button = styled.button`
  padding: 5px;
  font-size: 14px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
    } else {
      setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
    }
  };

  const sliderItems = [
    {
      id: 1,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd6dYbO2ST8G18zrBv-U_oDPuQ6LMg7ZMCWA&s", 
      title: "Summer Sale",
      desc: "Don't compromise on style! Get flat 30% off for new arrivals.",
      bg: "f5fafd",
    },
    {
      id: 2,
      img: "http://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/car_4.png",
      title: "Autumn Collection",
      desc: "Don't compromise on style! Get flat 30% off for new arrivals.",
      bg: "fcf1ed",
    },
    {
      id: 3,
      img: "https://www.teez.in/cdn/shop/products/pushTshirt_20_93efac1e-c099-4ada-9fe5-b85315003ed5_large.jpg?v=1634013680",
      title: "Loungewear Love",
      desc: "Don't compromise on style! Get flat 30% off for new arrivals.",
      bg: "fbf0f4",
    },
  ];

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowIcon direction="left" />
      </Arrow>

      <Wrapper slideIndex={slideIndex}>

        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowIcon direction="right" />
      </Arrow>
    </Container>
  );
};

export default Slider;
