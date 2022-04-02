import logo from "./logo.svg";
import "./App.css";
import { jobList, jobTypes } from "./config/jobList";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          前端職缺：
          {jobList.filter((x) => x.jobType === jobTypes.frontEnd).length}
        </div>

        <h2>Developer Jobs</h2>
        <JobSection />
      </header>
    </div>
  );
}

const CompanyTitle = styled.h3`
  padding: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
`;

const JobItem = styled.div`
  width: 100%;
  display: flex;

  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1rem;
  font-size: 1.5rem;
`;

const JobTitle = styled.h4`
  color: #fff;
`;
const JobStacks = styled.div`
  display: flex;
`;

const JobSection = () => {
  return jobList.map(({ company, jobTitle, links, stack = [] }) => {
    return (
      <JobItem>
        <CompanyTitle>{company}</CompanyTitle>
        <a href={links} target="_blank">
          <JobTitle>{jobTitle}</JobTitle>
        </a>
        <JobStacks>
          <h5>用的技術：</h5>
          <div>{stack.join(", ")}</div>
        </JobStacks>
      </JobItem>
    );
  });
};

export default App;
