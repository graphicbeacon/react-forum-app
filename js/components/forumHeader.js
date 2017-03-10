var ForumHeader = React.createClass({
    render: function() {
        console.log(this.props.allAnswers)
        // JavaScript generating the data structure
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">
                            React Forum
                        </a>
                    </div>
                </div>
            </nav>
        );
    }
})