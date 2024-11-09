import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/homepage";
import Profile from "./pages/profile";
import Header from "./components/header/header";
import Post from "./pages/post";
import Footer from "./components/footer/footer";

function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header className="fixed top-0 z-50 w-full" />
            <main className="flex-grow mt-[61px] mb-[61px]">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/post/:id" element={<Post />} />
                    <Route path="/test" element={<div>테스트 페이지입니다.</div>} />
                    <Route path="/test/new" element={<div>새로운 테스트 페이지입니다.</div>} />
                    <Route path="*" element={<div>페이지를 찾을 수 없습니다.</div>} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </main>
            <Footer className="fixed bottom-0 z-50 w-full" />
        </div>
    );
}

export default App;
