import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Unlock Creativity
        <br className="max-md:hidden" />
        <span className=" text-center text-orange-400">
          {" "}
          Your Ultimate AI Prompt Repository!
        </span>
      </h1>
      <p className="desc text-center">
        Insights is an open-source AI prompt repository tool to create and share
        innovative AI prompts
      </p>
      <Feed />
    </section>
  );
};

export default Home;
