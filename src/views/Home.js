import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesTilesSecond from '../components/sections/FeaturesTilesSecond';
import FeaturesTilesThird from '../components/sections/FeaturesTilesThird';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import FeaturesSplitSecond from '../components/sections/FeaturesSplitSecond';
import FeaturesSplitThird from '../components/sections/FeaturesSplitThird';
import FeaturesSplitFourth from '../components/sections/FeaturesSplitFourth';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonial topDivider />
      <Cta split />
      <FeaturesSplitSecond invertMobile topDivider imageFill className="illustration-section-02" />
      <FeaturesSplitThird invertMobile topDivider imageFill className="illustration-section-02" />
      <FeaturesTilesSecond />
      <FeaturesSplitFourth invertMobile topDivider imageFill className="illustration-section-02" />
      <FeaturesTilesThird />
    </>
  );
}

export default Home;