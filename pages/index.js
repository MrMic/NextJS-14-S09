import { useRef } from "react";

function HomePage() {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  // ______________________________________________________________________
  function submitFormHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify({ email: enteredEmail, text: enteredFeedback }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="feedback">Your Feddback</label>
          <textarea id="feedback" rows="5" ref={feedbackInputRef} />
        </div>
        <button>Send Feedback</button>
      </form>
    </div>
  );
}

export default HomePage;
