import CommonPageHeader from "@/components/commonPageHeader";
import ContactDetails from "@/components/contactDetails";
import ContactForm from "@/components/contactForm";
import Footer from "@/components/footer";

export default function ContactUs() {
  return (
    <div>
      <CommonPageHeader title="Contact Us" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:flex-1">
            <ContactDetails />
          </div>
          <div className="w-full mt-10 md:mt-0 md:flex-1">
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
