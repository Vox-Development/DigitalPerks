import React from 'react';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import DownloadAndFooter from './download';
import BANNER from './banner';

const mobile_form='Staff-Application-Form-for-Vox-Mobile-Data-and-ADSL-2017.pdf';

class MOBILE extends React.Component {
	render() {
		return (
			<Container fluid={true}>
				<BANNER ima="./MOBILE DATA.png" />
				<Row>
					<Col md="12">
						<h1 className="heading">1 GB of Mobile Data on MTN</h1>
					</Col>
				</Row>

				<Row>
					<Col md="8">
						<ul className="mui-list--styled">
				          <li>Staff member’s account that exceeds the 1GB provided by Vox will be billed at 7c/MB (vat incl).</li>
				          <li>Should the staff member need additional SIM cards, these can be bought at R10/SIM per month and will be added to the primary account.</li>
				          <li>A staff member can assign data caps to each SIM card on the Vox customer zone.</li>
				        </ul>
			        </Col>
		        </Row>

		        <DownloadAndFooter downaction={mobile_form} />
			</Container>
		)
	}
}

export default MOBILE;