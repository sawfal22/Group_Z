import { Link, useRouterState } from "@tanstack/react-router";
import { LogOut, Menu, UserCircle2, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/hooks/useAuth";

const nav = [
  { to: "/universities", label: "Universities" },
  { to: "/accommodation", label: "Accommodation" },
  { to: "/guides", label: "Student guides" },
  { to: "/german-language", label: "German language" },
  { to: "/about", label: "About" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { user, signOut } = useAuth();
  const { location } = useRouterState();

  const handleSignOut = async () => {
    await signOut();
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div className="container-page flex min-h-16 items-center justify-between gap-5 py-1">
        <Link to="/" className="ml-4 flex min-w-0 items-center">
          <img
            src="/isa-logo.svg"
            alt="International Student Assistance"
            className="h-20 w-auto max-w-[260px] object-contain"
          />
        </Link>

        <div className="hidden items-center gap-2 lg:flex">
          <nav className="flex items-center gap-0">
            {nav.map((item) => {
              const active = location.pathname.startsWith(item.to);

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={
                    "rounded-lg px-2.5 py-2 text-sm font-medium transition-colors " +
                    (active
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:bg-accent/60 hover:text-foreground")
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {!user ? (
            <div className="ml-1 flex items-center gap-2">
              <Button asChild variant="outline" size="sm">
                <Link to="/auth" search={{ mode: "signin" }}>
                  Login
                </Link>
              </Button>

              <Button asChild size="sm">
                <Link to="/auth" search={{ mode: "signup" }}>
                  Sign Up
                </Link>
              </Button>
            </div>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <UserCircle2 className="h-4 w-4" />
                  <span className="max-w-32 truncate">{user.email}</span>
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem asChild>
                  <Link to="/saved">My saved items</Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link to="/accommodation/post">Post a room</Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem onClick={handleSignOut}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background lg:hidden">
          <div className="container-page flex flex-col gap-1 py-3">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium hover:bg-accent"
              >
                {item.label}
              </Link>
            ))}

            {!user ? (
              <div className="mt-3 grid grid-cols-2 gap-2">
                <Button asChild variant="outline">
                  <Link
                    to="/auth"
                    search={{ mode: "signin" }}
                    onClick={() => setOpen(false)}
                  >
                    Login
                  </Link>
                </Button>

                <Button asChild>
                  <Link
                    to="/auth"
                    search={{ mode: "signup" }}
                    onClick={() => setOpen(false)}
                  >
                    Sign Up
                  </Link>
                </Button>
              </div>
            ) : (
              <div className="mt-2 flex gap-2">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="flex-1"
                >
                  <Link to="/saved" onClick={() => setOpen(false)}>
                    Saved
                  </Link>
                </Button>

                <Button
                  type="button"
                  size="sm"
                  variant="ghost"
                  className="flex-1"
                  onClick={handleSignOut}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign out
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}