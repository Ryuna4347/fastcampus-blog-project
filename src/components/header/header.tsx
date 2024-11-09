import { Link } from "react-router-dom";

interface HeaderProps {
    className?: string;
}

const Header = ({ className }: HeaderProps) => {
    return (
        <div className={`flex gap-4 justify-between px-8 py-4 w-full border-b-[1px] ${className}`}>
            <div>
                <span className="text-xl font-bold">Blog Title</span>
            </div>
            <div className={"space-x-3"}>
                <Link to="/">글쓰기</Link>
                <Link to="/test">게시글</Link>
                <Link to="/profile">프로필</Link>
            </div>
        </div>
    );
};

export default Header;
