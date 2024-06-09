const HeroImages = () => {
  return (
    <div className="relative none lg:block lg:w-[350px] xl:w-[500px]">
      <img
        src="./iPhone13Front.png"
        className="top-[30px] absolute right-[-180px] "
        alt="iphone"
      />
      <img
        src="./iPhone13Front.png"
        className="absolute top-[-30px] w-full right-[-80px] "
        alt="iphone"
      />
      <img
        src="./iPhone13Front.png"
        className="absolute top-[-100px] w-full"
        alt="iphone"
      />
      <img
        src="./ring.png"
        className="absolute top-[-100px] z-[-1] w-full right-[-70px]"
        alt="ring"
      />
      <img
        src="./redellipse.png"
        className="absolute lg:top-[200px] xl:top-[250px] z-[-1] w-full right-[-80px]"
        alt="ellipse"
      />
    </div>
  );
};

export default HeroImages;
