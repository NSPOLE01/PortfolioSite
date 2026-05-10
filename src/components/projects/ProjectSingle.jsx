import { motion } from "framer-motion";

const ProjectSingle = ({ title, category, image, github }) => {
  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
    >
      <a href={github} target="_blank" rel="noreferrer" className="block h-full">
        <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark h-full flex flex-col">
          <div className="flex-shrink-0">
            <img
              src={image}
              className="rounded-t-xl border-none w-full"
              alt="Single Project"
            />
          </div>
          <div className="text-center px-4 py-6 flex flex-col justify-center flex-grow">
            <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
              {title}
            </p>
            <span className="text-lg text-ternary-dark dark:text-ternary-light">
              {category}
            </span>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

export default ProjectSingle;
