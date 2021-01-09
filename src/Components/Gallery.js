import React from 'react'
import Step1 from '../Pictures/Step1.jpg'
import Step2 from '../Pictures/Step2.jpg'
import Step3 from '../Pictures/Step3.jpg'

import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Carousel from 'react-material-ui-carousel'
import Button from '@material-ui/core/Button'

import './Gallery.css'

//image size: 1900 x 845
const steps = [
    {
      label: "Step1",
      Path: Step1
    },
    {
      label: "Step2",
      Path: Step2
    },
    {
      label: "Step3",
      Path: Step3
    }
];
  
function Item(props)
{
return (
    <img src={props.item.Path} alt={props.item.label}/>
)
}

const Gallery = () => {
    return(
        <Box maxWidth='xl'>
            <div className='Title'>
            <Container maxWidth='sm'>          
              <Typography className='Title-Company' align='Left' color='primary' variant='h2' style={{fontFamily: 'French Script MT', fontWeight: 'bold',}}>Paint Solutions</Typography>
              <Typography className='Title-Company' align='Right' color='primary' variant='h2' display='inline' style={{fontFamily: 'French Script MT', fontWeight: 'bold',}}>of Tampa Bay  </Typography>
              <Typography align='Right' color='primary' variant='body' display='inline'>LLC</Typography>
              <Typography className='Title-Description' align='center' variant='h4' style={{color: 'white',}}>Professional Painting Services </Typography>
              <Typography className='Title-Description' align='center' variant='h4' style={{color: 'white',}}>for the Tampa Bay Area</Typography>
              <Button className='Title-Started' href="#Contact" size="small" style={{color: 'white', fontWeight: 'bold', paddingTop: '10%',}}>GET YOUR FREE ESTIMATE</Button>
            </Container>
            </div>

            <div className='Gallery'>
            <Carousel navButtonsAlwaysinVisible='true' interval={5000} timeout={1}>
                { steps.map( (item, i) => <div><Item key={i} item={item} style={{fullWidth:'100%',}}/></div>) }
            </Carousel>
            </div>
        </Box>
    );
};

export default Gallery;
