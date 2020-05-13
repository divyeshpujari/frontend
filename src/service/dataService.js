'use strict'
const axios = require('axios')
import config from "../config.json"

export const uploadCsvAndListData = (formData) => {

    const dataToSend = {
        'csvFile' : formData.csvFile,
        'ndays': formData.ndays,
        '': formData && formData.sourcename || undefined
    }
    axios.post(config.BACKEND_BASE_URL+'upload_csv_and_list',dataToSend)
    .then((response) => {
        return response.data
    }).catch(e =>{
        console.error(e.message)
    })
}