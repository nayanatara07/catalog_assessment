const fs = require('fs');

function parseRoots(jsonData) {
    const roots = [];
    const { n, k } = jsonData.keys;

    for (const [key, root] of Object.entries(jsonData)) {
        if (key === 'keys') continue;

        const x = parseInt(key);
        const base = parseInt(root.base);
        const y = parseInt(root.value, base);
        
        roots.push({ x, y });
    }

    if (roots.length < k) {
        throw new Error("Insufficient roots to determine the polynomial.");
    }

    return roots;
}

function lagrangeInterpolation(roots) {
    let constantTerm = 0;

    for (let i = 0; i < roots.length; i++) {
        const { x: xi, y: yi } = roots[i];
        let L_i_0 = 1; 

        for (let j = 0; j < roots.length; j++) {
            if (i !== j) {
                const xj = roots[j].x;
                L_i_0 *= (-xj) / (xi - xj); 
            }
        }

        constantTerm += yi * L_i_0;

        console.log(`Calculating for root (${xi}, ${yi}):`);
        console.log(`L_${i}(0) = ${L_i_0}`);
        console.log(`Contribution to constant term: ${yi * L_i_0}`);
    }

    return Math.round(constantTerm); 
}

function main() {
    const jsonData = JSON.parse(fs.readFileSync('testcase.json', 'utf8'));

    const roots = parseRoots(jsonData);
    console.log("Parsed Roots:", roots);

    const constantTerm = lagrangeInterpolation(roots);
    console.log("The constant term (c) is:", constantTerm);
}

main();
