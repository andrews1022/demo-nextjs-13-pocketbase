import Note from "@/components/Note";
import { PbNote } from "@/types";
import { Suspense } from "react";
import CreateNote from "../../components/CreateNote";

const getNotes = async (): Promise<PbNote[]> => {
  const url = "http://127.0.0.1:8090/api/collections/note/records?page=1&perPage=30";

  const res = await fetch(url, { cache: "no-store" });
  const data = await res.json();

  return data?.items;
};

const NotesPage = async () => {
  const notes = await getNotes();

  return (
    <div>
      <h1>Notes</h1>

      <Suspense fallback={<p>Loading notes...</p>}>
        <div className="grid">
          {notes.map((note) => (
            <Note key={note.id} note={note} />
          ))}
        </div>
      </Suspense>

      <CreateNote />
    </div>
  );
};

export default NotesPage;
