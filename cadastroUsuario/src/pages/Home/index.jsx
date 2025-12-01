  import { useState } from 'react'
  import Icon from '../../../../cadastroUsuario/public/lixeira.png'
  import './estilo.css'
  function Home() {
    const Users = [
  {
    id: '1',
    name: "Mateus",
    age: 19,
    email: "msmateuspereira@gmail.com"
  },
  {
    id: '2',
    name: "Ana",
    age: 22,
    email: "ana.silva@example.com"
  },
  {
    id: '3',
    name: "Carlos",
    age: 25,
    email: "carlos.martins@example.com"
  },
  {
    id: '4',
    name: "Beatriz",
    age: 20,
    email: "beatriz.lopes@example.com"
  }
];




    return (
      <>
 <div className='container'>
        <form>
         
            <h1>Cadastro Usuario</h1>
            <input name='name' type='text' placeholder='digite seu nome..'/>
            <input name='age' type='number' placeholder='digite suas data de nascimento..' />
            <input name='email' type='email' placeholder='digite seu melhor email..' />
            <button type='button'>Enviar</button>
        </form>
          </div>

{Users.map(user => (


<div key={user.id} className='card'>
    <div>
      <p>Nome: <span>{user.name}</span>  </p>
      <p>Idade: <span>{user.age}</span> </p>
      <p>E-mail: <span>{user.email}</span> </p>
    </div>
    <button>
      <img src={Icon} alt="img-icon" />
    </button>
  </div>
))}

      </>
    )
  }

  export default Home
