import React from 'react';

import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

import './About.css'

const data = [
    { Reviewee:'Mary Hirtzel', Review: 'I cannot say enough of how satisfied I am with their services. Very detailed, clean, knowledgeable, and most of all proud of their work. This is a family business that thrives for your satisfaction. I would definitely recommend this company to anyone. Trust me you will NOT be disappointed!' },
    { Reviewee:'Mark Jacobs', Review: 'Not only was their communication excellent from start to finish, but this father and son team were true professionals. I\'ve hired and fired many, many contractors from every possible trade (I used to renovate and flip houses), so when I say these guys are top-of-the-line, it means something.' +
                                        'I HIGHLY recommend Paint Solutions of Tampa Bay for their high-quality work, competitive pricing, and just being a fine example of what a small, well-run business looks like.'},
    { Reviewee:'Linda McPhee', Review: 'We have used Paint Solutions of Tampa Bay twice this year. Always on time, very courteous and go out of their way to make sure everything is perfect. They even recommended changing light bulbs to make paint stand out. Do not hesitate using Miguel and his dad you will not be sorry.'},
]

const Testimonials = () => {
    return(
        <div>
            <Typography variant='h5' align='center' style={{color:'#FEF102', fontWeight: 'bold', }}>
                TESTIMONIALS
            </Typography>
            <Typography variant='h5' align='center' style={{color:'white', fontWeight: 'bold', marginBottom: '2%' }}>
                See what our clients say about us!
            </Typography>
            <Grid container spacing={4} direction="row" justify="center" >
                {data.map(elem => (
                    <Grid item md={2}  key={data.indexOf(elem)} >
                        <Card style={{height: '600px', backgroundColor:'white'}}>
                            <CardContent>
                            {(() => { if (data.indexOf(elem) === 0) {
                                return (
                                    <div>
                                        <Typography variant='body2' align='center' style={{color:'black', fontStyle: 'italic', marginTop:'50%', marginBottom: '28%', fontSize:'larger'}}> {elem.Review} </Typography>
                                        <Typography variant='body1' align='left' style={{color:'black', fontWeight: 'lighter', marginBottom: '2%', marginLeft:'5%', }}> <br /> - {elem.Reviewee} </Typography>
                                    </div>
                                )
                                } else if (data.indexOf(elem) === 2) {
                                return (
                                    <div>
                                        <Typography variant='body2' align='center' style={{color:'black', fontStyle: 'italic', marginTop:'50%', marginBottom: '30%', fontSize:'larger'}}> {elem.Review} </Typography>
                                        <Typography variant='body1' align='left' style={{color:'black', fontWeight: 'lighter', marginBottom: '2%', marginLeft:'5%', }}> <br /> - {elem.Reviewee} </Typography>
                                    </div>
                                )
                                } else {
                                return (
                                    <div>
                                        <Typography variant='body2' align='center' style={{color:'black', fontStyle: 'italic', marginTop:'5%', fontSize:'larger'}}> {elem.Review} </Typography>
                                        <Typography variant='body1' align='left' style={{color:'black', fontWeight: 'lighter', marginBottom: '2%', marginLeft:'5%', }}> <br /> - {elem.Reviewee} </Typography>
                                    </div>
                                )
                                }})()}
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

        </div>
    )
};

export default Testimonials;