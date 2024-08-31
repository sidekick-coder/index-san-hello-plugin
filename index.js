export default {
    setup({
        addImport,
        resolve,
        addComponent,
        addEntryMiddleware,
        addAppPage,
        addMenuItem,
    }) {
        addImport('hello', resolve('message.js'))

        addComponent({
            name: 'hello',
            filename: resolve('hello-component.js')
        })

        addEntryMiddleware({
            handle: ({ entry }) => {
                if (entry.path.endsWith('.hello')) {
                    return {
                        page: 'hello-app-page',
                        props: {
                            path: entry.path,
                        }
                    }
                }

                return null
            }
        })
        
        addAppPage({
            name: 'hello-app-page',
            filename: resolve('hello-app-page.js')
        })
        
        addMenuItem({
            name: 'hello',
            label: 'Hello menu',
            icon: 'mdi:human-hello-variant',
            filename: resolve('hello-sidebar.js') 
        })
    }
}