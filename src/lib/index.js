export const getTermByProf = (name, grades) => {
    let result = [];
    for (let i = 0; i < grades.size; ++i) {
        let sections = grades.get(i).get('sections')
        for (let k = 0; k < sections.size; ++k) {
            let profs = sections.get(k).get('profs')
            let flag = 0;
            for (let j = 0; j < profs.size; ++j) {
                if (profs.get(j) === name) {
                    result.push(grades.get(i).get('semester'))
                    flag = 1
                    break;
                }
            }
            if (flag === 1) break;
        }
    }
    return result;
}
export const getGradeByProf = (name, grades, value) => {
    let sections = grades.get('sections');
    let result = {
        A: 0,
        AB: 0,
        B: 0,
        BC: 0,
        C: 0,
        D: 0,
        total: 0,
        term: value
    }
    for (let i = 0; i < sections.size; ++i) {
        let item = sections.get(i)
        let profs = item.get('profs')
        for (let j = 0; j < profs.size; ++j) {
            let x = profs.get(j)
            if (x === name) {
                let grade = item.get('grade');
                console.log(grade)
                result.A += grade.get('A')
                result.AB += grade.get('AB')
                result.B += grade.get('B')
                result.BC += grade.get('BC')
                result.C += grade.get('C')
                result.D += grade.get('D')
            }
        }
    }
    result.total = result.A + result.AB + result.B + result.BC + result.C + result.D;
    return result;
}
export const getCumulativeGradeByProf = (name, grades, value) => {
    let result = {
        A: 0,
        AB: 0,
        B: 0,
        BC: 0,
        C: 0,
        D: 0,
        total: 0,
        term: value
    }
    for (let i = 0; i < grades.size; ++i) {
        let sections = grades.get(i).get('sections')
        for (let k = 0; k < sections.size; ++k) {
            let profs = sections.get(k).get('profs')
            let flag = 0;
            for (let j = 0; j < profs.size; ++j) {
                if (profs.get(j) === name) {
                    let grade = sections.get(k).get('grade');
                    result.A += grade.get('A');
                    result.AB += grade.get('AB');
                    result.B += grade.get('B');
                    result.BC += grade.get('BC');
                    result.C += grade.get('C');
                    result.D += grade.get('D');
                    break;
                }
            }
            if (flag === 1) break;
        }
    }
    result.total = result.A + result.AB + result.B + result.BC + result.C + result.D;
    return result;
}