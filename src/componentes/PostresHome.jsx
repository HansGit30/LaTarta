

const PostresHome = () => {
    return (
        <section className="px-4">
            <div className="w-full flex justify-between">
                <h2 className="text-xl">Postres - San Valentín</h2>
                <p className="text-lg underline">ver más</p>
            </div>
            <article className="w-full max-w-[800px] mx-auto grid grid-cols-2 gap-4 pt-5 mb-[50px] md:grid-cols-4 lg:grid-cols-5 lg:max-w-[1100px] lg:gap-10">
                <div className="h-[250px]  bg-slate-500 rounded-2xl"></div>
                <div className="h-[250px]  bg-slate-500 rounded-2xl"></div>
                <div className="h-[250px]  bg-slate-500 rounded-2xl hidden md:block"></div>
                <div className="h-[250px]  bg-slate-500 rounded-2xl hidden md:block"></div>
                <div className="h-[250px]  bg-slate-500 rounded-2xl hidden lg:block"></div>
            </article>
        </section>
    )
}

export default PostresHome