interface FooterProps {
    className?: string;
}

function Footer({ className }: FooterProps) {
    return (
        <div className={`flex flex-col justify-center w-full h-16 bg-slate-400 ${className}`}>
            <div className={"w-fit"}>
                <span className="text-black text-normal">해당 페이지는 연습을 위한 페이지입니다.</span>
            </div>
        </div>
    );
}

export default Footer;
