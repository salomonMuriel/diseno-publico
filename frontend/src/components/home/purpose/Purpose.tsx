import { Box, Container, makeStyles, Typography } from '@material-ui/core'
import Wave from 'react-wavify';
import MainColors from '../../../utils/MainColors';

const useStyles = makeStyles(theme => ({
    sectionBox: {
        width: '100%',
        hegiht: '100%',
        backgroundColor: '#FFFFFF'
    },
    sectionContainer: {
        height: '400px',
        display: 'flex',
        flexDirection: 'column'
    },
}));

const Purpose = () => {
    const classes = useStyles()
    return (
        <Box className={classes.sectionBox}>
            <Container className={classes.sectionContainer} maxWidth='lg'>
                <Typography variant='h3'>
                    ¿Para que?
                </Typography>
            </Container>
        </Box>
    )
}

export default Purpose