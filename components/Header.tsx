import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn("header", className)}>
      {/* <div className="flex flex-row items-center gap-1 font-semibold"> */}
      <Link href="/" className="flex flex-row items-center gap-1 font-semibold">
        <Image
          src="/assets/icons/logo-icon.svg"
          alt="logo with name"
          width={32}
          height={32}
          className="hidden md:block"
        />
        <h3 className="hidden md:block">CoDocs</h3>
      </Link>
      {/* </div> */}

      <Link href="/" className="md:flex-1">
        <Image
          src="/assets/icons/logo-icon.svg"
          alt="logo"
          width={32}
          height={32}
          className="mr-2 md:hidden"
        />
      </Link>
      {children}
    </div>
  );
};

export default Header;
