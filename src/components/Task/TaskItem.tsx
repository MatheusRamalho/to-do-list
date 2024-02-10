import { useState } from 'react'

import { TaskProps } from '@/types/Task'

interface TaskItemProps {
    item: TaskProps
}

export const TaskItem = ({ item }: TaskItemProps) => {
    const [isChecked, setIsChecked] = useState<boolean>(item.done)

    return (
        <li
            className={`w-full mb-4 p-5 rounded-lg flex items-center border  ${
                isChecked
                    ? 'border-green-700 bg-green-500'
                    : 'border-gray-800 bg-gray-600'
            } `}
        >
            <input
                className="cursor-pointer w-6 h-6 mr-4 bg-green-500"
                type="checkbox"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
            />

            <label
                className={`${
                    isChecked
                        ? 'italic line-through'
                        : 'not-italic no-underline'
                } text-white`}
            >
                {' '}
                {item.name}{' '}
            </label>
        </li>
    )
}
