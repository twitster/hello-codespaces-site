const btn = document.getElementById('ping');
const out = document.getElementById('pong');
if (btn && out) {
  btn.addEventListener('click', () => {
    const t = new Date().toLocaleTimeString();
    out.textContent = `Bouton cliqué à ${t}. Codespaces & Pages prêts ✅`;
  });
}
