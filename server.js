const axios = require('axios');
const express = require('express')
const app = express()
const addToSanity = require('./addToSanity')
const port = 5000;

const URL = `https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json`


async function getCVE(){

    try{

        const response = await axios.get(URL)
        let limit = response.data.vulnerabilities
      
      prepareData(limit)
        console.log("called API")

    } catch (error){
        console.log(error)
    }

}

let cves = []
let local = []

function prepareData(limit){
    console.log("preparing data")
    for(let i = 0; i < limit.length; i ++){
      transformVuln(limit[i])

    }

  addToSanity(cves)
}


function transformVuln(vuln){
 

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

const localCVE = {
    _key: vuln.cveID,
    _type: 'reference',
    _ref: `imported-cve-${vuln.cveID}`
}

cves.push(cve)
local.push(localCVE)

return cves

}


app.listen(port, () => {
    console.log(`server is running on ${port}`)
    getCVE();

})


app.get('/', function (req, res) {
    res.json(cves)
})