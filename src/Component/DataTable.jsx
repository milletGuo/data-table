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
            status: '',
            dataList: [],
            queryResult: [],
            dataToShow: [],
            dataToEdit: {
                name: '',
                age: '',
                sex: '男',
                role: '教师',
            },
        }
    }

    onHandleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        let dataToEdit = this.state.dataToEdit;
        dataToEdit[name] = value;
        this.setState({ dataToEdit });
    }

    createData = (formData) => {
        let dataList = this.state.dataList.slice();
        let index = getMaxIndex(dataList);
        formData.index = index;
        dataList.push(formData);
        this.showData(dataList);
        this.setState({ dataList });
    }

    showData(data) {
        let dataToShow = data.slice();
        if (data.length > 5) {
            dataToShow = data.filter((item, index) => {
                return index < 5;
            });
            this.setState({ dataToShow: dataToShow });
        } else {
            this.setState({ dataToShow: dataToShow });
        }
    }

    showEditModal = (status) => {
        this.setState({ display: 'block', disabled: true, status });
    }

    hideEditModal = () => {
        let dataToEdit = this.state.dataToEdit;
        for (let key in dataToEdit) {
            dataToEdit[key] = '';
        }
        this.setState({ display: 'none', disabled: false, dataToEdit });
    }

    componentDidMount() {
        if (localStorage.getItem('data') !== 'undefined') {
            let dataList = JSON.parse(localStorage.getItem('data'));
            this.showData(dataList);
            this.setState({ dataList });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        localStorage.setItem('data', JSON.stringify(this.state.dataList));
    }

    render() {
        return (
            <div className="tableBox">
                <TableTools showEditModal={(status) => this.showEditModal(status)} />
                <DataList disabled={this.state.disabled} dataToShow={this.state.dataToShow} showEditModal={(status) => this.showEditModal(status)} />
                <TablePagination />
                <EditData
                    display={this.state.display}
                    status={this.state.status}
                    dataToEdit={this.state.dataToEdit}
                    hideEditModal={this.hideEditModal}
                    onHandleChange={this.onHandleChange}
                    createData={(formData) => this.createData(formData)} />
            </div>
        )
    }
}

function getMaxIndex(data) {
    let dataList = data.map((item) => {
        return item.index;
    });
    return dataList.length === 0 ? 0 : Math.max.apply(null, dataList);
}

export default DataTable;