import { PbNote } from "@/types";

const getNote = async (noteId: string): Promise<PbNote> => {
  const res = await fetch(`http://127.0.0.1:8090/api/collections/note/records/${noteId}`);
  return res.json();
};

type SingleNotePageProps = {
  params: {
    id: string;
  };
};

const SingleNotePage = async ({ params }: SingleNotePageProps) => {
  const note = await getNote(params.id);

  const { content, created, id, title } = note;

  return (
    <div>
      <h1>notes/{id}</h1>
      <div>
        <h3>{title}</h3>
        <h5>{content}</h5>
        <p>{created}</p>
      </div>
    </div>
  );
};

export default SingleNotePage;
