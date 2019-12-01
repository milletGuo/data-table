import React from 'react';

class DataList extends React.Component {

    onEditBtnClick = () => {
        this.props.showEditModal();
    }

    render() {
        return (
            <table className="tableContent">
                <tbody>
                    <tr>
                        <th>姓名</th>
                        <th>性别</th>
                        <th>年龄</th>
                        <th>角色</th>
                        <th>操作</th>
                    </tr>
                    <tr>
                        <td data-index={1}>姓名</td>
                        <td data-index={1}>男</td>
                        <td data-index={1}>27</td>
                        <td data-index={1}>教师</td>
                        <td>
                            <div className="operation">
                                <button data-index={1} disabled={this.props.disabled}>编辑</button>
                                <button data-index={1} disabled={this.props.disabled}>删除</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default DataList;