import { Box, Container, makeStyles, Typography } from '@material-ui/core'
import Wave from 'react-wavify';
import MainColors from '../../../utils/MainColors';

const useStyles = makeStyles(theme => ({
    sectionBox: {
        width: '100%',
        hegiht: '100%',
        backgroundColor: '#FAFAFA'
    },
    sectionContainer: {
        height: '400px',
        display: 'flex',
        flexDirection: 'column'
    },
    wave: {
        transform: 'rotate(180deg)',
        height: '50px'
   }
}));

const WhatIsIt = () => {
    const classes = useStyles()
    return (
        <Box className={classes.sectionBox}>
            <Wave className={classes.wave}
            style={{display:'flex'}}
            fill={MainColors.pink}
            paused={false}
            options={{
                height: 10,
                amplitude: 40,
                speed: 0.10,
                points: 3
            }}/>
            <Container className={classes.sectionContainer} maxWidth='lg'>
                <Typography variant='h3'>
                    ¿Qué es?
                </Typography>
            </Container>
        </Box>
    )
}

export default WhatIsIt