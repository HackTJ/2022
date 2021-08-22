import { useState } from "react";
import type { FunctionComponent } from "react";

import data from "./questions";

import Card from "./Card";

import styles from "./questions.module.css";

const numAccordions = 2;
const numQuestionsPerAccordion = data.length / numAccordions;
const accordionData = Array(numAccordions)
  .fill(0)
  .map((_, index) => index * numQuestionsPerAccordion)
  .map((begin) => data.slice(begin, begin + numQuestionsPerAccordion));

const Questions: FunctionComponent<{}> = () => {
  const [selected, setSelected] = useState(-1);

  return (
    <>
      <a className="anchor" id="faq" href="#faq">
        FAQ
      </a>
      <section className="colored faq">
        <h1 className="section-title">FAQ</h1>
        <div className={styles.questions}>
          {accordionData.map((accordionQuestions, accordionIndex) => {
            const numPreviousQuestions = accordionData
              .slice(0, accordionIndex)
              .reduce(
                (accumulator, currentValue) =>
                  accumulator + currentValue.length,
                0
              ); // accordionIndex * numQuestionsPerAccordion;
            return (
              <div
                className={styles.column}
                key={`accordion-${accordionIndex}`}
              >
                {accordionQuestions.map(
                  ({ question, answer }, questionIndex) => {
                    const dataIndex = numPreviousQuestions + questionIndex + 1;
                    const cardRoundedBottom = selected - 1 === dataIndex;
                    const cardSelected = selected === dataIndex;
                    const cardRoundedTop =
                      selected > -1 && selected + 1 === dataIndex;
                    return (
                      <div
                        className={`${styles.cardContainer} ${
                          cardRoundedBottom ? styles.roundBottom : ""
                        } ${cardSelected ? styles.selected : ""} ${
                          cardRoundedTop ? styles.roundTop : ""
                        }`}
                        key={`question-${dataIndex}`}
                        onClick={() => {
                          setSelected(selected === dataIndex ? -1 : dataIndex);
                        }}
                      >
                        <Card
                          question={question}
                          answer={answer}
                          collapsed={selected !== dataIndex}
                        />
                      </div>
                    );
                  }
                )}
              </div>
            );
          })}
        </div>
        <p className={`large ${styles.bottomQuestion}`}>
          If your question is not answered here, just ask us:{" "}
          <a
            href="mailto:hello@hacktj.org"
            className={styles.email}
            target="_blank"
            rel="noopener noreferrer"
          >
            hello@hacktj.org
          </a>
          .
        </p>
      </section>
    </>
  );
};

export default Questions;
