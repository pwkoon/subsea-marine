"use client"

import Image from "next/image";
import { useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';
import { Project } from "@/data/projects";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

function Modal({ isOpen, onClose, project }: ModalProps) {
  
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          className="w-full min-h-[clamp(32rem,100vh,60rem)] bg-darkBlue py-30 no"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          id="top"
        >
          <motion.div
            className="absolute inset-0 bg-black/75"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.article
            className="relative mx-auto w-2/3 md:w-1/2"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end cursor-pointer">
              <RxCross1 className="text-yellow text-[clamp(0.9rem,2vw,1.5rem)]" onClick={onClose} />
            </div>
            <div className="py-5">
              <p className="text-darkBlue w-fit font-bold p-1 bg-yellow text-[clamp(0.9rem,2vw,1.5rem)]">
                Project Name
              </p>
              <p className="text-yellow text-[clamp(0.9rem,2vw,1.25rem)] py-5">
                <span className="font-extrabold">| </span>
                {project.title1}
              </p>
            </div>
            <div className="py-5">
              <p className="text-darkBlue w-fit font-bold p-1 bg-yellow text-[clamp(0.9rem,2vw,1.5rem)]">
                What we done
              </p>
              <p className="text-yellow text-[clamp(0.9rem,2vw,1.25rem)] py-5">
                <span className="font-extrabold">| </span>
                {project.title2}
              </p>
            </div>
            <div
              className="bg-contain bg-fixed bg-center bg-no-repeat h-80"
              style={{ backgroundImage: `url(${project.image1})` }}
            ></div>
            {project.title4 && (
              <>
                <p className="text-yellow text-[clamp(0.9rem,2vw,1.25rem)] py-10">
                  <span className="font-extrabold">| </span>
                  {project.title3}
                </p>
                <div className="mx-auto md:grid md:grid-flow-col md:grid-rows-3 gap-4">
                  {project.image2 && (
                    <div className="row-span-3">
                      <Image
                        src={project.image2}
                        className="border-4"
                        width={300}
                        height={300}
                        alt="Subsea5"
                      />
                    </div>
                  )}
                  <div className="col-span-2">
                    <p className="text-yellow text-[clamp(0.9rem,2vw,1.25rem)] py-5 font-extrabold text-center ">
                      {project.title4}
                    </p>
                  </div>
                  <div
                    className="col-span-2 row-span-2 bg-fill md:bg-fixed bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${project.image3})` }}
                  ></div>
                </div>
                <div className="py-[clamp(3rem,8vw,6rem)]">
                  <p className="text-yellow text-[clamp(0.9rem,2vw,1.25rem)] py-8 w-2/3 mx-auto">
                    {project.para1}
                  </p>
                  <p className="text-yellow text-[clamp(0.9rem,2vw,1.25rem)] w-2/3 mx-auto">
                    {project.para2}
                  </p>
                </div>
                <div
                  className="bg-contain bg-fixed bg-center bg-no-repeat flex items-center justify-center"
                  style={{ backgroundImage: `url(${project.image4})` }}
                >
                  <motion.p
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-[clamp(0.9rem,20vw,44rem)] text-darkBlue"
                  >
                    |
                  </motion.p>
                  <div>
                    <motion.p
                      initial={{ opacity: 0, x: 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                      viewport={{ once: true, amount: 0.3 }}
                      className="text-darkBlue text-[clamp(0.9rem,2vw,1.25rem)] mx-auto"
                    >
                      {project.para3}
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, x: 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                      viewport={{ once: true, amount: 0.3 }}
                      className="text-darkBlue text-[clamp(0.9rem,2vw,1.25rem)] mx-auto py-10"
                    >
                      {project.para4}
                    </motion.p>
                  </div>
                </div>
              </>
            )}
            {/* back and up button */}
            <div className="flex justify-between text-yellow py-10">
              <p
                className="text-[clamp(0.9rem,2vw,1.25rem)] hover:underline cursor-pointer"
                onClick={onClose}
              >
                BACK
              </p>
              <a href="#top">
                <FaArrowAltCircleUp className="text-[clamp(0.9rem,2vw,1.75rem)] cursor-pointer" />
              </a>
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal
