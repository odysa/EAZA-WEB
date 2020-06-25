/*
 * @Author: Chengxu Bian 
 * @Date: 2020-06-25 10:57:17 
 * @Last Modified by:   Chengxu Bian 
 * @Last Modified time: 2020-06-25 10:57:17 
 */
import {Select} from './style';
import React, {Component} from 'react';
import {connect} from 'react-redux'
import * as actionCreater from './store/actionCreater'
import  {getCumulativeGradeByProf,getGradeByProf} from '../../lib/index'

/**
 * A board for users to select from oppotions
 */
class courseSelect extends Component {
    render = () => {
        const {terms} = this.props
        const options = terms.map((item) => ({
            value: item
        })).unshift({value: 'Cumulative'})
        const {handleChange, grades, totalGrades, currentProf, currentValue} = this.props;
        return (
            <div>
                <Select
                    bordered={false}
                    value={currentValue}
                    style={{width: 200}}
                    options={options}
                    onSelect={(value) => {
                        handleChange(value, grades, totalGrades, currentProf)
                    }}
                >
                </Select>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return ({
        terms: state.getIn(['detail', 'currentTerm']),
        grades: state.getIn(['detail', 'grades']),
        totalGrades: state.getIn(['detail', 'totalGrades']),
        currentProf: state.getIn(['detail', 'currentProf']),
        currentValue: state.getIn(['detail', 'currentValue'])
    })
}
const mapDispatchToProps = (dispatch) => {
    return ({
        handleChange(value, grades, totalGrades, currentProf) {
            if (value === 'Cumulative') {
                // diplay cumulative information
                if (currentProf !== 'All')
                    dispatch(actionCreater.changeGrade(getCumulativeGradeByProf(currentProf, grades, value)))
                else dispatch(actionCreater.changeGrade(totalGrades))

            } else {
                for (let i = 0; i < grades.size; ++i) {
                    if (grades.get(i).get('semester') === value) {
                        if (currentProf === 'All')
                        // display all professor's information in a given semester
                            dispatch(actionCreater.changeGrade(grades.get(i).get('cumulative').set('term', value)));
                        else {
                            dispatch(actionCreater.changeGrade(getGradeByProf(currentProf, grades.get(i), value)))
                        }
                        break;
                    }
                }
            }
            dispatch(actionCreater.changeValue(value))
        }
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(courseSelect);