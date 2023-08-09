import developerDark from "../../images/developer-dark.svg";
import { motion } from "framer-motion";

const AppBanner = () => {
  return (
    <div className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2">
      <div className="w-full md:w-1/3 text-left">
        <div className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase">
          Hi, I'm Nikhil
        </div>

        <div className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200">
          A Computer Science Enthusiast and Senior at Vanderbilt University
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
        className="w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0"
      >
        <img src={developerDark} alt="Developer" />
      </motion.div>
    </div>
  );
};

export default AppBanner;
