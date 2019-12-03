import React from 'react';

class DataList extends React.Component {

    onEditBtnClick = () => {
        this.props.showEditModal();
    }

    onDeleteBtnClick = (index) => {
        console.log(index);
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
                    {
                        this.props.dataToShow.map((data) => {
                            return (
                                <tr key={data.index} >
                                    <td>{data.name}</td>
                                    <td>{data.sex}</td>
                                    <td>{data.age}</td>
                                    <td>{data.role}</td>
                                    <td>
                                        <div className="operation">
                                            <button onClick={() => this.onEditBtnClick(data.index)} disabled={this.props.disabled}>编辑</button>
                                            <button onClick={() => this.onDeleteBtnClick(data.index)} disabled={this.props.disabled}>删除</button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        )
    }
}

export default DataList;