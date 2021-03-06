export const jobTypes = {
  frontEnd: "前端工程師",
  backEnd: "後端工程師",
  fullStack: "全端工程師",
};

export const status = {
  active: "開啟中",
  close: "職缺已關閉",
};

export const location = {
  taichung: "Taichung",
  taipei: "Taipei",
  remote: "Remote",
  kaohsiung: "Kaohsiung",
};

export const framework = {
  vue: "Vue",
  laravel: "Laravel",
  django: "Django",
  react: "React",
  angular: "Angular",
};

export const stack = {
  docker: "Docker",
  jwt: "JWT",
  postgreSQL: "PostgreSQL",
  sqlServer: "SQL Server",
  webSocket: "WebSocket",
  flutter: "Flutter",
  php: "PHP",
  node: "Node.js",
  angular: "Angular",
};

export const language = {
  java: "Java",
  php: "PHP",
  node: "Node.js",
  python: "Python",
  javaScript: "JavaScript",
};

export const jobList = [
  {
    company: "新加坡商耐思人工智能有限公司台灣分公司",
    links: "https://www.104.com.tw/company/1a2x6bl2di",
    location: location.taipei,
    framework: framework.react,
    lowSalary: null,
    highSalary: null,
    jobTitle: "Frontend Engineer / 前端工程師",
    jobType: jobTypes.frontEnd,
    status: status.active,
  },
  {
    company: "日新技術有限公司",
    links: "https://www.104.com.tw/company/1a2x6bl1pm",
    location: location.taichung,
    framework: framework.vue,
    lowSalary: 40000,
    highSalary: 60000,
    jobTitle: "WEB前端工程師",
    jobType: jobTypes.frontEnd,
    status: status.active,
    stack: [stack.flutter, stack.php],
  },
  {
    company: "睿訊有限公司",
    links: "https://www.104.com.tw/company/1a2x6bj0c3",
    location: location.taipei,
    framework: framework.laravel,
    lowSalary: null,
    highSalary: null,
    jobTitle: "全/後端工程師",
    jobType: jobTypes.fullStack,
    status: status.active,
    stack: [stack.jwt, stack.docker],
    language: [language.java, language.php, language.node],
  },
  {
    company: "吃香喝辣科技股份有限公司",
    links: "https://www.104.com.tw/company/1a2x6bk6bo",
    location: location.remote,
    framework: framework.django,
    lowSalary: null,
    highSalary: 160000,
    jobTitle: "外商 - [資深] 後端網頁開發工程師 (全遠端) ",
    jobType: jobTypes.backEnd,
    status: status.active,
    stack: [stack.postgreSQL, stack.sqlServer],
    language: [language.java, language.node, language.python],
  },
  {
    company: "坊和企業有限公司",
    links: "https://www.104.com.tw/job/7hrsj?jobsource=company_job",
    location: location.kaohsiung,
    framework: framework.vue,
    lowSalary: 1500000,
    highSalary: null,
    jobTitle: "網頁高階前端工程師/ Lead Web Frontend Engineer ",
    jotType: jobTypes.frontEnd,
    status: status.active,
    stack: [stack.webSocket],
    language: [language.javaScript],
  },
  {
    company: "美樂家有限公司台灣分公司",
    links: "https://www.104.com.tw/job/7if5t?jobsource=jolist_b_relevance",
    location: location.taipei,
    framework: framework.angular,
    lowSalary: null,
    highSalary: null,
    jobTitle: "Front End Web Developer (網頁前端開發工程師)",
    jotType: jobTypes.frontEnd,
    status: status.active,
    stack: [stack.node],
    language: [language.javaScript],
  },
];
