"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { ChangeEvent } from "react";

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const router = useRouter();

  const create = async () => {
    // submit data to pocketbase
    await fetch("http://127.0.0.1:8090/api/collections/note/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title,
        content
      })
    });

    // reset state
    setTitle("");
    setContent("");

    router.refresh();
  };

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  return (
    <form onSubmit={create}>
      <h3>Create a note</h3>
      <input type="text" placeholder="Title" value={title} onChange={handleTitleChange} />
      <textarea placeholder="Content" value={content} onChange={handleContentChange} />
      <button type="submit">Create note</button>
    </form>
  );
};

export default CreateNote;
