import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import HomePage from "./pages/homepage/index";
import Post from "./pages/post/index";
import PostCreate from "./pages/post/create";
import Profile from "./pages/profile/index";
import SignInPage from "./pages/sign-in/index";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "./firebaseApp";

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const auth = getAuth(app);

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    });

    return (
        <div className="flex flex-col h-screen">
            <Header className="w-full" />
            <main className="overflow-auto flex-grow">
                <Routes>
                    {isAuthenticated ? (
                        <>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/post/:id" element={<Post />} />
                            <Route path="/post/create" element={<PostCreate />} />
                            <Route path="*" element={<div>페이지를 찾을 수 없습니다.</div>} />
                            <Route path="/profile" element={<Profile />} />
                        </>
                    ) : (
                        <>
                            <Route path="/login" element={<SignInPage />} />
                            <Route path="*" element={<SignInPage />} />
                        </>
                    )}
                </Routes>
            </main>
            <Footer className="w-full" />
        </div>
    );
};

export default App;
