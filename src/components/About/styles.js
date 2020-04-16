const styles = {
    container: {
        height: '100vh',
        fontSize: 17,
        padding: '0px 30px',
        justifyContent: 'space-around', 
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
    },
    title: {
        fontWeight:  600,
        fontSize: 35,
        width: '10%',
        paddingBottom: 15,
        marginBottom: 20,
        borderBottom: '2px solid #000'
    },
    link: {
        display: 'block',
        textDecoration: 'none',
        fontWeight: 600,
        marginTop: 10,
        color: 'rgba(0,0,0,.9)',
    },
    icon: {
        marginLeft: 10,
    }
}

export default styles;
