import axios from 'axios'

export const getCountryTimeline = (country) => {

    console.log('Searching: ', country)
    return axios.get(`https://covid-19--api.herokuapp.com/v1/country/${country}?view=timeline`)
        
}