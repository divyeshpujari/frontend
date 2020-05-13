import React, {Component} from 'react'
import TabulerForm from '../component/tabulerForm'
import { toast} from "mdbreact";
import { uploadCsvAndListData } from '../service/dataService';

class TabulerFormContainer extends Component{
    constructor(props){
        super(props)
        this.state = {
            'csvFile': null,
            'ndays': 7,
            'sourcename': undefined,
            'responseData': []
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleCsvFileChange = (e) => {
        let file = e.target.files[0]
        this.setState({
            'csvFile': file
        })
    }

    setResponseData = (data) => {
        if (!data.length) {
            toast.warn('No data found for ndays and source filter', {
                closeButton: false
              });
        } else {
            toast.success('Data successfully retrived', {
                closeButton: false
            });
        }
        this.setState({
            'responseData': data
        });
    }

    submitFormData = async () => {
        const response = await uploadCsvAndListData(this.state);
        if (response.error){
            toast.error('Opps, something might be wrong while fetching data from downstream', {
                closeButton: false
              });
            console.log("An error occurred while making a downstream call");
        } else {
            this.setResponseData(response.data)
        }
    }

    render(){
        return(<TabulerForm 
            handleChange={this.handleChange}
            handleCsvFileChange={this.handleCsvFileChange}
            submitFormData={this.submitFormData}
            responseData={this.state.responseData}
            isFileAttach={!this.state.csvFile}
            />)
    }
}
export default TabulerFormContainer