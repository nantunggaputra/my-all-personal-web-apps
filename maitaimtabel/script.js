// ========================================
// Data State Management
// ========================================
const STORAGE_KEY = 'maitaimtabel_data';

let state = {
    schedules: [],
    categories: [
        { name: 'Kuliah', color: '#A5D8FF' },
        { name: 'Kerja', color: '#FFD6E8' },
        { name: 'Pribadi', color: '#B9F6CA' },
        { name: 'Meeting', color: '#FFF9C4' }
    ],
    currentDay: 'today', // yesterday, today, tomorrow
    currentFilter: 'all',
    editingId: null
};

// ========================================
// Utility Functions
// ========================================
function generateId() {
    return 'sch_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

function formatDate(date) {
    return date.toISOString().split('T')[0];
}

function getDateByDay(day) {
    const today = new Date();
    if (day === 'yesterday') {
        today.setDate(today.getDate() - 1);
    } else if (day === 'tomorrow') {
        today.setDate(today.getDate() + 1);
    }
    return formatDate(today);
}

function formatDateDisplay(dateString) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString + 'T00:00:00');
    return date.toLocaleDateString('id-ID', options);
}

function getDayLabel(day) {
    const labels = {
        'yesterday': 'Kemarin',
        'today': 'Hari Ini',
        'tomorrow': 'Besok'
    };
    return labels[day] || 'Hari Ini';
}

// ========================================
// LocalStorage Functions
// ========================================
function loadData() {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        if (data) {
            const parsed = JSON.parse(data);
            state.schedules = parsed.schedules || [];
            state.categories = parsed.categories || state.categories;
        }
    } catch (error) {
        console.error('Error loading data:', error);
    }
}

function saveData() {
    try {
        const data = {
            schedules: state.schedules,
            categories: state.categories
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
        console.error('Error saving data:', error);
        alert('Gagal menyimpan data. Storage mungkin penuh.');
    }
}

// ========================================
// Filter & Sort Functions
// ========================================
function getFilteredSchedules() {
    const targetDate = getDateByDay(state.currentDay);
    
    let filtered = state.schedules.filter(schedule => {
        // Filter by date
        if (schedule.date !== targetDate) return false;
        
        // Filter by category
        if (state.currentFilter !== 'all' && schedule.category !== state.currentFilter) {
            return false;
        }
        
        return true;
    });
    
    // Sort by time
    filtered.sort((a, b) => {
        return a.time.localeCompare(b.time);
    });
    
    return filtered;
}

// ========================================
// Render Functions
// ========================================
function renderCurrentDate() {
    const date = getDateByDay(state.currentDay);
    const dayLabel = getDayLabel(state.currentDay);
    const dateDisplay = formatDateDisplay(date);
    
    document.getElementById('currentDate').innerHTML = `
        <strong>${dayLabel}</strong><br>
        ${dateDisplay}
    `;
}

function renderScheduleList() {
    const scheduleList = document.getElementById('scheduleList');
    const schedules = getFilteredSchedules();
    
    if (schedules.length === 0) {
        scheduleList.innerHTML = `
            <div class="empty-state fade-in">
                <div class="empty-state-icon">📅</div>
                <h3>Belum ada jadwal</h3>
                <p>Klik "Tambah Jadwal" untuk membuat jadwal baru</p>
            </div>
        `;
        return;
    }
    
    scheduleList.innerHTML = schedules.map(schedule => {
        const category = state.categories.find(c => c.name === schedule.category);
        const categoryColor = category ? category.color : '#E0E0E0';
        
        return `
            <div class="schedule-item fade-in" style="border-left-color: ${categoryColor}">
                <div class="schedule-header">
                    <div class="schedule-time">${schedule.time}</div>
                    <div class="schedule-actions">
                        <button class="icon-btn" onclick="editSchedule('${schedule.id}')" title="Edit">
                            ✏️
                        </button>
                        <button class="icon-btn" onclick="deleteSchedule('${schedule.id}')" title="Hapus">
                            🗑️
                        </button>
                    </div>
                </div>
                <div class="schedule-activity">${schedule.activity}</div>
                ${schedule.location ? `
                    <div class="schedule-location">
                        📍 ${schedule.location}
                    </div>
                ` : ''}
                ${schedule.items ? `
                    <div class="schedule-items">
                        🎒 ${schedule.items}
                    </div>
                ` : ''}
                ${schedule.category ? `
                    <span class="schedule-category" style="background-color: ${categoryColor}">
                        ${schedule.category}
                    </span>
                ` : ''}
            </div>
        `;
    }).join('');
}

function renderCategoryFilter() {
    const categoryFilter = document.getElementById('categoryFilter');
    
    const allButton = `
        <button class="category-badge ${state.currentFilter === 'all' ? 'active' : ''}" 
                data-category="all" 
                onclick="filterByCategory('all')">
            Semua
        </button>
    `;
    
    const categoryButtons = state.categories.map(category => `
        <button class="category-badge ${state.currentFilter === category.name ? 'active' : ''}" 
                data-category="${category.name}" 
                style="background-color: ${state.currentFilter === category.name ? category.color : '#fff'}"
                onclick="filterByCategory('${category.name}')">
            ${category.name}
        </button>
    `).join('');
    
    categoryFilter.innerHTML = allButton + categoryButtons;
}

function renderCategorySelect() {
    const categorySelect = document.getElementById('scheduleCategory');
    
    categorySelect.innerHTML = state.categories.map(category => `
        <option value="${category.name}">${category.name}</option>
    `).join('');
}

function renderCategoryList() {
    const categoryList = document.getElementById('categoryList');
    
    if (state.categories.length === 0) {
        categoryList.innerHTML = '<p class="text-center">Belum ada kategori</p>';
        return;
    }
    
    categoryList.innerHTML = state.categories.map(category => `
        <div class="category-item">
            <div class="category-info">
                <div class="category-color-preview" style="background-color: ${category.color}"></div>
                <span>${category.name}</span>
            </div>
            <button class="delete-category-btn" onclick="deleteCategory('${category.name}')">
                Hapus
            </button>
        </div>
    `).join('');
}

function render() {
    renderCurrentDate();
    renderScheduleList();
    renderCategoryFilter();
    renderCategorySelect();
}

// ========================================
// Time Navigation
// ========================================
function changeDay(day) {
    state.currentDay = day;
    
    // Update active button
    document.querySelectorAll('.time-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.day === day) {
            btn.classList.add('active');
        }
    });
    
    render();
}

function filterByCategory(category) {
    state.currentFilter = category;
    render();
}

// ========================================
// Modal Functions
// ========================================
function openScheduleModal() {
    const modal = document.getElementById('scheduleModal');
    const form = document.getElementById('scheduleForm');
    const modalTitle = document.getElementById('modalTitle');
    
    form.reset();
    state.editingId = null;
    modalTitle.textContent = 'Tambah Jadwal';
    
    // Set default date based on current day
    const defaultDate = getDateByDay(state.currentDay);
    document.getElementById('scheduleDate').value = defaultDate;
    
    modal.classList.add('active');
}

function closeScheduleModal() {
    const modal = document.getElementById('scheduleModal');
    modal.classList.remove('active');
    state.editingId = null;
}

function openCategoryModal() {
    const modal = document.getElementById('categoryModal');
    renderCategoryList();
    modal.classList.add('active');
}

function closeCategoryModal() {
    const modal = document.getElementById('categoryModal');
    modal.classList.remove('active');
}

// ========================================
// Schedule CRUD
// ========================================
function saveSchedule(event) {
    event.preventDefault();
    
    const scheduleData = {
        date: document.getElementById('scheduleDate').value,
        time: document.getElementById('scheduleTime').value,
        activity: document.getElementById('scheduleActivity').value,
        location: document.getElementById('scheduleLocation').value,
        items: document.getElementById('scheduleItems').value,
        category: document.getElementById('scheduleCategory').value
    };
    
    if (state.editingId) {
        // Edit existing
        const index = state.schedules.findIndex(s => s.id === state.editingId);
        if (index !== -1) {
            state.schedules[index] = {
                ...state.schedules[index],
                ...scheduleData
            };
        }
    } else {
        // Add new
        const newSchedule = {
            id: generateId(),
            ...scheduleData
        };
        state.schedules.push(newSchedule);
    }
    
    saveData();
    render();
    closeScheduleModal();
}

function editSchedule(id) {
    const schedule = state.schedules.find(s => s.id === id);
    if (!schedule) return;
    
    state.editingId = id;
    
    // Fill form
    document.getElementById('scheduleDate').value = schedule.date;
    document.getElementById('scheduleTime').value = schedule.time;
    document.getElementById('scheduleActivity').value = schedule.activity;
    document.getElementById('scheduleLocation').value = schedule.location || '';
    document.getElementById('scheduleItems').value = schedule.items || '';
    document.getElementById('scheduleCategory').value = schedule.category || '';
    
    // Open modal
    const modal = document.getElementById('scheduleModal');
    const modalTitle = document.getElementById('modalTitle');
    modalTitle.textContent = 'Edit Jadwal';
    modal.classList.add('active');
}

function deleteSchedule(id) {
    if (!confirm('Hapus jadwal ini?')) return;
    
    state.schedules = state.schedules.filter(s => s.id !== id);
    saveData();
    render();
}

// ========================================
// Category CRUD
// ========================================
function addCategory() {
    const nameInput = document.getElementById('newCategoryName');
    const colorInput = document.getElementById('newCategoryColor');
    
    const name = nameInput.value.trim();
    const color = colorInput.value;
    
    if (!name) {
        alert('Nama kategori tidak boleh kosong');
        return;
    }
    
    // Check duplicate
    if (state.categories.find(c => c.name === name)) {
        alert('Kategori sudah ada');
        return;
    }
    
    state.categories.push({ name, color });
    saveData();
    renderCategoryList();
    render();
    
    // Reset form
    nameInput.value = '';
    colorInput.value = '#A5D8FF';
}

function deleteCategory(name) {
    if (!confirm(`Hapus kategori "${name}"?\nJadwal dengan kategori ini tidak akan terhapus.`)) {
        return;
    }
    
    state.categories = state.categories.filter(c => c.name !== name);
    saveData();
    renderCategoryList();
    render();
}

// ========================================
// Copy to Clipboard
// ========================================
function copyScheduleToClipboard() {
    const schedules = getFilteredSchedules();
    
    if (schedules.length === 0) {
        alert('Tidak ada jadwal untuk di-copy');
        return;
    }
    
    const date = getDateByDay(state.currentDay);
    const dayLabel = getDayLabel(state.currentDay);
    
    let text = `📅 Jadwal ${dayLabel}\n`;
    text += `${formatDateDisplay(date)}\n\n`;
    
    schedules.forEach(schedule => {
        text += `⏰ ${schedule.time} - ${schedule.activity}\n`;
        if (schedule.location) {
            text += `   📍 ${schedule.location}\n`;
        }
        if (schedule.items) {
            text += `   🎒 ${schedule.items}\n`;
        }
        text += '\n';
    });
    
    // Copy to clipboard
    navigator.clipboard.writeText(text).then(() => {
        alert('✅ Jadwal berhasil di-copy ke clipboard!');
    }).catch(err => {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('✅ Jadwal berhasil di-copy ke clipboard!');
    });
}

// ========================================
// Export & Import
// ========================================
function exportData() {
    const data = {
        schedules: state.schedules,
        categories: state.categories,
        exportDate: new Date().toISOString(),
        version: '1.0'
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `maitaimtabel_backup_${formatDate(new Date())}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    alert('✅ Data berhasil di-export!');
}

function importData() {
    const fileInput = document.getElementById('importInput');
    fileInput.click();
}

function handleImportFile(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            
            if (!data.schedules || !data.categories) {
                throw new Error('Format file tidak valid');
            }
            
            if (confirm('Import data akan mengganti semua data yang ada. Lanjutkan?')) {
                state.schedules = data.schedules;
                state.categories = data.categories;
                saveData();
                render();
                alert('✅ Data berhasil di-import!');
            }
        } catch (error) {
            alert('❌ Gagal import data. File tidak valid.');
            console.error(error);
        }
    };
    reader.readAsText(file);
    
    // Reset input
    event.target.value = '';
}

// ========================================
// Event Listeners
// ========================================
function initEventListeners() {
    // Time navigation
    document.querySelectorAll('.time-btn').forEach(btn => {
        btn.addEventListener('click', () => changeDay(btn.dataset.day));
    });
    
    // Action buttons
    document.getElementById('addScheduleBtn').addEventListener('click', openScheduleModal);
    document.getElementById('copyBtn').addEventListener('click', copyScheduleToClipboard);
    document.getElementById('exportBtn').addEventListener('click', exportData);
    document.getElementById('importBtn').addEventListener('click', importData);
    document.getElementById('manageCategoryBtn').addEventListener('click', openCategoryModal);
    
    // Modal close buttons
    document.getElementById('closeModal').addEventListener('click', closeScheduleModal);
    document.getElementById('cancelBtn').addEventListener('click', closeScheduleModal);
    document.getElementById('closeCategoryModal').addEventListener('click', closeCategoryModal);
    
    // Close modal on backdrop click
    document.getElementById('scheduleModal').addEventListener('click', (e) => {
        if (e.target.id === 'scheduleModal') closeScheduleModal();
    });
    document.getElementById('categoryModal').addEventListener('click', (e) => {
        if (e.target.id === 'categoryModal') closeCategoryModal();
    });
    
    // Form submit
    document.getElementById('scheduleForm').addEventListener('submit', saveSchedule);
    
    // Category management
    document.getElementById('addCategoryBtn').addEventListener('click', addCategory);
    
    // Import file
    document.getElementById('importInput').addEventListener('change', handleImportFile);
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeScheduleModal();
            closeCategoryModal();
        }
    });
}

// ========================================
// Initialize App
// ========================================
function init() {
    loadData();
    initEventListeners();
    render();
}

// Start app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Make functions globally available for onclick handlers
window.editSchedule = editSchedule;
window.deleteSchedule = deleteSchedule;
window.filterByCategory = filterByCategory;
window.deleteCategory = deleteCategory;
