import React from 'react';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import DownloadAndFooter from '../download';

const uncapped_form = 'Application-form-for-Voice-Services_Employee-offers_20170424.pdf';

class UNCAPPED extends React.Component {
	render() {
		return (
			<Container className="mui-container-custom mui--text-left">
		        <Row>
					<Col md="12">
						<h1 className="heading">Uncapped Voice</h1>
					</Col>
				</Row>

				<Row>
					<Col md="8">
						<ul className="mui-list--styled">
				          <li>This package includes a single Non-geographic number.</li>
				          <li>The calling plan includes all SA destinations (including Mobile) and popular international destinations.</li>
				          <li>The option is compatible with Vox Fibre and ADSL solutions.</li>
				        </ul>
			        </Col>
		        </Row>

		        <Row>
					<Col md="8">
					<h2 className="heading">Payment Options</h2>
						<ul className="mui-list--styled">
				          <li>Monthly subscription (including Supafone hardware) - R249.</li>
				          <li>Monthly subscription (excluding hardware) - R159.</li>
				        </ul>
			        </Col>
		        </Row>

		        <DownloadAndFooter downaction={uncapped_form} btncolor="warning" />
			</Container>
		)
	}
}

export default UNCAPPED;