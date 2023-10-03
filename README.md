
# README

## Overview
This codebase is designed to fetch data from the Known Exploited Vulnerability (KEV) database and add new Common Vulnerabilities and Exposures (CVEs) into a Sanity CMS Content Lake. It is particularly useful for security teams and researchers who need to keep track of CVEs and comply with Binding Operation Directive 22-01.
### Getting Started
#### Prerequisites
Ensure you have the following installed on your local machine:
- Node.js
- Sanity CLI (npm install -g @sanity/cli)

Installation
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run npm install to install all the necessary dependencies.
#### Usage
1. Start the server by running node server.js in the project directory.
2. The server will run on port 5000 and fetch data from the KEV database.
3. The fetched data is then transformed and added to the Sanity CMS Content Lake.
4. Open a new ternminal and run sanity start, npm start or yarn dev
5. Follow the directions in the terminal to head to Sanity Studio
#### Code Structure
The main server logic is in server.js. It fetches data from the KEV database, transforms it, and adds it to the Sanity CMS Content Lake.


The Sanity CMS schema is defined in schemas/cve.ts. This schema is used to structure the CVE data in the Sanity CMS datalake.

The addToSanity.js file contains the logic for adding data to the Sanity CMS Content Lake.
- Contributing

Contributions are welcome. Please open an issue or submit a pull request.

- License

This project is licensed under the terms of the MIT license.
