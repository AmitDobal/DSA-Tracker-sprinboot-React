/* eslint-disable react/prop-types */
import { Table } from "antd";
import { useEffect, useState } from "react";
import { SiLeetcode } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
import { RiArticleFill } from "react-icons/ri";
import { FaNoteSticky } from "react-icons/fa6";
const Problem = ({ problemData }) => {
  const [data, setData] = useState([]);
  const columns = [
    { title: "Status", dataIndex: "status" },
    { title: "Problem", dataIndex: "problemName" },
    {
      title: "Practice",
      dataIndex: "problemUrl",
      render: (url) => (
        <a
          href={url}
          target="_blank"
          className="flex flex-row justify-center text-lg">
          <SiLeetcode />
        </a>
      ),
    },
    {
      title: "Video",
      dataIndex: "videoUrl",
      render: (url) => (
        <a
          href={url}
          target="_blank"
          className="flex flex-row justify-center text-lg">
          <FaYoutube />
        </a>
      ),
    },
    {
      title: "Article",
      dataIndex: "articleUrl",
      render: (url) => (
        <a
          href={url}
          target="_blank"
          className="flex flex-row justify-center text-lg">
          <RiArticleFill />
        </a>
      ),
    },
    {
      title: "Difficulty",
      dataIndex: "difficulty",
      filters: [
        {
          text: "Easy",
          value: "EASY",
        },
        {
          text: "Medium",
          value: "MEDIUM",
        },
        {
          text: "Hard",
          value: "HARD",
        },
      ],
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record?.difficulty?.startsWith(value),
      // width: "30%",
    },
    {
      title: "Note",
      dataIndex: "note",
      render: (url) => (
        <a
          href={url}
          target="_blank"
          className="flex flex-row justify-center text-lg">
          <FaNoteSticky />
        </a>
      ),
    },

    // {
    //   title: "Age",
    //   dataIndex: "age",
    //   sorter: (a, b) => a.age - b.age,
    // },
    // {
    //   title: "Address",
    //   dataIndex: "address",
    //   filters: [
    //     {
    //       text: "London",
    //       value: "London",
    //     },
    //     {
    //       text: "New York",
    //       value: "New York",
    //     },
    //   ],
    //   onFilter: (value, record) => record.address.startsWith(value),
    //   filterSearch: true,
    //   width: "40%",
    // },
  ];
  useEffect(() => {
    const rowData = createData();
    setData(rowData);
  }, [problemData]);

  const createData = () => {
    return problemData.map((problem) => ({ ...problem, key: problem.id }));
  };

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <>
      {console.log(data)}
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </>
  );
};

export default Problem;
