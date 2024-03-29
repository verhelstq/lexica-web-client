import { useLocation, useNavigate } from "react-router-dom"
import ThemeToggle from "../../theme/ThemeToggle"

export const Appbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a onClick={() => navigate("/")} className="flex items-center cursor-pointer">
                    <img src="/documentviewerlogo.svg" className="mt-1 mr-3 h-8 sm:h-10" alt="Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Spatial Document Viewer</span>
                </a>
                <div className="flex md:order-2">
                    <button data-collapse-toggle="mobile-menu-4" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-4" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                </div>

                <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <a onClick={() => navigate("/")} className={`cursor-pointer block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${location.pathname === "/" || location.pathname === "/home" ? "md:text-blue-700 dark:text-white" : "text-gray-700 dark:text-gray-400"}`}>Home</a>
                        </li>
                        <li>
                            <a onClick={() => navigate("/viewer?size=0.25&set=1")} className={`cursor-pointer block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${location.pathname === "/viewer" ? "md:text-blue-700 dark:text-white" : "text-gray-700 dark:text-gray-400"}`}>Viewer</a>
                        </li>
                        <li>
                            <a onClick={() => navigate("/tutorial")} className={`cursor-pointer block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${location.pathname === "/tutorial" ? "md:text-blue-700 dark:text-white" : "text-gray-700 dark:text-gray-400"}`}>Tutorial</a>
                        </li>
                        <li>
                            <a onClick={() => navigate("/news")} className={`cursor-pointer block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${location.pathname === "/news" ? "md:text-blue-700 dark:text-white" : "text-gray-700 dark:text-gray-400"}`}>News</a>
                        </li>
                    </ul>
                </div>
                <div className="hidden md:flex md:order-2">
                    <button type="button" className="text-black dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                    <ThemeToggle />
                </div>
            </div>
        </nav >
    )
}
