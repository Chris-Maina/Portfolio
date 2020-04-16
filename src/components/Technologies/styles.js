const styles = {
    container: {
        height: '100vh',
        fontSize: 17,
        padding: '0 30px',
        justifyContent: 'space-around',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',

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
