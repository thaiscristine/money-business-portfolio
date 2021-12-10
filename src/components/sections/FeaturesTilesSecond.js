import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTilesSecond = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'International trade',
    paragraph: 'It was excellent to have people introducting the theme that are originally from countries out of EU because we could have a wider view of international trade out of EU'
  };
  const sectionSecond = {
    // title: 'Budget, budget, budget..',
    paragraph: "I think the main thing when doing international trades is to have a good documentation of the products and updated documents of your own company because it can be necessary during the process."
  };
  const sectionHeader2 = {
    title: 'VAT',
    paragraph: "We already talked about taxes earlier but this time, it's specifically VAT. The tax on the consumption, it means that every product you purchase, a percentage is being paid for the government."
  };
  
  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container has-top-divider">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content has-top-divider spacer-64" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/icons8-america-48.png')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Who pays the taxes?
                  </h4>
                  <p className="m-0 text-sm">
                    Tax is payed in the destination country
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/icons8-exchange-64.png')}
                      alt="Features tile icon 02"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                  Exporting and importing
                    </h4>
                  <p className="m-0 text-sm">
                    Export = sell your product to other country<br /> Import = Buy a product to your country from other coutry
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/icons8-flag-of-europe-96.png')}
                      alt="Features tile icon 03"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                  Conditions in the EU
                    </h4>
                  <p className="m-0 text-sm">
                    There are minimun conditions to be able to export in EU. Also, a EORI registration. It's some kind of business ID connected to exporting.
                    </p>
                </div>
              </div>
            </div>

            
            <SectionHeader data={sectionSecond} className="center-content spacer-48"  />
          </div>
        </div>
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader2} className="center-content has-top-divider spacer-64" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/icons8-taxes-130.png')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Where is it?
                  </h4>
                  <p className="m-0 text-sm">
                    In Finland, the VAT is always already included in the price you pay. It's possible to see it in the receipt.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/icons8-user-groups-96.png')}
                      alt="Features tile icon 02"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                  VAT groups
                    </h4>
                  <p className="m-0 text-sm">
                    VAT is not always the same percentage. It is changed by the group that the product belongs: 
                    - 10% Entrances, Books, Medicine
                    - 14% Food,restaurantservices
                    - 24% Everything else
                    - 0% B2B construction work, importing out of eu

                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/icons8-among-us-150.png')}
                      alt="Features tile icon 03"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                  VAT DEDUCTION
                    </h4>
                  <p className="m-0 text-sm">
                    It's possible to get VAT deduction if the purchase is made by the company for the company's use or
                    investing in real state and VAT was already paid by the earlier owner.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTilesSecond.propTypes = propTypes;
FeaturesTilesSecond.defaultProps = defaultProps;

export default FeaturesTilesSecond;