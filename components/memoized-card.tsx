"use client";

import { memo } from "react";
import { motion } from "framer-motion";

interface MemoizedCardProps {
  title: string;
  description: string;
  onClick: () => void;
}

// Animation variants defined outside component (not recreated on every render)
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const MemoizedCard = memo(({ title, description, onClick }: MemoizedCardProps) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="light-container p-6 cursor-pointer"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={`${title}: ${description}`}
    >
      <h3 className="font-['Inter'] text-xl font-bold mb-2">{title}</h3>
      <p className="text-[rgba(0,0,0,0.6)]">{description}</p>
    </motion.div>
  );
});

MemoizedCard.displayName = "MemoizedCard";

export default MemoizedCard;
