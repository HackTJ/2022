import type { FunctionComponent } from "react";

import DevpostCard from "./DevpostCard";

import { CardDeck } from "reactstrap";

import styles from "./history.module.css";

// after 2019, the favicons are too low-quality

const HistoryPageContent: FunctionComponent<{}> = () => (
  <section className="centered-box relative">
    <div className={`icon icon-clock ${styles.clockIcon}`} />
    <h1 className="section-title">A Walk Through Memory Lane</h1>
    <CardDeck>
      <DevpostCard
        logo="https://raw.githubusercontent.com/HackTJ/2021/master/src/images/logo.png"
        iteration="8.0"
        year="2021"
        url="https://hacktj2021.devpost.com/"
      />
      <DevpostCard
        logo="https://raw.githubusercontent.com/HackTJ/2020/master/src/images/logo.png"
        iteration="7.5"
        year="2020"
        url="https://hacktj2020.devpost.com/"
      />
      <DevpostCard
        logo="https://hacktj.org/2019/img/logo2.png"
        iteration="6.0"
        year="2019"
        url="https://hacktj2019.devpost.com/"
      />
      <DevpostCard
        logo="https://hacktj.org/2018/img/favicon.png"
        iteration="5.0"
        year="2018"
        url="https://hacktj2018.devpost.com/"
      />
      <DevpostCard
        // logo="https://hacktj.org/2017/img/favicon.png"
        logo="https://raw.githubusercontent.com/HackTJ/2017/gh-pages/img/favicon.png"
        iteration="4.0"
        year="2017"
        url="https://hacktj2017.devpost.com/"
      />
      <DevpostCard
        logo="https://hacktj.org/2016/img/favicon.png"
        iteration="3.0"
        year="2016"
        url="https://hacktj2016.devpost.com/"
      />
      <DevpostCard
        logo="https://hacktj.org/2015/img/favicon.png"
        iteration="2.0"
        year="2015"
        url="https://hacktj2015.devpost.com/"
      />
    </CardDeck>
  </section>
);

export default HistoryPageContent;
