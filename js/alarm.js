document.addEventListener("DOMContentLoaded", function () {
  // Verifica se estamos na página de alarmes
  if (document.getElementById("alarmList")) {
    setupAlarmPage();
  }

  // Verifica se estamos na página de adicionar alarme
  if (document.getElementById("addAlarmForm")) {
    setupAddAlarmPage();
  }

  // Configurações para a página de alarmes
  function setupAlarmPage() {
    const alarmList = document.getElementById("alarmList");
    const addAlarmBtn = document.getElementById("addAlarmBtn");

    // Função para criar um novo card de alarme
    function createAlarmCard(time, label = "", repeatDays = [], index) {
      const card = document.createElement("div");
      card.classList.add("card");

      // Exibe os dias selecionados (apenas a inicial)
      const repeatDaysDisplay = repeatDays.length > 0 ? ` | Repetir: ${repeatDays.join(", ")}` : "";

     // Nova estrutura com elementos separados
card.innerHTML = `
  <div class="alarm-header">
    <div class="alarm-title">${label || "Alarme"}</div>
    <div class="alarm-time-container">
      <img src="assets/alarm-clock-icon.svg" alt="Ícone de Alarme">
      <div class="alarm-time">${time}</div>
    </div>
    ${repeatDaysDisplay ? `<div class="alarm-details">${repeatDaysDisplay}</div>` : ""}
  </div>
  <div class="alarm-controls">
    <div class="toggle"></div>
    <div class="delete-btn">...</div>
  </div>
`;
      // Adiciona evento de clique ao toggle
      const toggle = card.querySelector(".toggle");
      toggle.addEventListener("click", function () {
        toggle.classList.toggle("active");
      });

      // Adiciona evento de clique ao botão de exclusão
      const deleteBtn = card.querySelector(".delete-btn");
      deleteBtn.addEventListener("click", function () {
        deleteAlarm(index); // Remove o alarme pelo índice
        card.remove(); // Remove o card da interface
      });

      return card;
    }

    // Função para excluir um alarme
    function deleteAlarm(index) {
      const savedAlarms = JSON.parse(localStorage.getItem("alarms")) || [];
      savedAlarms.splice(index, 1); // Remove o alarme no índice especificado
      localStorage.setItem("alarms", JSON.stringify(savedAlarms)); // Atualiza o localStorage
    }

    // Função para carregar alarmes salvos (se houver)
    function loadAlarms() {
      const savedAlarms = JSON.parse(localStorage.getItem("alarms")) || [];
      savedAlarms.forEach((alarm, index) => {
        const alarmCard = createAlarmCard(alarm.time, alarm.label, alarm.repeatDays, index);
        alarmList.appendChild(alarmCard);
      });
    }

    // Carrega os alarmes ao iniciar a página
    loadAlarms();

    // Redireciona para a página de adicionar alarme
    if (addAlarmBtn) {
      addAlarmBtn.addEventListener("click", function () {
        window.location.href = "add_alarm.html";
      });
    }
  }

  // Configurações para a página de adicionar alarme
  function setupAddAlarmPage() {
    const addAlarmForm = document.getElementById("addAlarmForm");
    const backBtn = document.getElementById("backBtn");

    // Função para salvar um novo alarme
    function saveAlarm(time, label = "", repeatDays = []) {
      const savedAlarms = JSON.parse(localStorage.getItem("alarms")) || [];
      savedAlarms.push({ time, label, repeatDays });
      localStorage.setItem("alarms", JSON.stringify(savedAlarms));
    }

    // Configuração do formulário de adicionar alarme
    if (addAlarmForm) {
      addAlarmForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const alarmTime = document.getElementById("alarmTime").value;
        const alarmLabel = document.getElementById("alarmLabel").value.trim();

        // Captura os dias selecionados (apenas a inicial)
        const repeatDays = [];
        document.querySelectorAll(".repeat-days .day.selected").forEach((day) => {
          repeatDays.push(day.getAttribute("data-day").charAt(0)); // Pega apenas a primeira letra
        });

        if (!alarmTime) {
          alert("Por favor, insira uma hora para o alarme.");
          return;
        }

        // Salva o alarme no localStorage
        saveAlarm(alarmTime, alarmLabel, repeatDays);

        // Redireciona para a página de alarmes
        window.location.href = "alarm.html";
      });
    }

    // Configuração do botão de voltar
    if (backBtn) {
      backBtn.addEventListener("click", function () {
        window.location.href = "alarm.html";
      });
    }
  }

  // Adiciona evento de clique aos dias da semana
  const dayButtons = document.querySelectorAll(".repeat-days .day");
  dayButtons.forEach((button) => {
    button.addEventListener("click", function () {
      button.classList.toggle("selected");
    });
  });
});