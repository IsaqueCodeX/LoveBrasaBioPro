import { motion } from "framer-motion";
import { UtensilsCrossed, MessageCircle, MapPin } from "lucide-react";

const actions = [
  {
    label: "Ver Cardápio Digital Completo",
    icon: UtensilsCrossed,
    variant: "primary" as const,
    href: "#",
  },
  {
    label: "Reservar Mesa",
    icon: MessageCircle,
    variant: "glass" as const,
    href: "https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20reservar%20uma%20mesa.",
  },
  {
    label: "Como Chegar",
    icon: MapPin,
    variant: "glass" as const,
    href: "https://maps.google.com",
  },
];

const ActionButtons = () => {
  return (
    <div className="flex flex-col gap-3 w-full">
      {actions.map((action, index) => (
        <motion.a
          key={action.label}
          href={action.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 + index * 0.1, type: "spring", stiffness: 100 }}
          className={`
            flex items-center justify-center gap-3 py-4 px-6 rounded-2xl font-semibold text-base
            transition-all duration-200 active:scale-[0.98]
            ${
              action.variant === "primary"
                ? "gradient-ember text-primary-foreground shadow-lg"
                : "glass-card text-foreground hover:bg-foreground/5"
            }
          `}
        >
          <action.icon size={20} />
          {action.label}
        </motion.a>
      ))}
    </div>
  );
};

export default ActionButtons;
