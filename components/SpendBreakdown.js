import { useEffect, useState } from "react";

//SVG IMPORTS FOR SVG COMPONENTS
import Personal from "../public/fitness-icon.svg";
import Transport from "../public/transport-icon.svg";
import Bills from "../public/bills-icon.svg";
import Social from "../public/takeaway-icon.svg";
import Student from "../public/books-icon.svg";

const components = {
  personal: Personal,
  transport: Transport,
  bills: Bills,
  social: Social,
  student: Student,
};

const SpendBreakdown = ({
  iconColor,
  iconName,
  title,
  monthlySpend,
  textColorName,
  text,
  spendType,
  maxSpend,
}) => {
  const [spendSuffix, setSpendSuffix] = useState(null);

  useEffect(() => {
    if (maxSpend == monthlySpend) {
      setSpendSuffix("+");
    } else {
      setSpendSuffix(null);
    }
  }, [maxSpend, monthlySpend]);

  //LOGIC FOR CONDITIONAL COLOR OF SPEND CAT SVG'S
  const Icon = components[iconName];

  return (
    <div className="flex flex-col w-full shadow-lg p-5 md:p-8 lg:p-4 xl:p-5 2xl:p-6 items-center bg-white flex-grow-0">
      <div className="flex flex-col md:flex-row items-start lg:items-center mg:flex-row w-full relative">
        {/* ICON COMPONENT THAT ACCEPTS TAILWIND CLASSES */}
        <div className="shrink-0 h-10 md:h-14 lg:h-10 xl:h-12 2xl:h-14 w-10 md:w-14 lg:w-10 xl:w-12 2xl:w-14 mb-2 md:mb-0">
          <Icon className={`${textColorName} fill-current h-full w-full`} />
        </div>
        <div className="flex-1 md:mx-6 lg:mx-4 xl:mx-6">
          <h2 className="text-sm md:text-base lg:text-xs 2xl:text-base text--dark-grey">
            {title}
          </h2>
          <p
            className={`uppercase text-lg md:text-2xl lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl font-bold ${textColorName} m-0`}
          >
            {spendType} monthly spend
          </p>
        </div>
        <div
          id="cat-one-right shrink-0"
          className="flex flex-col items-end absolute top-0 right-0 md:relative"
        >
          <h2
            className={`text-xl md:text-3xl lg:text-2xl xl:text-3xl font-bold ${textColorName} leading-none`}
          >
            £{monthlySpend}
            {spendSuffix && spendSuffix}
          </h2>
          <p className="font-normal text-xs md:text-sm lg:text-xs md:mt-1">
            Per Month
          </p>
        </div>
      </div>
      {text && (
        <div className="text-xs opacity-75 leading-snug mt-2 md:mt-4">
          <p>{text}</p>
        </div>
      )}
    </div>
  );
};

export default SpendBreakdown;
