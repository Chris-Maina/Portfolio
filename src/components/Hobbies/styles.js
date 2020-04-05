const styles = {
    container: {
        height: '100vh',
        paddingTop: 60,
        display: 'flex',
        fontSize: 18,
        justifyContent: 'space-around',
    },
    imageWrapper: {
        width: '50%'
    },
    graphic: {
        objectFit: 'contain',
        height: '100%',
        width: '100%',
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
        width: '14%',
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
    }
}

export default styles;
