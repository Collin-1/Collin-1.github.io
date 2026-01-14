// Interactive grid hover effect
(function () {
  const canvas = document.createElement("canvas");
  canvas.id = "grid-hover-canvas";
  canvas.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
  `;
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  const gridSize = 50;
  let mouseX = -100;
  let mouseY = -100;
  let hoveredCells = new Map();

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function drawGrid() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw hovered cells with glow
    hoveredCells.forEach((opacity, key) => {
      const [x, y] = key.split(",").map(Number);

      // Draw glowing cell
      ctx.fillStyle = `rgba(160, 172, 255, ${opacity * 0.08})`;
      ctx.fillRect(x * gridSize, y * gridSize, gridSize, gridSize);

      // Draw brighter border
      ctx.strokeStyle = `rgba(160, 172, 255, ${opacity * 0.15})`;
      ctx.lineWidth = 1;
      ctx.strokeRect(x * gridSize, y * gridSize, gridSize, gridSize);

      // Fade out
      hoveredCells.set(key, opacity * 0.92);
      if (opacity < 0.05) {
        hoveredCells.delete(key);
      }
    });

    requestAnimationFrame(drawGrid);
  }

  function handleMouseMove(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;

    const gridX = Math.floor(mouseX / gridSize);
    const gridY = Math.floor(mouseY / gridSize);
    const key = `${gridX},${gridY}`;

    // Add or refresh the hovered cell
    hoveredCells.set(key, 1.0);

    // Also light up adjacent cells slightly
    const adjacent = [
      `${gridX - 1},${gridY}`,
      `${gridX + 1},${gridY}`,
      `${gridX},${gridY - 1}`,
      `${gridX},${gridY + 1}`,
    ];

    adjacent.forEach((adjKey) => {
      if (!hoveredCells.has(adjKey)) {
        hoveredCells.set(adjKey, 0.4);
      }
    });
  }

  window.addEventListener("resize", resizeCanvas);
  window.addEventListener("mousemove", handleMouseMove);

  resizeCanvas();
  drawGrid();
})();
