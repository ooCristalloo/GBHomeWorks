"use client"

import { useState } from "react"

function CommentsList() {
    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" },
    ])

    const deleteComment = (id: number) => {
        setComments((prevComments) => prevComments.filter((comment) => comment.id !== id))
    }

    return (
        <div className="space-y-2">
            {comments.map((comment) => (
                <div key={comment.id}>
                    <span>{comment.text}</span>
                    <button
                        onClick={() => deleteComment(comment.id)}>
                        удалить
                    </button>
                </div>
            ))}
        </div>
    )
}

export default CommentsList

