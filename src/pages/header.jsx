import React from 'react';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Logo from './logo.png';

class HEADER extends React.Component {
	render() {
		return (
			<Row>
				<Col md="8" xs="6">
		        	<img className="banner" src={Logo} alt="Logo" />
		        </Col>

		        <Col md="4" xs="6">
		        	<h3 className="mui--text-right text-black">Vox Staff Digital Perks</h3>
		        </Col>
	        </Row>
		)
	}
}

export default HEADER;