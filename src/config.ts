// WORLDS
const worldStart = 1;
const worldCount = 1;

// REQUIRED BANANAS
const bananas = 35;

// FULL STRAT LIST
const asgStrats = [
    {
        name: "asg",
        stage: "1-1",
        time: 92,
        bananas: 0,
    },
    {
        name: "asg",
        stage: "1-2",
        time: 90,
        bananas: 24,
    },
    {
        name: "asg",
        stage: "1-3",
        time: 90,
        bananas: 0,
    },
    {
        name: "asg",
        stage: "1-4",
        time: 182,
        bananas: 0,
    },
    {
        name: "asg",
        stage: "1-5",
        time: 82,
        bananas: 0,
    },
    {
        name: "asg",
        stage: "1-6",
        time: 287,
        bananas: 0,
    },
    {
        name: "asg",
        stage: "1-7",
        time: 274,
        bananas: 0,
    },
    {
        name: "asg",
        stage: "1-8",
        time: 288,
        bananas: 0,
    },
    {
        name: "asg",
        stage: "1-9",
        time: 172,
        bananas: 0,
    },
    {
        name: "asg",
        stage: "1-10",
        time: 287,
        bananas: 0,
    },
];

const bunchStrats = [
    {
        name: "one bunch",
        stage: "1-1",
        time: 90,
        bananas: 24,
    },
    {
        name: "singles",
        stage: "1-3",
        time: 80,
        bananas: 9,
    },
];

const strats = asgStrats.concat(bunchStrats);

export { strats, bananas, worldStart, worldCount };