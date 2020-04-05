const styles = {
    container: {
        height: '100vh',
        paddingTop: 60,
        display: 'flex',
        padding: '0 20px',
        fontSize: 18,
        justifyContent: 'space-around',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        width: '50%'
    },
    title: {
        fontWeight:  600,
        fontSize: 35,
        width: '27%',
        paddingBottom: 15,
        marginBottom: 20,
        borderBottom: '2px solid #000'
    },
    link: {
        display: 'block',
        textDecoration: 'none',
        fontWeight: 'bold',
        marginTop: 10,
        color: 'rgba(0,0,0,.9)',
    },
    icon: {
        marginLeft: 10,
    },
    imageWrapper: {
        width: '50%'
    },
    graphic: {
        objectFit: 'contain',
        height: '100%',
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block'
    },
}

export default styles;
