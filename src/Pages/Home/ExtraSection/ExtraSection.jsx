import "./ExtraSection.css";

const ExtraSection = () => {
  return (
    <div className="py-20 px-5 bg text-white h-[300px] md:h-[600px] w-full flex flex-col justify-center">
      <div className="w-full md:w-1/2 space-y-5">
        <h1 className="text-3xl font-bold">We Make Finding The Right <br /> Car Simple</h1>
        <p>
          At Voiture what matters to us is making your car search and buying
          experience as simple as possible, so you can find the right car
          quickly and get on with making it yours.
        </p>
      </div>
    </div>
  );
};

export default ExtraSection;
