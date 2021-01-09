import React from 'react';
import ExteriorPaint from '../Pictures/ExteriorPainting.jpg'
import InteriorPaint from '../Pictures/InteriorPainting.jpg'
import Staining from '../Pictures/Staining.jpg'
import PressureWashing from '../Pictures/PressureWashing.jpg'

import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider'
//import Button from '@material-ui/core/Button'

import './Services.css'

const row1 = [
    { title: 'Interior Painting ', picture: InteriorPaint, service:'Interior Painting', Description: 'We take great pride in our Interior painting process. We will ensure the color is perfect before we beign and will move any needed furniture and other preperation work needed to achieve a smooth, flawless surface to make any room in your house feel like new.'},
    { title: 'Exterior Painting ', picture: ExteriorPaint, service:'Exterior Painting', Description: 'Exterior painting can be a dangerous job, so let us do it for you! We take all needed safety precautions to ensure the job is done safety and in a timely manner. We will do any needed pressure cleaning before hand to garuentee a flawless finsih to make your home looking like new!' },
]

const row2 = [
    { title: 'Staingin and Varnishing ', picture: Staining, service:'Staining & Varnishing', Description: 'Staining and Varnishing is a good way to keep out moisture and preserve the life of any wood product. We use the best products available to ensure your wood products last for generations.'},
    { title: 'Pressure Washing ', picture: PressureWashing, service:'Pressure Washing', Description: 'We provide stand alone presure washing services to clean years worth of dirt and grim from any sparyable surface and leave your products looking like the day you got them.'},  
]


const Services = () => {
    return(
        <div>
            <Container maxWidth='md'>
                <Typography variant='h5' align='center' style={{color:'#FEF102', fontWeight: 'bold', marginTop: '1%'}}>Services We Offer</Typography>
                <Typography variant='h4' align='center' style={{color:'white', fontWeight: 'bold',}} >Professional Interior & Exterior Painting,</Typography>
                <Typography variant='h4' align='center' style={{color:'white', fontWeight: 'bold', marginBottom: '3%'}} >Pressure Washing & more!</Typography>
                <Divider variant='middle' />
            </Container>
            <Container maxWidth='sm'>
                <Typography variant='body1' align='center' style={{color:'white', marginTop:'2%', marginBottom: '3%'}} >
                    At Paint Solutions of Tampa Bay we offer both residential and commercial services while using the highest quality product to fit your needs and to ensure customer satisfaction with a smooth flawless finish to all projects.
                </Typography>
                {/* <Button className='Title-Started' href="#Contact" size="small" style={{color: 'white', fontWeight: 'bold', alignItems:'center'}}>GET YOUR FREE ESTIMATE</Button> */}
            </Container>
            <Grid container spacing={5} direction="row" justify="center" alignItems="center">
                {row1.map(elem => (
                    <Grid item md={3} key={row1.indexOf(elem)}>
                        <Card raised='true'>
                            <CardMedia image={elem.picture} title={elem.title} style={{height: 0, paddingTop: '56.25%'}} />
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                                    <Typography>{elem.service}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>{elem.Description} </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Grid container spacing={5} direction="row" justify="center" alignItems="center">
                {row2.map(elem => (
                    <Grid item md={3} key={row2.indexOf(elem)}>
                        <Card>
                            <CardMedia image={elem.picture} title="plcae holder" style={{height: 0, paddingTop: '56.25%'}} />
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                                    <Typography>{elem.service}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>{elem.Description} </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
};

export default Services;
