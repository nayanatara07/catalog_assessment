# Polynomial Constant Solver using Lagrange Interpolation

## Overview
This repository contains a Node.js program that determines the constant term \( c \) of a polynomial using Lagrange Interpolation. The program accepts a JSON input file describing data points (roots) in various numerical bases and processes these to find the constant term of the polynomial that passes through them.

## Features
- **JSON-Based Input**: Read data points and their bases from a JSON file.
- **Base Conversion**: Handle data points defined in different bases and convert them to a standard numerical format.
- **Lagrange Interpolation**: Implement the Lagrange Interpolation method to compute the constant term of the polynomial.
- **Detailed Debug Output**: Log intermediate steps for easy debugging and understanding of the computation.

## Usage

### Prerequisites
- Node.js (version 12 or higher)

### Installation
 Clone the repository:
    ```bash
    git clone https://github.com/nayanatara07/catalog_assessment.git
    cd polynomial-constant-solver
    ```

### Input File Structure
Ensure that your input JSON file (`testcase.json`) follows this structure:
```json
{
    "keys": {
        "n": 4,  // Total number of points
        "k": 3   // Minimum number of points needed to define the polynomial
    },
    "1": {
        "base": "10",
        "value": "4"
    },
    "2": {
        "base": "2",
        "value": "111"
    },
    "3": {
        "base": "10",
        "value": "12"
    },
    "6": {
        "base": "4",
        "value": "213"
    }
}
```

### Running the Program
Execute the program using Node.js:
```bash
node findConstantTerm.js
```
### Output
- The program outputs the parsed roots and intermediate calculations.
- Finally, it prints the computed constant term \( c \).

Example output:
```
Parsed Roots: [ { x: 1, y: 4 }, { x: 2, y: 7 }, { x: 3, y: 12 }, { x: 6, y: 39 } ]
Calculating for root (1, 4):
L_0(0) = -0.25
Contribution to constant term: -1
...
The constant term (c) is: 15
```

## Explanation of the Code
1. **`parseRoots` Function**: Reads and parses the input JSON, handling base conversions.
2. **`lagrangeInterpolation` Function**: Computes the constant term \( c \) using Lagrange Interpolation.
3. **`main` Function**: Orchestrates the reading of the input, parsing of roots, and computation of the result.

## Contributing
Contributions are welcome! If you have suggestions or improvements, feel free to submit a pull request.

---

