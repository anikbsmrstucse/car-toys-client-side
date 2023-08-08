import img1 from "../../../assets/choose_us/f1.svg";
import img2 from "../../../assets/choose_us/f2.svg";
import img3 from "../../../assets/choose_us/f3.svg";
import img4 from "../../../assets/choose_us/f4.svg";

const ChooseUs = () => {
  return (
    <div>
      <h2 className="text-center text-2xl md:text-3xl font-bold">
        Why Choose Us?
      </h2>
      <div className="mt-10 mb-10 bg-white md:grid grid-cols-4 gap-4">
        <div className="card w-full bg-base-100 shadow-xl ">
          <div className="card-body">
            <div className="w-[60px] h-[60px]">
              <img src={img1} alt="Shoes" />
            </div>
            <h3 className="text-lg font-bold">Highly Secured</h3>
            <p>Our Stress-Free Finance Department That Can Find Financial Solutions To Save You Money.</p>
            <h5 className="text-purple-500">Learn More</h5>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl ">
          <div className="card-body">
            <div className="w-[60px] h-[60px]">
              <img src={img2} alt="Shoes" />
            </div>
            <h3 className="text-lg font-bold">Trusted Agents</h3>
            <p>Our Stress-Free Finance Department That Can Find Financial Solutions To Save You Money.</p>
            <h5 className="text-purple-500">Learn More </h5>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl ">
          <div className="card-body">
            <div className="w-[60px] h-[60px]">
              <img src={img3} alt="Shoes" />
            </div>
            <h3 className="text-lg font-bold">Get an Offer</h3>
            <p>Our Stress-Free Finance Department That Can Find Financial Solutions To Save You Money.</p>
            <h5 className="text-purple-500">Learn More</h5>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl ">
          <div className="card-body">
            <div className="w-[60px] h-[60px]">
              <img src={img4} alt="Shoes" />
            </div>
            <h3 className="text-lg font-bold">Free Support</h3>
            <p>Our Stress-Free Finance Department That Can Find Financial Solutions To Save You Money.</p>
            <h5 className="text-purple-500">Learn More</h5>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ChooseUs;
