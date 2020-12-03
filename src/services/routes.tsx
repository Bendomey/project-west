export interface RouteProps {
  name: string;
  path: string;
}

const routes: RouteProps[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Us",
    path: "/about-us",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Careers",
    path: "/careers",
  },
  {
    name: "Referrals",
    path: "/referrals",
  },
];

export default routes;
