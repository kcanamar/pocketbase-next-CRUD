// This will tell Next to not render this component on the server only the browser
'use client';

import { useRouter } from "next/navigation"; 

export default function DeleteNote(note: any) {
  const { id } = note.note

  const navigate = useRouter()

  console.dir(navigate)

  const destroy = async() => {

    await fetch(`http://127.0.0.1:8090/api/collections/fireship/records/${id}`,{
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      navigate.push('http://localhost:3000/notes?')
  }

  return (
    <form onSubmit={destroy}>
      <h3>Delete Note</h3>
      <button type="submit">
        Delete Note
      </button>
    </form>
  )
}