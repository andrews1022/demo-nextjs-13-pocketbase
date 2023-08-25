import { PbNote } from "@/types";
import Link from "next/link";

type NoteProps = {
  note: PbNote;
};

const NotePage = ({ note }: NoteProps) => {
  const { content, created, id, title } = note;

  return (
    <Link href={`/notes/${id}`}>
      <div className="note">
        <h2>{title}</h2>
        <h5>{content}</h5>
        <p>{created}</p>
      </div>
    </Link>
  );
};

export default NotePage;
