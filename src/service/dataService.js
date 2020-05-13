'use strict;'
import axios from 'axios'
import config from "../config.json"

export const uploadCsvAndListData = async (formData) => {
    let bodyFormData = new FormData();
    bodyFormData.set('ndays', formData.ndays || 7);
    bodyFormData.append('csvFile', formData.csvFile)
    if (formData.sourcename) {
        bodyFormData.append('sourcename', formData.sourcename)
    }
    try {
       const response = await axios.post(config.BACKEND_BASE_URL+'upload_csv_and_list',bodyFormData);
        return {data:response.data}
    } catch (e) {
        console.error(e.message)
        return {error:e}
    }
}