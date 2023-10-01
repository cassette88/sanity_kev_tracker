const {createClient} = require('@sanity/client')


const client = createClient({
    projectId: 'YOUR_SANITY_PROJECT_ID',
    dataset: 'production',
    token:  process.env.SANITY_TOKEN, 
   useCdn: false // We can't use the CDN for writing
  })

let transaction = client.transaction()

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