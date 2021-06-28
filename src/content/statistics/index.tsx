import { Pie } from "react-chartjs-2";

const schoolData: {
  labels: Array<string>;
  datasets: Array<{ data: Array<number> }>;
} = {
  labels: [
    "Thomas Jefferson High School for Science and Technology",
    "Wilbert Tucker Woodson High School",
    "Rock Ridge High School",
    "Bishop Ireton High School",
    "Academies of Loudoun",
    "Ocean Lakes High School",
    "West Springfield High School",
    "Riverside High School",
    "Baltimore Polytechnic Institute",
    "Montgomery Blair High School",
    "Oakton High School",
    "Stone Bridge High School",
    "John Champe High School",
    "James Madison High School",
    "Lake Braddock Secondary School",
    "Winston Churchill High School",
    "George C. Marshall High School",
    "Freedom High School",
    "Chantilly High School",
    "Washington-Liberty High School",
    "Other",
  ],
  datasets: [
    {
      data: [
        413, 19, 15, 13, 12, 9, 9, 6, 5, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 15,
      ],
    },
  ],
};
Object.freeze(schoolData);

const genderData: {
  labels: Array<string>;
  datasets: Array<{ data: Array<number>; backgroundColor: Array<string> }>;
} = {
  labels: ["Male", "Female", "Other"],
  datasets: [
    {
      data: [392, 160, 1],
      backgroundColor: ["#00caab", "#a000fd", "#bbbbbb"],
    },
  ],
};
Object.freeze(genderData);

const graduationData: {
  labels: Array<string>;
  datasets: Array<{ data: Array<number> }>;
} = {
  labels: ["2023", "2022", "2021", "2020"],
  datasets: [
    {
      data: [39, 162, 214, 137],
    },
  ],
};
Object.freeze(graduationData);

const Statistics = () => (
  <>
    <a className="anchor" id="demographics" href="#demographics">
      Demographics
    </a>
    <section id="demographics">
      <div className="container">
        <div className="animation-container vertical top right extra-right extra-height">
          <div className="animated" />
        </div>
        <h1 className="section-title">Demographics</h1>
        <div>
          <Pie data={schoolData} type="pie" />
        </div>
        <div>
          <Pie data={genderData} type="pie" />
        </div>
        <div>
          <Pie data={graduationData} type="pie" />
        </div>
      </div>
    </section>
  </>
);

export default Statistics;
