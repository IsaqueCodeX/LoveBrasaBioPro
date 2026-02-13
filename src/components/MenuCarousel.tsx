import { useState, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { Beef } from "lucide-react";
import MenuItemSheet from "./MenuItemSheet";
import { menuItems, MenuItem } from "@/data/menu";

const MenuCarousel = () => {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const handleSelectItem = useCallback((item: MenuItem) => {
    setSelectedItem(item);
  }, []);

  const handleCloseSheet = useCallback(() => {
    setSelectedItem(null);
  }, []);

  const memoizedMenuItems = useMemo(() => menuItems, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="w-full"
      >
        <h2 className="text-lg font-semibold text-foreground mb-4 px-1 font-display inline-flex items-center gap-2">
          <Beef size={20} className="text-primary" /> Destaques
        </h2>
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-2 px-2">
          {memoizedMenuItems.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + index * 0.15, type: "spring", stiffness: 100 }}
              onClick={() => handleSelectItem(item)}
              className="flex-shrink-0 w-[260px] snap-center group"
            >
              <div className="glass-card overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/placeholder.svg";
                    }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-base font-semibold text-foreground font-display">
                    {item.name}
                  </h3>
                  <p className="text-sm text-smoke-ash mt-1">{item.price}</p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>

      <MenuItemSheet
        item={selectedItem}
        onClose={handleCloseSheet}
      />
    </>
  );
};

export default MenuCarousel;
