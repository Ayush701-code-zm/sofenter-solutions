import ContactForm from "@/components/contact-form";
import FadeInSection from "@/components/fade-in-section";

export const metadata = {
  title: "Contact - Glamsfyt",
  description: "Get in touch with us",
};

export default function ContactPage() {
  return (
    <div className="pt-32 px-[4.5rem] md:px-[8vw] mt-16">
      <FadeInSection className="flex flex-row items-center gap-8 justify-center mt-24">
        <div className="flex w-[6.875rem] items-center">
          <div className="w-[6.25rem] h-[1px] bg-[linear-gradient(90deg,rgba(242,240,245,0)_0%,#F2F0F5_100%)]" />
          <div className="h-1 w-1 rounded-full bg-white" />
        </div>
        <h1 className="font-['Inter'] text-5xl font-bold tracking-[-0.06em]">
          Contact Us
        </h1>
        <div className="flex w-[6.875rem] items-center">
          <div className="h-1 w-1 rounded-full bg-white" />
          <div className="w-[6.25rem] h-[1px] bg-[linear-gradient(270deg,rgba(242,240,245,0)_0%,#F2F0F5_100%)]" />
        </div>
      </FadeInSection>

      <FadeInSection className="mt-16 max-w-2xl mx-auto">
        <ContactForm />
      </FadeInSection>
    </div>
  );
}
