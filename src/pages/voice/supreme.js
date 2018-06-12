import React from 'react';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import DownloadAndFooter from '../download';

const supreme_form = 'Application-form-for-Voice-Services_Employee-offers_20170424.pdf';

class SUPREME extends React.Component {
	render() {
		return (
			<Container className="mui-container-custom mui--text-left">
		        <Row>
					<Col md="12">
						<h1 className="heading">Voice Supreme</h1>
					</Col>
				</Row>

				<Row>
					<Col md="8">
						<ul className="mui-list--styled">
				          <li>This package includes fixed wireless terminal and SIM.</li>
				          <li>Is Telkom mobile coverage dependent.</li>
				          <li>A SIM cannot be taken separately.</li>
				        </ul>
			        </Col>
		        </Row>

		        <Row>
					<Col md="8">
					<h3 className="heading">Payment Options</h3>
						<ul className="mui-list--unstyled">
				          <li><span className="underlined">Fixed wireless terminal</span></li>
				          <li>Outright purchase - R773</li>
				          <li>Monthly fee - R69</li>
				          <li><span className="underlined">Calling plan</span> <br /> R0.49 per minute to all SA destinations (including mobile), billed /second</li>
				        </ul>
			        </Col>
		        </Row>

		        <Row>
					<Col md="8">
					<h4 className="heading">Terms and Conditions for Voice Services:</h4>
						<ul className="mui-list--styled">
				          <li>One account per staff member</li>
				          <li>12-month contract</li>
				          <li>RICA required</li>
				        </ul>
			        </Col>
		        </Row>

		        <DownloadAndFooter downaction={supreme_form} btncolor="warning" />
			</Container>
		)
	}
}

export default SUPREME;