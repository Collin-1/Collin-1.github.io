// Sidebar component - shared across all pages
function initSidebar() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  const sidebarHTML = `
    <aside class="sidebar">
      <div class="sidebar-header">
        <img src="profile-pic.png" alt="Collin Makwala" class="profile-image" />
        <div class="sidebar-info">
          <div class="sidebar-brand">Collin Makwala</div>
          <div class="sidebar-subtitle">Full-Stack Developer</div>
        </div>
      </div>

      <nav class="sidebar-nav">
        <a href="index.html" ${
          currentPage === "index.html" ? 'class="active"' : ""
        }><i class="fa-solid fa-house"></i>Home</a>
        <a href="experience.html" ${
          currentPage === "experience.html" ? 'class="active"' : ""
        }><i class="fa-solid fa-chart-line"></i>Experience</a>
        <a href="projects.html" ${
          currentPage === "projects.html" ? 'class="active"' : ""
        }><i class="fa-solid fa-code"></i>Projects</a>
        <a href="stack.html" ${
          currentPage === "stack.html" ? 'class="active"' : ""
        }><i class="fa-solid fa-layer-group"></i>Stack</a>
        <a href="about.html" ${
          currentPage === "about.html" ? 'class="active"' : ""
        }><i class="fa-solid fa-user"></i>About</a>
        <a href="contact.html" ${
          currentPage === "contact.html" ? 'class="active"' : ""
        }><i class="fa-solid fa-envelope"></i>Contact</a>
      </nav>

      <div class="sidebar-footer">
        <h4>Connect</h4>
        <div class="social-links">
          <a href="https://www.linkedin.com/in/collin-makwala-378b80195/" target="_blank"><i class="fa-brands fa-linkedin"></i>LinkedIn</a>
          <a href="https://github.com/Collin-1" target="_blank"><i class="fa-brands fa-github"></i>GitHub</a>
          <a href="https://instagram.com/follow_collin" target="_blank"><i class="fa-brands fa-instagram"></i>Instagram</a>
        </div>
      </div>
    </aside>
  `;

  document.body.insertAdjacentHTML("afterbegin", sidebarHTML);
}

// Initialize sidebar when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initSidebar);
} else {
  initSidebar();
}
