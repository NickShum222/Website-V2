import { SEO } from "@/components";
const index = () => {
  return (
    <div className={" min-w-[100dvw]"}>
      <SEO theme={"dark"} />
      <div className="h-[100dvh]">
        <embed
          src="ShumNickResume.pdf"
          height="100%"
          width="100%"
          type="application/pdf"
        />
      </div>
    </div>
  );
};

export default index;
