export default {
    props: {
        path: {
            type: String,
            required: true
        }
    },
    template: `
    <div class="flex h-full w-full items-center justify-center">
        <div class="flex flex-col text-center">          
            <div class="text-2xl font-bold mb-2">
                This is a page from hello plugin
            </div>
            
            <div>
                The path is: {{ path }}
            </div>        
        </div>
      
    </div>`
}