const {createClient} = require('@sanity/client')


const client = createClient({
    projectId: '099pljcb',
    dataset: 'production',
    token: `skZrKrqBCaZJIH4seIpBK8nrdtUzqszONLytZjve6kWmyfhCUXZp7OmfJOlx9rLgSAo9Ftqd71NwFNVsxdSmdUIedEjm7FTineJILREcMkXLLN07Cy3qNIQzBMMG2Tg8Bd516WO0to7t9Tf3iJDtEzWxPjPoWu2w3CZ8aFEgKdAMSzpSdmm5`, 
   useCdn: false // We can't use the CDN for writing
  })

let transaction = client.transaction()

  function addToSanity(doc)  {
    doc.forEach(doc => {
    transaction.createIfNotExists(doc)
     })
      // console.log(`CVE data was added to Sanity successfully`)
      transaction.commit()
      .then((res) => {
          console.log(`A succesfull update!`)
      })
      .catch((err) => {
          console.error(`Schema update failed:`, err.message)
      })
      }
  
 

    module.exports = addToSanity