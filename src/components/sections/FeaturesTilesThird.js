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
const FeaturesTilesThird = ({
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
    title: 'Investing',
    paragraph: "Last but not least, investing. It was quite waited topic for me because I'm quite interested in the investing world (mainly cryptos)."
  };
  const sectionSecond = {
    paragraph: "Probably it's already quite clear but once more, I'm still quite hungry about the subject investing. Although, I think it's important that was the last item to be learned to not mess up with the main topics. Well or not, investing is a not critical item when running a company but that in my opinion, extremely powerful tool."
  };
  
  const sectionHeader2 = {
    title: 'Thank you, Salla',
    paragraph: "This class was for real damn good. We already gave feedback earlier, but I'm using the opportunity anyway to say thank you so much for transforming a subject that is normally not well received by mostly of the people into something exciting that we look forward to participate. Keep up the great work 😉💰"
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
                      src={require('./../../assets/images/icons8-investing-128.png')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Low risk
                  </h4>
                  <p className="m-0 text-sm">
                    Go through the concepts of investing and low risk content was personally boring because I already knew about it.
                     Still, I think it's nice the team get to create a solid base oon the subject. I believe the most commons in Finland are bank products and index funds.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/icons8-medium-risk-80.png')}
                      alt="Features tile icon 02"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                  High risk
                    </h4>
                  <p className="m-0 text-sm">
                    I still fell I don't have enough knowledge and base to make high risk investments in Finland. I had probably too high hopes 
                    in this intro and even if the team presented well and really knew about the subject, it didn't have enough time to caught up 
                    with my (maybe) deeper questions. I'm excited about angel investment, I believe it's a strong possibility after creating a solid product in the market.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/icons8-stock-240.png')}
                      alt="Features tile icon 03"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                  Stock
                    </h4>
                  <p className="m-0 text-sm">
                    I really liked the overview and example given by the intro team about stock. Tesla is a classic example to show supply versus demand. 
                    The quantity of cars made by Tesla anually doesn't match the quantity of people wishing to buy it. So even if the company is "new" and doesn't
                    have a very heavy portfolio, still, the stock value is higher than Toyota, a solid company in the market for years, heavely selling.
                    </p>
                </div>
              </div>
            </div>
            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/icons8-crypto-60.png')}
                      alt="Features tile icon 03"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                  Trend
                    </h4>
                  <p className="m-0 text-sm">
                    I didn't know the case of GameStop so it was nice to hear how much a trend can move the stock. I've seen it happening in 
                    crypto market but I didn't know it was possible in stock as well. It's scary to go all in an opportunity as GameStop where you 
                    can make tones of money in a day or also to loose a lot of money in few hours. As Ariel said, you need to be early enough in the trend.
                    </p>
                </div>
              </div>
            </div>
            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/icons8-app-store-144.png')}
                      alt="Features tile icon 03"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                  Applications
                    </h4>
                  <p className="m-0 text-sm">
                    There are multiple websites and apps to invest and manage your investments. 
                    The introduction team recomended Nordnet, Etoro, Robinhood, Binance and Cryto.com. It was nice
                    that many people of the team have experience investing in stock and cryptos to give some real examples and tips.
                    </p>
                </div>
              </div>
            </div>

            
            <SectionHeader data={sectionSecond} className="center-content spacer-48"  />
          </div>
          <SectionHeader data={sectionHeader2} className="center-content has-top-divider spacer-64" />
        </div>
      </div>
    </section>
  );
}

FeaturesTilesThird.propTypes = propTypes;
FeaturesTilesThird.defaultProps = defaultProps;

export default FeaturesTilesThird;