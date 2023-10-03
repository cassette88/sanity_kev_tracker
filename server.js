// Importing required modules
const axios = require('axios');
const express = require('express')
const app = express()
const addToSanity = require('./addToSanity')

// Setting up the server port
const port = 5000;

// URL of the Known Exploited Vulnerabilities (KEV) database
const URL = `https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json`

// Function to fetch CVE data from the KEV database
async function getCVE(){

    try{

        // Making a GET request to the KEV database
        const response = await axios.get(URL)
        let limit = response.data.vulnerabilities
      
        // Preparing the fetched data for addition to the Sanity CMS datalake
        prepareData(limit)
        console.log("called API")

    } catch (error){
        // Logging any errors that occur during the GET request
        console.log(error)
    }

}

// Arrays to store the fetched and transformed CVE data
let cves = []
let local = []

// Function to prepare the fetched data for addition to the Sanity CMS datalake
function prepareData(limit){
    console.log("preparing data")
    for(let i = 0; i < limit.length; i ++){
        // Transforming each vulnerability into the required format
        transformVuln(limit[i])

    }

    // Adding the transformed data to the Sanity CMS datalake
    addToSanity(cves)
}


// Function to transform each vulnerability into the required format
function transformVuln(vuln){
 

    // Creating a new CVE object in the required format
    const cve = {
        _type:'cve',
        _id: `imported-cve-${vuln.cveID}`,
        name: vuln.cveID,
        vendor: vuln.vendorProject,
        product: vuln.product,
        vulnerability_name: vuln.vulnerabilityName,
        date_added: vuln.dateAdded,
        description: vuln.shortDescription,
        required_action: vuln.requiredAction,
        due_date: vuln.dueDate
    }

    // Creating a new localCVE object in the required format
    const localCVE = {
        _key: vuln.cveID,
        _type: 'reference',
        _ref: `imported-cve-${vuln.cveID}`
    }

    // Adding the new CVE and localCVE objects to their respective arrays
    cves.push(cve)
    local.push(localCVE)

    // Returning the updated cves array
    return cves

}


// Starting the server and fetching the CVE data
app.listen(port, () => {
    console.log(`server is running on ${port}`)
    getCVE();

})


// Setting up a GET endpoint to return the fetched and transformed CVE data
app.get('/', function (req, res) {
    res.json(cves)
})