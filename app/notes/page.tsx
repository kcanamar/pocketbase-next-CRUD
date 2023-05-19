import Link from "next/link";
import styles from "./Notes.module.css"

// when fetching data without the fetch method certain parameters have to be exported
// export const dynamic = 'auto',
//   dynamicParams = true,
//   revalidate = 0,
//   fetchCache = 'auto',
//   runtime = 'nodejs',
//   perferredRegion = 'auto'

// Components can fetch server side props this way
async function getNotes() {
  // By adding the cache option to no-store this request will happen on every reload of the page
  // Similar to getServerSideProps
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/fireship/records?page=1&perPage=30",
    { cache: 'no-store'}
    );
  const data = await res.json();
  return data?.items as any[];
}


export default async function NotesPage() {

  // to use server side props in the component
  const notes = await getNotes()

  return (
    <div>
      <h1>Notes</h1>
      <div className={styles.grid}>
        {notes?.map((note) => {
            return <Note key={note.id} note={note} />
          })}
      </div>
    </div>
  )
}

// Note component that could be moved to a new file
function Note({ note }: any) {
  const { id, title, content, created } = note || {}

  return (
    <Link href={`/notes/${id}`}>
      <div className={styles.note}>
        <h2>{title}</h2>
        <h5>{content}</h5>
        <p>{created}</p>
      </div>
    </Link>
  )
}