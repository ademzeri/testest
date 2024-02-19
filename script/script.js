document.addEventListener("DOMContentLoaded", function () {
  const inputCountSelect = document.getElementById("inputCount");
  const inputContainer = document.getElementById("inputContainer");
  const clearAllButton = document.getElementById("clearAllButton");
  const backButton = document.getElementById("backButton");
  const nextButton = document.getElementById("nextButton");

  // Function to generate input fields
  const generateInputs = (count) => {
    inputContainer.innerHTML = ""; // Clear previous inputs

    const columns = count === 12 ? 2 : 4;
    inputContainer.classList = `mt-6 grid grid-cols-${columns} gap-2`;

    for (let i = 0; i < count; i++) {
      const inputWrapper = document.createElement("div");
      inputWrapper.className = "input-wrapper relative"; // Make the wrapper relative

      const input = document.createElement("input");
      input.type = "password";
      input.placeholder = `Word ${i + 1}`;
      input.className = "rounded-lg bg-[#2B3139] text-white px-3 py-2 ";
      input.maxLength = 12;
      input.required = true;
      inputWrapper.appendChild(input);

      // Toggle password visibility
      const toggleIcon = document.createElement("span");
      toggleIcon.innerHTML = `
              <i class="fas fa-eye-slash toggle-icon text-[#9CA3AF]"></i>
          `;
      toggleIcon.className = "cursor-pointer toggle-icon"; // Remove absolute positioning
      toggleIcon.addEventListener("click", () => {
        const isPassword = input.type === "password";
        input.type = isPassword ? "text" : "password";
        input.style.width = isPassword ? `calc(100% - 30px)` : ""; // Reset width to default if input is text
        toggleIcon
          .querySelector("i")
          .classList.toggle("fa-eye-slash", !isPassword);
        toggleIcon.querySelector("i").classList.toggle("fa-eye", isPassword);
      });
      inputWrapper.appendChild(toggleIcon);

      inputContainer.appendChild(inputWrapper);
    }
  };

  // Generate inputs based on initial selection
  generateInputs(parseInt(inputCountSelect.value));

  // Event listener for select change
  inputCountSelect.addEventListener("change", (e) => {
    const count = parseInt(e.target.value);
    generateInputs(count);
  });

  // Event listener for clear all button
  clearAllButton.addEventListener("click", () => {
    const inputs = inputContainer.querySelectorAll("input[type='password']");
    inputs.forEach((input) => {
      input.value = ""; // Clear the value of each input
    });
  });
});
