import React from 'react';
import "../index.css";
import TableTools from './TableTools.jsx';
import DataList from './DataList.jsx';
import TablePagination from './TablePagination';
import EditData from './EditData';

class DataTable extends React.Component {

    render() {
        return (
            <div className="tableBox">
                <TableTools />
                <DataList />
                <TablePagination />
                <EditData />
            </div>
        )
    }
}

export default DataTable;