/*
 * @Author: Chengxu Bian
 * @Date: 2020-06-25 10:57:12
 * @Last Modified by:   Chengxu Bian
 * @Last Modified time: 2020-06-25 10:57:12
 */

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
  //empty string, then return empty array
  if (!breadths.length) return [];
  //convert to list
  const result = breadths.split("/").map((item) => type[item]);
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

export const getTermByProf = (name, grades) => {
  let result = [];

  for (let grade of grades) {
    const sections = grade.get("sections");
    for (let section of sections) {
      const profs = section.get("profs");
      let flag = 0;
      for (let prof of profs) {
        if (prof === name) {
          result.push(grade.get("semester"));
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

const createDefaultGrade = (value) => ({
  A: 0,
  AB: 0,
  B: 0,
  BC: 0,
  C: 0,
  D: 0,
  total: 0,
  term: value,
});

//sum up
const getSum = (result) => {
  result.total =
    result.A + result.AB + result.B + result.BC + result.C + result.D;
  return result;
};

// get grade of a professor in a semester
export const getGradeByProf = (name, grades, value) => {
  const sections = grades.get("sections");
  let result = createDefaultGrade(value);

  for (let item of sections) {
    const profs = item.get("profs");
    for (let profName of profs) {
      if (profName === name) {
        let grade = item.get("grade");
        result = accumulateGrades(result, grade);
      }
    }
  }
  return getSum(result);
};

// get all grades of a professor 
export const getCumulativeGradeByProf = (name, grades, value) => {
  let result = createDefaultGrade(value);

  for (let grade of grades) {
    const sections = grade.get("sections");
    for (let section of sections) {
      const profs = section.get("profs");
      for (let prof of profs) {
        if (prof === name) {
          const grade = section.get("grade");
          result = accumulateGrades(result, grade);
          break;
        }
      }
    }
  }

  return getSum(result);
};
