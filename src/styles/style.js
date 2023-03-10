import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({

    body2: {
        fontSize: 11
    },

    body3: {
        fontSize: 9,
    },

    tourHeading: {
        paddingTop: 10
    },
    imageContainer: {
        display: 'flex',
        gap: 5
    },

    tourFooter: {
        marginTop: 20,
        marginBottom: 20
    },

    footer: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0
    },
    inputForm: {
        padding: 10,
        marginTop: 10,
        margin: 10
    },
    loginPage: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '100px'
    },
    loginButtons: {
        display: 'flex',
        padding: '5px',
        gap: '10px'
    }

}

))