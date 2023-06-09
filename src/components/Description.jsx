import { useModal } from "./hooks/useModal";
import Modal from "./Modal";
import { Portal } from "./Portal";
import { motion } from "framer-motion";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

export default function Description() {
  const { isOpen, onOpen, onClose } = useModal();

  return (
    <>
      <motion.button
        onClick={onOpen}
        whileHover={{ scale: 1.2, y: -5 }}
        className="modal-btn"
      >
        遊び方はこちら{" "}
        <SportsEsportsIcon sx={{ fontSize: "25px", verticalAlign: "-6px" }} />
      </motion.button>
      {isOpen && (
        <Portal>
          <Modal onClose={onClose} />
        </Portal>
      )}
    </>
  );
}
