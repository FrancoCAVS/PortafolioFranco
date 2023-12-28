import Link from "next/link";
import Image from "next/image";
import Socials from "../components/Socials"

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          <Link href={"/"} className="mt-10">
            <Image
              src={"/Franco3.svg"}
              width={220}
              height={48}
              alt=""
              priority={true}
            />
          </Link>
          {/* Sociales */}
          <Socials/>
        </div>
      </div>
    </header>
  );
};

export default Header;
