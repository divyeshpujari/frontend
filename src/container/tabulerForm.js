import react, {Component} from 'react'
import { uploadCsvAndListData } from '../service'

class TabulerForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            'csvFile': null,
            'ndays': 7,
            'sourcename': undefined 
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.current.target.name]: e.current.target.value
        })
    }

    handleCsvFileChange = (e) => {
        file = e.current.target.file
        this.setState({
            'csvFile': file
        })
    }

    submitFormData = () => {
        
    }

    render(){
        return(
            <>
                <form> 
                    <label>CSV file</label>
                    <input type='file' name='csvFile' />

                    <label>Number of days to fetch</label> 
                    <input type='number' name='ndays' onChange={this.handleChange}/>

                    <label>Filter source</label> 
                    <input type='text' name='sourcename' onChange={this.handleChange}/>

                    <button>Submit</button>
             </form>
             </button>
            
        )
    }
}