import { ReactNode } from 'react'

interface TaskListProps {
    children: ReactNode
}

export const TaskList = ({ children }: TaskListProps) => {
    return (
        <ul className=" w-full h-auto bg-gray-700 mx-0 my-8 px-4 py-6 rounded-xl">
            {' '}
            {children}{' '}
        </ul>
    )
}
