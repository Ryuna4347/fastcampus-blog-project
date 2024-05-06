import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className={"w-full flex gap-2 flex-row-reverse pr-2"}>
            <Link to="/">홈 이동</Link>
            <Link to="/test">테스트 이동</Link>
            <Link to="/test/new">새로운 테스트 이동</Link>
        </div>
    );
};

export default Header;
