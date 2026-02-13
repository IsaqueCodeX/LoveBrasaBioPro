import { motion } from "framer-motion";
import { Flame } from "lucide-react";

const StatusBadge = () => {
  return (
    <motion.div
      className="glass-card px-4 py-2 inline-flex items-center gap-2 rounded-full"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
      </span>
      <span className="text-sm font-medium text-foreground inline-flex items-center gap-1.5">
        <Flame size={14} className="text-primary" />
        Aberto Agora
      </span>
    </motion.div>
  );
};

export default StatusBadge;
