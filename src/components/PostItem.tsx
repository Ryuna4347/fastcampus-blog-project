import React from "react";

interface PostItemProps {
    title: string;
    date: string;
    postCount: number;
    content: string;
}

const PostItem: React.FC<PostItemProps> = ({ title, date, postCount, content }) => {
    return (
        <div className={"container flex flex-col gap-2 py-2 border-b-[1px]"}>
            <div className={"flex gap-2 items-center text-sm"}>
                <span className={"inline-block w-8 h-8 bg-gray-500 rounded-full"}></span>
                <span className={"text-gray-500"}>{title}</span>
                <span className={"text-gray-500"}>{date}</span>
            </div>
            <div className={"font-bold text-normal"}>
                <span>게시글 {postCount}</span>
            </div>
            <div>
                <span className={"text-black test-sm"}>{content}</span>
            </div>
            <div className={"flex gap-2 justify-end"}>
                <button className={"text-gray-500 hover:text-gray-500"}>수정</button>
                <button className={"text-gray-500 hover:text-gray-500"}>삭제</button>
            </div>
        </div>
    );
};

export default PostItem;
