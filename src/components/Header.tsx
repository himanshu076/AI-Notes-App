import { shadow } from "@/styles/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import DarkModeToggle from "./DarkModeToggle";
import LogoutButton from "./LogoutButton";

function Header() {
  const user = 1;

  return (
    <header
        className="relative flex h-24 w-full items-center justify-between bg-popover px-3 sm:px-8 border-b border-border"
        style={{
            boxShadow: shadow,
        }}
    >
      <Link className="flex items-end gap-2" href="/">
        <Image
          src="/goatius.png"
          alt="logo"
          width={60}
          height={60}
          className="rounded-full"
          priority
        />
        <h1 className="flex flex-col pb-1 text-2xl font-semibold leading-6">
            GOAT <span className="text-primary">Notes</span>
        </h1>
      </Link>

      <div className="flex gap-4">
        {user ? (
            <LogoutButton />
        ) : (
            <>
                <Button asChild>
                    <Link href="/sign-up" className="hidden sm:block">Sign Up</Link>
                </Button>
                <Button asChild variant="outline">
                    <Link href="/login">Login</Link>
                </Button>
            </>
        )}
        <DarkModeToggle />
      </div>
    </header>
  );
}

export default Header;
