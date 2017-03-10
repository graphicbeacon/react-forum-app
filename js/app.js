// Renders the virtual dom to the page
// first argument is element to be rendered
// second argument is the container to render the element in
ReactDOM.render(
    React.createElement(Forum, null),
    document.getElementById('forum')
)

var myEmitter = new EventEmitter();

myEmitter.on('STARTED_THE_APP', function() {
    console.log('started the app')
})

myEmitter.on('STARTED_THE_APP', function() {
    console.log('started the app #2')
})

myEmitter.emit('STARTED_THE_APP');