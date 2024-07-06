import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/header/header";
import HomePage from "./pages/homepage";
import Post from "./pages/post";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/post/:id" element={<Post />} />
                <Route path="/test" element={<div>테스트 페이지입니다.</div>} />
                <Route path="/test/new" element={<div>새로운 테스트 페이지입니다.</div>} />
                <Route path="*" element={<div>페이지를 찾을 수 없습니다.</div>} />
            </Routes>
        </>
    );
}

export default App;
