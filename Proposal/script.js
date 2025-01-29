const questions = [
    {
      question: (name) => `Hey ${name}, are you a magician? Because whenever I look at you, everyone else disappears.`,
      yes: () => `Yay! I knew you were magical!`,
      no: () => `Hmm, I guess you're just naturally enchanting then.`,
    },
    {
      question: () => `Do you have a name, or can I call you mine?`,
      yes: () => `Perfect! You're officially mine now. ❤️`,
      no: () => `I'll keep trying until you say yes!`,
    },
    {
      question: (name) => `${name}, do you believe in love at first sight, or should I walk by again?`,
      yes: () => `I knew it! You're a true romantic.`,
      no: () => `I'll keep walking by until you believe!`,
    },
    {
      question: () => `Is your name Google? Because you have everything I've been searching for.`,
      yes: () => `I found my perfect match!`,
      no: () => `Well, you're definitely my top result.`,
    },
    {
      question: (name) => `${name}, are you always this cute, or is today special?`,
      yes: () => `Every day with you is special!`,
      no: () => `I think you're just being modest.`,
    },
    {
      question: () => `Do you have a map? Because I keep getting lost in your eyes.`,
      yes: () => `I could stare at them forever!`,
      no: () => `I'll keep getting lost anyway.`,
    },
    {
      question: (name) => `${name}, will you be my Valentine?`,
      yes: (name) => `I love you, ${name}! ❤️`,
      no: (name) => `I'll keep asking until you say yes, ${name}!`,
    },
  ];
  
  let currentQuestionIndex = 0;
  let userName = "";
  
  function startQuestions() {
    userName = document.getElementById("name-input").value.trim();
    if (!userName) {
      alert("Please enter your name!");
      return;
    }
    document.getElementById("name-input-section").style.display = "none";
    document.getElementById("question-section").style.display = "block";
    document.getElementById("background-music").play();
    showQuestion();
  }
  
  function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").innerText = currentQuestion.question(userName);
  }
  
  function nextQuestion(answer) {
    const currentQuestion = questions[currentQuestionIndex];
    const nextQuestionText = answer === "yes" ? currentQuestion.yes(userName) : currentQuestion.no(userName);
  
    if (answer === "yes") {
      celebrate();
    }
  
    if (nextQuestionText.includes("I love you")) {
      document.getElementById("question").innerText = nextQuestionText;
      document.getElementById("options").innerHTML = "";
      return;
    }
  
    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
    document.getElementById("question").innerText = nextQuestionText;
  }
  
  function celebrate() {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }