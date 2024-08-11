/* eslint-disable react/prop-types */
const LeftSection = ({ children }) => <div className="w-3/4">{children}</div>;
const RightSection = ({ children }) => <div>{children}</div>;

const BodySectionLayout = ({ leftElement, rightElement }) => {
  return (
    <div className="flex flex-row gap-8 bg-gradient-to-tr from-slate-700 to-slate-800 text-slate-50 h-full p-4">
      <LeftSection>{leftElement}</LeftSection>
      <RightSection>{rightElement}</RightSection>
    </div>
  );
};

export default BodySectionLayout;
