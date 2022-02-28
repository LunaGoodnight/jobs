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
};

export const framework = {
  vue: "Vue",
  laravel: "Laravel",
};
export const stack = {
  docker: "Docker",
  jwt: "JWT",
};

export const language = {
  java: "Java",
  php: "PHP",
  node: "Node.js",
};
export const jobList = [
  {
    company: "日新技術有限公司",
    location: location.taichung,
    framework: framework.vue,
    lowSalary: 40000,
    highSalary: 60000,
    jobTitle: "WEB前端工程師",
    jotType: jobTypes.frontEnd,
    status: status.active,
  },
  {
    company: "睿訊有限公司",
    location: location.taipei,
    framework: framework.laravel,
    lowSalary: null,
    highSalary: null,
    jobTitle: "全/後端工程師",
    jotType: jobTypes.fullStack,
    status: status.active,
    stack: [stack.jwt, stack.docker],
    language: [language.java, language.php, language.node],
  },
];
