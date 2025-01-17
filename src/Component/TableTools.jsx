import React from 'react';

class TableTools extends React.Component {

    onCreatBtnClick = () => {
        this.props.showEditModal('create');
    }

    render() {
        return (
            <div style={{ margin: "30px 20px" }}>
                <button className="create" onClick={this.onCreatBtnClick}>新建</button>
                <input className="qurey" type="text" name="name" placeholder="请输入姓名" autoComplete="off" />
                <button className="queryBtn">查询</button>
            </div>
        )
    }
}

export default TableTools;