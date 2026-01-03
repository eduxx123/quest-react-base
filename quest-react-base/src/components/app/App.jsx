import './App.css'

function App({ texto, color = 'aquamarine' }) {
  return (
    <>
      <div style={{backgroundColor: color}}>
        <p>
          {texto.toUpperCase()}
        </p>
      </div>
    </>
  )
}

export default App


