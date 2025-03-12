//@ts-ignore
import ModalImage from "react-modal-image";

const ImageModal = ({ className, url }: { className: string; url: string }) => {
  return <ModalImage className={className} small={url} large={url} alt="" />;
};

export default ImageModal;
