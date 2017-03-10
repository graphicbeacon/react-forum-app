var ForumHeader = React.createClass({
    render: function() {
        // JavaScript generating the data structure
        return React.createElement(
            'nav', {
                className: 'navbar navbar-default'
            },
            React.createElement(
                'div', {
                    className: 'container-fluid'
                },
                React.createElement(
                    'div', {
                        className: 'navbar-header'
                    },
                    React.createElement(
                        'a', {
                            className: 'navbar-brand',
                            href: '#'
                        },
                        'React Forum'
                    )
                )
            )
        )
    }
})