import Video from "../images/Background_Video.mp4";
import Forms from "./Forms";

export default function HomePage() {
  return (
    <>
      <div className="container-fluid row g-0">
        <video id="video" loop autoPlay muted>
          <source
            src={Video}
            type="video/mp4"
          />
        </video>
      </div>

      <div className="parallax">
        <div className="transbox h-100 w-100"></div>
      </div>

      <div className="box row align-items-center text-center">
        <div className="col-lg-8 col-md-10 col-12 mx-auto">
          <h1 className="fw-bold">Cats</h1>
          <h4 className="m-4">
            Cats, with their graceful movements and enigmatic personalities, have captivated humans for centuries. Revered in ancient cultures as symbols of mystery and magic, these feline creatures continue to charm us with their independent spirit and affectionate nature.
          </h4>
          <h4 className="m-4">
            From the sleek Siamese to the fluffy Maine Coon, cats come in various breeds, each with its own unique characteristics and quirks. Despite their diverse appearances, all cats share common traits such as agility, curiosity, and a love for lounging in sunlit spots.
          </h4>
        </div>
      </div>

      <div className="parallax2">
        <div className="transbox h-100 w-100"></div>
      </div>

      <div className="box row align-items-center text-center">
        <div className="col-lg-8 col-md-10 col-12 mx-auto">
          <h1 className="fw-bold">Dogs</h1>
          <h4 className="m-4">
            Dogs, known as &quot;man&apos;s best friend&quot;, have forged an enduring bond with humans through their loyalty, companionship, and unwavering devotion. From the energetic Labrador Retriever to the regal German Shepherd, dogs come in a diverse array of breeds, each with its own distinct personality and characteristics.
          </h4>
          <h4 className="m-4">
            Renowned for their boundless enthusiasm and playful nature, dogs bring joy and laughter to households around the world. Their wagging tails and eager faces greet us with unbridled excitement, reminding us of the simple pleasures found in their company.
          </h4>
        </div>
      </div>

      <div className="parallax3">
        <div className="transbox h-100 w-100 row align-items-center text-center">
          <div className="col-lg-8 col-md-10 col-12 mx-auto">
            <Forms />
          </div>
        </div>
      </div>

      <footer className="row g-0 align-items-center text-center bg-light">
        <p>©Copyright 4Paws 2024</p>
      </footer>
    </>
  );
}
