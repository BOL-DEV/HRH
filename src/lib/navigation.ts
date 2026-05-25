export type NavigationItem = {
  href: string;
  label: string;
};

export const primaryNavigation: NavigationItem[] = [
  { href: "/", label: "Home" },
  { href: "/sessions", label: "Sessions" },
  { href: "/legacy", label: "Legacy" },
  { href: "/about", label: "About" },
];
