function downloadAsJSON() {
  const notes = JSON.parse(localStorage.getItem('notes')) || [];
  const blob = new Blob([JSON.stringify(notes, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "notes.json";
  a.click();
  URL.revokeObjectURL(url);
}

function downloadAsTXT() {
  const notes = JSON.parse(localStorage.getItem('notes')) || [];
  const text = notes.join("\n\n------------------\n\n");
  const blob = new Blob([text], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "notes.txt";
  a.click();
  URL.revokeObjectURL(url);
}
