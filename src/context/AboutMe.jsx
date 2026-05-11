import NikhilResume from "../data/Nikhil_Polepalli_Software_Engineer.pdf";
import Nikhil from "../images/nikhil1.JPG";

const tiles = [
  {
    num: "01",
    label: "Background",
    text: "Vanderbilt Alumnus living in NYC and working at Capital One. Born and raised in Louisville, KY — a political junkie and proud Kentuckian.",
  },
  {
    num: "02",
    label: "Interests",
    text: "Spikeball player, world-class chef, and wine enthusiast (red > white). When I'm not coding, I'm kicking back with a good show and great company.",
  },
  {
    num: "03",
    label: "Experience",
    text: "Backend Engineer of 5 years specializing in high throughput streaming and ETL pipelines.",
  },
  {
    num: "04",
    label: "Debate & Skills",
    text: "Before CS, I was on the pre-law track with 7 years of competitive debate — traveling across the country and to China. It shaped how I think, communicate, and solve problems.",
  },
];

const AboutMe = () => {
  return (
    <section className="py-5 sm:py-10 mt-5 sm:mt-10">
      <div className="text-center mb-10">
        <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
          About Me
        </p>
        <div
          style={{
            width: 48,
            height: 3,
            margin: "10px auto 0",
            borderRadius: 2,
            background: "linear-gradient(90deg, #407BFF, #2563eb)",
          }}
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-10 sm:gap-14 items-stretch">
        {/* Tiles column */}
        <div className="flex flex-col w-full sm:w-1/2" style={{ gap: '45px' }}>
          {tiles.map(({ num, label, text }) => (
            <div
              key={num}
              className="flex-1 relative overflow-hidden rounded-xl bg-secondary-light dark:bg-ternary-dark text-center"
              style={{
                border: "1px solid",
                borderColor: "rgba(64,123,255,0.35)",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                padding: "24px 20px 32px",
              }}
            >
              {/* Ghost number */}
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: -10,
                  right: 10,
                  fontSize: 72,
                  fontWeight: 800,
                  lineHeight: 1,
                  opacity: 0.06,
                  userSelect: "none",
                  color: "#407BFF",
                  letterSpacing: "-2px",
                }}
              >
                {num}
              </span>

              {/* Accent top bar */}
              <div
                style={{
                  width: 32,
                  height: 3,
                  borderRadius: 2,
                  background: "linear-gradient(90deg, #407BFF, #2563eb)",
                  margin: "0 auto 12px",
                }}
              />

              <p
                className="font-general-medium text-xs uppercase tracking-widest mb-3"
                style={{ color: "#407BFF", letterSpacing: "0.15em" }}
              >
                {label}
              </p>
              <p className="text-ternary-dark dark:text-ternary-light leading-relaxed text-sm sm:text-base">
                {text}
              </p>
            </div>
          ))}
        </div>

        {/* Image column */}
        <div className="w-full sm:w-1/2">
          <img
            src={Nikhil}
            className="w-full h-full object-cover"
            style={{
              borderRadius: 16,
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
            }}
            alt="Nikhil"
          />
        </div>
      </div>

      {/* Resume section */}
      <div
        className="text-center"
        style={{ paddingTop: "5%", paddingBottom: "5%" }}
      >
        <p
          className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light"
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
            <a href={NikhilResume}>Download Resume</a>
          </p>
        </object>
      </div>
    </section>
  );
};

export default AboutMe;
