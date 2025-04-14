let cards = {
  "1234567890123456": { pin: "1234", balance: 100 },
  "1111222233334444": { pin: "4321", balance: 250 }
};

let currentCard = null;

function checkCard() {
  let card = document.getElementById("cardNumber").value;
  showMsg("Kart yoxlanılır...");

  setTimeout(() => {
    if (cards[card]) {
      currentCard = card;
      document.getElementById("pinSection").style.display = "block";
      showMsg("Kart təsdiqləndi.");
    } else {
      showMsg("Kart tapılmadı");
    }
  }, 1000);
}

function checkPin() {
  let pin = document.getElementById("pinCode").value;
  if (cards[currentCard].pin === pin) {
    document.getElementById("actionSection").style.display = "block";
    updateBalance();
    showMsg("PIN doğru. Əməliyyatlara davam edə bilərsiniz.");
  } else {
    showMsg("Yanlış PIN");
  }
}

function updateBalance() {
  document.getElementById("balanceInfo").innerText = "Balans: " + cards[currentCard].balance + " AZN";
}

function addMoney() {
  let amount = Number(document.getElementById("amount").value);
  if (amount > 0) {
    cards[currentCard].balance += amount;
    updateBalance();
    showMsg("Pul əlavə olundu");
  } else {
    showMsg("Yanlış məbləğ");
  }
}

function withdrawMoney() {
  let amount = Number(document.getElementById("amount").value);
  if (amount > 0 && cards[currentCard].balance >= amount) {
    showMsg("Əməliyyat aparılır...");

    setTimeout(() => {
      cards[currentCard].balance -= amount;
      updateBalance();
      showMsg("Buyurun, kartınız. Pul çıxarıldı.");
    }, 1500); // 1.5 saniyəlik gecikmə
  } else {
    showMsg("Balans kifayət etmir və ya məbləğ yanlışdır");
  }
}

function showMsg(text) {
  let msgBox = document.getElementById("message");
  msgBox.classList.add("fade");
  setTimeout(() => {
    msgBox.innerText = text;
    msgBox.classList.remove("fade");
  }, 200); // kiçik animasiya gecikməsi
}

