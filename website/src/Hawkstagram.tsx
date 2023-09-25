// indv project
import Slideshow from "./Slideshow"; // Adjust the import path

export const Hawkstagram = () => {

    const images = [
      "https://placehold.co/600x600",
      "https://placehold.co/600x600",
      "https://placehold.co/600x600"
    ];

  return (
    <div>
      <h1 className="Banner">grace sopha</h1>
      <div className="post">
        <div className="left-side">
          <h3>date</h3>
          <p className="description">askdljfkslad</p>
        </div>
        <div>
          <Slideshow images={images} />
        </div>
      </div>
    </div>
  );
};

export default Hawkstagram;

