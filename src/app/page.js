import Link from "next/link";

const Home = () => {
  return (
    <>
      <video autoPlay loop muted className="opacity-90">
        <source
          src="https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Snow_2_loop.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="font-bold">
        <img
          src="https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/gear-icon-png-2221.png"
          alt=""
          className="w-60 invert rotating mx-auto" // Add the rotating class here
        />
        <h1 className="text-3xl text-center">Hold on, We are still building.</h1>
        <h1 className="text-xl text-center">Crafting With 💝 Team Webwiz.</h1>
        <div className=" mt-32 mx-auto text-center">
          <Link
            className="text-lg underline text-center text-white"
            href={"/inductions"}
            target="_blank"
          >
            Looking for Induction Task? Click Here!
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
