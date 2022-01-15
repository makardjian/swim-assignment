import React from 'react';
import FeatureCard from './FeatureCard/FeatureCard';
import {
  ADVANCED_STATISTICS_HEADER,
  ADVANCED_STATISTICS_DESCRIPTION,
  FEATURES,
} from './LandingPageBottom.constants';
import useStyles from './LandingPageBottom.styles';
import type { Feature } from './FeatureCard/FeatureCard.types';

const LandingPageBottom = () => {
  const styles = useStyles();
  return (
    <section>
      <div className={styles.container}>
        <h2 className={styles.header}>{ADVANCED_STATISTICS_HEADER}</h2>
        <p className={styles.subheader}>{ADVANCED_STATISTICS_DESCRIPTION}</p>
        <div className={styles.featuresContainer}>
          {FEATURES.map((feature: Feature, index: number) => {
            return (
              <FeatureCard
                feature={feature}
                key={`${feature?.title}-${index}`}
              />
            );
          })}
          <div className={styles.horizontalColorBar}></div>
        </div>
      </div>
    </section>
  );
};

export default LandingPageBottom;
