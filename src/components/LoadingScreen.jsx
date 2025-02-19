import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<Hello Wolrd />";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
      <div className="mb-4 text-4xl font-mono font-bold">
        {text} <span className="animate-blink ml-1"> | </span>
      </div>

      <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
};



//   // =========== Corrected Code From Blacbox Ai ===============
// import { useEffect, useState } from "react";

// export const LoadingScreen = ({ onComplete }) => {
//   const [text, setText] = useState("");
//   const fullText = "<Hello World/>";

//   useEffect(() => {
//     let index = 0;
//     const interval = setInterval(() => {
//       setText(fullText.substring(0, index));
//       index++;

//       if (index > fullText.length) {
//         clearInterval(interval);

//         setTimeout(() => {
//           onComplete();
//         }, 1000);
//       }
//     }, 100);

//     return () => clearInterval(interval);
//   }, [onComplete]);

//   return (
//     <div className="fixed inset-0 z-50 bg-black text-gray-100">
//       <div className="absolute top-4 left-4 mb-4 text-4xl font-mono font-bold">
//         {text} {/* Render the animated text here */}
//         <span className="animate-blink ml-1"></span>
//       </div>

//       <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
//         <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b9] animate-loading-bar"></div>
//       </div>
//     </div>
//   );
// };




// // import { useEffect, useState } from "react";

// // export const LoadingScreen = ({ onComplete }) => {
// //   const [text, setText] = useState("");
// //   const fullText = "<Hello World/>";
// //   useEffect(() => {
// //     let index = 0;
// //     const interval = setInterval(() => {
// //       setText(fullText.substring(0, index));
// //       index++;

// //       if (index > fullText.length) {
// //         clearInterval(interval);

// //         setTimeout(() => {
// //           onComplete();
// //         }, 1000);
// //       }
// //     }, 100);

// //     return () => clearInterval(interval);
// //   }, [onComplete]);

// //   return (
// //     <div className="fixed inset-0 z-50 bg-black text-gray-100 flex-col items-center justtify-center">
// //       <div className="mb-4 text-4xl font-mono font-bold">
// //         Hello World
// //         <span className="animate-blink ml-1"></span>
// //       </div>

// //       <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
// //         <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b9] animate-loading-bar"></div>
// //       </div>
// //     </div>
// //   );
// // };
