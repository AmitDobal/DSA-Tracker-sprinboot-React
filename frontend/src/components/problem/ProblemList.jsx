import { useEffect, useState } from "react";
import Problem from "./Problem";
import { message } from "antd";
import axios from "axios";
const ProblemList = () => {
  const [problemData, setProblemData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(import.meta.env.VITE_PROBLEM_API);
      console.log(res.data);
      setProblemData(res.data)
      message.info("Succesfully fetched problem data!");
    } catch (error) {
      message.error("Cannot get Problem data!");
      console.error("Error while fetching problem data: ", error.message);
    }
  };

  return (
    <div>
      <Problem problemData ={problemData}/>
    </div>
  );
};

export default ProblemList;
