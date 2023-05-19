// This will tell Next to not render this component on the server only the browser
'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function UpdateNote(note: any) {
  const { id, content, title } = note.note
  const [newTitle, setTitle] = useState(title)
  const [newContent, setContent] = useState(content)

  const router = useRouter()

  const update = async() => {

    await fetch(`http://127.0.0.1:8090/api/collections/fireship/records/${id}`,{
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body:  JSON.stringify({
          "title": newTitle,
          "content": newContent,
        })
      })

      setContent("")
      setTitle("")

      router.refresh()
  }

  return (
    <form onSubmit={update}>
      <h3>Update Note</h3>
      <input 
        type="text"
        placeholder='Title'
        value={newTitle}
        onChange={(e)=> setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={newContent}
        onChange={(e)=> setContent(e.target.value)}
      />
      <button type="submit">
        Update Note
      </button>
    </form>
  )
}