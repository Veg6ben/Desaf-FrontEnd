import { NewArticle } from "./NewArticle";

export const NewContainer = () => {
  return (
    <aside className="py-[28px] px-[20px] bg-blue-900">
      <h1 className='text-4xl font-bold text-orange-400'>New</h1>
      <NewArticle
        title="Hydrogen Vs electric Cars"
        text="Will hydrogen-fueled cars ever catch up to EVs?"
      />
      <NewArticle
        title="The Downsides of ai Artistry"
        text="What are the possible adverse effects of on-demand AI image generation?"
      />
      <NewArticle
        title="Is VS Funding Drying Up?"
        text="Private funding by firms is down 50% YOY. we take a look at what that means"
      />
    </aside>
  );
};
