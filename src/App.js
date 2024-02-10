import Header from "./components/Header";
import Main from "./components/Main";
import Payment from "./components/Payment";
import ConfirmPay from "./components/ConfirmPay";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-full relative bg-brand-ghost-white overflow-hidden flex flex-col items-center justify-start  px-0 pb-0 box-border gap-[64px] tracking-[normal] mq450:gap-[64px] mq825:gap-[64px]">
      <div className="w-full h-px relative box-border hidden max-w-full z-[0] border-t-[1px] border-solid border-grayscale-g7" />
      <Header />
      <Main />
      <Payment />
      <ConfirmPay />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default App;
