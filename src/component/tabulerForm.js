import React, { Component } from "react";
import { MDBDataTable, ToastContainer} from "mdbreact";

class TabulerForm extends Component {
  constructor(props) {
    super(props);
  }

  getTabulerData () {
    return {
        columns: [
          {
            label: 'Name',
            field: 'name',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Date',
            field: 'date',
            width: 270
          },
          {
            label: 'Traffic',
            field: 'traffic',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Trend',
            field: 'trend',
            width: 100
          }
        ],
        rows: this.props.responseData
    }
  }

  render() {
    return (
      <div>
        <form>
          <label>CSV file</label>
          <input
            type="file"
            name="csvFile"
            onChange={this.props.handleCsvFileChange}
          />

          <label>Number of days to fetch</label>
          <input
            type="number"
            name="ndays"
            defaultValue="7"
            onChange={this.props.handleChange}
          />

          <label>Filter source</label>
          <input
            type="text"
            name="sourcename"
            onChange={this.props.handleChange}
          />

          <button type="button" disabled={this.props.isFileAttach} onClick={this.props.submitFormData}>
            Submit
          </button>
        </form>
        <MDBDataTable striped bordered small data={this.getTabulerData()} />
        <ToastContainer
        hideProgressBar={true}
        newestOnTop={true}
        autoClose={5000}
      />
      </div>
    );
  }
}

export default TabulerForm;
