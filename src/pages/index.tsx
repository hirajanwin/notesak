import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Featured from '../components/Featured';
import Hero from '../components/Hero';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Notes made by Akshat Chauhan"
      > 
        <Hero />
        <Featured />
    </Layout>
  );
}
