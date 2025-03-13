import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Seamlesss Integration',
    Svg: require('@site/static/img/undraw_integration.svg').default,
    description: (
      <>
        Easily integrate with third-party services and APIs to enhance your application's functionality.
      </>
    ),
  },
  {
    title: 'Highly Customizable',
    Svg: require('@site/static/img/undraw_customization.svg').default,
    description: (
      <>
        Customize every aspect of your application to fit your needs with flexible configurations and extensions.
      </>
    ),
  },
  {
    title: 'Scalable Performance',
    Svg: require('@site/static/img/undraw_scalability.svg').default,
    description: (
      <>
        Build applications that scale effortlessly with optimized performance and best practices.
      </>
    ),
  },
];


function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
