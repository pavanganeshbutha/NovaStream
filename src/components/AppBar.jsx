import Logo from "./Logo";
import NavBar from "./NavBar";

const AppBar = () => {
  return (
    <div className="bg-(--color-neon-bg-surface) py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        <NavBar />
      </div>
    </div>
  );
};

export default AppBar;
