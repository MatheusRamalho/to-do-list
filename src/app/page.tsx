'use client'

import { useState } from "react";

import { TaskProps } from "@/types/Task";

import { Task } from "@/components/Task";
import { NewTask } from "@/components/NewTask";

export default function Home() {
    const [list, setList] = useState<TaskProps[]>([{ id: 1, name: 'Aprendendo ReactJS', done: false }])

    const handleAddTask = (taskName: string) => {
        const newList = [...list]

        newList.push({
            id: list.length + 1,
            name: taskName,
            done: false,
        })

        setList(newList)
    }

    return (
        <section className="w-full max-w-[1024px] container mx-auto">
            <h6 hidden> Home page </h6>

            <h1 className="text-white font-bold text-4xl text-center"> To-do List </h1>
            <p className="text-gray-300 text-base text-center leading-10 mb-4"> Para adicionar um novo item na lista preencha o campo e pressione enter no teclado. </p>

            <NewTask onEnter={handleAddTask} />

            <Task.List>
                {list.map((item, index) => (
                    <Task.Item key={index} item={item} />
                ))}
            </Task.List>
        </section>
  )
}
