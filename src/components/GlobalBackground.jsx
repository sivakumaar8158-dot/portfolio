const GlobalBackground = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[120px] animate-pulse delay-700"></div>
            <div className="absolute top-[40%] left-[60%] w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
        </div>
    );
};

export default GlobalBackground;
