import React from 'react';

class EditData extends React.Component {

    render() {
        return (
            <div className="layer" style={{ display: 'block' }}>
                <div className="layer-title">
                    <span>编辑数据</span>
                    <span className="close" >&Chi;</span>
                </div>
                <form className="layer-content">
                    <div>
                        <label>姓名：</label>
                        <input type="text" name="name" placeholder="请输入姓名" autoComplete="off" value="" />
                    </div>
                    <div>
                        <label>性别：</label>
                        <select name="sex" value={"男"}  >
                            <option value="男">男</option>
                            <option value="女">女</option>
                        </select>
                    </div>
                    <div>
                        <label>年龄：</label>
                        <input type="text" name="age" placeholder="请输入年龄" autoComplete="off" value="" />
                    </div>
                    <div>
                        <label>角色：</label>
                        <select name="role" value={"教师"} >
                            <option value="教师">教师</option>
                            <option value="学生">学生</option>
                        </select>
                    </div>
                </form>
            </div>
        )
    }
}

export default EditData;