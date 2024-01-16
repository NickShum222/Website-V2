const index = () => {
  return (
    <div
      className={
        "w-full flex justify-center flex-col items-center dark:bg-secondary bg-primary pt-8 pb-4"
      }
    >
      <a
        href="https://github.com/NickShum222/Website-V2"
        target={"_blank"}
        className="dark:text-primary text-grey2 sm:text-[18px] text-[14px] hover:text-tertiary duration-150 transition-all ease-in font-[500]"
      >
        Designed & Developed by Nick Shum
      </a>
      <p className="dark:text-primary text-grey2 sm:text-[18px] text-[14px] font-[500]">
        © Copyright 2024.
      </p>
    </div>
  );
};

export default index;
