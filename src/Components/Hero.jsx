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
                        I am Ethan Braum, a driven second-year Computer Science student at the University of Calgary with an interest in full stack development, and a passion for building cool things :)
                    </p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <img className="w-1/2 rounded-full" src="https://as2.ftcdn.net/v2/jpg/03/46/93/61/1000_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg" alt="Ethan Braum" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero