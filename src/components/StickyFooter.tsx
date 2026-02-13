import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Gift } from "lucide-react";

const StickyFooter = () => {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ delay: 1.8, type: "spring", stiffness: 100 }}
          className="fixed bottom-4 left-4 right-4 z-40"
        >
          <div className="glass-card px-5 py-3.5 flex items-center justify-between">
            <span className="text-sm font-medium text-foreground inline-flex items-center gap-1.5">
              <Gift size={16} className="text-primary" />
              <span className="gradient-ember-text font-bold">10% OFF</span> no 1º Pedido
            </span>
            <button
              onClick={() => setVisible(false)}
              aria-label="Fechar banner de desconto"
              className="w-7 h-7 rounded-full flex items-center justify-center bg-foreground/10 text-foreground/60 hover:text-foreground transition-colors ml-3 flex-shrink-0"
            >
              <X size={14} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyFooter;
