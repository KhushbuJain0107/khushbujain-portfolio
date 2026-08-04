const AboutHeader = () => {
    return (
        <div className="text-center">

            <h2
                className="text-3xl font-semibold text-gray-900"
                style={{ fontFamily: "Sora, sans-serif" }}
            >
                About Me
            </h2>

            <p className="mt-5 max-w-2xl mx-auto text-lg leading-8 text-gray-600">
                A quick introduction to who I am, what I do, and the technologies I
                work with.
            </p>

        </div>
    );
};

export default AboutHeader;