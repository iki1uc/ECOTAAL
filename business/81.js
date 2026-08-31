// ─── IMPERIUM PUMPE · GOLDENER 6-SCHNITT ─────────────────────────

// Axiom 1: Achsen-Dynamik
function axiom1() {
  return Math.min(756, 200 + STATE.achsen * 0.1);
}

// Axiom 2: Sichtbarkeit (volle Achsen)
function axiom2() {
  return STATE.achsen; // Performance schwer, aber echt
}

// Axiom 3: Achsen-Limit klassisch
function axiom3() {
  return Math.min(756, 200 + STATE.achsen * 0.1);
}

// Axiom 4: Achsen-Limit erweitert
function axiom4() {
  return Math.min(1500, STATE.achsen);
}

// GOLDENER 6-SCHNITT · Raumkrümmung
function goldenSix() {
  const a1 = axiom1();
  const a2 = axiom2();
  const a3 = axiom3();
  const a4 = axiom4();

  // 6‑Schnitt: Mittelwert + Krümmung
  const six = Math.floor((a1 + a2 + a3 + a4) / 4);

  // Raumkrümmung
  const curve = Math.sqrt(six * 6.66);

  return { six, curve };
}

// PUMPE: verbindet ALLES
export function PUMPE(state) {

  const { six, curve } = goldenSix();

  const frame = {
    axes: state.achsen,
    sixD: state.sixD,
    ds9: state.ds9,
    org: state.org,
    reorg: state.reorg,
    sorted: state.ordnerSorted,
    shuffled: state.ordnerShuffled,
    sixCut: six,
    curvature: curve,
    timestamp: Date.now()
  };

  return frame;
}

