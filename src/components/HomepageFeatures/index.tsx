import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import DocusaurusImageUrl from '@site/static/img/ACME-protocol-icon.png';

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  ImageUri?: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Design for Microsoft Azure',
    Svg: require('@site/static/img/microsoft-azure-seeklogo.com.svg').default,
    description: (
      <>
        Az-Acme has been designed from the ground up as an opinionated approach to ACMI certificate management in Microsoft Azure.
      </>
    ),
  },
  {
    title: 'ACMI Compliant',
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    ImageUri: DocusaurusImageUrl,
    description: (
      <>
        Az-Acme uses the ACMI protocol for certificate operations, meaning you can use your preferred issuer, not just Let's Encrypt.
      </>
    ),
  },
  // {
  //   title: 'Flexible Execution',
  //   Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
  //   description: (
  //     <>
  //       Run Az-Acme is a standalone CLI to allow you to choose how you want to automated it, or use the GitHub action for no-fuss usage. 
  //     </>
  //   ),
  // },
];

function Feature({title, Svg, ImageUri, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        { Svg ? <Svg className={styles.featureSvg} role="img" /> : null }
        { ImageUri? <img src={ImageUri} className={styles.featureImg} role="img" /> : null }
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
