
import image from "../../public/daniel1.png"

const Header = () => {
    return <div className="flex flex-col-reverse sm:flex-row
    items-start justify-between gap-3 md:gap-8" id="home" >
        <div className="flex flex-col gap-2">
            <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl
            text-nowrap tracking-tighter">Hi, I'm <span
            className="bg-gradient-to-r
            bg-clip-text text-transparent from-purple-500 to-blue-500">Tepmarotdaniel</span></h1>
            <p className="max-w-[500px] text-lg md:text-xl">Welcome to my Portfolio! I am an Electronic and Automatio Engineering undergraduate student from the Institute of Technology of Cambodia, with a strong focus on robotics and embedded systems.
            </p>
        </div>
        <img src={image} alt="" className="w-32"/>
    </div>;
}
export default Header;               