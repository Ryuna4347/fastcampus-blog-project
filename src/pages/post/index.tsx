const Post = () => {
    return (
        <div className="container flex flex-col w-10/12 gap-3 m-auto">
            <h1 className="mt-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl">title</h1>
            <div className="container flex flex-row items-center gap-2 mt-1">
                <div className="rounded-full bg-gray-400 w-[16px] h-[16px]"></div>
                <div className={"flex flex-row gap-2"}>
                    <p className={"text-gray-400 text-small"}>아이디</p>
                    <p className={"text-gray-400 text-small"}>2024년 7월 7일</p>
                </div>
            </div>
            <div className={"container flex mt-1 justify-end gap-2"}>
                <button className={"hover:text-gray-500"}>수정</button>
                <button className={"hover:text-gray-500"}>삭제</button>
            </div>
            <div className={"container flex flex-col mt-2"}>
                <p>본문</p>
            </div>
        </div>
    );
};

export default Post;
