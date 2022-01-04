import brandrecognition from '../../static/images/icon-brand-recognition.svg';
import detailedRecords from '../../static/images/icon-detailed-records.svg';
import fullyCustomizable from '../../static/images/icon-fully-customizable.svg';

export const ADVANCED_STATISTICS = 'Advanced Statistics';

export const ADVANCED_STATISTICS_DESCRIPTION =
  'Track how your links are performing across the web with our advanced statistics dashboard.';

export const FEATURES = [
  {
    title: 'Brand Recognition',
    description:
      "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content",
    icon: brandrecognition,
    marginTop: '0px',
  },
  {
    title: 'Detailed Records',
    description:
      'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
    icon: detailedRecords,
    marginTop: '40px',
  },
  {
    title: 'Fully Customizable',
    description:
      'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
    icon: fullyCustomizable,
    marginTop: '80px',
  },
];
