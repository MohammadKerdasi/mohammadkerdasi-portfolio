import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center ">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Mohammad <span className="text-[#ffd700]">.</span>
          </h1>
        </Link>
        <div className="xl:flex hidden items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>hire me</Button>
          </Link>
        </div>

        <div className="xl:hidden">
          <MobileNav/>
        </div>

      </div>
    </header>
  );
};

export default Header;
