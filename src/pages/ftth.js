import React from 'react';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import DownloadAndFooter from './download';
import BANNER from './banner';

const ftth_form = 'FTTH_Application_Form.pdf';

class FTTH extends React.Component {
	render() {
		return (
			<Container fluid={true}>
			<BANNER ima="./FTTH.png" />
				<Row>
					<Col md="12">
						<h1 className="heading">FREE FTTH: 300GB FTTH Fat Pipe Data every month</h1>
					</Col>
				</Row>

				<Row>
					<Col md="8">
						<ul className="mui-list--styled">
				          <li>Receive free data between midnight and 6 AM daily. A maximum of 1TB data not used will carry over. Hardware is included (WiFi Router) in the package.</li>
				          <li>As a Vox staff member, you are responsible for the costs of the FTTH line application and installation from one of the Vox service providers (Vumatel, Fibrehoods, Frogfoot, Telkom).</li>

				        </ul>
			        </Col>
		        </Row>

		        <DownloadAndFooter downaction={ftth_form} btncolor="danger" />
			</Container>
		)
	}
}

export default FTTH;