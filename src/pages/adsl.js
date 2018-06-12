import React from 'react';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import DownloadAndFooter from './download';
import BANNER from './banner';

const adsl_form = 'Staff-Application-Form-for-Vox-Mobile-Data-and-ADSL-2017.pdf';

class ADSL extends React.Component {
	render() {
		return (
			<Container fluid={true}>
				<BANNER ima="./ADSL.png" />
				<Row>
					<Col md="12">
						<h1 className="heading">FREE ADSL: 300GB Fat Pipe Data every month</h1>
					</Col>
				</Row>

				<Row>
					<Col md="8">
						<ul className="mui-list--styled">
				          <li>Receive free data between midnight and 6 AM daily. A maximum of 1TB data not used will carry over. Hardware is not included (ADSL router) in this package.</li>
				          <li>As a Vox staff member, you are responsible for the installation and subscription fee, paid to Telkom for the analogue phone line and ADSL service.</li>

				        </ul>
			        </Col>
		        </Row>

		        <DownloadAndFooter downaction={adsl_form} btncolor="primary" />

			</Container>
		)
	}
}

export default ADSL;