import React from 'react';

class EditData extends React.Component {

    onSubmit = () => {
        let status = this.props.status;
        let formData = JSON.parse(JSON.stringify(this.props.dataToEdit));
        if (status === 'create') {
            this.props.createData(formData);
        }
        this.props.hideEditModal();
    }

    onCloseModal = () => {
        this.props.hideEditModal();
    }

    render() {
        return (
            <div className="layer" style={{ display: this.props.display }}>
                <div className="layer-title">
                    <span>编辑数据</span>
                    <span className="close" onClick={this.onCloseModal} >&Chi;</span>
                </div>
                <form className="layer-content">
                    <div>
                        <label>姓名：</label>
                        <input type="text" name="name" placeholder="请输入姓名" autoComplete="off" value={this.props.dataToEdit.name} onChange={this.props.onHandleChange} />
                    </div>
                    <div>
                        <label>性别：</label>
                        <select name="sex" value={this.props.dataToEdit.sex} onChange={this.props.onHandleChange}>
                            <option value="男">男</option>
                            <option value="女">女</option>
                        </select>
                    </div>
                    <div>
                        <label>年龄：</label>
                        <input type="text" name="age" placeholder="请输入年龄" autoComplete="off" value={this.props.dataToEdit.age} onChange={this.props.onHandleChange} />
                    </div>
                    <div>
                        <label>角色：</label>
                        <select name="role" value={this.props.dataToEdit.role} onChange={this.props.onHandleChange}>
                            <option value="教师">教师</option>
                            <option value="学生">学生</option>
                        </select>
                    </div>
                </form>
                <button className="submit" onClick={this.onSubmit}>确定</button>
            </div>
        )
    }
}


export default EditData;