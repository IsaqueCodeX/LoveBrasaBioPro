import { useMemo } from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const schedule = [
  { day: "Segunda", hours: "11:30 – 15:00 / 18:00 – 23:00" },
  { day: "Terça", hours: "11:30 – 15:00 / 18:00 – 23:00" },
  { day: "Quarta", hours: "11:30 – 15:00 / 18:00 – 23:00" },
  { day: "Quinta", hours: "11:30 – 15:00 / 18:00 – 23:00" },
  { day: "Sexta", hours: "11:30 – 15:00 / 18:00 – 00:00" },
  { day: "Sábado", hours: "11:30 – 00:00" },
  { day: "Domingo", hours: "11:30 – 16:00" },
];

const dayMap: Record<number, number> = {
  0: 6, // Sunday
  1: 0, // Monday
  2: 1,
  3: 2,
  4: 3,
  5: 4,
  6: 5,
};

const WorkingHours = () => {
  const todayIndex = useMemo(() => {
    const now = new Date();
    return dayMap[now.getDay()];
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5 }}
      className="w-full glass-card p-5"
    >
      <div className="flex items-center gap-2 mb-4">
        <Clock size={18} className="text-primary" />
        <h3 className="text-base font-semibold text-foreground font-display">
          Horários
        </h3>
      </div>
      <ul className="space-y-2">
        {schedule.map((item, index) => {
          const isToday = index === todayIndex;
          return (
            <li
              key={item.day}
              className={`flex justify-between text-sm ${isToday
                  ? "text-foreground font-semibold"
                  : "text-smoke-ash"
                }`}
            >
              <span className="flex items-center gap-2">
                {isToday && (
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                )}
                {item.day}
              </span>
              <span>{item.hours}</span>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
};

export default WorkingHours;
