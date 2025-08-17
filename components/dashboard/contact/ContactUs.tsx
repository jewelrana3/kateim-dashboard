import Image from "next/image";
import ContactEdit from "./ContactEdit";

export default function ContactUs() {
  return (
    <section className="max-w-7xl mx-auto my-5">
      <ContactEdit />
      <section className="grid grid-cols-2 gap-14 p-4  bg-white rounded-lg shadow-md">
        <div>
          <h1 className="font-semibold text-5xl my-3 leading-16">
            Let’s Connect and <br /> Build Something <br /> Great.
          </h1>
          <p className="text-[#545454] mt-6">
            Whether you have questions, feedback, or a new project in mind, our
            team is here to help.
          </p>
        </div>
        <div>
          <Image
            src="https://i.ibb.co.com/5gVyCyh3/Frame-2147227772.png"
            alt="upload image"
            width={400}
            height={400}
          />
        </div>
      </section>
    </section>
  );
}
