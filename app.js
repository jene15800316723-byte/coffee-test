// ===== Cof & Fee 豆格测试 =====
// 纯前端计分：权重 [2,1,1,2,2]，并列按 Q5→Q4→Q1→Q3→Q2 判定。

const ORDER = ['A', 'B', 'C', 'D', 'E'];

const BEANS = {
  A: {
    code: 'A', name: '莓好晴天', persona: '清新探索家',
    roast: '浅度烘焙', origin: '埃塞俄比亚',
    flavors: ['浓郁花香', '桃子', '蓝莓'],
    color: '#7dab6f',
    teamText: '喜欢新鲜感，心里常住一个小晴天。',
    resultText: '你的选择更偏向清新的花果香。来自埃塞俄比亚的「莓好晴天」，以花香、桃子和蓝莓为主要风味描述，值得放进你的尝试清单。'
  },
  B: {
    code: 'B', name: '焦糖抱抱', persona: '温柔平衡派',
    roast: '中度烘焙', origin: '哥伦比亚｜坦桑尼亚｜爪哇',
    flavors: ['烤坚果', '奶油', '可可', '焦糖'],
    color: '#d9a441',
    teamText: '不抢戏，但总能让人舒服。',
    resultText: '你的选择更偏向协调、温暖的香气组合。「焦糖抱抱」以烤坚果、奶油、可可和焦糖为主要风味描述，是你今天的咖啡搭子。'
  },
  C: {
    code: 'C', name: '黑巧骑士', persona: '沉稳实力派',
    roast: '深度烘焙', origin: '南美洲｜非洲｜亚洲',
    flavors: ['香料', '黑巧克力', '烤坚果', '醇厚饱满'],
    color: '#5b4636',
    teamText: '低调、靠谱，喜欢有分量的东西。',
    resultText: '你的选择更偏向浓郁的黑巧与坚果风味。「黑巧骑士」以黑巧克力、烤坚果和香料为主要风味描述，突出醇厚饱满的风味印象。'
  },
  D: {
    code: 'D', name: '红糖爵士', persona: '复古浪漫派',
    roast: '深度烘焙', origin: '墨西哥｜巴西｜哥伦比亚',
    flavors: ['烤榛子', '可可', '香料', '红糖'],
    color: '#b0693c',
    teamText: '有自己的节奏，也有一点复古小浪漫。',
    resultText: '你的选择更偏向红糖与榛子交织的甜香。「红糖爵士」以烤榛子、可可、香料和红糖为主要风味描述，值得你慢慢认识。'
  },
  E: {
    code: 'E', name: '黄油奇遇', persona: '甜点享乐派',
    roast: '深度烘焙', origin: '东非｜南美洲｜印度',
    flavors: ['焦糖', '带烤榛果碎的黄油曲奇'],
    color: '#c98a4b',
    teamText: '快乐优先，生活就要有一点甜。',
    resultText: '你的选择更偏向焦糖与烘焙甜点的香气联想。「黄油奇遇」以焦糖和带烤榛果碎的黄油曲奇为主要风味描述，或许会成为你的下一次尝试。'
  }
};

const QUESTIONS = [
  {
    id: 'Q1', weight: 2,
    title: '如果现在打开一包咖啡豆，你最期待闻到哪种香气？',
    options: [
      { code: 'A', text: '花香里带着桃子、莓果的清新气息。' },
      { code: 'B', text: '烤坚果、奶油和可可交织的温暖香气。' },
      { code: 'C', text: '黑巧克力与烤坚果的浓香，带一点香料气息。' },
      { code: 'D', text: '烤榛子与红糖的甜香，伴着可可和香料。' },
      { code: 'E', text: '焦糖与黄油曲奇的烘烤香，带一点榛果气息。' }
    ]
  },
  {
    id: 'Q2', weight: 1,
    title: '假设五家咖啡馆的距离和价格都差不多，你今天更想走进哪一家？',
    options: [
      { code: 'A', text: '有鲜花和明亮窗景，菜单上总有新鲜风味。' },
      { code: 'B', text: '座位舒服、氛围温暖，适合和朋友慢慢聊天。' },
      { code: 'C', text: '环境安静、风格简洁，适合专注做自己的事。' },
      { code: 'D', text: '放着爵士乐，有旧唱片和木质家具，适合慢慢待着。' },
      { code: 'E', text: '飘着烘焙香，甜点柜很诱人，适合享受一段休息时间。' }
    ]
  },
  {
    id: 'Q3', weight: 1,
    title: '如果要用一句话描述你今天想要的咖啡体验，你会选哪句？',
    options: [
      { code: 'A', text: '“来一点清新和惊喜，给今天换个心情。”' },
      { code: 'B', text: '“舒服、协调，适合陪我度过日常。”' },
      { code: 'C', text: '“浓郁、有分量，让我好好享受这一杯。”' },
      { code: 'D', text: '“香气有层次，值得放慢节奏细细感受。”' },
      { code: 'E', text: '“有甜点般的香气联想，让休息时间更愉快。”' }
    ]
  },
  {
    id: 'Q4', weight: 2,
    title: '下面五种风味组合，你最想先尝试哪一种？',
    options: [
      { code: 'A', text: '花香 × 桃子 × 蓝莓。' },
      { code: 'B', text: '烤坚果 × 奶油 × 可可 × 焦糖。' },
      { code: 'C', text: '黑巧克力 × 烤坚果 × 香料。' },
      { code: 'D', text: '红糖 × 烤榛子 × 可可 × 香料。' },
      { code: 'E', text: '焦糖 × 黄油曲奇 × 烤榛果。' }
    ]
  },
  {
    id: 'Q5', weight: 2,
    title: '如果一杯咖啡只能留下一个最突出的风味记忆，你希望它是？',
    options: [
      { code: 'A', text: '清新的花果香。' },
      { code: 'B', text: '协调的坚果与奶油香。' },
      { code: 'C', text: '浓郁的黑巧克力感。' },
      { code: 'D', text: '红糖与榛子交织的甜香。' },
      { code: 'E', text: '焦糖黄油曲奇般的甜点香。' }
    ]
  }
];

const WEIGHTS = QUESTIONS.map(q => q.weight); // [2,1,1,2,2]

// ===== 状态 =====
const STORAGE_KEY = 'coffee_bean_test_v1';

function defaultState() {
  return {
    groupId: null,
    initialChoice: null,
    answers: Array(QUESTIONS.length).fill(null), // 按 Q1—Q5 顺序存后台编码
    shuffled: {},                                 // shuffled[Qid] = 显示顺序的编码数组
    quizIndex: 0
  };
}

let state = defaultState();

// ===== 工具 =====
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function save() {
  try { sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {}
}

function load() {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (raw) state = Object.assign(defaultState(), JSON.parse(raw));
  } catch (e) {}
}

function reset() {
  state = defaultState();
  try { sessionStorage.removeItem(STORAGE_KEY); } catch (e) {}
}

function showStep(id) {
  document.querySelectorAll('.step').forEach(el => el.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
  window.scrollTo(0, 0);
}

// ===== 计分 =====
function calculateResult() {
  const scores = Object.fromEntries(ORDER.map(c => [c, 0]));
  state.answers.forEach((code, i) => { scores[code] += WEIGHTS[i]; });

  const maxScore = Math.max(...ORDER.map(c => scores[c]));
  const candidates = ORDER.filter(c => scores[c] === maxScore);

  const priority = [4, 3, 0, 2, 1]; // Q5、Q4、Q1、Q3、Q2（0 基索引）
  let result;
  if (candidates.length === 1) {
    result = candidates[0];
  } else {
    result = state.answers[priority.find(idx => candidates.includes(state.answers[idx]))];
  }
  return { scores, result };
}

// ===== 渲染：选项列表（单选卡片）=====
function renderOptions(container, items, selectedCode, { colored = false, key = null } = {}) {
  container.innerHTML = '';
  items.forEach(item => {
    const label = document.createElement('label');
    label.className = 'option' + (colored ? ' colored' : '');
    if (colored) label.style.setProperty('--opt-color', BEANS[item.code].color);

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = key || 'option';
    input.value = item.code;
    if (item.code === selectedCode) {
      input.checked = true;
      label.classList.add('selected');
    }

    const mark = document.createElement('span');
    mark.className = 'mark';

    const text = document.createElement('span');
    text.className = 'label-text';
    text.textContent = item.text;

    label.appendChild(input);
    label.appendChild(mark);
    label.appendChild(text);

    label.addEventListener('click', () => {
      container.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
      label.classList.add('selected');
      input.checked = true;
    });

    container.appendChild(label);
  });
}

function selectedCodeIn(container) {
  const checked = container.querySelector('input[type="radio"]:checked');
  return checked ? checked.value : null;
}

// ===== 渲染：组号 =====
function renderGroup() {
  const items = [1, 2, 3, 4, 6].map(n => ({ code: String(n), text: '第 ' + n + ' 组' }));
  renderOptions(document.getElementById('group-options'), items, state.groupId, { key: 'group' });
  document.getElementById('btn-group-next').disabled = !state.groupId;
  showStep('step-group');
}

// ===== 渲染：初始站队（固定顺序，不打乱）=====
function renderTeam() {
  const items = ORDER.map(code => ({
    code,
    text: `${code} ${BEANS[code].persona}：${BEANS[code].teamText}`
  }));
  renderOptions(document.getElementById('team-options'), items, state.initialChoice, { colored: true, key: 'team' });
  document.getElementById('btn-team-next').disabled = !state.initialChoice;
  showStep('step-team');
}

// ===== 渲染：测试题 =====
function ensureShuffled() {
  QUESTIONS.forEach(q => {
    if (!state.shuffled[q.id]) {
      state.shuffled[q.id] = shuffle(q.options.map(o => o.code));
    }
  });
}

function renderQuiz() {
  ensureShuffled();
  const idx = state.quizIndex;
  const q = QUESTIONS[idx];
  const displayOrder = state.shuffled[q.id];
  const optionsMap = Object.fromEntries(q.options.map(o => [o.code, o.text]));

  document.getElementById('quiz-progress').textContent = `第 ${idx + 1} / ${QUESTIONS.length} 题`;
  document.getElementById('progress-fill').style.width = `${((idx + 1) / QUESTIONS.length) * 100}%`;
  document.getElementById('quiz-title').textContent = q.title;

  const items = displayOrder.map(code => ({ code, text: optionsMap[code] }));
  renderOptions(document.getElementById('quiz-options'), items, state.answers[idx], { colored: true, key: q.id });

  const isLast = idx === QUESTIONS.length - 1;
  document.getElementById('btn-quiz-back').style.visibility = idx === 0 ? 'hidden' : 'visible';
  document.getElementById('btn-quiz-next').classList.toggle('hidden', isLast);
  document.getElementById('btn-quiz-submit').classList.toggle('hidden', !isLast);

  const answered = !!state.answers[idx];
  document.getElementById('btn-quiz-next').disabled = !answered;
  document.getElementById('btn-quiz-submit').disabled = !answered;

  showStep('step-quiz');
}

// ===== 渲染：结果页 =====
function renderResult() {
  const { scores, result } = calculateResult();
  const bean = BEANS[result];
  const success = state.initialChoice === result;

  // 徽章
  const badge = document.getElementById('result-badge');
  badge.textContent = success ? '豆格预测成功' : '这次没有猜中';
  badge.className = 'result-badge ' + (success ? 'success' : 'fail');

  // 豆卡占位（放入 assets/bean-A.png ~ bean-E.png 后自动替换）
  const imgWrap = document.getElementById('bean-card-img');
  imgWrap.style.background = bean.color;
  const img = document.getElementById('bean-card-image');
  img.src = `assets/bean-${bean.code}.png`;
  img.alt = `${bean.name} 豆卡`;
  img.style.display = '';

  document.getElementById('bean-name').textContent = bean.name;
  const persona = document.getElementById('bean-persona');
  persona.textContent = bean.persona;
  persona.style.background = bean.color;

  const flavors = document.getElementById('bean-flavors');
  flavors.innerHTML = '';
  bean.flavors.forEach(f => {
    const chip = document.createElement('span');
    chip.className = 'flavor-chip';
    chip.textContent = f;
    flavors.appendChild(chip);
  });

  document.getElementById('bean-meta').textContent = `${bean.roast} · ${bean.origin}`;
  document.getElementById('result-text').textContent = bean.resultText;

  // 预测对照（不显示组号）
  const init = BEANS[state.initialChoice];
  document.getElementById('result-predict').textContent =
    `你最初站队「${init.persona}」→ 最终匹配「${bean.persona}」`;

  showStep('step-result');
}

// ===== 事件绑定 =====
function bindEvents() {
  document.getElementById('btn-start').addEventListener('click', () => renderGroup());

  document.getElementById('btn-group-back').addEventListener('click', () => showStep('step-start'));
  document.getElementById('btn-group-next').addEventListener('click', () => {
    const g = selectedCodeIn(document.getElementById('group-options'));
    if (!g) return;
    state.groupId = g;
    save();
    renderTeam();
  });
  document.getElementById('group-options').addEventListener('click', () => {
    const g = selectedCodeIn(document.getElementById('group-options'));
    document.getElementById('btn-group-next').disabled = !g;
  });

  document.getElementById('btn-team-back').addEventListener('click', () => renderGroup());
  document.getElementById('btn-team-next').addEventListener('click', () => {
    const c = selectedCodeIn(document.getElementById('team-options'));
    if (!c) return;
    state.initialChoice = c;
    state.quizIndex = 0;
    save();
    renderQuiz();
  });
  document.getElementById('team-options').addEventListener('click', () => {
    const c = selectedCodeIn(document.getElementById('team-options'));
    document.getElementById('btn-team-next').disabled = !c;
  });

  document.getElementById('btn-quiz-back').addEventListener('click', () => {
    if (state.quizIndex > 0) { state.quizIndex--; save(); renderQuiz(); }
  });
  document.getElementById('btn-quiz-next').addEventListener('click', () => {
    if (state.quizIndex < QUESTIONS.length - 1) { state.quizIndex++; save(); renderQuiz(); }
  });
  document.getElementById('btn-quiz-submit').addEventListener('click', () => {
    if (state.answers.every(a => a)) { save(); renderResult(); }
  });
  document.getElementById('quiz-options').addEventListener('click', () => {
    const idx = state.quizIndex;
    const c = selectedCodeIn(document.getElementById('quiz-options'));
    if (c) {
      state.answers[idx] = c;
      save();
      const isLast = idx === QUESTIONS.length - 1;
      document.getElementById('btn-quiz-next').disabled = false;
      document.getElementById('btn-quiz-submit').disabled = false;
    }
  });

  document.getElementById('btn-restart').addEventListener('click', () => {
    reset();
    renderGroup();
  });
}

// ===== 启动 =====
load();
bindEvents();

// 恢复进度：若已有测试中的状态，直接回到对应步骤
if (state.groupId && state.initialChoice && state.answers.every(a => a)) {
  renderResult();
} else if (state.groupId && state.initialChoice) {
  renderQuiz();
} else if (state.groupId) {
  renderTeam();
} else {
  showStep('step-start');
}
