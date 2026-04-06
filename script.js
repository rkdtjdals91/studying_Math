const readingModeBtn = document.getElementById('readingModeBtn');
const visualToggleBtn = document.getElementById('visualToggleBtn');
const visualStage = document.getElementById('visualStage');
const formulaPanel = document.getElementById('formulaPanel');
const lessonExplanation = document.getElementById('lessonExplanation');
const feedback = document.getElementById('feedback');
const choiceButtons = Array.from(document.querySelectorAll('.choice'));

let formulaVisible = false;

readingModeBtn?.addEventListener('click', () => {
  const enabled = document.body.classList.toggle('reading-mode');
  readingModeBtn.setAttribute('aria-pressed', String(enabled));
  readingModeBtn.textContent = enabled ? '기본 보기' : '읽기 도움 모드';
});

visualToggleBtn?.addEventListener('click', () => {
  formulaVisible = !formulaVisible;
  visualStage.classList.toggle('hidden', formulaVisible);
  formulaPanel.classList.toggle('hidden', !formulaVisible);
  visualToggleBtn.textContent = formulaVisible ? '그림 보기' : '식 보기';
  lessonExplanation.textContent = formulaVisible
    ? '그림에서 확인한 균형을 식으로 옮기면, 양쪽에서 같은 수를 빼는 과정이 왜 가능한지 더 선명하게 보입니다.'
    : '왼쪽 접시에 x와 2가 함께 올라가 있고, 오른쪽 접시에 5가 올라가 있어요. 양쪽에서 같은 무게 2를 빼면 균형이 유지되므로 x만 남고, 값은 3이 됩니다.';
});

choiceButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const answer = button.dataset.answer;
    choiceButtons.forEach((btn) => btn.classList.remove('selected', 'correct', 'wrong'));

    if (answer === '3') {
      button.classList.add('correct');
      feedback.textContent = '맞았어요. x + 1 = 4 에서 양쪽에서 1을 빼면 x = 3 이 됩니다.';
    } else {
      button.classList.add('wrong');
      const correct = choiceButtons.find((btn) => btn.dataset.answer === '3');
      correct?.classList.add('correct');
      feedback.textContent = '다시 보면 쉬워요. 양쪽에서 1을 빼면 x만 남고, 오른쪽은 4 - 1 = 3 이라서 x = 3 입니다.';
    }
  });
});
