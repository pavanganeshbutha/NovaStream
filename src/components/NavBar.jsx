import { Clapperboard, House, Menu, Search, Tv, X } from "lucide-react";

const NavBar = () => {
  return (
    <>
      <div className="flex items-center gap-10 text-(--color-neon-cyan) ">
        <House />
        <Clapperboard />
        <Tv />
        <Search />
      </div>
    </>
  );
};

export default NavBar;
