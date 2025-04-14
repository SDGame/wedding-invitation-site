import { Toaster } from "@/components/ui/toaster";
import RSVPForm from "./components/RSVPForm";
import WeddingHeader from "./components/WeddingHeader";
import WeddingDetails from "./components/WeddingDetails";
import WeddingFooter from "./components/WeddingFooter";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden w-full">
      <WeddingHeader />
      <main className="flex-grow">
        <WeddingDetails />
        <RSVPForm />
      </main>
      <WeddingFooter />
      <Toaster />
    </div>
  );
}

export default App;
