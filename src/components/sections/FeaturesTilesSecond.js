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
    title: 'Budget, budget, budget..',
    paragraph: 'To understand any term or methodology that would come in the following classes of Money in Business, we needed first to understand what budgeting means. Budget is to estimate your spending, and have a tool to predict the revenue in a nutshell'
  };
  const sectionSecond = {
    // title: 'Budget, budget, budget..',
    paragraph: "In this class we learned we should read a book related to finance and write an essay about it. I confess it was quite intimidating task for me because I haven't read so much this year and now I would need to find time to read about a subject that wouldn't be my reading priority."
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/icons8-budget-60.png')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Forecast
                    </h4>
                  <p className="m-0 text-sm">
                    I believe this is my main takaway about budgeting. We need to have an estimation of revenue and expenses over an specific period we are making the budget.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/icons8-budget-100.png')}
                      alt="Features tile icon 02"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Personal budget
                    </h4>
                  <p className="m-0 text-sm">
                    It was interesting to see that many of us is quite used to the term and they have their own ways of running their personal budget. Apps, sheets and "formulas" were shared. 
                    {/* I made a note in my notebook about emegence fund and it was the trigger to my book choice. */}
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/icons8-budget-65.png')}
                      alt="Features tile icon 03"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Company budget
                    </h4>
                  <p className="m-0 text-sm">
                    It's a bigger budget compared to personal budget because company budget has many different factors that need to be considered while budgeting for a corporation. Such as available capital, business activities etc.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/icons8-budget-64.png')}
                      alt="Features tile icon 04"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Project budget
                    </h4>
                  <p className="m-0 text-sm">
                    The project budget works somehow in the same way as the earlier options. In this case, we don't necessarely get a revenue but we could have for example, incomes to support the budget.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/icons8-investing-64.png')}
                      alt="Features tile icon 05"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Bond/Share
                    </h4>
                  <p className="m-0 text-sm">
                    There is a fancy explanation for it but let's go with: A bond is basically a loan from an investor and a share is a single unit of ownership in a company.
                    </p>
                </div>
              </div>
            </div>

            
            
            <SectionHeader data={sectionSecond} className="center-content spacer-48"  />
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTilesSecond.propTypes = propTypes;
FeaturesTilesSecond.defaultProps = defaultProps;

export default FeaturesTilesSecond;