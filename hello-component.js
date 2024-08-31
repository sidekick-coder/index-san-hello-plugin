export default {
    props: {
        message: {
            type: String,
            default: 'Hello word'
        }
    },
    template: `<div>{{ message }}</div>`
}