import React from "react";
import ReactFastMarquee from "react-fast-marquee";

const Marquee = () => {
  const marqueeData = [
    "IRCTC would never offer to install any app in response to a customer complaint or request personal financial information from you, such as your date of birth, debit or credit card number, OTP, PIN, or CV PAN.",
    "IRCTC would never offer to install any app in response to a customer complaint or request personal financial information from you, such as your date of birth, debit or credit card number, OTP, PIN, or CV PAN.",
  ];

  return (
    <ReactFastMarquee
      pauseOnHover={true}
      className="bg-red-500 py-2 text-xs text-white md:py-3"
    >
      {marqueeData.map((data, i) => (
        <React.Fragment key={i}>
          {data}
          {i !== marqueeData.length - 1 ? (
            <span className="mx-10">•</span>
          ) : (
            <span className="me-20"></span>
          )}
        </React.Fragment>
      ))}
    </ReactFastMarquee>
  );
};

export default Marquee;
