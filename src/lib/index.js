/*
 * @Author: Chengxu Bian
 * @Date: 2020-06-25 10:57:12
 * @Last Modified by:   Chengxu Bian
 * @Last Modified time: 2020-06-25 10:57:12
 */

export const getTermByProf = (name, grades) => {
  let result = [];
  for (let i = 0; i < grades.size; ++i) {
    let sections = grades.get(i).get("sections");
    for (let k = 0; k < sections.size; ++k) {
      let profs = sections.get(k).get("profs");
      let flag = 0;
      for (let j = 0; j < profs.size; ++j) {
        if (profs.get(j) === name) {
          result.push(grades.get(i).get("semester"));
          flag = 1;
          break;
        }
      }
      if (flag === 1) break;
    }
  }
  return result;
};

const accumulateGrades = (result, grade) => {
  result.A += grade.get("A");
  result.AB += grade.get("AB");
  result.B += grade.get("B");
  result.BC += grade.get("BC");
  result.C += grade.get("C");
  result.D += grade.get("D");
  return result;
};

export const getGradeByProf = (name, grades, value) => {
  let sections = grades.get("sections");
  let result = {
    A: 0,
    AB: 0,
    B: 0,
    BC: 0,
    C: 0,
    D: 0,
    total: 0,
    term: value,
  };
  for (let i = 0; i < sections.size; ++i) {
    let item = sections.get(i);
    let profs = item.get("profs");
    for (let j = 0; j < profs.size; ++j) {
      let x = profs.get(j);
      if (x === name) {
        let grade = item.get("grade");
        result = accumulateGrades(result, grade);
      }
    }
  }
  result.total =
    result.A + result.AB + result.B + result.BC + result.C + result.D;
  return result;
};

export const getCumulativeGradeByProf = (name, grades, value) => {
  let result = {
    A: 0,
    AB: 0,
    B: 0,
    BC: 0,
    C: 0,
    D: 0,
    total: 0,
    term: value,
  };
  for (let i = 0; i < grades.size; ++i) {
    let sections = grades.get(i).get("sections");
    for (let k = 0; k < sections.size; ++k) {
      const profs = sections.get(k).get("profs");
      let flag = 0;
      for (let j = 0; j < profs.size; ++j) {
        if (profs.get(j) === name) {
          const grade = sections.get(k).get("grade");
          result = accumulateGrades(result, grade);
          break;
        }
      }
      if (flag === 1) break;
    }
  }
  result.total =
    result.A + result.AB + result.B + result.BC + result.C + result.D;
  return result;
};

export const getBreadthList = (breadths) => {
  //subject code
  const type = {
    P: "Physical Sci",
    B: "Biological Sci",
    S: "Social Sci",
    C: "Com B",
    A: "Com A",
    L: "Literatures",
    H: "Humanities",
    N: "Natural Sci",
    E: "Ethnic Studies",
  };
  //convert to list
  let result = [];
  breadths.foreach((item) => {
    if (item !== "/") result.push(type[item]);
  });
  return result;
};

export const getLevel = (level) => {
  //level code of course
  const type = {
    E: "Elementary",
    I: "Intermediate",
    A: "Advanced",
  };
  return type[level];
};
