import React, {Component} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search,CSVExport,ColumnToggle } from 'react-bootstrap-table2-toolkit';
import filterFactory from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import {Button, ButtonToolbar, Table, Card, Container, Modal} from "react-bootstrap";
// import axios from "axios";
import {withRouter} from "react-router-dom";

import {connect} from "react-redux";
import {accountsFetch,accountDelete} from "../../Actions";
import DefaultModal from "../Common/DefaultModal";
import Announcement from 'react-announcement'
import Logo from '../../logo.svg'
import { store } from 'react-notifications-component';


const { ToggleList } = ColumnToggle;
const { SearchBar } = Search;
const { ExportCSVButton } = CSVExport;
const selectRow = {
    mode: 'checkbox',
    clickToSelect: false,
    onSelect: (row, isSelect, rowIndex, e) => {
        console.log(row)
        console.log(isSelect)
        console.log(rowIndex)
        console.log(e)
    },
    onSelectAll: (isSelect, rows, e) => {
        console.log(rows)
        console.log(isSelect)
        console.log(e)
    }
};



class AccountList extends Component {



    constructor(props) {
    super(props);
    this.onEdit = this.onEdit.bind(this)
    this.state = {
        columns : [
        //     {
        //     dataField: 'id',
        //     text: 'Product ID',
        //     sort: true
        //
        // },
        {
            dataField: 'username',
            text: 'Username',
            sort: true
        }, {
            dataField: 'email',
            text: 'Email',
            sort: true
        }, {
            dataField: 'first_name',
            text: 'First Name',
            sort: true
        }, {
            dataField: 'last_name',
            text: 'Last Name',
            sort: true
        }, {
            dataField: 'is_active',
            text: 'Active',
            sort: true
        }, {
            dataField: 'date_joined',
            text: 'Date Joined',
            sort: true
        }, {
            dataField: 'last_login',
            text: 'Last Login',
            sort: true
        }
            ,{
                dataField: 'actions',
                isDummyField: true,
                text: 'Action',
                formatter: (cellContent, row) => {
                    return (
                        <div>
                            <button type="button" className="btn btn-primary" onClick={()=>{
                                this.onEdit(cellContent,row)}}>Edit</button>&nbsp;&nbsp;
                            {/*<button type="button" className="btn btn-danger" onClick={()=>{*/}
                            {/*    this.onDelete(cellContent,row)}}>Delete</button>&nbsp;&nbsp;                            */}
                            <DefaultModal row={row}/>
                        </div>
                    );
                }
            }
        ]
    }


}
    onNotification(msg,type){
    store.addNotification({
        title: 'การแจ้งเตือน',
        message: msg,
        type: type,                         // 'default', 'success', 'info', 'warning'
        width: 250,
        container: 'top-right',                // where to position the notifications
        animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
        animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
        // dismiss: {
        //     duration: 5000
        // }
        dismiss: {
            duration: 5000
        }
    })
}
componentDidMount() {
    this.props.accountsFetch();

}

    onEdit(cell, row){
        console.log(cell)
        console.log(row)
        this.props.history.push("/accounts/edit/" + row.id);
    }
    onDelete(cell, row){
        console.log(cell)
        console.log(row)
        this.props.accountDelete(row.id);
    }



    render() {
        return (
          <div>

              <Container fluid = "true">
                  <Card>
                      <ButtonToolbar>
                          <Button variant="outline-success" size="lg"

                                  onClick={() => {
                                      store.addNotification({
                                          title: 'การแจ้งเตือน',
                                          message: 'Notify',
                                          type: 'default',                         // 'default', 'success', 'info', 'warning'
                                          container: 'top-right',                // where to position the notifications
                                          animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
                                          animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
                                          dismiss: {
                                              duration: 3000
                                          }
                                      })
                                  }}
                          >Add</Button>

                          <hr/>
                      </ButtonToolbar>
                      {this.props.accounts && Array.isArray(this.props.accounts) && (
                          <ToolkitProvider
                              keyField="id"
                              data={ this.props.accounts }
                              columns={this.state.columns}
                              exportCSV={ { onlyExportFiltered: true, exportAll: false } }
                              search
                              columnToggle
                          >
                              {
                                  props => (
                                      <div>
                                          <ExportCSVButton { ...props.csvProps }>Export CSV!!</ExportCSVButton>
                                          <hr />
                                          <SearchBar { ...props.searchProps } />&nbsp;&nbsp;
                                          <ToggleList { ...props.columnToggleProps } />
                                          <hr />
                                          <Table responsive>
                                              <BootstrapTable
                                                  { ...props.baseProps }
                                                  pagination={ paginationFactory() }
                                                  filter={ filterFactory() }
                                                  selectRow={ selectRow }
                                              />
                                          </Table>

                                      </div>
                                  )
                              }
                          </ToolkitProvider>
                      )}

                  </Card>
              </Container>
              {this.props.accounts.length === 1 &&

              <Announcement
                  title="Welcome"
                  subtitle= "Hello User"
                  imageSource={Logo}
                  daysToLive={1}
                  secondsBeforeBannerShows={2}
                  closeIconSize={30}
              />
              }
              {this.props.accounts.length === 1 && this.onNotification(this.props.accounts[0],'danger')}


          </div>
        );
    }
}

function mapStateToProps(state) {
    // console.log(state)
    return{
        accounts:state.accounts
    };

}

export default withRouter(connect(mapStateToProps, {accountsFetch,accountDelete})(AccountList));
