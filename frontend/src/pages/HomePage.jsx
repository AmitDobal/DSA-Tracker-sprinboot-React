import Analytics from "../components/analytics/Analytics";
import BodySectionLayout from "../components/BodySectionLayout";
import MyProblems from "../components/problem/MyProblems";

const HomePage = () => {
  return (
    <div className="antialiased">
      <BodySectionLayout
        leftElement={<MyProblems />}
        rightElement={<Analytics />}
      />
    </div>
  );
};

export default HomePage;
