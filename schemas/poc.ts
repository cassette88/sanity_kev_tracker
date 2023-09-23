import {defineField, defineType} from 'sanity'

export default defineType({
    name:'poc',
    title: 'Proof of Concepts',
    type: 'document',
    fields: [
        defineField({
            name:'title',
            title: 'Article Headline',
            type: 'string'
        }),
        defineField({
            name:'category',
            title: 'Cyber Category',
            type: 'array',
            of: [{type: 'string'}],
            options: {
            list: ['infosec', 'CISO', 'FISMA', 'NIST','cybersecurity','hacking','ransomware','AI','technical']
            }
        }),
        defineField({
            name:'cve',
            title: 'CVE',
            type: 'string'
        }),
        defineField({
            name:'author',
            title: 'Author',
            type: 'string'
        }),
        defineField({
            name:'description',
            title: 'Article Description',
            type: 'string'
        }),
        defineField({
            name:'date',
            title: 'Article Date',
            type: 'string'
        }),
        defineField({
            name:'link',
            title: 'Article Link',
            type: 'url'
        }),
        defineField({
            name:'domain',
            title: 'Domain',
            type: 'url'
        }),
        defineField({
            name:'image_link',
            title: 'Image URL',
            type: 'url'
        }),
        defineField({
            name:'photo_credits',
            title: 'Photo credit',
            type: 'string'
        }),
    ]
})