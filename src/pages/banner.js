import React from 'react';

class BANNER extends React.Component {
	render() {
		return (
	        <img className="banner img-responsive" src={this.props.ima} alt="banner" />
		)
	}
}

export default BANNER;