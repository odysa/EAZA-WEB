import React, { Component } from "react";
import { Input, Menu, Tooltip } from 'antd';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import { actionCreaters } from '../pages/display/store'
const { Search } = Input
const { SubMenu } = Menu
var state = {
    prof: false,
    breadths: []
}
var isProf = (e) => {
    if (e.key == "prof") {
        state.prof = !state.prof;
    }
    else {
        let index = state.breadths.indexOf(e.key);
        if (index === -1) {
            state.breadths.push(e.key);
        } else {
            state.breadths.splice(index, 1);
        }

    }
}
class SearchBoard extends Component {


    render = () => {
        const { handleSearch, handleChange } = this.props;
        return (
            <div
                style={{
                    background: 'white',
                    width: '250px',
                    boxShadow: '0 0 1rem rgba(0,0,0,.1)',
                    borderRadius: '5px',
                    border: 'None'
                }}
            >
                <Search enterButton
                    placeholder='left blank for all'
                    onSearch={(value) => handleSearch(value, 1, state.breadths)}
                    style={{
                        margin: "1rem 5px 0.5rem 5px", width: '240px', padding: "0 0 0 0"
                    }}
                />
                <Menu
                    multiple
                    defaultOpenKeys={['GeneralEd']}
                    onClick={handleChange}
                    mode='inline'
                    style={{ margin: '0 0 0.3rem 0', border: 'None' }}
                >

                    <Menu.Item
                        key='prof'
                    >
                        <Tooltip
                            placement='right'
                            mouseEnterDelay={0}
                            title="Activate it to look for instructors">
                            Search Instructors
                        </Tooltip>
                    </Menu.Item>

                    <SubMenu
                        key='breadths'
                        title='Breadths'
                        multiple
                    >
                        <Menu.Item
                            key='L'
                        >
                            Literatures
                        </Menu.Item>
                        <Menu.Item
                            key='H'>
                            Humanities
                        </Menu.Item>
                        <Menu.Item
                            key='B'>
                            Biological Sciences
                        </Menu.Item>
                        <Menu.Item
                            key='S'>
                            Social Sciences
                        </Menu.Item>
                        <Menu.Item
                            key='N'>
                            Natural Sciences
                        </Menu.Item>
                        <Menu.Item
                            key='P'>
                            Physical Sciences
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key='GeneralEd'
                        title='General Education'
                        multiple
                    >
                        <Menu.Item
                            key='A'>
                            Communication A
                        </Menu.Item>
                        <Menu.Item
                            key='C'>
                            Communication B
                        </Menu.Item>
                        <Menu.Item
                            key='E'>
                            Ethnic Studies
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return ({
        handleSearch(value, page, breadths) {
            //dispatch(actionCreaters.clearSearch())
            console.log(state.prof)
            if (state.prof) dispatch(actionCreaters.searchProfs(value));
            else if (breadths.length === 0)
                dispatch(actionCreaters.searchCourse(value, page));
            else dispatch(actionCreaters.searchBreadths(value, page, breadths));
        },
        handleChange(e) {
            isProf(e)
            dispatch(actionCreaters.changeBreadth(state.breadths));
        }
    });
};

SearchBoard = withRouter(SearchBoard)
export default connect(null, mapDispatchToProps)(SearchBoard);