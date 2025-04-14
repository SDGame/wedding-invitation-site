import WeddingHeader from "@/components/WeddingHeader";
import WeddingDetails from "@/components/WeddingDetails";
import RSVPForm from "@/components/RSVPForm";
import WeddingFooter from "@/components/WeddingFooter";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <WeddingHeader />
        <WeddingDetails />
        <RSVPForm />
      </main>
      <WeddingFooter />
    </div>
  );
};

export default Index;