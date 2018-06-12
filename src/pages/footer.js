import React from 'react';
import Col from 'muicss/lib/react/col';

class Footer extends React.Component {
	render() {
		return (
        	<Col md="12">
        		<div className="mui--text-left">
        			
        			<ul className="mui-list--unstyled">
                                <li>* Please send a complete application form with a certified copy of ID and proof of residence not older than 3 months to  
                                 <a href="mailto:channel@vox.co.za"> channel@vox.co.za.</a></li>
        			</ul>
        		</div>
        	</Col>
		)
	}
}

export default Footer;