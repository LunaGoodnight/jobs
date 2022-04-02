import "./App.css";
import { jobList, jobTypes } from "./config/jobList";
import styled from "styled-components";
const Title = styled.h2`
  font-weight: bold;
`;
const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  width: 100%;
`;
const Wrapper = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Count = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 1.5rem;
  width: 100%;
`;
function App() {
  return (
    <Wrapper className="App">
      <Header>
        <Title>Developer Jobs</Title>
      </Header>
      <Count>
        前端職缺：
        {jobList.filter((x) => x.jobType === jobTypes.frontEnd).length}
      </Count>
      <JobSection />
    </Wrapper>
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
      <JobItem key={links}>
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
