import PropTypes from 'prop-types'

function SecondComponent(props) {
    const { saludo, setSaludo2 } = props
    return <>
        SecondComponent {saludo}
        <button onClick={() => setSaludo2('PEPE')} >Boton senComp</button>
    </>
}

SecondComponent.propTypes = {
    saludo: PropTypes.string.isRequired,
    setSaludo2: PropTypes.func.isRequired
}

export default SecondComponent

