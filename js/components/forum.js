// Parent component that holds all other components

var Forum = React.createClass({

    getInitialState: function() { // Inbuilt React method that is run to generate state object
        return {
            allAnswers: ForumStore.getAnswers()
        }
    },

    componentDidMount: function() { // component has finished mounting
        ForumStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() { // component is removed from document
        ForumStore.removeListener(this._onChange);
    },

    render: function() {
        //
        console.log(this.state.allAnswers);

        // createElement creates an element in its Virtual DOM
        // first param is the element selector
        // second pararm is an obj of atttributes
        return (
            <div>
                <ForumHeader />
                
                <div className="container">
                    <ForumQuestion />
                    <hr />
                    <ForumAnswers allAnswers={ this.state.allAnswers } />
                    <hr />
                    <h4>Add an answer</h4>
                    <ForumAddAnswerBox onAddAnswer={ this._onAddAnswer } />
                </div>
            </div>
        );
    },

    _onChange: function() {
        this.setState({
            allAnswers: ForumStore.getAnswers()
        })
    },

    _onAddAnswer: function(answerText) {
        ForumDispatcher.dispatch({
            actionType: 'FORUM_ANSWER_ADDED',
            newAnswer: answerText
        });
    }
});