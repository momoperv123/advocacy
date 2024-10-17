class MultipleChoice {
  constructor(MultipleChoiceDiv) {
    this.MultipleChoice = MultipleChoiceDiv;
  }

  Initialize() {
    let AltTexts = this.MultipleChoice.getElementsByClassName("altText");
    this.HideAllAltText(AltTexts);

    let buttons = this.MultipleChoice.getElementsByClassName("choice");
    this.ClickerFunction(buttons);
  }

  ClickerFunction(buttons) {
    for (var index = 0; index < buttons.length; index++) {
      let button = buttons[index];

      button.addEventListener("click", () => {
        let right = button.classList.contains("right");
        let wrong = button.classList.contains("wrong");

        if (right) {
          this.CorrectChoice(button);
        } else if (wrong) {
          this.WrongChoice(button);
        }

        button.style.backgroundColor = "black";
        this.ShowAltText(button);
      })
    }
  }

  CorrectChoice(button) {
    button.style.color = "#66ff00";
    button.style.textShadow = "0px 2px 0px black";
    button.style.cursor = "context-menu";
  }

  WrongChoice(button) {
    button.style.color = "red";
    button.style.textShadow = "0px 2px 0px black";
    button.style.cursor = "context-menu";
  }

  ShowAltText(button) {
    let AltText = button.getElementsByClassName("altText")[0];
    AltText.style.display = "initial";
  }

  HideAllAltText(AltTexts) {
    for (var index = 0; index < AltTexts.length; index++) {
      let AltText = AltTexts[index];
      AltText.style.display = "none";
    }
  }
}

let MultipleChoiceDivs = document.getElementsByClassName("multipleChoice");

for (var index = 0; index < MultipleChoiceDivs.length; index++) {
  let MultipleChoiceDiv = MultipleChoiceDivs[index];
  let MultipleChoiceObject = new MultipleChoice(MultipleChoiceDiv);
  MultipleChoiceObject.Initialize();
}

const signedEmails = [];
let count = 3;

const addSignature = () => {
  const name = document.getElementById('name').value;
  const hometown = document.getElementById('hometown').value;
  const email = document.getElementById('email').value;

  const nameInput = document.getElementById('name');
  const hometownInput = document.getElementById('hometown');
  const emailInput = document.getElementById('email');

  if (name === "") {
    nameInput.classList.add("error");
  } else {
    nameInput.classList.remove("error");
  }

  if (hometown === "") {
    hometownInput.classList.add("error");
  } else {
    hometownInput.classList.remove("error");
  }

  if (email === "") {
    emailInput.classList.add("error");
  } else {
    emailInput.classList.remove("error");
  }

  if (name === "" || hometown === "" || email === "") {
    alert('Please fill out all fields.');
    return;
  }

  if (signedEmails.includes(email)) {
    alert('You have already signed the petition with this email.');
    nameInput.classList.add("error");
    hometownInput.classList.add("error");
    emailInput.classList.add("error");
    return;
  } else {
    nameInput.classList.remove("error");
    hometownInput.classList.remove("error");
    emailInput.classList.remove("error");
  }

  const isValidEmail = validateEmail(email);
  if (!isValidEmail) {
    alert('Please enter a valid email.');
    emailInput.classList.add("error");
    return;
  } else {
    emailInput.classList.remove("error");
  }

  const modal = document.getElementById('thanks-modal');
  const closeBtn = document.getElementById('close-modal-button');
  const userInfo = document.getElementById('user-info');
  const userName = document.getElementById('name').value;
  const userHometown = document.getElementById('hometown').value;

  userInfo.textContent = `${userName} from ${userHometown}`;

  modal.classList.add('show');

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
  });

  setTimeout(() => {
    modal.classList.remove('show');
  }, 5000);

  signedEmails.push(email);

  const p = document.createElement('p');
  p.innerText = `😊 ${name} from ${hometown} supports this.`;
  const signatures = document.querySelector('.signatures');
  signatures.appendChild(p);

  const counter = document.getElementById('counter');
  counter.remove();
  count++;

  const newCounter = document.createElement('p');
  newCounter.id = 'counter';
  newCounter.innerText = `🖊️ ${count} people have signed this petition and support this cause.`;

  signatures.appendChild(newCounter);
}

document.getElementById('sign-now-button').addEventListener('click', addSignature);

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}