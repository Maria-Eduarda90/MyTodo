import { useState, useEffect, FormEvent } from 'react';
import { api } from "../api/api";
import { todoType } from '../data/@types/Todos';

export function useTodos(){
    const [todos, setTodos] = useState<todoType[]>([]);
    const [assignment, setAssignment] = useState("");

    function handleSubmitDelete(id: string) {
      if (window.confirm("Tem certeza que deseja apagar esse todo?")) {
        api.delete(`/todo/${id}`);
      }
    }

    async function handleSubmit(e: FormEvent) {
      e.preventDefault();

      if (assignment.trim() === "") {
        return;
      }

      const data = {
        assignment: assignment,
        mark_as_done: false,
      };

      await api.post("/todo", data);

      setAssignment("");
    }

    useEffect(() => {
      api.get("/todo").then((response) => {
        setTodos(response.data);
        console.log(response.data);
      });
    }, [todos]);
    
    return {
      todos,
      handleSubmitDelete,
      handleSubmit,
      assignment,
      setAssignment,
    };
}