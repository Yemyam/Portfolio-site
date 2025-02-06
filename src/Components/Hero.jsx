const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl text-black">
                        Ethan Braum
                    </h1>
                    <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent text-4xl">
                        Full Stack Developer
                    </span>
                    <p className="my-2 max-w-xl py-6 tracking-tighter text-black">
                        I am Ethan Braum, a driven second-year Computer Science student at the University of Calgary with a passion for building innovative solutions and solving complex problems. Blah blah blah I do not think anyone will read this far
                    </p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZjvuxkomh8tRPogDIYaW5FuVjGFU9_zFMsInd71foajvuC36ywxpgXP2aSSp_E0FzfVI&usqp=CAU" alt="Ethan Braum" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero