import app from "@/firebaseApp";
import { getAuth, signOut } from "firebase/auth";
import { useState } from "react";

const Profile = () => {
    const [pending, setPending] = useState(false);

    const logout = async () => {
        if (pending) return;
        try {
            setPending(true);
            const auth = getAuth(app);
            signOut(auth);
            setPending(false);
        } catch (error) {
            console.error(error);
        } finally {
            setPending(false);
        }
    };

    return (
        <div className={"container flex flex-col gap-3 m-auto w-10/12"}>
            <div className={"flex justify-between mt-4"}>
                <div className={"flex flex-row gap-3"}>
                    <div>
                        <img src="https://via.placeholder.com/50" alt="profile" />
                    </div>
                    <div className={"flex flex-col gap-1 justify-start"}>
                        <span className={"text-lg font-bold"}>아이디</span>
                        <span className={"text-sm text-gray-700"}>이름</span>
                    </div>
                </div>
                <button className="hover:underline" onClick={logout}>
                    로그아웃
                </button>
            </div>
        </div>
    );
};

export default Profile;
