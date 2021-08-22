import type { FunctionComponent } from "react";

import TeamPicture from "./TeamPicture";

import "./index.css";

const teamData = [
  {
    name: "Nishitha Vattikonda",
    about:
      "Nishitha is the Director of HackTJ 7.5 and 8.0. She's a senior, and this is her third year organizing HackTJ after participating during her freshman year. She’s passionate about empowering young women to pursue computer science—she serves as Vice President of Coding Lady Colonials, a computer science club focused on encouraging girls to pursue advanced coursework, career development, and extracurricular enrichment in computer science. In her free time, Nishitha enjoys reading science fiction and baking desserts with friends and family.",
    image: "NishithaVattikonda.png",
  },
  {
    name: "Marian Qian",
    about:
      "Marian is a senior at TJ and the assistant director of HackTJ 7.5 and 8.0. The excitement from her participation in HackTJ as an underclassmen led her to join the hackathon’s team last year, and she looks forward to planning this year’s HackTJ. She is interested in machine learning and the developments of the field in areas such as astronomy. Marian participates in Science Olympiad and the cheer team and is editor in chief of the yearbook. Outside of school, she enjoys sketching and watching TV shows.",
    image: "MarianQian.png",
  },
  {
    name: "Forrest Meng",
    about:
      "Forrest is a senior and serves as a sponsorship coordinator and maintains DevPost for HackTJ. He became interested in organizing HackTJ after participating in the hackathon for two years. Being interested in robotics and AI, Forrest is interested in how to spread STEM education and technology into everyday life, so he serves as part of the BranchOut! STEM Education Program management team. Besides interests in engineering and programming, Forrest also is a member of TJ’s Model UN team, a yearbook photographer, a school newspaper staff writer, and participates in the FIRST Tech Challenge.",
    image: "ForrestMeng.png",
  },
  {
    name: "Tammy Ding",
    about:
      "Tammy is a senior at TJ who serves as the graphic designer for HackTJ branding and is also responsible for creating and sending invoices. She was inspired by the organization and complexity of HackTJ after participating in the hackathon and writing an article for the school newspaper on the behind-the-scenes of the event. Outside of HackTJ, Tammy is part of the varsity cheer and track teams and immerses herself in a variety of extracurriculars, such as journalism, National Art Honor Society, and FIRST Tech Challenge.",
    image: "TammyDing.png",
  },
  {
    name: "Jazon He",
    about:
      "Jazon is a senior at TJ and manages registration, coordinates sponsorships, and develops the HackTJ website. He joined the HackTJ team after realizing how much work was put in by the members and wanted to be part of such a dedicated team. Jazon is particularly interested in business and how it intersects with CS and wants to become an entrepreneur in the future. Jazon is in the Policy Debate Team, Swim Team, Chinese Honors Society, and likes to read in his free time.",
    image: "JazonHe.png",
  },
  {
    name: "Rashad Philizaire",
    about:
      "Rashad is a senior at TJ and is involved in the website, Devpost, and workshop for HackTJ. He became interested in joining the team after hearing about how much time and energy the organizers would dedicate towards HackTJ. Rashad is passionate about computer science and especially fascinated by the fields of Artificial Intelligence and Machine Learning. He currently serves as the Black Student Union (BSU) President and TJ Consulting Club Vice President. In his free time, he likes to spend time with his friends and family, listen to music, and watch Netflix.",
    image: "RashadPhilizaire.png",
  },
  {
    name: "Raunak Daga",
    about:
      "Raunak is a senior at TJ and the website development lead. He is passionate about computer science and excited to be a part of the HackTJ team after participating for two years. He is also a big fan of debate as a teaching coordinator for the TJ Public Forum Debate Team. Outside of school, he spends his free time playing with his Yorkie, listening to music, and watching Futurama.",
    image: "RaunakDaga.png",
  },
  {
    name: "Sadhika Dhanasekar",
    about:
      "Sadhika Dhanasekar is a senior at TJ and is helping out with publicity, invoices, and mentors. Her past experiences at HackTJ encouraged her to join the team to provide opportunities for the next generations in a variety of technological activities. She has a strong interest in both biology and computer science, hoping to delve deeper into an intersection of the two as offered in bioinformatics, especially as a member of Coding Lady Colonials and Biology Society. During Sadhika’s free time, she’s often found curled up with a good book or baking with her family.",
    image: "SadhikaDhanasekar.png",
  },
  {
    name: "Sumanth Ratna",
    about:
      "Sumanth is a junior at TJ and is the judging lead and is working on a website redesign. Sumanth wanted to join the HackTJ team after participating in HackTJ when he was a freshman. Besides HackTJ, he spends a lot of time working on Ethics Bowl and Innovations in Concepts of Engineering. Outside of these clubs, he likes to work on machine learning projects, especially those that relate to biology. He spends most of his free time playing football and basketball with his friends and listening to music.",
    image: "SumanthRatna.png",
  },
  {
    name: "Anika Karpurapu",
    about:
      "Anika is a junior at TJ and works on internet/tech, judging, and designing HackTJ branding and merch. She decided to join the HackTJ Team and be part of the organization process after having an amazing time during her freshman year hackathon. To pursue her interests, Anika participates in CyberPatriot, where she teaches various cybersecurity concepts, Women in Science and Engineering (WISE), through which she promotes girls’ journeys in STEM, and competes as part of TJ’s computer teams. In her free time, she can be found running, baking, or hanging out with friends and family.",
    image: "AnikaKarpurapu.png",
  },
  {
    name: "Arjun Jagannathan",
    about:
      "Arjun is a junior at TJ and coordinates sponsorships, reaches out to mentors, and helps organize workshops. He became interested in joining the team after attending HackTJ 6.0. Arjun is passionate about business, specifically finance, and is an aspiring Investment Banker. He currently serves as the Senior Vice President of the Investment Club and participates in other business clubs, such as FBLA and Consulting Club. In his free time, Arjun loves to play basketball and soccer, listen to music, and trade stocks.",
    image: "ArjunJagannathan.png",
  },
  {
    name: "Pranav Mathur",
    about:
      "Pranav is a junior at TJHSST and works on behind-the-scenes tech for HackTJ. He loves computer science, especially algorithmic problem solving. He takes machine learning and computer vision at school and serves as the Co-Captain of TJ’s Intermediate Computer Team. Pranav is especially interested in the intersection of math, physics, and computer science. He also enjoys public speaking through TJ’s Speech team. In his free time, Pranav likes to play tennis, dance, and play piano.",
    image: "PranavMathur.png",
  },
  {
    name: "Samhita Vinay",
    about:
      "Samhita is a junior at TJHSST and is one of the mentors, workshops, and publicity coordinators at HackTJ. She became a part of the HackTJ team after attending HackTJ in her freshman year, and enjoyed the experience since she is passionate about biology and computer science and the parallels between the two fields. Samhita is also the communications secretary of the TJ Science Olympiad Team, and enjoys participating in competitions across the country. In her free time, she enjoys dancing and spending time with her family.",
    image: "SamhitaVinay.png",
  },
  {
    name: "Shreya Singh",
    about:
      "Shreya is a junior at TJ and is one of the mentors, workshops, and judging coordinators for HackTJ. She wanted to join the HackTJ team after attending the event in her freshman year and wanting to learn more about the behind-the-scenes experience. Shreya is passionate about artificial intelligence and chemistry and is interested in the intersection between these two fields. She is an officer of Coding Lady Colonials, where she teaches other club members about various computer science topics and applications. In her free time, Shreya enjoys running, photography, and playing the piano.",
    image: "ShreyaSingh.png",
  },
  {
    name: "Shreyas Mayya",
    about:
      "Shreyas is a junior at TJ and works on the Devpost, merch, branding, and social media presence for HackTJ. He is interested in operating systems and the intersection of CS and data science. Outside of HackTJ, Shreyas is the Head of IT for TJ Science Olympiad, a Student Sysadmin, and a member of TJ's band program and Latin Honor Society. In his free time, Shreyas can often be found tinkering with electronic devices around his house.",
    image: "ShreyasMayya.png",
  },
  {
    name: "Ms. Razzino",
    about:
      "Ms. Razzino is a Math Teacher at TJ and also the faculty sponsor of HackTJ. She was the Division Manager for Math and Computer Science at TJ for 5 years and gained an understanding and appreciation for computer science during that time. She also attended TJ back in the late 1990s and fondly remembers her Foundations of CS class. When not creating tests and grading papers, Ms. Razzino enjoys baking, skiing, travelling, and spending time with family and friends. ",
    image: "MsRazzino.jpg",
  },
];

const Team: FunctionComponent = () => (
  <>
    <a className="anchor" id="team" href="#team">
      Team
    </a>
    <section className="team" id="team">
      <div className="container">
        {/* <div
         className="horizontal-segment colored"
         style={{ left: "-6%", top: "-4.4%", width: "112%" }}
        ></div>
        <div
         className="vertical-segment colored"
         style={{ left: "-5.9%", top: "-3.4%" }}
        ></div> */}
        <h1 className="section-title">Meet the Team</h1>
        <div className="team-pictures">
          {teamData.map((person) => (
            <TeamPicture
              name={person.name}
              about={person.about}
              image={person.image}
              key={person.name}
            />
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Team;
