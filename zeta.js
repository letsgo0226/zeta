
function zeta(s) {
    // Approximate real part of Riemann Zeta using Euler-Maclaurin (not accurate for all s)
    const n = 1000;
    let sum = 0;
    for (let k = 1; k < n; k++) {
        sum += 1 / Math.pow(k, s);
    }
    return sum;
}

function calculate() {
    const t = parseFloat(document.getElementById("time").value);
    const realZeta = zeta(1 + t * 1e-6);  // using small imaginary approximation
    const E = t * realZeta;
    document.getElementById("output").innerText = `E(t) ≈ ${E.toFixed(6)}`;
}
