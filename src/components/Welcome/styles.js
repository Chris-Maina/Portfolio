const styles = {
    container: {
        height: '100vh',
        marginTop: 55,
        paddingLeft: 20,
        background: 'linear-gradient(106deg, rgba(157,213,189,1) 0%, rgba(232,225,204,1) 100%)',
        color: '#3D405B',
        display: 'flex',
        fontSize: 25,
        justifyContent: 'space-around',
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
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        width: '50%',
    },
    title: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 50,
        marginBottom: 20,
    },
}

export default styles;
