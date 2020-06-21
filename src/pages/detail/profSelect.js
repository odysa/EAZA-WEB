import { Select } from './style';
import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actionCreater from './store/actionCreater'
import  { getTermByProf,getCumulativeGradeByProf} from '../../lib/index'
class SelectBoard extends Component {
    render = () => {
        const { profs } = this.props
        const options = profs.map((item) => ({
            value: item
        })).unshift({ value: 'All' })
        const { handleChange, grades, totalTerm, currentValue, totalGrades } = this.props;
        return (
            <div>
                <Select
                    bordered={false}
                    defaultValue='All'
                    style={{ width: 200 }}
                    options={options}
                    onSelect={(value) => { handleChange(value, grades, totalTerm, currentValue, totalGrades) }}
                >
                </Select>
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return ({
        terms: state.getIn(['detail', 'currentList']),
        profs: state.getIn(['detail', 'profsList']),
        totalTerm: state.getIn(['detail', 'termList']),
        grades: state.getIn(['detail', 'grades']),
        currentValue: state.getIn(['detail', 'currentValue']),
        totalGrades: state.getIn(['detail', 'totalGrades'])
    })
}
const mapDispatchToProps = (dispatch) => {
    return ({
        handleChange(value, grades, term, currentValue, totalGrades) {
            if (value === 'All') {
                dispatch(actionCreater.changeProf('All'));
                dispatch(actionCreater.changeTerm(term));
                dispatch(actionCreater.changeValue('Cumulative'))
                dispatch(actionCreater.changeGrade(totalGrades))
                return
            }
            dispatch(actionCreater.changeProf(value))
            dispatch(actionCreater.changeTerm(getTermByProf(value, grades, 'Cumulative')))
            dispatch(actionCreater.changeValue('Cumulative'))
            dispatch(actionCreater.changeGrade(getCumulativeGradeByProf(value, grades, 'Cumulative')))
        }
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(SelectBoard);