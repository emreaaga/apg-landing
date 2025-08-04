"use client";

import { Moon, Sun, X, Menu } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuLink
} from "@/components/ui/navigation-menu";
import { LanguageSwitcher } from "@/components/language-switcher";

const Navbar = () => {
  const locale = useLocale();
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 px-6 ${isScrolled ? "bg-background/80 shadow-sm" : "bg-transparent"}`}
    >
      <div className="flex h-16 items-center justify-between max-w-7xl mx-auto">
        <Link href="/">
          <div className="flex items-center gap-2 font-bold">
            <Image
              src="/logo.png"
              alt="APG Logo"
              width={32}
              height={32}
              className="rounded-lg object-contain"
            />
            <span>APG</span>
          </div>
        </Link>

        <nav className="hidden md:flex gap-6 items-center">
          <Link
            href="/"
            className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Главное
          </Link>
          <Link
            href="/specialists"
            className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Специалисты
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base font-medium text-muted-foreground hover:text-foreground bg-transparent">
                  Услуги
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-4 bg-popover shadow-lg rounded-md min-w-[200px]">
                  <NavigationMenuLink asChild>
                    <Link href="/services/legal">Юридические</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="/">Бухгалтерские</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="/">IT-Услуги</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="/">HR-услуги</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="/">Налоговый консалтинг</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="/">Иные услуги</Link>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSwitcher currentLocale={locale}/>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full cursor-pointer"
          >
            {mounted && theme === "dark" ? (
              <Sun className="size-[18px]" />
            ) : (
              <Moon className="size-[18px]" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 inset-x-0 bg-white dark:bg-[#262626] border-b shadow-md"
          >
            <div className="py-4 px-6 flex flex-col gap-4">
              <Link
                href="/"
                className="py-2 text-sm font-medium text-foreground hover:underline"
                onClick={() => setMobileMenuOpen(false)}
              >
                Главное
              </Link>
              <Link
                href="/specialists"
                className="py-2 text-sm font-medium text-foreground hover:underline"
                onClick={() => setMobileMenuOpen(false)}
              >
                Специалисты
              </Link>
              <div className="pl-4">
                <span className="text-sm font-medium text-muted-foreground">Услуги</span>
                <div className="mt-2 space-y-2">
                  <Link href="/services/legal" className="block py-1 text-sm text-foreground hover:underline" onClick={() => setMobileMenuOpen(false)}>
                    Юридические
                  </Link>
                  <Link href="/" className="block py-1 text-sm text-foreground hover:underline" onClick={() => setMobileMenuOpen(false)}>
                    Бухгалтерские
                  </Link>
                  <Link href="/" className="block py-1 text-sm text-foreground hover:underline" onClick={() => setMobileMenuOpen(false)}>
                    IT-услуги
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Navbar;