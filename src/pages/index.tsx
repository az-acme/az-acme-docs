import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import OrderConsoleImage from '@site/static/img/force-order.gif'

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <div>
          <p>
            <span>✔</span> Simple standalone CLI for flexible usage.<br/>
            <span>✔</span> Leverage Azure Key Vault for all Certificate and Secret storage.<br/>
            <span>✔</span> Use your existing CI/CD or automation tool of choice for certificate operations.<br/>
            
          </p>
        <div >
            <img src={OrderConsoleImage} className="console" />
          </div>
        </div>

        <br/>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/introduction">
            <b>See how it works</b>
          </Link>&nbsp;&nbsp;&nbsp;
          <Link
            className="button button--secondary button--lg"
            to="/docs/category/getting-started">
            <b>Get started now</b>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Simplest way to implement ACMI compliant certificate management for Azure Key Vault">
      <HomepageHeader />
      <div>
        <div>
        </div>
      </div>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
