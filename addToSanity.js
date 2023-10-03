const {createClient} = require('@sanity/client')

// connect with your Sanity project
const client = createClient({
    projectId: 'YOUR_SANITY_PROJECT_ID',
    dataset: 'production',
    token:  process.env.SANITY_TOKEN, 
   useCdn: false // We can't use the CDN for writing
  })

let transaction = client.transaction()

// add new data to the Content Lake
  function addToSanity(doc)  {
    doc.forEach(doc => {
    transaction.createIfNotExists(doc)
     })
    
      transaction.commit()
      .then((res) => {
          console.log(`A succesfull update!`)
      })
      .catch((err) => {
          console.error(`Schema update failed:`, err.message)
      })
      }
  
 

    module.exports = addToSanity