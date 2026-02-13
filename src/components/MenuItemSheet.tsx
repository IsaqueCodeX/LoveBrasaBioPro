import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle } from "lucide-react";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

interface MenuItemSheetProps {
  item: MenuItem | null;
  onClose: () => void;
}

const MenuItemSheet = ({ item, onClose }: MenuItemSheetProps) => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Olá! Gostaria de pedir: ${item?.name} (${item?.price})`
    );
    window.open(`https://wa.me/5511999999999?text=${message}`, "_blank");
  };

  return (
    <AnimatePresence>
      {item && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Sheet */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-50 max-h-[85vh] rounded-t-3xl overflow-hidden"
            style={{ background: "hsl(0 0% 10%)" }}
          >
            {/* Handle */}
            <div className="flex justify-center pt-3 pb-2">
              <div className="w-10 h-1 rounded-full bg-foreground/20" />
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Fechar detalhes do item"
              className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center bg-foreground/10 text-foreground/60 hover:text-foreground transition-colors"
            >
              <X size={18} />
            </button>

            {/* Content */}
            <div className="px-6 pb-8">
              <div className="w-full aspect-video rounded-2xl overflow-hidden mb-5">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-start justify-between mb-3">
                <h3 className="text-2xl font-bold text-foreground font-display">
                  {item.name}
                </h3>
                <span className="text-xl font-bold gradient-ember-text whitespace-nowrap ml-4">
                  {item.price}
                </span>
              </div>

              <p className="text-smoke-ash text-sm leading-relaxed mb-6">
                {item.description}
              </p>

              <button
                onClick={handleWhatsApp}
                className="w-full gradient-ember text-primary-foreground font-semibold py-4 rounded-2xl flex items-center justify-center gap-3 text-base active:scale-[0.98] transition-transform"
              >
                <MessageCircle size={20} />
                Pedir no WhatsApp
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MenuItemSheet;
