import React, { Component } from 'react';
import SimpleTable from './simpleTable';
import DenseTable from './denseTable';
import EnhancedTable from './sortingTable';
import CustomizedTables from './customizedTable';
import SpanningTable from './spanningTable';
import MuiVirtualizedTable from './virtulizedTable';
import CustomPaginationActionsTable from './tablePagination';
import MaterialTableDemo from './materialTable';


class TableEg extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <h1>Tables</h1>
                    <p className="text-justify">
                        Data tables display information in a way that’s easy to scan, so that users can look for patterns and insights. They can be embedded in primary content, such as cards.
    
                            Data tables can include:
    
                            A corresponding visualization
                            Navigation
                            Tools to query and manipulate data
                            When including tools, they should be placed directly above or below the table.
                        </p>
                    <div className="form-group">
                        <label><h3>Simple Table</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <SimpleTable />
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>Dense Table</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <DenseTable />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Sorting & Selecting</h3></label>
                        <p className="text-justify">
                            This example demonstrates the use of Checkbox and clickable rows for selection, with a custom Toolbar. It uses the TableSortLabel component to help style column headings.
    
                            The Table has been given a fixed width to demonstrate horizontal scrolling. In order to prevent the pagination controls from scrolling, the TablePagination component is used outside of the Table. (The 'Custom Table Pagination Action' example below shows the pagination within the TableFooter.)
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <EnhancedTable />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Customized tables</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <CustomizedTables />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Custom Table Pagination Action</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <CustomPaginationActionsTable />
                        </div>
                    </div>


                    <div className="form-group mt-5">
                        <label> <h3>Spanning Table</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <SpanningTable />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Virtualized Table</h3></label>
                        <p className="text-justify">
                            In the following example, we demonstrate how to use react-virtualized with the Table component.
                        It renders 200 rows and can easily handle more. Virtualization helps with performance issues. </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <MuiVirtualizedTable />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Material-Table</h3></label>
                        <p className="text-justify">
                            material-table is a simple and powerful Datatable for React based on Material-UI Table with some
                            additional features. They support many different use cases (editable, filtering, grouping, sorting, selection, i18n, tree data and more). You should check it out.
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <MaterialTableDemo />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TableEg;