import React from 'react';
import "../index.css";
import TableTools from './TableTools.jsx';
import DataList from './DataList.jsx';
import TablePagination from './TablePagination';
import EditData from './EditData';

class DataTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'none',
            disabled: false,
            dataToShow: [{ index: 2, name: '王老师', sex: '女', age: 25, role: '教师' }],
            dataToEdit: {},
        }
    }

    onHandleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        let dataToEdit = this.state.dataToEdit;
        dataToEdit[name] = value;
        this.setState({ dataToEdit });
    }

    showEditModal = () => {
        this.setState({ display: 'block', disabled: true });
    }

    hideEditModal = () => {
        this.setState({ display: 'none', disabled: false });
    }

    componentDidMount() {
        // let data = JSON.parse(localStorage.getItem('data'));
        this.setState({ dataToShow: [{ index: 2, name: '王老师', sex: '女', age: 25, role: '教师' }] })
    }

    render() {
        return (
            <div className="tableBox">
                <TableTools showEditModal={this.showEditModal} />
                <DataList disabled={this.state.disabled} dataToShow={this.state.dataToShow} showEditModal={this.showEditModal} />
                <TablePagination />
                <EditData display={this.state.display} dataToEdit={this.state.dataToEdit} hideEditModal={this.hideEditModal} onHandleChange={this.onHandleChange} />
            </div>
        )
    }
}

export default DataTable;