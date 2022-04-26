import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import AcmiImageUri from '@site/static/img/ACME-protocol-icon.png';

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  ImageUri?: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Microsoft Azure First',
    Svg: require('@site/static/img/microsoft-azure.svg').default,
    description: (
      <>
        Designed from the ground up to leverage <b>Azure Key Vault</b> for secrets and certificate operations. It's like the missing ACME issuer for Azure Key Vault.
      </>
    ),
  },
  {
    title: 'Standards Based',
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    ImageUri: AcmiImageUri,
    description: (
      <>
        Az-Acme uses the ACMI protocol for certificate operations so you can use <b>your preferred ACMI issuer</b>, not just Let's Encrypt.
      </>
    ),
  },
  {
    title: 'Use Existing Automation Tools',
    Svg: require('@site/static/img/github-actions.svg').default,
    description: (
      <>
        Use GitHub Actions, Azure Pipelines or your automation tool of choice. <b>No need to add more infrastructure</b> to manage and monitor.
      </>
    ),
  },
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
        <div className="features row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
