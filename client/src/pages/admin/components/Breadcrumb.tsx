
const Breadcrumb = () => {
  return (
    <div>
      <div className="ml-[6px]">
        <div className="h-6 w-[224px] pt-1">
          <a
            className="text-sm font-normal text-navy-700 hover:underline dark:text-white dark:hover:text-white"
            href=" "
          >
            Pages
            <span className="mx-1 text-sm text-navy-700 hover:text-navy-700 dark:text-white">
              {" "}
              /{" "}
            </span>
          </a>
          <a
            className="text-sm font-normal capitalize text-navy-700 hover:underline dark:text-white dark:hover:text-white"
            href="/horizon-tailwind-react/admin/default"
          >
            Main Dashboard
          </a>
        </div>
        <p className="shrink text-[33px] capitalize text-navy-700 dark:text-white">
          <a
            className="font-bold capitalize hover:text-navy-700 dark:hover:text-white"
            href="/horizon-tailwind-react/admin/default"
          >
            Main Dashboard
          </a>
        </p>
      </div>
    </div>
  );
};

export default Breadcrumb;
