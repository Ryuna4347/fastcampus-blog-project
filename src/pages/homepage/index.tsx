import PostItem from "@components/PostItem";
import Carousel from "@components/carousel/Carousel";

const dummyImages = [
    "https://picsum.photos/1200/150?random=1",
    "https://picsum.photos/1200/150?random=2",
    "https://picsum.photos/1200/150?random=3",
    "https://picsum.photos/1200/150?random=4",
];

const dummyData = [
    {
        title: "글 제목 1",
        date: "2024년 5월 20일",
        postCount: 0,
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        title: "글 제목 2",
        date: "2024년 5월 21일",
        postCount: 1,
        content: "It has survived not only five centuries, but also the leap into electronic typesetting.",
    },
    {
        title: "글 제목 3",
        date: "2024년 5월 22일",
        postCount: 2,
        content: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    },
];

const HomePage = () => {
    return (
        <div className={"container flex overflow-auto flex-col gap-3 mx-auto w-10/12 no-scrollbar"}>
            <div className="mt-[30px]">
                <Carousel images={dummyImages} />
            </div>
            <div className={"container flex flex-row gap-2 mt-4 flex-0"}>
                <span className={"font-bold"}>전체</span>
                <span>나의 글</span>
            </div>
            <div className={"container flex flex-col flex-1 items-start"}>
                {dummyData.map((item, index) => (
                    <PostItem key={index} title={item.title} date={item.date} postCount={item.postCount} content={item.content} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
