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

const FeaturesSplit = ({
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
    title: 'ACQUIRING CAPITAL',
    paragraph: 'Time to make money! 💰 There are quite many possibilities to explore when the idea is to get money. Investors, government, "angels", family etc.'
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
                  Nice interactive intro. Thanks Vilma, Lucas and Emily
                  </div>
                <h3 className="mt-0 mb-12">
                  Okay, but how?
                  </h3>
                <p className="m-0">
                  You might be thinking how to access an ivestor to inject some money in your company. We ended up agreeing, 
                  as a team, that the easiest and fastest way to make some kind of initial capital would be to moonlight. 
                  If you are not native English speaker, you are like me and you have no idea what means to moonlight. 
                  I got you, it means to do some additional job on your regular schedule and it can also mean that this 
                  extra work is not necessarely legal activity with all taxes paid (that's not how we want to use this word).
                  
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/aqcuiring-capital.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Quite many new terms here. I hope everyone got it.
                  </div>
                <h3 className="mt-0 mb-12">
                  There is more than only moonlighting..
                  </h3>
                <p className="m-0">
                  If moonlight is still unclear: shitty job. Although, I don't like to call any job like that, so let's stick with moonlight because this portfolio is mine and I decide :D .
                Other options are Bootstrapping / Family Donations / Government Grants / Business Loans /
                Crowdfunding / Angel Investors / Venture Capitalists. 

                  My takeaway was "be creative". Living in a big nordic city there are tons of possiblities to our team raise money.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/options-acquire-capital.png')}
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

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;