import { Button, Divider, Input, Modal, Select, Space } from "antd";
import { useRef, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
let index = 0;
const companiesOptions = [
  {
    value: "Amazon",
    label: "Amazon",
  },
  {
    value: "Google",
    label: "Google",
  },
  { value: "Microsoft", label: "Microsoft" },
  { value: "Apple", label: "Apple" },
  { value: "Facebook", label: "Facebook" },
  { value: "IBM", label: "IBM" },
  { value: "Oracle", label: "Oracle" },
  { value: "Salesforce", label: "Salesforce" },
  { value: "SAP", label: "SAP" },
  { value: "Adobe", label: "Adobe" },
  { value: "Intel", label: "Intel" },
  { value: "Cisco", label: "Cisco" },
  { value: "Twitter", label: "Twitter" },
  { value: "Netflix", label: "Netflix" },
  { value: "Uber", label: "Uber" },
  { value: "Spotify", label: "Spotify" },
  { value: "LinkedIn", label: "LinkedIn" },
  { value: "Slack", label: "Slack" },
  { value: "Dropbox", label: "Dropbox" },
  { value: "Palantir", label: "Palantir" },
  { value: "Square", label: "Square" },
  { value: "Stripe", label: "Stripe" },
  { value: "Shopify", label: "Shopify" },
  { value: "ServiceNow", label: "ServiceNow" },
  { value: "VMware", label: "VMware" },
  { value: "Atlassian", label: "Atlassian" },
  { value: "Zoom", label: "Zoom" },
  { value: "Oracle", label: "Oracle" },
  { value: "GitHub", label: "GitHub" },
  { value: "Red Hat", label: "Red Hat" },
  { value: "MongoDB", label: "MongoDB" },
  { value: "Snowflake", label: "Snowflake" },
  { value: "Elastic", label: "Elastic" },
  { value: "Twilio", label: "Twilio" },
  { value: "Alibaba Cloud", label: "Alibaba Cloud" },
  { value: "Salesforce", label: "Salesforce" },
  { value: "Palo Alto Networks", label: "Palo Alto Networks" },
  { value: "Splunk", label: "Splunk" },
  { value: "Okta", label: "Okta" },
  { value: "Cloudflare", label: "Cloudflare" },
  { value: "Qualys", label: "Qualys" },
  { value: "Duo Security", label: "Duo Security" },
  { value: "ServiceTitan", label: "ServiceTitan" },
  { value: "Nutanix", label: "Nutanix" },
  { value: "Datadog", label: "Datadog" },
  { value: "JFrog", label: "JFrog" },
  { value: "Coupa", label: "Coupa" },
  { value: "Sumo Logic", label: "Sumo Logic" },
  { value: "AppDynamics", label: "AppDynamics" },
  { value: "BigCommerce", label: "BigCommerce" },
  { value: "Asana", label: "Asana" },
  { value: "Trello", label: "Trello" },
  { value: "Monday.com", label: "Monday.com" },
  { value: "Basecamp", label: "Basecamp" },
  { value: "Lucidchart", label: "Lucidchart" },
  { value: "Figma", label: "Figma" },
  { value: "GitLab", label: "GitLab" },
  { value: "Codefresh", label: "Codefresh" },
  { value: "CircleCI", label: "CircleCI" },
  { value: "Chef", label: "Chef" },
  { value: "Puppet", label: "Puppet" },
  { value: "Ansible", label: "Ansible" },
  { value: "HashiCorp", label: "HashiCorp" },
  { value: "Hortonworks", label: "Hortonworks" },
  { value: "Cloudera", label: "Cloudera" },
  { value: "Elastic Path", label: "Elastic Path" },
  { value: "Couchbase", label: "Couchbase" },
  { value: "Redis Labs", label: "Redis Labs" },
  { value: "Neo4j", label: "Neo4j" },
  { value: "Talend", label: "Talend" },
  { value: "Trifacta", label: "Trifacta" },
  { value: "Alteryx", label: "Alteryx" },
  { value: "Domo", label: "Domo" },
  { value: "Looker", label: "Looker" },
  { value: "Sisense", label: "Sisense" },
  { value: "Tableau", label: "Tableau" },
  { value: "Power BI", label: "Power BI" },
  { value: "Qlik", label: "Qlik" },
  { value: "Splunk", label: "Splunk" },
  { value: "Sumo Logic", label: "Sumo Logic" },
  { value: "Airtable", label: "Airtable" },
];
const AddProblem = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [topics, setTopics] = useState([
    "Array",
    "Dynamic Programming",
    "Graph",
    "Linked List",
  ]);
  const [formData, setFormData] = useState({
    problemName: "",
    articleUrl: "",
    videoUrl: "",
    problemUrl: "",
    difficulty: "easy",
    companies: [],
    topic: "",
  });
  const [name, setName] = useState("");
  const inputRef = useRef(null);
  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const handleInput = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSelect = (value, name) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSelectTopic = (value) => {
    setFormData((prev) => ({ ...prev, topic: value }));
  };
  const addCompany = (e) => {
    e.preventDefault();
    setTopics([...topics, name || `New item ${index++}`]);
    setName("");
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  const handleChangeCompanies = (value) => {
    setFormData((prev) => ({ ...prev, companies: value }));
  };
  return (
    <div>
      <button
        type="button"
        onClick={showModal}
        className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2 text-center me-2  uppercase">
        ADD Problem
      </button>
      <Modal
        title="Add Problem"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}>
        <div className=" flex flex-col gap-2">
          <Input
            placeholder="Problem Name"
            value={formData.problemName}
            onChange={handleInput}
            name="problemName"
          />
          <Select
            defaultValue="Easy"
            onChange={(value) => handleSelect(value, "difficulty")}
            style={{
              width: 120,
            }}
            options={[
              {
                value: "easy",
                label: "Easy",
              },
              {
                value: "medium",
                label: "Medium",
              },
              {
                value: "hard",
                label: "Hard",
              },
            ]}
          />
          <Select
            onChange={handleSelectTopic}
            style={{
              width: 300,
            }}
            placeholder="Topic"
            dropdownRender={(menu) => (
              <>
                {menu}
                <Divider
                  style={{
                    margin: "8px 0",
                  }}
                />
                <Space
                  style={{
                    padding: "0 8px 4px",
                  }}>
                  <Input
                    placeholder="Other"
                    ref={inputRef}
                    value={name}
                    onChange={onNameChange}
                    onKeyDown={(e) => e.stopPropagation()}
                  />
                  <Button
                    type="text"
                    icon={<PlusOutlined />}
                    onClick={addCompany}></Button>
                </Space>
              </>
            )}
            options={topics.map((item) => ({
              label: item,
              value: item,
            }))}
          />
          <Select
            mode="multiple"
            placeholder="Companies"
            defaultValue={[]}
            onChange={handleChangeCompanies}
            style={{
              width: "100%",
            }}
            options={companiesOptions}
          />
          <Input
            placeholder="Problem Link"
            value={formData.problemUrl}
            onChange={handleInput}
            name="problemUrl"
          />
          <Input
            placeholder="Video Link"
            value={formData.videoUrl}
            onChange={handleInput}
            name="videoUrl"
          />
          <Input
            placeholder="Article Link"
            value={formData.articleUrl}
            onChange={handleInput}
            name="articleUrl"
          />
        </div>
      </Modal>
    </div>
  );
};

export default AddProblem;
