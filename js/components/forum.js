// Parent component that holds all other components

var Forum = React.createClass({

    getInitialState: function() { // Inbuilt React method that is run to generate state object
        return {
            allAnswers: {
                '1': {
                    body: 'Isn\'t that about time travel?',
                    correct: false
                },
                '2': {
                    body: 'React and Flux are a tool and methodologies for building the front end of web applications.',
                    correct: false
                },
                '3': {
                    body: 'React is a synonym for \'respond\'',
                    correct: false
                }
            }    
        }
    },

    render: function() {
        //
        console.log(this.state.allAnswers);

        // createElement creates an element in its Virtual DOM
        // first param is the element selector
        // second pararm is an obj of atttributes
        return React.createElement(
            'div', 
            null,
            React.createElement(ForumHeader, null, { 
                allAnswers: this.state.allAnswers // Created from getInitialState method
            })
        );
    }
});