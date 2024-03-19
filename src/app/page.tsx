import HaveQuestions from "@/components/need-help/have-questions";
import { Hero } from "@/components/hero/hero";
import Navbar from "@/components/navbar/navbar";
import OtherServices from "@/components/services/other-services";
import HolidayPlan from "@/components/holiday-plan/holiday-plan";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <OtherServices />
      <HaveQuestions />
      <HolidayPlan />
      <Footer />
    </>
  );
}
