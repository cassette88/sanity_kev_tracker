import {defineField, defineType} from 'sanity'

export default defineType({
    name:'days',
    title: 'Daily Splash',
    type: 'document',
    fields: [
        defineField({
            name:'title',
            title: 'Article Headline',
            type: 'string'
        }),
        defineField({
            name:'category',
            title: 'Day of the Weeks',
            type: 'array',
            of: [{type: 'string'}],
            options: {
            list: ['sunday', 'monday', 'tuesday', 'wednesday','thursday','friday','saturday']
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