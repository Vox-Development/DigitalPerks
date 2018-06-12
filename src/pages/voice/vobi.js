import React from 'react';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import DownloadAndFooter from '../download';

const vobi_form = 'Application-form-for-Voice-Services_Employee-offers_20170424.pdf';

class VOBI extends React.Component {
	render() {
		return (
			<Container className="mui-container-custom mui--text-left">
		        <Row>
					<Col md="12">
						<h1 className="heading">Vox Vobi Account and Call Bundle</h1>
					</Col>
				</Row>

				<Row>
					<Col md="8">
					<h3 className="heading">Vobi (Vox Softphone)</h3>
						<ul className="mui-list--styled">
				          <li>Vobi is a mobile softphone application. It allows users to make and receive calls from their mobile phones using the Vox network.
				          Vobi also attracts reduced call rates. It is available on Android and iOS devices.</li>
				        </ul>
			        </Col>
		        </Row>

		        <Row>
					<Col md="8">
					<h3 className="heading">Vobi Benefits</h3>
					<h4 className="mui--text-left">Download the free Vobi application using (Google/Apple App store) to: </h4>
						<ul className="mui-list--styled">
				          <li>Receive a free single SIP Account and 087 number (no monthly rental).</li>
				          <li>Only Vox non-geographic numbers allocated.</li>
				          <li>Add up to 3 SIP accounts for family members @R25.00 (monthly charge).</li>
				          <li>Receive free 100 minutes per month, per SIP account (SA landline and mobile calls only),
				           after which low calling rates apply (see table below).</li>
				        </ul>
			        </Col>
		        </Row>

		        <Row>
					<Col md="8">
					<h4 className="heading">Terms and Conditions:</h4>
						<ul className="mui-list--styled">
				          <li>1 SIP account per employee. This is applicable to permanent staff only.</li>
				          <li>Limited to 3 ‘add-on’ accounts per the main account.</li>
				          <li>Call concurrency: 1 outbound call + 1 inbound call.</li>
				          <li>No carryover of free minutes.</li>
				          <li>Month to month contract.</li>
				          <li>No rebates on incoming calls.</li>
				          <li>RICA requirements.</li>
				          <li>Payment via debit order.</li>
				        </ul>
			        </Col>
		        </Row>

		        <Row>
					<Col md="12">
		        		<h4 className="heading">Call rates after first 100 minutes</h4>
			        	<table className="mui-table">
						  <thead>
						    <tr>
						      <th>Local and National</th>
						      <th>Mobile (MTN &amp; VC)</th>
						      <th>Mobile (CellC &amp; 8Ta)</th>
						      <th>Vox to Vox</th>
						      <th>International</th>
						    </tr>
						  </thead>
						  <tbody>
						    <tr>
						      <td>R 0.12</td>
						      <td>R 0.17</td>
						      <td>R 0.20</td>
						      <td>Free</td>
						      <td>Varies per destination</td>
						    </tr>
						  </tbody>
						</table>
					</Col>
		        </Row>


		        <Row>
					<Col md="8">
					<h3 className="heading" >How do I get this?</h3>
					 <h4 className="mui--text-left">Complete application  and submit to channel</h4>
						<ul className="mui-list--styled">
				          <li>You will receive an email from Vox with your SIP account details, 087 number, and QR code.</li>
				          <li>Scan the QR code using Vobi app – and you are good to call.</li>
				        </ul>
			        </Col>
		        </Row>

		        <DownloadAndFooter downaction={vobi_form} btncolor="warning" />
			</Container>
		)
	}
}

export default VOBI;