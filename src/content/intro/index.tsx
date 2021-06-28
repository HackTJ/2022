import styles from "./intro.module.css";

const Intro = (): JSX.Element => (
  <>
    <a className="anchor" id="intro" href="#intro">
      Intro
    </a>
    <section className={styles.intro}>
      <div className={styles.container}>
        {/* <div className="vertical-segment colored"></div> */}
        <p className="large centered">
          Do you get excited watching your ideas come to life? Ever wanted to
          build the next Snapchat or create an Amazon Alexa skill? Program a
          drone? Create programs using the latest machine learning or virtual
          reality technology? Come to HackTJ to make new friends, build
          mind-blowing projects, attend workshops to learn new tricks, and have
          a fantastic time!
        </p>
      </div>
    </section>
  </>
);

export default Intro;
