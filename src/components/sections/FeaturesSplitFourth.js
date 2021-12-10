import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplitFourth = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Tribe',
    paragraph: "This was my group intro so I should know a lot :D Let's see how it goes "
  };
  const sectionHeader2 = {
    title: 'Financial Key Figures',
    paragraph: "This was my group intro so I should know a lot :D Let's see how it goes "
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  I'm quite sure the activity was about accounting
                  </div>
                <h3 className="mt-0 mb-12">
                  Visit to Tribe
                  </h3>
                <p className="m-0">
                  I had been in Tribe few times in my first year in Tampere and it was nice to get back there now. It's a new office but
                  the environment mood seems to be the same. Friendly, active and supportive people to talk and share ideas. I don't think
                  we did a good work with accounting on that day but to be in some other place other than Proakatemia with the team was quite positive.
                  
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/Tribe_p6-2.jpeg')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader2} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  I'm quite sure the activity was about accounting
                  </div>
                <h3 className="mt-0 mb-12">
                  Visit to Tribe
                  </h3>
                <p className="m-0">
                  I had been in Tribe few times in my first year in Tampere and it was nice to get back there now. It's a new office but
                  the environment mood seems to be the same. Friendly, active and supportive people to talk and share ideas. I don't think
                  we did a good work with accounting on that day but to be in some other place other than Proakatemia with the team was quite positive.
                  
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/Tribe_p6-2.jpeg')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Why do I need to pay so much?
                  </div>
                <h3 className="mt-0 mb-12">
                  Kela, ratikka, schools, hospitals..
                  </h3>
                <p className="m-0">
                  This intro brought up lots of discussions and loopholes was probably the hot subject. More than that, I think it was good
                  to emphasize the positve aspects of a progressive tax system. At first, it can be seen as a quite negative system where
                  you need to pay lots of taxes but actually, it's amazing to see infrastructure and social services trully working. 
                  Paid by the people for the people as it should be.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/positive-1.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplitFourth.propTypes = propTypes;
FeaturesSplitFourth.defaultProps = defaultProps;

export default FeaturesSplitFourth;