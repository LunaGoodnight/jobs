import logo from "./logo.svg";
import "./App.css";
import { jobList, jobTypes } from "./config/jobList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          前端職缺：
          {jobList.filter((x) => x.jobType === jobTypes.frontEnd).length}
        </div>
        {jobList.map((x) => {
          const {
            language,
            stack,
            framework,
            location,
            status,
            company,
            highSalary,
            jobTitle,

            links,
            lowSalary,
          } = x;

          return (
            <div key={links}>
              <a href={links} target="_blank">
                {jobTitle}
              </a>
            </div>
          );
        })}
      </header>
    </div>
  );
}

export default App;
