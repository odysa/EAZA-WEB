import React, { Component } from 'react'
import { Card } from './style';
import { Tag } from 'antd';
import * as actionCreater from '../detail/store/actionCreater'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
class Course extends Component {

    render() {
        const { abb, number, name, tags, grade, handleClick, id } = this.props;
        return (
            <Card
                bordered={false}
                key={number + abb}
                hoverable
                title={abb.length < 27 ? abb + ' ' + number : abb.slice(0, 27) + '... ' + number}
                extra={grade ? 'A :' + ' ' + (grade * 100).toFixed(1).toString() + '%' : 'None'}
                onClick={() => { handleClick(id); this.props.history.push('/detail'); }}
            >
                {name}
                <br />
                {tags.map((x, key) => {
                    return (
                        <Tag
                            key={key}
                        >{x}</Tag>
                    )
                })}
            </Card >
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick(id) {
            dispatch(actionCreater.get_course(id))
        }
    };
};
export default connect(null, mapDispatchToProps)(withRouter(Course));