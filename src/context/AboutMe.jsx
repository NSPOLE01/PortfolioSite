import NikhilResume from "../data/NikhilPolepalliResume.pdf";
import s from "./style.module.css";
import Nikhil from "../images/nikhil1.JPG";
const AboutMe = () => {
  return (
    <section className="py-5 sm:py-10 mt-5 sm:mt-10">
      <div className="text-center">
        <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark">
          About Me
        </p>
      </div>

      <div className={s.row}>
        <div className={s.col} style={{ width: "50%" }}>
          <div>
            <p style={{ paddingTop: 130, paddingRight: 50 }}>
              I am a 21 year old software engineer currently attending
              Vanderbilt University in Nashville, TN. I was born in Lousville,
              KY and am a political enthusiast, spikeball player, and a
              world-class chef. I love to kick-back and watch a good show, have
              a glass of wine
              {" (red > white)"}, and relax with some friends in my free time.
              I've been a software engineer for around 3 years, previosuly
              working at Northrop Grumman and Capital One. Prior to being a CS
              major, I was on the pre-law track with 7 years of debate
              experience, getting to travel all across the country and even to
              China! These past experineces have helped me develop strong
              communication, problem-solving, and critical thinking skills that
              help me with everything I do. I hope this website gives you some
              more insight about me! Download the Resume below to learn more
              about my professional experience!
            </p>
          </div>
        </div>
        <div className={s.col} style={{ width: "50%" }}>
          <div style={{ paddingTop: 30 }}>
            <img
              src={Nikhil}
              className="rounded-t-xl border-none"
              alt="Nikhil"
            />
          </div>
        </div>
      </div>

      <div
        className="text-center"
        style={{ paddingTop: "5%", paddingBottom: "5%" }}
      >
        <p
          className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark"
          style={{ paddingBottom: "2%" }}
        >
          Resume
        </p>

        <object
          data={NikhilResume}
          type="application/pdf"
          width="100%"
          height="800"
        >
          <p>
            Alternative text
            <a href={NikhilResume}></a>
          </p>
        </object>
      </div>
    </section>
  );
};

export default AboutMe;
