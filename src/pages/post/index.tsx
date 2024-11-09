import React, { useState } from "react";

interface Comment {
    id: number;
    author: string;
    date: string;
    content: string;
}

interface PostDetailProps {
    title: string;
    author: string;
    date: string;
    content: string;
    comments: Comment[];
}

const dummyPost = {
    title: "firebase란?",
    author: "test@test.com",
    date: "2023. 6. 20. 오후 04:24:06",
    content: "firebase가 무엇일까요?!",
    comments: [
        {
            id: 1,
            author: "test@test.com",
            date: "2023. 6. 30. 오전 02:45:20",
            content: "안녕하세요",
        },
        {
            id: 2,
            author: "example@example.com",
            date: "2023. 7. 1. 오후 01:15:45",
            content: "좋은 글 감사합니다.",
        },
    ],
};

const Post: React.FC = (props) => {
    const [newComment, setNewComment] = useState("");
    const [data, setData] = useState<PostDetailProps>(dummyPost);

    const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewComment(e.target.value);
    };

    const handleCommentSubmit = () => {
        // 댓글 제출 로직 추가
        console.log("새 댓글:", newComment);
        setNewComment("");
    };

    return (
        <div className="container flex flex-col gap-4 py-4">
            <h1 className="text-2xl font-bold">{data.title}</h1>
            <div className="flex gap-2 items-center text-sm text-gray-500">
                <span>{data.author}</span>
                <span>{data.date}</span>
            </div>
            <div className="flex gap-2 justify-start">
                <button className="text-gray-500 hover:text-gray-700">수정</button>
                <button className="text-gray-500 hover:text-gray-700">삭제</button>
            </div>
            <div className="text-black text-normal">
                <p>{data.content}</p>
            </div>
            <div className="mt-4">
                <h2 className="text-lg font-semibold">댓글 입력</h2>
                <textarea className="p-2 mt-2 w-full border" placeholder="댓글을 입력해주세요." value={newComment} onChange={handleCommentChange} />
                <button className="px-4 py-1 mt-2 text-white bg-blue-500 rounded" onClick={handleCommentSubmit}>
                    입력
                </button>
            </div>
            <div className="mt-4">
                {data.comments?.map((comment) => (
                    <div key={comment.id} className="py-2 border-t">
                        <div className="flex gap-2 items-center text-sm text-gray-500">
                            <span>{comment.author}</span>
                            <span>{comment.date}</span>
                        </div>
                        <p>{comment.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Post;
