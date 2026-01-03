const sayLabel = (label) => {
    alert(`A label desse botão é: ${label}`)
}


function Button({ label = 'Baixar CV' }) {
    return (
        <>
            <button onClick={() => sayLabel(label)}>{label}</button>
        </>
    )
}

export default Button