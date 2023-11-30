import RecipeCard from "@components/RecipeCard";
import Search from "@components/Search";


const Feed = ({ posts, keyword, submitting=false }) => {
  return (
    <div className="w-full flex flex-col gap-8 justify-center items-center bg-primary">
      <div className="sm:w-1/3 w-full ">
        <Search keyword={keyword} />
      </div>

      {posts.length > 0 && (
        <section className="grid1 gap-y-10">
          {posts.map((recipe) => (
            <RecipeCard recipe={recipe} feed />
          ))}
        </section>
      )}

      {submitting && (
        <div className="w-full h-screen flex justify-center">
          <h1 className="font-sen text-disabled px-20 py-6 text-[30px]">
           <div className="dot-pulse"></div>
          </h1>
        </div>
      )}

      {!posts.length && !submitting && (
        <div className="w-full h-screen flex justify-center">
          <h1 className="font-sen text-disabled px-20 py-6 text-[30px]">
            No recipes foud...
          </h1>
        </div>
      )}
    </div>
  );
};

export default Feed;
