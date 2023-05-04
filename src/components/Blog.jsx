import React, { useState } from "react";
import Pdf from "react-to-pdf";

const Blog = () => {
  const ref = React.createRef();
  const options = {
    orientation: "landscape",
    unit: "in",
    format: [8.5, 11],
  };
  // const [isDownloading, setIsDownloading] = useState(false);

  // const handleDownload = () => {
  //   setIsDownloading(true);

  //   setTimeout(() => {
  //     setIsDownloading(false);
  //   }, 2000);
  // };

  return (
    <div>
      <div className="custom-container flex flex-row-reverse">
        <Pdf
          targetRef={ref}
          filename="assignment-10-blog.pdf"
          options={options}
          x={0}
          y={0}
          scale={0.5}
        >
          {({ toPdf }) => (
            <button
              onClick={toPdf}
              className={`text-white font-extrabold border rounded-lg bg-orange-600 hover:bg-orange-500 px-3 py-4 animate-pulse 
            `}
              // onClick={() => handleDownload()}
              // disabled={isDownloading}
            >
              Download as PDF
            </button>
          )}
        </Pdf>
      </div>
      <div ref={ref}>
        <ul className="m-20 custom-container list-disc">
          <li>
            <h5 className="text-3xl font-bold pb-5">
              Tell us the differences between uncontrolled and controlled
              components.
            </h5>
            <p className="border-b pb-5 mb-10 text-xl px-5 ">
              A controlled component's value is controlled by React state. A
              user can interact with the component and change its value but the
              change is always handled byt the parent component through the
              onChange event handler. <br /> An uncontrolled component manages
              its own state internally and communicates its changes to the
              parent component through a ref. <br /> Controlled components offer
              more control and consistency, whereas uncontrolled components are
              more flexible and require less code.
            </p>
          </li>
          <li>
            <h5 className="text-3xl font-bold pb-5">
              How to validate React props using PropTypes
            </h5>
            <p className="border-b pb-5 mb-10 text-xl px-5 ">
              It is a type-cheking library that comes bundles with React. It
              provides a way to validate the props passed to a component to
              ensure that they are the expected type. It helps to catch errors
              early in development making the code more strong. <br /> You can
              use 'PropTypes.string' to ensure that the prop is indeed a string.
              similarly, you can use 'PropTypes.arrayOf' or 'PropTypes.shape' to
              validate the array's contents.
            </p>
          </li>
          <li>
            <h5 className="text-3xl font-bold pb-5">
              Tell us the difference between nodejs and express js.
            </h5>
            <p className="border-b pb-5 mb-10 text-xl px-5 ">
              Node.js is a JavaScript runtime built on the V8 JavaScript engine.
              It is used to write server-side applications using JavaScript. It
              is used to provide a set of APIs and other server-side tasks.{" "}
              <br /> Express.js is a framework build on top of Node.js. It can
              build web applications and APIs more quickly and easily. It is a
              higher-level framework for building web applications and APIs on
              top of Node.js
            </p>
          </li>
          <li>
            <h5 className="text-3xl font-bold pb-5">
              What is a custom hook, and why will you create a custom hook?
            </h5>
            <p className="border-b pb-5 mb-10 text-xl px-5 ">
              A custom hook is a function in React that allows us to reuse
              stateful logic across multiple components.Custom hooks can be used
              to abstract complex functionality into a simpler interface, making
              it easier for other developers to understand and use the code.It
              helps to keep the code organized.It is also useful in scenarios
              where you may find yourself repeating the same logic across
              multiple components.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Blog;
