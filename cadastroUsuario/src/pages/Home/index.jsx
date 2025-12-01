import { useState } from 'react'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
       <form>
        <h1>Cadastro Usuario</h1>
        <input name='name' type='text'/>
        <input name='age' type='number'/>
        <input name='email' type='email'/>
<button type='button'>Enviar</button>
     <div>
      <div>
        <p>Nome:</p>
        <p>Idade:</p>
        <p>E-mail:</p>
      </div>
     </div>
       </form>

      </div>
    </>
  )
}

export default Home
