import { SiPython, SiJavascript, SiTypescript, SiSwift, SiGo, SiHtml5, SiCss3 } from "react-icons/si";

const languages = [
  {
    name: "Python",
    icon: SiPython,
    color: "#3776AB",
    usage: 85,
    repos: "Polymarket, JobTracker, DiagnosticTool",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
    usage: 90,
    repos: "VandyDorm, VandyPool, NoteManager, TVShowSuggester + more",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    usage: 75,
    repos: "StyleMogul, BillBuddy, JobTracker",
  },
  {
    name: "Swift",
    icon: SiSwift,
    color: "#FA7343",
    usage: 65,
    repos: "waffl + 5 iOS projects",
  },
  {
    name: "HTML",
    icon: SiHtml5,
    color: "#E34F26",
    usage: 60,
    repos: "NYCApts, SlackClone, PortfolioSite",
  },
  {
    name: "CSS",
    icon: SiCss3,
    color: "#1572B6",
    usage: 60,
    repos: "VandyPool, PortfolioSite, SlackClone",
  },
  {
    name: "Go",
    icon: SiGo,
    color: "#00ADD8",
    usage: 35,
    repos: "CardDeckPackage",
  },
];

const TechStack = () => {
  return (
    <section className="py-5 sm:py-10 mt-5 sm:mt-10">
      <div className="text-center mb-10">
        <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
          Tech Stack
        </p>
        <div
          style={{
            width: 48,
            height: 3,
            margin: "10px auto 0",
            borderRadius: 2,
            background: "#000000",
          }}
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
        {languages.map(({ name, icon: Icon, color, usage, repos }) => (
          <div
            key={name}
            className="relative rounded-xl bg-secondary-light dark:bg-ternary-dark text-center"
            style={{
              border: "1px solid rgba(0,0,0,0.2)",
              boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
              padding: "28px 20px 24px",
            }}
          >
            {/* Icon */}
            <div className="flex justify-center mb-3">
              <Icon style={{ color, fontSize: 48 }} />
            </div>

            {/* Name */}
            <p
              className="font-general-medium text-sm uppercase tracking-widest mb-4"
              style={{ color: "#000000", letterSpacing: "0.12em" }}
            >
              {name}
            </p>

            {/* Usage bar */}
            <div
              style={{
                background: "rgba(0,0,0,0.08)",
                borderRadius: 999,
                height: 6,
                overflow: "hidden",
                marginBottom: 8,
              }}
            >
              <div
                style={{
                  width: `${usage}%`,
                  height: "100%",
                  borderRadius: 999,
                  background: "#000000",
                }}
              />
            </div>

            {/* Percentage */}
            <p
              className="text-xs text-ternary-dark dark:text-ternary-light"
              style={{ opacity: 0.6 }}
            >
              {usage}% usage
            </p>

            {/* Repos tooltip-style */}
            <p
              className="text-xs mt-2 text-ternary-dark dark:text-ternary-light"
              style={{ opacity: 0.45, lineHeight: 1.4 }}
            >
              {repos}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
