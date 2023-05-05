import { defineField, defineType } from "sanity";


export default defineType({
    name: 'cve',
    title: 'CISA Catalog of Known Exploited Vulnerabilities',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title:'CVE NAME',
            type: 'string'
        }),
       defineField({
            name:'vendor',
            title:'Affected Vendor',
            type: 'string'
        }),
        defineField( {
            name:'product',
            title: 'Affected Product',
            type: 'string'
        }),
        defineField({
            name:'vulnerability_name',
            title: 'Vulnerability Name',
            type: 'string'
        }),
        defineField({
            name:'date_added',
            title:'Date Added',
            type: 'string'
        }),
        defineField({
            name: 'description',
            title: 'Short Description',
            type: 'text'
        }),
        defineField({
            name: 'required_action',
            title: 'Required action',
            type: 'text'
        }),
        defineField({
            name:'due_date',
            title:'Due Date',
            type: 'string'
        }),
    
    ]



})