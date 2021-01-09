import React from 'react';

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import './About.css'


const About = () => {
    return(
        <div className="About">
            <Container maxWidth='md' style={{paddingBottom: '3%'}}>
                <div className='About-Title'>  
                    <Typography variant='h4' align='Left' color='primary' style={{fontWeight: 'bold', marginTop: '3%'}}>
                        About Paint Solutions of Tampa Bay
                    </Typography>
                </div>
                <div className='About-Header'> 
                    <Typography variant='h3' gutterBottom='true' style={{fontWeight: ''}}>
                        Offering Professional Painting Services to the Tampa Bay Area
                    </Typography>
                </div>
                <Divider variant='middle' style={{marginBottom: '3%'}}/>
                <div className='About-body'> 
                    <Typography className='About-body' variant='body1' gutterBottom='true' style={{marginBottom: '3%'}}>
                        Paint Solutions is locally owned and family operated company in the Tampa Bay area. 
                        We value honesty, integrity and treat your property as if it were our own. We are fully transparent and communicate all plans with you to ensure customer satisfaction.
                    </Typography>
                    <Typography className='About-body' variant='body1' gutterBottom='true' style={{marginBottom: '3%'}}>
                        Not only do we offer painting services but we offer stand alone pressure washing to make any surface clean and like new again! 
                        We also offer staining and varnishing services to help seal the life and look to any of your wood products.
                        We offer fair and competitive pricing and value repat services as our ultimate goal is to develop and maintain good relations with all our customers.
                    </Typography>
                    <Typography className='About-body' variant='body1' gutterBottom='true' style={{marginBottom: '3%'}}>
                        We are very proud of our work and we are committed to bringing the best quality products and services to your resdidence or commercial building.
                        Theres no project to big or to small for us to tackle, so give as a call today for your free estimate!
                    </Typography>
                </div>
            </Container>
        </div>
    )
};

export default About;