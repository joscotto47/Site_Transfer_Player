// DOM Elements
const transfersGrid = document.getElementById('transfersGrid');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn'); // Status buttons
const totalSpentEl = document.getElementById('totalSpent');
const topTransferEl = document.getElementById('topTransfer');
const teamsTrack = document.getElementById('teamsTrack');

// Advanced Filters DOM
const teamFilterSelect = document.getElementById('teamFilter');
const positionFilterSelect = document.getElementById('positionFilter');
const startDateInput = document.getElementById('startDate');
const endDateInput = document.getElementById('endDate');

// State
let currentFilters = {
    searchTerm: '',
    status: 'all', // all, confirmed, rumor
    team: '',      // Specific team name
    position: '',  // Specific position
    startDate: '',
    endDate: ''
};

// Init
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    renderTeamsCarousel();
    populateFilterOptions();
    applyFilters(); // Initial render
    calculateStats();
    setupEventListeners();
}

/**
 * 1. Populate Dropdowns (Team & Position)
 */
function populateFilterOptions() {
    // Extract unique positions
    const positions = [...new Set(transfersData.map(t => t.position))].sort();

    // Extract unique teams (from both To and From)
    const teams = [...new Set([
        ...transfersData.map(t => t.fromTeam),
        ...transfersData.map(t => t.toTeam)
    ])].sort();

    // Fill Position Select
    positions.forEach(pos => {
        const option = document.createElement('option');
        option.value = pos;
        option.textContent = pos;
        positionFilterSelect.appendChild(option);
    });

    // Fill Team Select
    teams.forEach(team => {
        const option = document.createElement('option');
        option.value = team;
        option.textContent = team;
        teamFilterSelect.appendChild(option);
    });
}

/**
 * 2. Unified Filter Logic
 */
function applyFilters() {
    let filtered = transfersData;

    // 1. Search Term
    if (currentFilters.searchTerm) {
        const term = currentFilters.searchTerm.toLowerCase();
        filtered = filtered.filter(t =>
            t.player.toLowerCase().includes(term) ||
            t.fromTeam.toLowerCase().includes(term) ||
            t.toTeam.toLowerCase().includes(term)
        );
    }

    // 2. Status
    if (currentFilters.status !== 'all') {
        filtered = filtered.filter(t => t.status === currentFilters.status);
    }

    // 3. Team (Dropdown or Carousel)
    if (currentFilters.team) {
        filtered = filtered.filter(t =>
            t.fromTeam === currentFilters.team ||
            t.toTeam === currentFilters.team
        );
    }

    // 4. Position
    if (currentFilters.position) {
        filtered = filtered.filter(t => t.position === currentFilters.position);
    }

    // 5. Date Range
    if (currentFilters.startDate) {
        const start = new Date(currentFilters.startDate);
        filtered = filtered.filter(t => new Date(t.date) >= start);
    }
    if (currentFilters.endDate) {
        const end = new Date(currentFilters.endDate);
        filtered = filtered.filter(t => new Date(t.date) <= end);
    }

    renderTransfers(filtered);
}

/**
 * 3. Rendering
 */
function renderTeamsCarousel() {
    teamsTrack.innerHTML = teamsData.map(team => `
        <div class="team-badge-btn" data-team="${team.name}" title="${team.name}">
            <img src="${team.logo}" alt="${team.name}">
        </div>
    `).join('');
}

function renderTransfers(data) {
    if (data.length === 0) {
        transfersGrid.innerHTML = '<p style="text-align: center; width: 100%; color: #aaa; padding: 20px;">Nenhuma transferência encontrada com os filtros selecionados.</p>';
        return;
    }

    transfersGrid.innerHTML = data.map(t => {
        const isConfirmed = t.status === 'confirmed';
        const badgeClass = isConfirmed ? 'status-confirmed' : 'status-rumor';
        const statusText = isConfirmed ? 'Confirmado' : 'Rumor';

        // Format date for display (optional, but good for verification)
        const dateObj = new Date(t.date + 'T12:00:00'); // Fix TZ issue simplistic
        const dateStr = dateObj.toLocaleDateString('pt-BR');

        return `
            <div class="transfer-card">
                <div class="status-badge ${badgeClass}">${statusText}</div>
                <div class="card-header">
                    <img src="${t.photo}" alt="${t.player}" class="player-photo">
                </div>
                <div class="card-body">
                    <h3 class="player-name">${t.player}</h3>
                    <p class="player-position">${t.position}</p>
                    
                    <div class="transfer-teams">
                        <div class="team">
                            <img src="${t.fromLogo}" alt="${t.fromTeam}">
                            <span>${t.fromTeam}</span>
                        </div>
                        <div class="transfer-arrow">
                            <i class="fas fa-arrow-right"></i>
                        </div>
                        <div class="team">
                            <img src="${t.toLogo}" alt="${t.toTeam}">
                            <span>${t.toTeam}</span>
                        </div>
                    </div>

                    <div class="transfer-details">
                        <span>Tipo: ${t.type}</span>
                        <span class="transfer-value">${t.value}</span>
                    </div>
                     <div class="transfer-date-display" style="font-size: 0.8rem; color: #666; margin-top: 5px; text-align: center;">
                        ${dateStr}
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function calculateStats() {
    // Placeholder stats
    totalSpentEl.textContent = "R$ 385 Mi";
    topTransferEl.textContent = "Vitão (Flamengo)";
}

/**
 * 4. Event Listeners
 */
function setupEventListeners() {
    // A. Search
    searchInput.addEventListener('input', (e) => {
        currentFilters.searchTerm = e.target.value;
        applyFilters();
    });

    // B. Status Buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentFilters.status = e.target.dataset.filter;
            applyFilters();
        });
    });

    // C. Team Carousel Selection
    // Selecting a team here updates the dropdown too
    const teamBadges = document.querySelectorAll('.team-badge-btn');
    teamBadges.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const wrapper = e.currentTarget;
            const teamName = wrapper.dataset.team;

            // Toggle logic
            if (currentFilters.team === teamName) {
                // Deselect
                wrapper.classList.remove('active');
                currentFilters.team = '';
                teamFilterSelect.value = ''; // Sync dropdown
            } else {
                // Select new
                teamBadges.forEach(b => b.classList.remove('active'));
                wrapper.classList.add('active');
                currentFilters.team = teamName;
                teamFilterSelect.value = teamName; // Sync dropdown
            }
            applyFilters();
        });
    });

    // D. Dropdown: Team
    teamFilterSelect.addEventListener('change', (e) => {
        currentFilters.team = e.target.value;

        // Sync Carousel Visuals
        const teamBadges = document.querySelectorAll('.team-badge-btn');
        teamBadges.forEach(b => b.classList.remove('active'));

        if (currentFilters.team) {
            const activeBadge = document.querySelector(`.team-badge-btn[data-team="${currentFilters.team}"]`);
            if (activeBadge) activeBadge.classList.add('active');
        }

        applyFilters();
    });

    // E. Dropdown: Position
    positionFilterSelect.addEventListener('change', (e) => {
        currentFilters.position = e.target.value;
        applyFilters();
    });

    // F. Date Range
    startDateInput.addEventListener('change', (e) => {
        currentFilters.startDate = e.target.value;
        applyFilters();
    });

    endDateInput.addEventListener('change', (e) => {
        currentFilters.endDate = e.target.value;
        applyFilters();
    });
}
