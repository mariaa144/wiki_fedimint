import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Community",
    Svg: require("@site/static/img/undraw_digital_currency_qpak.svg").default,
    description: (
      <>
        A simple open framework to deliver best practice community banking and
        second party custody for friends, family and communities.
      </>
    ),
  },
  {
    title: "Private",
    Svg: require("@site/static/img/undraw_bitcoin_p2p_re_1xqa.svg").default,
    description: (
      <>
        Fedimint, uses Chaumian eCash to provide privacy by default. Keep your
        balances and payments to yourself.
      </>
    ),
  },
  {
    title: "Interoperable",
    Svg: require("@site/static/img/undraw_nakamoto_-2-iv6.svg").default,
    description: (
      <>
        Fedimint provides integration through lighting to the wider bitcoin
        ecosystem.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
