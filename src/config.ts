// WORLDS
const worldStart = 1;
const worldCount = 1;

// REQUIRED BANANAS
const bananas = 550;

const s1_1 = [
    { stage: '1-1', time: 92, bananas: 0, name: 'asg (fast)' },
    { stage: '1-1', time: 90, bananas: 0, name: 'asg (safe)' },
    { stage: '1-1', time: 84, bananas: 52, name: 'sweep (safe)' },
    { stage: '1-1', time: 86.5, bananas: 50, name: 'sweep (scary)' },
];

const s1_2 = [
    { stage: '1-2', time: 91, bananas: 0, name: 'asg' },
    { stage: '1-2', time: 86, bananas: 40, name: 'sweep' },
];

const s1_3 = [
    { stage: '1-3', time: 90, bananas: 0, name: 'asg' },
    { stage: '1-3', time: 86, bananas: 40, name: 'score' },
];

const s1_4 = [
    { stage: '1-4', time: 192, bananas: 10, name: 'asg' },
    { stage: '1-4', time: 186, bananas: 30, name: '2 bunch' },
    { stage: '1-4', time: 170, bananas: 80, name: '7 bunch' },
    { stage: '1-4', time: 149, bananas: 140, name: '13 bunch' },
];

const s1_5 = [
    { stage: '1-5', time: 90, bananas: 0, name: 'asg' },
    { stage: '1-5', time: 80, bananas: 30, name: 'slow 3 bunch' },
];

const s1_6 = [
    { stage: '1-6', time: 287, bananas: 0, name: 'asg' },
    { stage: '1-6', time: 276, bananas: 30, name: '3 bunch' },
];

const s1_7 = [
    { stage: '1-7', time: 285, bananas: 0, name: 'asg' },
    { stage: '1-7', time: 150, bananas: 160, name: 'slow sweep' },
];

const s1_8 = [
    { stage: '1-8', time: 288, bananas: 0, name: 'asg' },
    { stage: '1-8', time: 260, bananas: 110, name: 'score' },
];

const s1_9 = [
    { stage: '1-9', time: 175, bananas: 0, name: 'asg' },
    { stage: '1-9', time: 170, bananas: 50, name: 'bunch' },
];

const s1_10 = [
    { stage: '1-10', time: 282, bananas: 0, name: 'asg' },
    { stage: '1-10', time: 160, bananas: 270, name: 'slow sweep' },
];

const w1 = [
    ...s1_1,
    ...s1_2,
    ...s1_3,
    ...s1_4,
    ...s1_5,
    ...s1_6,
    ...s1_7,
    ...s1_8,
    ...s1_9,
    ...s1_10,
];

const strats = [...w1];

export { strats, bananas, worldStart, worldCount };
