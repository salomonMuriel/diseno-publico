import { Box, Button, Container, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import MainColors from '../../../utils/MainColors';
import Wave from 'react-wavify'
import Blob1 from '../../../assets/home/blob1.svg'

const useStyles = makeStyles(theme => ({
    jumboContainer: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${Blob1})`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundSize: '50%',
        backgroundPositionX: '75%',
        backgroundPositionY: '60%',
        [theme.breakpoints.down('sm')]: {
            backgroundSize: '90%',
        }

    },
    textContainer: {
        marginTop: 'auto',
    },
    introText: {
        textAlign: 'left'
    },
    jumboText: {
        textAlign: 'left'
    },
    wave: {
        marginTop: 'auto'
    },
    buttonContainer: {
    },
    button: {
        margin: theme.spacing(2)
    }
}));


const JumboSection = () => {
    const classes = useStyles()
    return (
        <Box className={classes.jumboContainer}>
            <Container maxWidth='lg' className={classes.textContainer}>
                <Typography variant='h2' className={classes.introText} color='secondary'>
                    ¡Hola!
                </Typography>
                <Typography variant='h3' className={classes.introText}>
                    Haz parte de la comunidad
                </Typography>
                <Typography variant='h3' className={classes.introText}>
                    Latinoaméricana de
                </Typography>
                <Typography variant='h1' className={classes.jumboText}>
                    Diseño Público
                </Typography>
                <Box className={classes.buttonContainer}>
                    <Button className={classes.button} variant='contained' style={{backgroundColor: MainColors.blue, color: "#FFFFFF"}}>
                        <Typography variant='h6'>
                            Saber más
                        </Typography>
                    </Button>
                    <Button className={classes.button} variant='contained' color='secondary'>
                        <Typography variant='h6'>
                            Únirme
                        </Typography>
                    </Button>
                </Box>
            </Container>
            <Wave className={classes.wave}
                fill={MainColors.pink}
                paused={false}
                options={{
                    height: 50,
                    amplitude: 70,
                    speed: 0.10,
                    points: 3
                }} />
        </Box>
    )
}

export default JumboSection