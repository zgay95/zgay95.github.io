import React from 'react';

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container'
import FormGroup from '@material-ui/core/FormGroup'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import emailjs from 'emailjs-com';

import './Contact.css'

const Contact = () => {
    const IconData = [
        { Text1: 'Tampa', Text2: ', FL'},
        { Text1: '', Text2: ' (123) 456-7890' },
    ]

    const [values, setValues] = React.useState({
        Name: '',
        Email: '',
        PhoneNumber: '',
        Description: '',
        InteriorPainting: false,
        ExteriorPainting: false,
        StainingVarnishing: false,
        PressureWashing: false,
        Residential: false,
        Commercial: false,
      });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value })
    };

    const handleChangeChecked = (event) => {
        setValues({ ...values, [event.target.name]: event.target.checked })
      };

    const onClick = (e) => {
        e.preventDefault()
    
        emailjs.send('service_01iplsl', 'template_2mfztyr', values, 'user_wp4KzGi0VQcI1K6HdJF3l')
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text)
         }, function(error) {
            console.log('FAILED...', error)
         });
      };

    return(
        <div> 
            <form noValidate autoComplete="on">
            <Container maxWidth="sm">
                <Typography variant='h5' align='center' style={{color:'#FEF102', fontWeight: 'bold', }}>
                    GET IN TOUCH
                </Typography>
                <Typography variant='h4' align='center' style={{color:'white', fontWeight: 'bold', marginBottom: '2%' }}>
                    Contact us today for a
                </Typography>
                <Typography variant='h4' align='center' style={{color:'white', fontWeight: 'bold', marginBottom: '2%' }}>
                    FREE ESTIMATE
                </Typography>
                <Divider/>
            </Container>

            <Grid container spacing={10} direction="row" justify="center" alignItems="center">
                {IconData.map(elem => (
                    <Grid item md={2} key={IconData.indexOf(elem)}>
                        <Container disableGutters= 'true' maxWidth='md'>
                            {(() => { if (IconData.indexOf(elem) === 0) {
                                return (
                                    <div>
                                        <LocationOnIcon style={{color:'gray', width: '60', height: '60', marginTop: '5%',  marginLeft: '70%'}} />
                                        <Typography variant='body1' align='right' style={{color:'#FEF102', fontWeight: 'bold' }}>
                                            {elem.Text1 + elem.Text2}
                                        </Typography>
                                    </div>)
                                } else {
                                return (
                                    <div>
                                        <PhoneIphoneIcon style={{color:'gray', width: '60', height: '60', marginTop: '5%', marginLeft: '10%'}}/>
                                        <Typography variant='body1' align='left' style={{color:'#FEF102', fontWeight: 'bold'}}>
                                            {elem.Text1 + elem.Text2}
                                        </Typography>
                                    </div>
                                )}})()}
                        </Container>
                    </Grid>
                ))}
            </Grid>

            <Typography variant='body1' align='center' style={{color:'white', fontWeight: 'bold', marginTop: '2%'}}>
                    Fill out the form below to send us an email
            </Typography>
            <Typography variant='body1' align='center' style={{color:'white', fontWeight: 'bold', marginBottom: '2%' }}>
                    and we will get in contact with you about your project.
            </Typography>
            <Container maxWidth="sm" style={{height: '500px', marginBottom: '5%',}}>
                <Card style={{color:'gray', marginBottom: '25%',}}>
                    <FormGroup>
                        <FormControl>
                            <TextField label="Name" variant="filled" id="Name" size="small" value={values.Name} onChange={handleChange('Name')} style={{width:'90%', marginLeft: '5%', marginTop: '3%', marginBottom: '3%'}}/>
                        </FormControl>
                    </FormGroup>
                    <FormControl>
                        <TextField label="Email" variant="filled" id="Email" size="small" value={values.Email} onChange={handleChange('Email')} style={{width:'85%', marginLeft: '20%', marginTop: '5%', marginBottom: '3%'}}/>
                    </FormControl>
                    <FormControl>
                        <TextField label="Phone Number" variant="filled" id="PhoneNumber" size="small" value={values.PhoneNumber} onChange={handleChange('PhoneNumber')} style={{width:'85%', marginLeft: '20%', marginTop: '5%', marginBottom: '3%'}}/>
                    </FormControl>

                    <Grid container spacing={5} direction="row" justify="center" alignItems="center">
                        
                        <FormGroup style={{marginTop: '5%', marginBottom: '3%', marginRight: '5%' }}>
                            <Typography align='left' variant="caption">
                                What services can we help with?
                            </Typography>
                            <FormControlLabel
                                control={ <Checkbox checked={values.InteriorPainting} onChange={handleChangeChecked} name="InteriorPainting" color="primary"  size='small'/>  }
                                label={<Typography variant="caption" >Interior Painting</Typography>}
                            />
                            <FormControlLabel
                                control={ <Checkbox checked={values.ExteriorPainting} onChange={handleChangeChecked} name="ExteriorPainting" color="primary" size='small' />  }
                                label={<Typography variant="caption" >Exterior Painting</Typography>}
                            />
                            <FormControlLabel
                                control={ <Checkbox checked={values.StainingVarnishing} onChange={handleChangeChecked} name="StainingVarnishing" color="primary"  size='small'/>  }
                                label={<Typography variant="caption" >Staining and Varnishing</Typography>}
                            />
                            <FormControlLabel
                                control={ <Checkbox checked={values.PressureWashing} onChange={handleChangeChecked} name="PressureWashing" color="primary"  size='small'/>  }
                                label={<Typography variant="caption" >Pressure Washing</Typography>}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Typography align='right' variant="caption">
                                Is this Residential or Commercial?
                            </Typography>

                            <FormControlLabel
                                control={ <Checkbox checked={values.Residential} onChange={handleChangeChecked} name="Residential" color="primary" size='small'/>  }
                                label={<Typography variant="caption" >Residential</Typography>}
                            />
                            <FormControlLabel
                                control={ <Checkbox checked={values.Commercial} onChange={handleChangeChecked} name="Commercial" color="primary" size='small'/>  }
                                label={<Typography variant="caption" >Commercial</Typography>}
                            />
                        </FormGroup>

                    </Grid>
                    <FormControl fullWidth>
                        <TextField multiline='true' variant="filled" label="Description" id="Description" size="small" value={values.Description} onChange={handleChange('Description')} style={{width:'90%', marginLeft: '5%', marginTop: '3%', marginBottom: '3%'}}/>
                    </FormControl>
                    <Button variant="outlined" color="gray" onClick={onClick} style={{width:'50%', marginLeft: '25%', marginBottom: '5%'}}> Submit </Button>
                </Card>                            
            </Container>
            </form>
        </div>
    );
};

export default Contact;