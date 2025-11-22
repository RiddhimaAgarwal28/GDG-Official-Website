import EventsCard from "../components/EventCards";
import Footer from "../components/Footer";
import DomeGallery from "../components/ui/DomeGalery";

export default function HomePage() {
  return (
    <>
      <div className="w-full  overflow-x-hidden">
        <EventsCard />
        <div className="h-screen">
          <DomeGallery />
        </div>
        <Footer />
      </div>
    </>
  );
}
