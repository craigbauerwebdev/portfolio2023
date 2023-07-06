const { useEffect, useState } = wp.element;

const Buttons = (baseUrl) => {
  return (
    <div class="large-buttons">
      <a
        href="https://craigbauer.dev/resume/pdf/craig-bauer-resume.pdf"
        target="_blank"
      >
        <button>
          <b>Resume</b>
        </button>
      </a>
      <a href="mailto:craigbauerwebdev@gmail.com" target="_blank">
        <button>
          <b>Contact</b>
        </button>
      </a>
    </div>
  );
};

export default Buttons;
