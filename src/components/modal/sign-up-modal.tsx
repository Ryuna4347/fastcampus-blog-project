import { getAuth } from "firebase/auth";
import app from "@/firebaseApp";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useMemo, useState } from "react";

interface SignUpModalProps {
    onClose: () => void;
}

const SignUpModal = ({ onClose }: SignUpModalProps) => {
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [isPending, setIsPending] = useState(false);

    const handleSignUp = async () => {
        try {
            if (isPending) return;
            setIsPending(true);
            const auth = getAuth(app);
            await createUserWithEmailAndPassword(auth, email, password);
            onClose();
        } catch (error) {
            console.error(error);
            alert("회원가입에 실패하였습니다.");
        } finally {
            setIsPending(false);
        }
    };

    const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        if (password?.length > 0 && !passwordRegex.test(e.target.value)) {
            setPasswordError("비밀번호는 최소 8자 이상이어야 하며, 최소 하나의 문자, 하나의 숫자, 하나의 특수문자를 포함해야 합니다.");
        } else {
            setPasswordError("");
        }
        setPassword(e.target.value);
    };

    const onChangeConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
    };

    const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const canSignUp = useMemo(() => {
        return (
            !isPending &&
            emailError === "" &&
            passwordError === "" &&
            confirmPasswordError === "" &&
            email.length > 0 &&
            password.length > 0 &&
            confirmPassword.length > 0
        );
    }, [emailError, passwordError, confirmPasswordError, email, password, confirmPassword, isPending]);

    useEffect(() => {
        if (!confirmPassword || password === confirmPassword) {
            setConfirmPasswordError("");
        } else {
            setConfirmPasswordError("비밀번호가 일치하지 않습니다.");
        }
    }, [password, confirmPassword]);

    useEffect(() => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email?.length > 0 && !emailRegex.test(email)) {
            setEmailError("유효한 이메일 주소를 입력해주세요.");
        } else {
            setEmailError("");
        }
    }, [email]);

    return (
        <div className="flex fixed inset-0 justify-center items-center bg-black bg-opacity-50">
            <div className="p-6 w-96 bg-white rounded-lg">
                <h2 className="mb-4 text-xl font-bold">회원가입</h2>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <input type="email" placeholder="이메일" className="p-2 rounded border" value={email} onChange={onChangeEmail} />
                        {emailError && <p className="text-sm text-red-500">{emailError}</p>}
                    </div>
                    <div className="flex flex-col gap-2">
                        <input type="password" placeholder="비밀번호" className="p-2 rounded border" value={password} onChange={onChangePassword} />
                        {passwordError && <p className="text-sm text-red-500">{passwordError}</p>}
                    </div>
                    <div className="flex flex-col gap-2">
                        <input
                            type="password"
                            placeholder="비밀번호 확인"
                            className="p-2 rounded border"
                            value={confirmPassword}
                            onChange={onChangeConfirmPassword}
                        />
                        {confirmPasswordError && <p className="text-sm text-red-500">{confirmPasswordError}</p>}
                    </div>
                </div>
                <div className="flex justify-between mt-4">
                    <button className="p-2 bg-gray-300 rounded" onClick={onClose}>
                        닫기
                    </button>
                    <button className={`p-2 text-white ${!canSignUp ? "bg-gray-500" : "bg-blue-500"} rounded`} onClick={handleSignUp} disabled={!canSignUp}>
                        회원가입
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUpModal;
