import React from 'react';
import { Card } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Colors from '../../styles/Colors';

type Feature = {
  title?: string;
  description?: string;
  icon?: any;
  marginTop?: string;
};

type FeatureCardProps = {
  feature: Feature;
};

const useStyles = makeStyles({
  iconBall: {
    marginLeft: '32px',
    display: 'grid',
    placeItems: 'center',
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    backgroundColor: Colors.primary['@darkViolet'],
    position: 'relative',
  },
  icon: {},
  cardContainer: (props: FeatureCardProps) => ({
    marginTop: props.feature.marginTop,
  }),
  textContent: {
    margin: '30px',
    paddingTop: '30px',
  },
  title: {
    fontSize: '20px',
    fontWeight: 900,
    color: Colors.primary['@veryDarkViolet'],
    paddingBottom: '10px',
  },
  description: {
    color: Colors.neutral['@grayishViolet'],
    fontSize: '12.5px',
    lineHeight: '1.75',
  },
});

const FeatureCard = (props: FeatureCardProps) => {
  const { title, description, icon } = props.feature;
  const styles = useStyles(props);
  return (
    <div>
      <div className={styles.cardContainer}>
        <div className={styles.iconBall}>
          <img src={icon} alt={`${title}-icon`} />
        </div>
        <Card
          sx={{
            width: '300px',
            marginTop: '-40px',
            zIndex: 100,
          }}
        >
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
