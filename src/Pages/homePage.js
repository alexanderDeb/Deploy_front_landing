import React from "react";
import HeroImg from "../Assets/Home_Hero_Img.jpeg";
import Card_1 from "../Assets/Card_Img_Principal.jpg";
import Card_2 from "../Assets/Card_img.jpeg";
import {FiMail, FiPhoneOutgoing} from "react-icons/fi"

export default function HomePage() {
  return (
    <div>
      <div
        className="flex justify-center bg-sky-600 md:hidden bg-contain bg-repeat"
        style={{ backgroundImage: `url(${HeroImg})`, backgroundPosition: 'center'}}
      >
        <div className="hero-overlay bg-opacity-60 text-white py-32">
          <h3 className="text-4xl pt-10">M&M DRYWALL CONSTRUCTION LLC</h3>
          <p className="my-5">
            This is a company focused on metal framing which is always looking
            for customer satisfaction.{" "}
          </p>
        </div>
      </div>
      <div
        className=" hidden md:hero md:min-h-screen md:bg-contain md:bg-repeat md:h-full md:w-full"
        style={{ backgroundImage: `url(${HeroImg})` }}
      >
        <div className="hero-overlay bg-opacity-60" />
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              M&M DRYWALL CONSTRUCTION LLC
            </h1>
            <p className="mb-5">
              This is a company focused on metal framing which is always looking
              for customer satisfaction.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="md:hero md:min-h-screen bg-base-200 justify-center pt-20 md:pt-0">
        <div className="md:hero-content flex-col lg:flex-row">
          <img
            src={Card_1}
            className="md:max-w-sm md:rounded-lg shadow-2xl"
            alt="..."
          />
          <div className="p-2 md:p-0 md:pl-5">
            <h1 className="pt-20 text-4xl md:text-5xl md:pt-0 font-bold">
              M&M DRYWALL CONSTRUCTION LLC
            </h1>
            <p className="py-6">
              With a clear focus on supplying local, quality building materials
              for new construction and an unmatched level of service to
              homebuilders and other large project customers. Our 30 years of
              excellent service demonstrates our consistency and passion for
              what we do.
            </p>
          </div>
        </div>
      </div>
      <div className="md:hero md:min-h-screen bg-base-200">
        <div className="md:hero-content flex-row-reverse lg:flex-row-reverse pb-20 md:pb-0">
          <img
            src={Card_2}
            className="md:max-w-sm md:rounded-lg shadow-2xl"
            alt="..."
          />
          <div className="">
            <h1 className="pt-20 text-4xl md:text-5xl md:pt-0 font-bold">
              M&M DRYWALL CONSTRUCTION LLC
            </h1>
            <p className="py-6">
              Give us the opportunity to show you the difference. Call us with
              your needs and let us schedule a delivery for you.
            </p>
          </div>
        </div>
      </div>
      <footer className="footer p-10 bg-base-300 text-base-content">
        <div>
          <span className="footer-title">Services</span>
          <p><span className="font-semibold">Email:</span> masaldo1220@gmail.com</p>
          <p><span className="font-semibold">Number: </span>(252) 412-4185</p>
          <p><span className="font-semibold">Email: </span>Martaqq33@gmail.com</p>
          <p><span className="font-semibold">Number: </span>(203) 695-4410</p>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4">
            <a href="mailto:masaldo1220@gmail.com" className="text-2xl">
              <FiMail/>
            </a>
            <a href="tel:(252) 412-4185" className="text-2xl">
              <FiPhoneOutgoing/>
            </a>
            <a href="mailto:Martaqq33@gmail.com" className="text-2xl">
            <FiMail/>
            </a>
            <a href="tel:(203) 695-4410" className="text-2xl">
              <FiPhoneOutgoing/>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
