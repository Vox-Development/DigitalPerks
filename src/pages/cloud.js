import React from 'react';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import DownloadAndFooter from './download';
import BANNER from './banner';

const cloud_form = 'SiteBuilder_Staff_Subscriber_Agreement_V1.2.pdf';

class CLOUD extends React.Component {
	render() {
		return (
			<Container fluid={true}>
				<BANNER ima="./CLOUD.png" />
				<Row>
					<Col md="12">
						<h1 className="heading">Cloud Services</h1>
					</Col>
					<Col md="12">
						<h3>Site Builder Starter</h3>
					</Col>
				</Row>

				<Row>
					<Col md="8">
						<p>Vox SiteBuilder allows you to create and manage your business website with ease – No programming or web development skills required.
						All you need to do is CREATE, CUSTOMISE and PUBLISH your website at a cost of @ R18 pm.</p>
			        </Col>
		        </Row>

		        <DownloadAndFooter downaction={cloud_form} btncolor="accent" />
			</Container>
		)
	}
}

export default CLOUD;