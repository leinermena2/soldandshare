import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';

const Carousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  return (
    <Box>
      <img src={items[activeIndex].imageUrl} alt={items[activeIndex].title} />
      <Typography variant="h6">{items[activeIndex].title}</Typography>
      <Typography variant="body1">{items[activeIndex].description}</Typography>
      <Button onClick={handlePrev}>Prev</Button>
      <Button onClick={handleNext}>Next</Button>
    </Box>
  );
};

export default Carousel;
