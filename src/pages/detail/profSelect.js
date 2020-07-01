/*
 * @Author: Chengxu Bian
 * @Date: 2020-06-25 10:56:31
 * @Last Modified by: Chengxu Bian
 * @Last Modified time: 2020-07-02 00:56:24
 */
import { Select } from "./style";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreater from "./store/actionCreater";
import { getTermByProf, getCumulativeGradeByProf } from "../../lib/index";
/**
 * Board to select professors
 */
class profSelect extends Component {
  render = () => {
    const { profs } = this.props;
    //convert to object and add 'All' to the ojects
    const options = profs
      .map((item) => ({
        value: item,
      }))
      .unshift({ value: "All" });
    const {
      handleChange,
      grades,
      totalTerm,
      totalGrades,
    } = this.props;
    return (
      <div style={{marginTop:'1rem'}}>
        <Select
          bordered={false}
          defaultValue="All"
          style={{ width: 200 }}
          options={options}
          onSelect={(value) => {
            handleChange(value, grades, totalTerm, totalGrades);
          }}
        ></Select>
      </div>
    );
  };
}

/**
 * get date from state
 * @param {immutableJs object} state
 */
const mapStateToProps = (state) => {
  return {
    terms: state.getIn(["detail", "currentList"]),
    profs: state.getIn(["detail", "profsList"]),
    totalTerm: state.getIn(["detail", "termList"]),
    grades: state.getIn(["detail", "grades"]),
    totalGrades: state.getIn(["detail", "totalGrades"]),
  };
};
/**
 * dispatch change to state
 * @param {*} dispatch
 */
const mapDispatchToProps = (dispatch) => {
  return {
    handleChange(value, grades, term, totalGrades) {
      if (value === "All") {
        console.log(totalGrades);
        //display all profesors
        dispatch(actionCreater.changeProf("All"));
        dispatch(actionCreater.changeTerm(term));
        dispatch(actionCreater.changeValue("Cumulative"));
        dispatch(actionCreater.changeGrade(totalGrades));
        return;
      }
      dispatch(actionCreater.changeProf(value));
      dispatch(
        actionCreater.changeTerm(getTermByProf(value, grades, "Cumulative"))
      );
      dispatch(actionCreater.changeValue("Cumulative"));
      dispatch(
        actionCreater.changeGrade(
          getCumulativeGradeByProf(value, grades, "Cumulative")
        )
      );
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(profSelect);
