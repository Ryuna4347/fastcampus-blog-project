import React, { useMemo, useState } from "react";

const PostCreate = () => {
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [content, setContent] = useState("");

    const onHandleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const onHandleChangeSummary = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSummary(e.target.value);
    };

    const onHandleChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
    };

    const canSubmit = useMemo(() => {
        return title.length > 0 && summary.length > 0 && content.length > 0;
    }, [title, summary, content]);

    return (
        <div className="container p-4 mx-auto w-10/12">
            <h1 className="mb-4 text-2xl font-bold">새 게시글 작성</h1>
            <form className="space-y-4">
                <div>
                    <label htmlFor="title" className="block mb-2">
                        제목
                    </label>
                    <input
                        type="text"
                        id="title"
                        className="p-2 w-full rounded border"
                        placeholder="제목을 입력하세요"
                        onChange={onHandleChangeTitle}
                        defaultValue={title}
                    />
                </div>
                <div>
                    <label htmlFor="summary" className="block mb-2">
                        요약
                    </label>
                    <input
                        type="text"
                        id="summary"
                        className="p-2 w-full rounded border"
                        placeholder="요약을 입력하세요"
                        onChange={onHandleChangeSummary}
                        defaultValue={summary}
                    />
                </div>
                <div>
                    <label htmlFor="content" className="block mb-2">
                        내용
                    </label>
                    <textarea
                        id="content"
                        className="p-2 w-full h-48 rounded border"
                        placeholder="내용을 입력하세요"
                        onChange={onHandleChangeContent}
                        defaultValue={content}
                    />
                </div>
                <button
                    type="submit"
                    disabled={!canSubmit}
                    className={`w-full px-4 py-2 text-white rounded transition-colors ${
                        canSubmit ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-500 hover:bg-gray-600"
                    }`}
                >
                    작성하기
                </button>
            </form>
        </div>
    );
};

export default PostCreate;
