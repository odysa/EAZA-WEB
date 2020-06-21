import axios from 'axios'
import * as constants from './actionTypes'
import cookies from 'react-cookies'
import  {url} from '../../../secure/index'
export const get_course = (id) => {
    cookies.save('id', id, { path: '/' })
    return (dispatch) => {
        dispatch({
            type:constants.GET_COURSE,
            abb: '',
            number: 0,
            name: '',
            description: '',
            credit: 0,
            college: '',
            breadth: '',
            lastTaught: '',
            level: '',
            offered: '',
            requisite: '',
            repeatable: '',
            currentGrades: {},
            grades: [],
            termList: [],
            totalGrades: {},
            currentTerm: [],
            profsList: [],
            currentProf: '',
            currentValue: 'Cumulative'
        })
        axios.get(url+'course/' + id)
            .then((res) => {
                res = res.data
                let result = {
                    type: constants.GET_COURSE,
                    grades: res.grades,
                    abb: res.abb,
                    name: res.name,
                    number: res.number,
                    description: res.description,
                    credit: res.credit,
                    college: res.college,
                    breadth: res.breadths,
                    lastTaught: res.last_taught,
                    level: res.level,
                    offered: res.offered,
                    requisite: res.requisite,
                    repeatable: res.repeatable === 'Y',
                    profsList: res.profs_list
                }
                if (!result.grades) {
                    dispatch(result);
                    return
                }
                let totalGrades = {
                    A: 0,
                    AB: 0,
                    B: 0,
                    BC: 0,
                    C: 0,
                    D: 0,
                    others: 0,
                    total: 0,
                    term: 'Cumulative'
                }
                let termList = [];
                for (let i = 0; i < result.grades.length; ++i) {
                    let item = result.grades[i].cumulative;
                    termList.push(result.grades[i].semester);
                    totalGrades.A += item.A;
                    totalGrades.AB += item.AB;
                    totalGrades.B += item.B;
                    totalGrades.BC += item.BC;
                    totalGrades.C += item.C;
                    totalGrades.D += item.D;
                    totalGrades.total += item.total;
                }
                totalGrades.others = totalGrades.total - totalGrades.A - totalGrades.AB
                    - totalGrades.B - totalGrades.BC - totalGrades.C - totalGrades.D;
                result.totalGrades = totalGrades
                result.termList = termList;
                dispatch(result);
            })
            .catch(e => {
            })
    }
}
export const changeTerm = (term) => ({
    type: constants.CHANGE_TERM,
    term: term

})
export const changeGrade = (grade) => ({
    type: constants.CHANGE_GRADE,
    grade: grade
})
export const changeProf = (name) => ({
    type: constants.CHANGE_PROF,
    name: name,
    termChoice: 'Cumulative'
})
export const changeValue = (value) => ({
    type: constants.CHANGE_VALUE,
    value: value
})