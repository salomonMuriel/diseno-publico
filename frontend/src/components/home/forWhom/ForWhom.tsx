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

const ForWhom = () => {
    const classes = useStyles()
    return (
        <Box className={classes.sectionBox}>
            <Container className={classes.sectionContainer} maxWidth='lg'>
                <Typography variant='h3'>
                    ¿Para Quien?
                </Typography>
            </Container>
        </Box>
    )
}

export default ForWhom