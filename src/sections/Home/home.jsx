const Home = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F8F9FA] px-6 pt-24"
        >


            {/* Background Blur */}
            <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-70"></div>
            <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-indigo-100 blur-3xl opacity-70"></div>

            <div className="relative z-10 max-w-5xl mx-auto text-center">
                <p className="inline-block rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold tracking-wide text-blue-700">
                    Software Developer | Data Analyst
                </p>

                <h1 className="mt-8 text-5xl md:text-6xl font-bold tracking-tight text-black"
                    style={{ fontFamily: "Sora, sans-serif" }}>
                    Khushbu Jain
                </h1>
                <h2 className="mt-6 text-3xl font-bold leading-tight text-gray-800 md:text-5xl">
                    Building software that solves
                    <br />
                    <span>real-world problems.</span>
                </h2>

                <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-600">
                    Passionate about building modern web applications and transforming
                    data into actionable insights.
                </p>

                <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <button className="rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white hover:bg-blue-700 transition">
                        View Projects
                    </button>

                    <button className="rounded-xl border border-gray-300 px-8 py-4 text-lg font-semibold text-gray-800 hover:border-blue-600 hover:text-blue-600 transition">
                        Download Resume
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Home;