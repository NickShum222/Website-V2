const index = () => {
  return (
    <div
      className={
        "w-full flex justify-center flex-col items-center dark:bg-secondary bg-primary pt-4  lg:px-[6%] md:px-[64px] px-[24px]"
      }
    >
      <p className="select-none text-opacity-70 w-full flex justify-center border-t-[1px] border-tertiary sm:py-6 py-3 border-solid border-opacity-50 dark:text-primary text-grey2 sm:text-[18px] text-[14px] hover:text-tertiary duration-150 transition-all ease-in font-[400]">
        Designed & Built by Nick Shum
      </p>
      {/* <p className="dark:text-primary text-grey2 sm:text-[18px] text-[14px] font-[500]">
        © Copyright 2024.
      </p> */}
    </div>
  );
};

export default index;
