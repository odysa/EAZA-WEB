import React, { Component } from 'react'
import { Card } from './style';
import { Tag } from 'antd'

class Course extends Component {

    render() {
        const { abb, number, name, tags, grade } = this.props;
        return (
            <Card
                bordered={false}
                key={number + abb}
                hoverable
                title={abb + ' ' + number}
                extra={grade ? 'A :' + ' ' + (grade * 100).toFixed(1) + '%' : 'None'}
            >
                <Card.Meta title={name} />
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

export default Course;