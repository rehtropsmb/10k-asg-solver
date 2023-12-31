// WORLDS
const worldStart = 1;
const worldCount = 1;

// REQUIRED BANANAS
const bananas = 50;

// STRATS
const strats = [
    {
        name: "asg",
        stage: "1-1",
        time: 7.84,
        bananas: 0,
    },
    {
        name: "bunch-1",
        stage: "1-1",
        time: 19.68,
        bananas: 20,
    },
    {
        name: "bunch-2",
        stage: "1-1",
        time: 25,
        bananas: 28,
    },
    {
        name: "asg",
        stage: "1-2",
        time: 5,
        bananas: 2,
    },
    {
        name: "bunch-1",
        stage: "1-2",
        time: 8,
        bananas: 10,
    },
    {
        name: "bunch-2",
        stage: "1-2",
        time: 15,
        bananas: 22,
    },
    {
        name: "asg",
        stage: "1-3",
        time: 7,
        bananas: 5,
    },
    {
        name: "faster",
        stage: "1-3",
        time: 15,
        bananas: 12,
    },
    {
        name: "best",
        stage: "1-3",
        time: 24,
        bananas: 30,
    },
    {
        name: "asg",
        stage: "1-4",
        time: 8,
        bananas: 0,
    },
    {
        name: "asg",
        stage: "1-5",
        time: 8,
        bananas: 0,
    },
    {
        name: "asg",
        stage: "1-6",
        time: 8,
        bananas: 0,
    },
    {
        name: "asg",
        stage: "1-7",
        time: 8,
        bananas: 0,
    },
    {
        name: "asg",
        stage: "1-8",
        time: 8,
        bananas: 0,
    },
    {
        name: "asg",
        stage: "1-9",
        time: 8,
        bananas: 0,
    },
    {
        name: "asg",
        stage: "1-10",
        time: 8,
        bananas: 0,
    },
];

// END OF INPUTS
// START OF CALCULATION CODE...
const solver = require('javascript-lp-solver');
const constraints = {};
for (let k = (worldStart-1)*10; k < (worldStart-1)*10 + (worldCount*10); k++) {
    constraints[`${Math.floor((k/10)+1)}-${(k%10)+1}`] = { equal: 1};
}
constraints.bananas = { min: bananas };

const variables = {};
const ints = {};

for (const strat of strats) {
    variables[`${strat.stage}_${strat.name}`] = {
        time: strat.time,
        bananas: strat.bananas,
    };
    variables[`${strat.stage}_${strat.name}`][`${strat.stage}`] = 1;
    ints[`${strat.stage}_${strat.name}`] = 1;
}

const model = {
    optimize: 'time',
    opType: 'min',
    constraints: constraints,
    variables: variables,
    ints: ints,
};
const results = solver.Solve(model);
console.log(results);
