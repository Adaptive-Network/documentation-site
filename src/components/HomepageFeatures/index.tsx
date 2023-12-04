import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import { useColorMode } from "@docusaurus/theme-common";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

type FeatureItem = {
  title: string;
  SVGLight: React.ComponentType<React.ComponentProps<"svg">>;
  SVGDark: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
  link: string;
};

const FeatureComponent = (Content: FeatureItem) => {
  const theme = useColorMode();
  const color = theme.isDarkTheme ? "#1b1b1d" : "#ffffff";
  const hoverColor = theme.isDarkTheme ? "#232326" : "#d9d9d9";

  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const backgroundColor = hovered ? hoverColor : color;

  const Svg = theme.isDarkTheme ? Content.SVGDark : Content.SVGLight;

  return (
    <Link
      to={Content.link}
      className={clsx("col col--6")}
      style={{
        textDecoration: "none",
        paddingLeft: "3rem",
        paddingRight: "3rem",
        backgroundColor: backgroundColor,
        borderRadius: "1rem",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
          <div>
            <Heading as="h3">{Content.title}</Heading>
            <p>{Content.description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

const FeatureList: FeatureItem[] = [
  {
    title: "Hoptimize",
    SVGLight: require("@site/static/img/an_hoptimize-icon_green.svg").default,
    SVGDark: require("@site/static/img/an_hoptimize-icon_white.svg").default,
    description: (
      <>
        Hoptimize is a grasshopper plugin that makes using, analysing, debugging
        and reporting on the use of Grasshopper a breeze.
      </>
    ),
    link: "/docs/hoptimize/intro",
  },
  {
    title: "Scientia",
    SVGLight: require("@site/static/img/an_scientia_logo_green.svg").default,
    SVGDark: require("@site/static/img/an_scientia_logo_white.svg").default,
    description: (
      <>
        Scientia is a knowledge management platform that enables users to
        assemble knowledge networks from a variety of sources and media.
      </>
    ),
    link: "/docs/scientia/intro",
  },
];

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container" style={{ width: "100%" }}>
        <div className="row margin--md">
          {FeatureList.map((props, idx) => (
            <FeatureComponent key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
