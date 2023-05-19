import styles from "../Notes.module.css"

async function getNote(noteId: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/fireship/records/${noteId}`,
    {
      next: { revalidate: 10 } // This will produce Incremental Static Regeneration - ISR
    }
  )
    const data = await res.json()
    return data;
}


export default async function NotePage({ params }: any) {
  const note = await getNote(params.id)

  return (
    <div>
      <h1>Note/{note.id}</h1>
      <div className={styles.note}>
        <h3>{note.title}</h3>
        <h5>{note.content}</h5>
        <p>{note.created}</p>
      </div>
    </div>
  )
}