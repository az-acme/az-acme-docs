import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <div>
          <p>
            <span>✔</span> Use your existing CI/CD or automation tool of choice for certificate operations.<br/>
            <span>✔</span> Keep things simple with standalone CLI. Avoid provisioning additional compute resources.<br/>
            <span>✔</span> Opinioned about Azure, but not how you schedule the <code>az-acme</code> CLI.<br/>
          </p>
        <div >
            <img src="https://github.com/az-acme/az-acme-cli/raw/main/docs/force-order.gif" className="console" />
          </div>
        </div>

        <br/>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/category/getting-started">
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
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
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
