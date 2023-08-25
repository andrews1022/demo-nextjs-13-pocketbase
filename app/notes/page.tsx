import NotePage from "@/components/Note";
import { PbNote } from "@/types";

const getNotes = async () => {
  const url = "http://127.0.0.1:8090/api/collections/note/records?page=1&perPage=30";

  const res = await fetch(url, { cache: "no-store" });
  const data = await res.json();

  return data?.items as PbNote[];
};

const Notes = async () => {
  const notes = await getNotes();

  return (
    <div>
      <h1>Notes</h1>

      <div className="grid">
        {notes?.map((note) => {
          return <NotePage key={note.id} note={note} />;
        })}
      </div>
    </div>
  );
};

export default Notes;
