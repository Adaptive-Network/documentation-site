import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import { useColorMode } from "@docusaurus/theme-common";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const theme = useColorMode();
  const imageSrc = theme.isDarkTheme
    ? "/img/logo_v2_icon_white_small.svg"
    : "/img/logo_v2_icon_green_small.svg";
  return (
    <header className={styles.heroBanner}>
      <div className="container text--center">
        <div className={styles.heroImage}>
          <img src={imageSrc} style={{ maxHeight: "100%" }} />
        </div>
        <Heading as="h1" className="hero__title">
          Adaptive Network
        </Heading>
        <p className="hero__subtitle">Documentation</p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
