import React, { useEffect, useState } from "react";
import app from "@firebaseApp";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import SignUpModal from "@/components/modal/sign-up-modal";

const SignInPage = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSignIn = async () => {
        try {
            const auth = getAuth(app);
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/");
        } catch (error) {
            console.error(error);
            alert("로그인에 실패하였습니다.");
        }
    };

    useEffect(() => {
        const auth = getAuth(app);
        if (auth.currentUser) {
            navigate("/");
        }
    }, [navigate]);

    return (
        <div className="flex flex-col justify-center items-center h-full">
            <div className="mb-4 text-2xl font-bold">Welcome!</div>
            <div className="flex flex-col gap-4">
                <input type="text" placeholder="이메일" className="p-2 rounded border" autoComplete="off" onChange={handleEmailChange} />
                <input type="password" placeholder="비밀번호" className="p-2 rounded border" autoComplete="off" onChange={handlePasswordChange} />
                <button className="p-2 text-white bg-blue-500 rounded" onClick={handleSignIn}>
                    로그인
                </button>
                <button className="p-2 rounded border" onClick={() => setIsSignUpModalOpen(true)}>
                    회원가입
                </button>
            </div>
            {isSignUpModalOpen && <SignUpModal onClose={() => setIsSignUpModalOpen(false)} />}
        </div>
    );
};

export default SignInPage;
