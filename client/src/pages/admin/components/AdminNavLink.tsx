import { FaBattleNet } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";

const links = [
    { name: "Post", href: "/admin/post", icon: FaBattleNet }];
const AdminNavLink = () => {
  const pathname = useParams();

  return (
    <ul className="mb-auto pt-1">
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            to={link.href}
          >
            {pathname === link.href ? (
              <div className="relative mb-3 flex hover:cursor-pointer">
                <li className="my-[3px] flex cursor-pointer items-center px-8">
                  <span>
                    <LinkIcon className="h-6 w-6" />
                  </span>
                  <p className="leading-1 flex ms-4 font-medium text-gray-600">
                    {link.name}
                  </p>
                </li>
              </div>
            ) : (
              <div className="relative mb-3 flex hover:cursor-pointer">
                <li className="my-[3px] flex cursor-pointer items-center px-8">
                  <span>
                    <LinkIcon className="h-6 w-6" />
                  </span>
                  <p className="leading-1 flex ms-4 font-medium text-gray-600">
                    {link.name}
                  </p>
                </li>
                <div className="absolute top-px h-9 w-1 rounded-lg bg-brand-500 end-0 dark:bg-brand-400"></div>
              </div>
            )}
          </Link>
        );
      })}
    </ul>
  );
};

export default AdminNavLink;
