import { useModal } from "./hooks/useModal";
import Modal from "./Modal";
import { Portal } from "./Portal";
import { motion } from "framer-motion";

export default function Description() {
  const { isOpen, onOpen, onClose } = useModal();

  return (
    <>
      <motion.button
        onClick={onOpen}
        whileHover={{ scale: 1.2, y: -5 }}
        className="modal-btn"
      >
        遊び方はこちら
      </motion.button>
      {isOpen && (
        <Portal>
          <Modal onClose={onClose} />
        </Portal>
      )}
    </>
  );
}
