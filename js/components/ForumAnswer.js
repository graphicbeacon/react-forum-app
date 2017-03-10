var ForumAnswer = React.createClass({

    propTypes: {
        answer: React.PropTypes.object.isRequired,
        onMarkCorrect: React.PropTypes.func.isRequired
    },

    _markCorrect: function() {
        this.props.onMarkCorrect(this.props.id);
    },

    render: function() {
        var answer = this.props.answer,
            classNames = 'panel-body',
            markAnswer;

        if (answer.correct) { 
            classNames += ' bg-success';
        } else {
            markAnswer = <div className="pull-right">
                <small><a href="#" onClick={ this._markCorrect }>Mark as correct</a></small>
            </div>;
        }

        return (
            <div className="panel panel-default">
                <div className={ classNames }>
                    { answer.body }
                    { markAnswer }
                </div>
            </div>
        );
    }
});