import React from 'react';
import { Card } from '@mui/material';
import type { Feature } from './FeatureCard.types';
import useStyles from './FeatureCard.styles';

export type FeatureCardProps = {
  feature: Feature;
};

const FeatureCard = (props: FeatureCardProps) => {
  const { title, description, icon } = props.feature;
  const styles = useStyles(props);
  return (
    <div>
      <div className={styles.cardContainer}>
        <div className={styles.iconBall}>
          <img className={styles.icon} src={icon} alt={`${title}-icon`} />
        </div>
        <Card className={styles.card}>
          <div className={styles.textContent}>
            <div className={styles.title}>{title}</div>
            <div className={styles.description}>{description}</div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FeatureCard;
