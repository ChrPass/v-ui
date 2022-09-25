import DropDownMenu from "./Navbar";
const MainLayout = ({ children }) => {
    return <div className="min-h-screen  bg-zinc-300"><DropDownMenu />{children}</div>
}

export default MainLayout