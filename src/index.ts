import timers from './timers';
import * as fs from 'fs';
// import { strats } from './config';

// CONFIG VARAIABLES
const bananas = 5_000;

// IMPORT CSV
const stratFile = 'data/10k asg - strat data.csv';
const csvToJson = require('convert-csv-to-json');
const strats = csvToJson.fieldDelimiter(',').getJsonFromCsv(stratFile);

for (const strat of strats) {
    strat.igt = parseFloat(strat.igt);
    strat.bananas = parseInt(strat.bananas);
}

// CALCULATION CODE
const solver = require('javascript-lp-solver');
const constraints: any = {};
const variables: any = {};
const ints: any = {};

// create the following constraint for every stage:
// constraints["1-1"] = { equal: 1};
// this will force exactly one strat to be picked for each stage
for (
    let k = 0; k < 100; k++) {
    constraints[`${Math.floor(k / 10 + 1)}-${(k % 10) + 1}`] = { equal: 1 };
}

// this sets the minimum required banana count
constraints.bananas = { min: bananas };

// create variables for each strat
// variables["1-1_example-strat"] = { time: 85, bananas: 40, "1-1": 1 };
// ints["1-1_example-strat"] = 1;
// these create the options that will be picked from
for (const strat of strats) {
    const ids = strat.stage.split('-').map((val: string) => parseInt(val));
    variables[`${strat.stage}_${strat.name}`] = {
        time: timers[(ids[0] - 1) * 10 + (ids[1] - 1)] - strat.igt,
        bananas: strat.bananas,
    };
    variables[`${strat.stage}_${strat.name}`][`${strat.stage}`] = 1;
    ints[`${strat.stage}_${strat.name}`] = 1;
}

//  SOLVE MODEL
const model = {
    optimize: 'time',
    opType: 'min',
    constraints: constraints,
    variables: variables,
    ints: ints,
};
const results = solver.Solve(model);

// FORMAT RESULTS
if (!results.feasible) {
    console.log('The required banana count cannot be reached!');
} else {
    let list: string[] = [];
    for (const key in results) {
        if (key.includes('-')) {
            list.push(key);
        }
    }
    list.sort((a: string, b: string): number => {
        const id_a = a.split('_')[0].split('-').map(value => parseInt(value));
        const id_b = b.split('_')[0].split('-').map(value => parseInt(value));
        const int_a = id_a[0] * 10 + id_a[1];
        const int_b = id_b[0] * 10 + id_b[1];
        return int_a - int_b;
    });
    let output = '';
    for (let text of list) {
        output += `${text}\n`;
    }
    fs.writeFileSync('data/output.txt', output, {});
    console.log('Result output to data/output.txt');
}
