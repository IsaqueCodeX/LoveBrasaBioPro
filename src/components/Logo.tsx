import { motion } from "framer-motion";
import logoSvg from "@/assets/logo-lb.svg";

const Logo = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <motion.div
        className="relative w-24 h-24 rounded-full flex items-center justify-center animate-breathing-glow overflow-hidden"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
      >
        <img src={logoSvg} alt="Love Brasa" className="w-24 h-24" />
      </motion.div>
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground font-display">
          Love Brasa
        </h1>
        <p className="text-sm tracking-[0.3em] uppercase text-smoke-ash mt-1 font-body">
          Steakhouse
        </p>
      </div>
    </div>
  );
};

export default Logo;
