import { useState } from 'react'
import './app.css'

function App() {
  const [count, setCount] = useState(5)
  const onCancel = () => {
    parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*')
  }

  const onCreate = () => {
    parent.postMessage({ pluginMessage: { type: 'create-shapes', count } }, '*')
  }

  return (
    <>
      <h2>Rectange Creator</h2>
      <p>Count: <input id="count" type="number" value={count} onChange={(e) => setCount(Number(e.target.value))} /></p>
      <button onClick={onCreate}>Create</button>
      <button onClick={onCancel}>Cancel</button>
    </>
  )
}

export default App
