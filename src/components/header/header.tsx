import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div
            className={
                "w-full flex gap-4 flex-row-reverse pr-2 py-4 border-b-[1px]"
            }
        >
            <Link to="/">글쓰기</Link>
            <Link to="/test">게시글</Link>
            <Link to="/test/new">프로필</Link>
        </div>
    );
};

export default Header;
