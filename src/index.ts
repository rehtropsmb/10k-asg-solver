import { strats, bananas, worldStart, worldCount } from './config';
import timers from './timers';

// CALCULATION CODE
const solver = require('javascript-lp-solver');
const constraints: any = {};
const variables: any = {};
const ints: any = {};

for (
    let k = (worldStart - 1) * 10;
    k < (worldStart - 1) * 10 + worldCount * 10;
    k++
) {
    constraints[`${Math.floor(k / 10 + 1)}-${(k % 10) + 1}`] = { equal: 1 };
}
constraints.bananas = { min: bananas };

for (const strat of strats) {
    const ids = strat.stage.split('-').map((val: string) => parseInt(val));
    variables[`${strat.stage}-${strat.name}`] = {
        time: timers[(ids[0] - 1) * 10 + (ids[1] - 1)] - strat.time,
        bananas: strat.bananas,
    };
    variables[`${strat.stage}-${strat.name}`][`${strat.stage}`] = 1;
    ints[`${strat.stage}-${strat.name}`] = 1;
}

const model = {
    optimize: 'time',
    opType: 'min',
    constraints: constraints,
    variables: variables,
    ints: ints,
};
const results = solver.Solve(model);

if (!results.feasible) {
    console.log('The required banana count cannot be reached!');
} else {
    const list: string[] = [];
    for (const key in results) {
        if (key.includes('-')) {
            list.push(key);
        }
    }
    list.sort((a: string, b: string): number => {
        const id_a = a.split('-').map((val) => parseInt(val));
        const id_b = b.split('-').map((val) => parseInt(val));
        if (id_a[0] > id_b[0]) {
            return id_a[0] - id_b[0];
        } else {
            return id_a[1] - id_b[1];
        }
    });
    console.log(list);
}
