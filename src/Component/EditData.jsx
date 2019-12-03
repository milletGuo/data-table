import React from 'react';

class EditData extends React.Component {

    onCloseModal = () => {
        this.props.hideEditModal();
    }

    render() {
        const data = this.props.dataToEdit;
        return (
            <div className="layer" style={{ display: this.props.display }}>
                <div className="layer-title">
                    <span>编辑数据</span>
                    <span className="close" onClick={this.onCloseModal} >&Chi;</span>
                </div>
                <form className="layer-content">
                    <div>
                        <label>姓名：</label>
                        <input type="text" name="name" placeholder="请输入姓名" autoComplete="off" value={data.name} onChange={(event) => { this.props.onHandleChange(event) }} />
                    </div>
                    <div>
                        <label>性别：</label>
                        <select name="sex" value={data.sex} >
                            <option value="男">男</option>
                            <option value="女">女</option>
                        </select>
                    </div>
                    <div>
                        <label>年龄：</label>
                        <input type="text" name="age" placeholder="请输入年龄" autoComplete="off" value={data.age} />
                    </div>
                    <div>
                        <label>角色：</label>
                        <select name="role" value={data.role}>
                            <option value="教师">教师</option>
                            <option value="学生">学生</option>
                        </select>
                    </div>
                </form>
                <button className="submit">确定</button>
            </div>
        )
    }
}

export default EditData;