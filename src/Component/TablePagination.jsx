import React from 'react';

class TablePagination extends React.Component {

    render() {
        return (
            <div className="tablePageBox">
                <div style={{ float: 'right', padding: '0px 20px' }}>
                    <button >上一页</button>
                    <button className="choose" key={1} data-number={1} >{1}</button>
                    <button>下一页</button>
                    <span style={{ margin: '0px 10px' }}>
                        到第<input className="pageInput" type="text" />页
                    <button style={{ margin: '0px 10px' }} >确定</button>
                    </span>
                    <span>共1条</span>
                </div>
            </div>
        )
    }
}

export default TablePagination;