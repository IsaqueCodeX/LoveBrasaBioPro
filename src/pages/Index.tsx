import Logo from "@/components/Logo";
import StatusBadge from "@/components/StatusBadge";
import MenuCarousel from "@/components/MenuCarousel";
import ActionButtons from "@/components/ActionButtons";
import WorkingHours from "@/components/WorkingHours";
import StickyFooter from "@/components/StickyFooter";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const BACKGROUND_VIDEO = "/video/background.mp4";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden noise-overlay">
      {/* Video Background */}
      {/* Video Background */}
      <div className="fixed inset-0 z-0 bg-background">
        <video
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => {
            const videoElement = document.getElementById('bg-video');
            if (videoElement) videoElement.style.opacity = '1';
          }}
          id="bg-video"
          className="w-full h-full object-cover opacity-0 transition-opacity duration-1000"
        >
          <source src={BACKGROUND_VIDEO} type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, hsl(0 0% 7%) 30%, hsl(0 0% 7% / 0.8) 60%, transparent 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 pt-16 pb-28 max-w-md mx-auto min-h-screen">
        <motion.div
          className="flex flex-col items-center gap-5 mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Logo />
          <StatusBadge />
        </motion.div>

        <div className="w-full mb-8">
          <MenuCarousel />
        </div>

        <div className="w-full mb-8">
          <ActionButtons />
        </div>

        <div className="w-full mb-8">
          <WorkingHours />
        </div>

        <motion.a
          href="https://instagram.com/lovebrasa"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="flex items-center gap-2 text-smoke-ash text-sm hover:text-foreground transition-colors"
        >
          <Instagram size={18} />
          @lovebrasa
        </motion.a>
      </div>

      <StickyFooter />
    </div>
  );
};

export default Index;
