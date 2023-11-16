function startPrompt() {
    return new Promise((resolve) => {
      var customPrompt = document.createElement("div");
      customPrompt.id = "custom-prompt";
      customPrompt.style.position = "fixed";
      customPrompt.style.top = "50%";
      customPrompt.style.left = "50%";
      customPrompt.style.transform = "translate(-50%, -50%)";
      customPrompt.style.width = "300px";
      customPrompt.style.backgroundColor = "#444";
      customPrompt.style.borderRadius = "8px";
      customPrompt.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
      customPrompt.style.overflow = "hidden";
  
      var lid = document.createElement("div");
      lid.style.height = "10px";
      lid.style.backgroundColor = "#333";
      customPrompt.appendChild(lid);
  
      var content = document.createElement("div");
      content.style.padding = "20px";
  
      var closeButton = document.createElement("button");
      closeButton.innerText = "X";
      closeButton.style.float = "right";
      closeButton.style.backgroundColor = "transparent";
      closeButton.style.border = "2px";
      closeButton.style.borderColor = "white";
      closeButton.style.color = "#fff";
      closeButton.style.cursor = "pointer";
      closeButton.onclick = function () {
        closePrompt();
        resolve(null); 
      };
      content.appendChild(closeButton);
  
      var label = document.createElement("label");
      label.for = "userInput";
      label.innerText = "Enter name of person to DM";
      content.appendChild(label);
  
      var input = document.createElement("input");
      input.type = "text";
      input.id = "userInput";
      input.style.width = "100%";
      input.style.padding = "10px";
      input.style.marginBottom = "10px";
      input.style.boxSizing = "border-box";
      content.appendChild(input);
  
      var submitButton = document.createElement("button");
      submitButton.innerText = "Submit";
      submitButton.onclick = function () {
        var userInput = document.getElementById("userInput").value;
        closePrompt();
        resolve(userInput);
      };
      submitButton.style.backgroundColor = "#3498db";
      submitButton.style.color = "#fff";
      submitButton.style.padding = "10px";
      submitButton.style.border = "none";
      submitButton.style.borderRadius = "4px";
      submitButton.style.cursor = "pointer";
      content.appendChild(submitButton);
  
      customPrompt.appendChild(content);
      document.body.appendChild(customPrompt);
  
      var justOpenedByButtonClick = true;
  
      document.addEventListener("click", function (event) {
        if (justOpenedByButtonClick) {
          justOpenedByButtonClick = false;
          return;
        }
  
        if (
          event.target !== customPrompt &&
          !customPrompt.contains(event.target)
        ) {
          closePrompt();
          resolve(null); 
        }
      });
  
      function closePrompt() {
        if (customPrompt && customPrompt.parentNode) {
          customPrompt.parentNode.removeChild(customPrompt);
        }
        document.removeEventListener("click", closePrompt);
      }
    });
  }