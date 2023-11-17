import { PropsWithChildren } from "react";
import { createPortal } from "react-dom";
import ArrowLeft from "../assets/svg/ArrowLeft";
import StarRating from "./StarRating";

interface ModalProps {
    isOpen: null | boolean;
    title: string;
    onClose: () => void;
    date: string;
    rating: string;
    voteCount: string;
}

const Modal = ({ isOpen, onClose, title, children, date, rating, voteCount }: PropsWithChildren<ModalProps>) => {
    
    const handleChildClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };
  return createPortal(
    <div className={`duration-100 transition min-w-screen flex items-center justify-center ${isOpen ? 'visible fixed inset-0 min-h-screen backdrop-blur-sm backdrop-brightness-75 z-[999]' : 'invisible fixed inset-0 h-0'}`} onClick={onClose}>
      <div onClick={handleChildClick} className={`p-5 rounded-3xl w-[60vh] duration-200 ${isOpen ? 'visible bg-[#fefefe] brightness-90 h-auto translate-y-0 ease-in-out opacity-100' : 'invisible opacity-0 h-0 -translate-y-20'}`}>
        <div className="flex items-center justify-between">
            <button className="p-2 hover:bg-[#bbbbbb] rounded-3xl text-black active:scale-95 duration-200" onClick={onClose}>
                <ArrowLeft />
            </button>
            <StarRating rating={parseInt(rating)} voteCount={parseInt(voteCount)} />
        </div>

        <div className="flex flex-col pt-5">
            <div className="flex items-end justify-between">
                <h2 className="font-semibold text-2xl">{title}</h2>
                <h3>Date de sortie: <span className="font-semibold">{date}</span></h3>
            </div>
            {children}
        </div>
      </div>
    </div>,
    document.getElementById('root') as Element | DocumentFragment
  );
};
  
  export default Modal;