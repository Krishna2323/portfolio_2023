import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import * as HiIcons from "react-icons/hi";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Modal from "~/components/shared/Modal";
import * as IoIcons from "react-icons/io";

const variants = {
  open: {
    y: 0,
    scale: 1,
    opacity: 1,
  },
  closed: {
    y: 0,
    scale: 0.8,
    opacity: 0,
  },
};

const Specs99 = () => {
  const [animateEditor, setAnimateEditor] = useState(false);

  const [descriptionModal, setDescriptionModal] = useState(false);

  const [ref, inView] = useInView({ threshold: 0.45 });
  const imagesUrl = useMemo(
    () => [
      "/specs99/specs99-1.png",
      "/specs99/specs99-2.png",
      "/specs99/specs99-3.png",
      "/specs99/specs99-4.png",
      "/specs99/specs99-5.png",
      "/specs99/specs99-6.png",
      "/specs99/specs99-7.png",
      "/specs99/specs99-8.png",
    ],
    []
  );

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleCarouselBtnPrev = () => {
    if (currentImageIndex === 0) {
      setCurrentImageIndex(imagesUrl.length - 1);
    } else setCurrentImageIndex((prev) => prev - 1);
  };

  const handleCarouselBtnNext = () => {
    if (currentImageIndex === imagesUrl.length - 1) {
      setCurrentImageIndex(0);
    } else setCurrentImageIndex((prev) => prev + 1);
  };

  useEffect(() => {
    if (inView) {
      setAnimateEditor(true);
    }
  }, [inView]);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (currentImageIndex === imagesUrl.length - 1) {
        setCurrentImageIndex(0);
      } else setCurrentImageIndex((prev) => prev + 1);
    }, 4000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [currentImageIndex, imagesUrl]);

  return (
    <div className="flex w-full flex-col items-center">
      <div ref={ref} className="w-full rounded-2xl py-8 pt-2">
        <h2 className="mb-14 bg-gradient-to-br from-black-secondary to-black-primary bg-clip-text text-center text-3xl text-transparent max-[900px]:text-2xl max-sm:text-2xl">
          The Complete E-Commerce App With MERN
        </h2>
        <motion.div
          className="glow-on-hover relative mx-auto h-[max(25vh,25vw)] w-full skew-x-3 skew-y-3 rounded-xl max-xl:w-full max-[900px]:h-[max(45vh,45vw)]"
          initial={false}
          animate={animateEditor ? "open" : "closed"}
          variants={variants}
          transition={{ duration: 1 }}
        >
          {imagesUrl.map((imageURL, i) => (
            <div
              key={imageURL}
              className={`absolute top-0 h-full w-full rounded-xl ${
                currentImageIndex === i
                  ? "scale-100  opacity-100"
                  : "scale-90 opacity-0"
              }`}
              style={{
                transition: "all .65s",
              }}
            >
              <Image
                src={imageURL}
                width={1200}
                height={1000}
                alt="Code editor by Krishna"
                className="mx-auto h-full w-full rounded-xl object-cover"
              />
            </div>
          ))}
        </motion.div>
        <div className="my-8 flex items-center justify-center gap-2">
          <HiIcons.HiArrowSmLeft
            size={22}
            fill="#fff"
            className="mr-4 cursor-pointer rounded-full bg-gradient-to-br from-blue-secondary to-blue-primary"
            onClick={handleCarouselBtnPrev}
          />
          {imagesUrl.map((imageURL, i) => (
            <span
              key={i}
              className={`block h-2.5 w-2.5 cursor-pointer rounded-full bg-blue-secondary ${
                currentImageIndex === i
                  ? "scale-100 opacity-100"
                  : "scale-95 opacity-70"
              }`}
              onClick={() => {
                setCurrentImageIndex(i);
              }}
            ></span>
          ))}
          <HiIcons.HiArrowSmRight
            size={22}
            fill="#fff"
            onClick={handleCarouselBtnNext}
            className="ml-4 cursor-pointer rounded-full bg-gradient-to-br from-blue-secondary to-blue-primary"
          />
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center gap-4 text-center">
            <h3 className="text-xl">Tech Stack</h3>
            <p className="text-base">
              React.js, CSS/SCSS, Redux, Node.js, Express.js, MongoDB, AWS S3
              Bucket, Stripe
            </p>
          </div>
          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              className="mx-auto mt-6 rounded-2xl bg-gradient-to-br from-blue-secondary to-blue-primary px-4 py-0.5 text-[#fff]"
              onClick={() => setDescriptionModal(true)}
            >
              Description
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              className="mx-auto mt-6 rounded-2xl bg-gradient-to-br from-blue-secondary to-blue-primary text-[#fff]"
            >
              <a
                href="https://specs-99.onrender.com/"
                target="_blank"
                className=" px-4 py-0.5"
              >
                View Project
              </a>
            </motion.button>
          </div>
        </div>
      </div>
      <Modal open={descriptionModal} setOpen={setDescriptionModal}>
        <h2 className="mb-8 bg-gradient-to-br from-black-secondary to-black-primary bg-clip-text text-2xl font-medium text-transparent">
          Eyewear Store E-commerce Web App{" "}
        </h2>
        <div className="flex flex-col gap-8">
          <p>
            The Eyewear Store E-commerce Web App is a comprehensive online
            platform built using React.js, CSS/SCSS, Redux, Node.js, Express.js,
            MongoDB, AWS S3 bucket for images storage, and Stripe for secure
            payment processing. This project serves as a dedicated e-commerce
            solution for an eyewear store, providing users with a seamless
            shopping experience and robust management capabilities.
          </p>
          <p>Key Features:</p>
          <ol className="flex flex-col gap-6">
            <li>
              <strong>User Authentication:</strong> The web app offers a
              user-friendly login/signup system, allowing users to create
              accounts and securely authenticate themselves. This enables
              personalized experiences and features tailored to individual
              users.
            </li>
            <li>
              <strong>Product Catalog:</strong> Users can browse and view all
              available eyewear products. The web app provides powerful
              filtering options, enabling users to search and filter products
              based on criteria such as price, color, brand, eyewear type, and
              size.
            </li>
            <li>
              <strong>Cart Functionality:</strong> Users can add products to
              their cart and easily manage quantities on both the cart page and
              individual product pages. The cart provides a seamless checkout
              process, ensuring a hassle-free purchasing experience.
            </li>
            <li>
              <strong>Related Products:</strong> On specific product pages,
              users can view related products, enhancing product discovery and
              encouraging additional purchases.
            </li>
            <li>
              <strong>User Account Management:</strong> Users have the ability
              to change their password and email address, ensuring flexibility
              and account security. Additionally, a &quot;Forgot Password&quot;
              functionality allows users to reset their password if needed.
            </li>
            <li>
              <strong>Address Management:</strong> After authentication, users
              can add and manage their shipping addresses, streamlining the
              checkout process for future purchases.{" "}
            </li>
            <li>
              <strong>Payment Options:</strong> The web app supports two payment
              methods: Cash on Delivery (COD) and debit/credit card payments via
              Stripe. This ensures convenient and secure payment processing for
              users.{" "}
            </li>
            <li>
              <strong>Order Tracking:</strong> Once the payment is successfully
              processed, users can track their orders and view order details,
              providing transparency and peace of mind.{" "}
            </li>
            <li>
              <strong>Admin Dashboard:</strong> The web app includes a
              comprehensive user interface (UI) for managing products, users,
              and orders. Admins can create, update, and delete products, manage
              user accounts, and handle order processing efficiently.{" "}
            </li>
            <li>
              <strong>Responsive Design:</strong> The web app is fully
              responsive, ensuring a seamless experience across various devices
              and screen sizes.{" "}
            </li>
          </ol>
          <p>
            The Eyewear Store E-commerce Web App offers a feature-rich and
            user-friendly platform for online eyewear shopping. With its robust
            functionalities, secure payment processing, and intuitive admin
            dashboard, the app provides a seamless shopping experience for users
            while enabling efficient management of products, users, and orders.
          </p>
        </div>{" "}
      </Modal>
    </div>
  );
};

export default Specs99;
