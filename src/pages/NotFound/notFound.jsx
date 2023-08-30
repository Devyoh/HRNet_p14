import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
      <main className='bg-teal-50  m-auto text-center '>
        <div className=' min-h-max p-5 m-auto'>
          <h1>Oups.. La page que vous demandez n'existe pas</h1>

          <Link to='/'> Retourner à la page d'accueil</Link>
        </div>
      </main>
    </>
  )
}
