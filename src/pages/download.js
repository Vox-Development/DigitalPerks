import React from 'react';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Footer from './footer';

import { CONFIG } from '../config';


class DownloadAndFooter extends React.Component {
	render() {
		const uri = `${CONFIG.DOCS_URL}/${this.props.downaction}`
		return (
			<Row>
				<Col md="12 padd-bot">
					<a className="btn btn-sugn-up" href={uri} target="_blank">Download Application Form!</a>
				</Col>

				<Footer />
			</Row>
		)
	}
}

export default DownloadAndFooter;