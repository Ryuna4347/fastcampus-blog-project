const Profile = () => {
    return (
        <div className={"container flex flex-col w-10/12 m-auto gap-3"}>
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
                <button className="hover:underline">로그아웃</button>
            </div>
        </div>
    );
};

export default Profile;
