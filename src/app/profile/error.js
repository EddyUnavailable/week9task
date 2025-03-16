"use client";
import brokenStyles from "../css/broken.module.css";

export default function Error({error, reset}) {
  // console.error(error.message)
  return (
    <>
      <div className={brokenStyles.wrapper}>
        <div className={brokenStyles.broken}>
          <p className="text-2xl">Something is broken</p>
          <p className="text-4xl drop-shadow-lg animate-pulse text-red-900">What have you done! </p>
            <p className="text-xs">This took me ages to make!!!</p>
              <p className="text-xs">And only seconds for you to break...</p>
          <button onClick={() => reset()}>Click here and see if you can fix it.</button>
        </div>  
      </div>  
    </>
  );
}
