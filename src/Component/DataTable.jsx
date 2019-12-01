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
        }
    }

    showEditModal = () => {
        this.setState({ display: 'block', disabled: true });
    }

    hideEditModal = () => {
        this.setState({ display: 'none', disabled: false });
    }

    render() {
        return (
            <div className="tableBox">
                <TableTools showEditModal={this.showEditModal} />
                <DataList disabled={this.state.disabled} showEditModal={this.showEditModal} />
                <TablePagination />
                <EditData display={this.state.display} hideEditModal={this.hideEditModal} />
            </div>
        )
    }
}

export default DataTable;