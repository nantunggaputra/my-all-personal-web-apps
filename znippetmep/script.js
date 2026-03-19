// ========================================
// STATE MANAGEMENT
// ========================================
const state = {
    snippets: [],
    ui: {
        mode: 'list', // 'list' | 'flow'
        search: '',
        filterCategory: '',
        filterFavorite: false,
        editingId: null
    },
    canvas: {
        offsetX: 0,
        offsetY: 0,
        scale: 1,
        isDragging: false,
        startX: 0,
        startY: 0
    }
};

// ========================================
// CONSTANTS
// ========================================
const STORAGE_KEY = 'znippetmep_snippets';
const CATEGORY_COLORS = {
    git: '#f97316',
    npm: '#ef4444',
    docker: '#3b82f6',
    linux: '#10b981',
    javascript: '#eab308',
    css: '#8b5cf6',
    other: '#6b7280'
};

// ========================================
// UTILITY FUNCTIONS
// ========================================
const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now - date;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (days === 0) return 'Hari ini';
    if (days === 1) return 'Kemarin';
    if (days < 7) return `${days} hari lalu`;
    if (days < 30) return `${Math.floor(days / 7)} minggu lalu`;
    
    return date.toLocaleDateString('id-ID', { 
        day: 'numeric', 
        month: 'short', 
        year: 'numeric' 
    });
};

const showToast = (message) => {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
};

const copyToClipboard = async (text) => {
    try {
        await navigator.clipboard.writeText(text);
        showToast('✅ Berhasil disalin ke clipboard!');
        return true;
    } catch (err) {
        console.error('Failed to copy:', err);
        showToast('❌ Gagal menyalin ke clipboard');
        return false;
    }
};

// ========================================
// STORAGE OPERATIONS
// ========================================
const loadFromStorage = () => {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        if (data) {
            state.snippets = JSON.parse(data);
        }
    } catch (err) {
        console.error('Failed to load from storage:', err);
        state.snippets = [];
    }
};

const saveToStorage = () => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state.snippets));
    } catch (err) {
        console.error('Failed to save to storage:', err);
        showToast('❌ Gagal menyimpan data');
    }
};

// ========================================
// CRUD OPERATIONS
// ========================================
const createSnippet = (data) => {
    const snippet = {
        id: generateId(),
        title: data.title.trim(),
        content: data.content.trim(),
        category: data.category || 'other',
        tags: data.tags ? data.tags.split(',').map(t => t.trim()).filter(Boolean) : [],
        favorite: false,
        connections: data.connections || [],
        createdAt: Date.now()
    };
    
    state.snippets.unshift(snippet);
    saveToStorage();
    showToast('✅ Snippet berhasil ditambahkan!');
    return snippet;
};

const updateSnippet = (id, data) => {
    const index = state.snippets.findIndex(s => s.id === id);
    if (index === -1) return null;
    
    state.snippets[index] = {
        ...state.snippets[index],
        title: data.title.trim(),
        content: data.content.trim(),
        category: data.category || 'other',
        tags: data.tags ? data.tags.split(',').map(t => t.trim()).filter(Boolean) : [],
        connections: data.connections || []
    };
    
    saveToStorage();
    showToast('✅ Snippet berhasil diupdate!');
    return state.snippets[index];
};

const deleteSnippet = (id) => {
    const index = state.snippets.findIndex(s => s.id === id);
    if (index === -1) return false;
    
    // Remove connections to this snippet
    state.snippets.forEach(snippet => {
        snippet.connections = snippet.connections.filter(connId => connId !== id);
    });
    
    state.snippets.splice(index, 1);
    saveToStorage();
    showToast('✅ Snippet berhasil dihapus!');
    return true;
};

const toggleFavorite = (id) => {
    const snippet = state.snippets.find(s => s.id === id);
    if (!snippet) return;
    
    snippet.favorite = !snippet.favorite;
    saveToStorage();
    renderSnippets();
};

const getSnippet = (id) => {
    return state.snippets.find(s => s.id === id);
};

// ========================================
// FILTER & SEARCH
// ========================================
const getFilteredSnippets = () => {
    let filtered = [...state.snippets];
    
    // Search filter
    if (state.ui.search) {
        const searchLower = state.ui.search.toLowerCase();
        filtered = filtered.filter(s => 
            s.title.toLowerCase().includes(searchLower) ||
            s.content.toLowerCase().includes(searchLower) ||
            s.tags.some(t => t.toLowerCase().includes(searchLower))
        );
    }
    
    // Category filter
    if (state.ui.filterCategory) {
        filtered = filtered.filter(s => s.category === state.ui.filterCategory);
    }
    
    // Favorite filter
    if (state.ui.filterFavorite) {
        filtered = filtered.filter(s => s.favorite);
    }
    
    return filtered;
};

// ========================================
// RENDER FUNCTIONS
// ========================================
const renderSnippets = () => {
    const container = document.getElementById('snippetsContainer');
    const emptyState = document.getElementById('emptyState');
    const filtered = getFilteredSnippets();
    
    if (filtered.length === 0) {
        container.innerHTML = '';
        emptyState.classList.add('show');
        return;
    }
    
    emptyState.classList.remove('show');
    
    container.innerHTML = filtered.map(snippet => {
        const categoryColor = CATEGORY_COLORS[snippet.category] || CATEGORY_COLORS.other;
        
        return `
            <article class="snippet-card" data-id="${snippet.id}">
                <div class="snippet-header">
                    <h3 class="snippet-title">${escapeHtml(snippet.title)}</h3>
                    <div class="snippet-actions">
                        <button 
                            class="btn-favorite ${snippet.favorite ? 'active' : ''}" 
                            onclick="event.stopPropagation(); toggleFavorite('${snippet.id}')"
                            aria-label="Toggle favorite"
                        >⭐</button>
                        <button 
                            class="btn-copy" 
                            onclick="event.stopPropagation(); copySnippet('${snippet.id}')"
                        >📋</button>
                    </div>
                </div>
                
                <pre class="snippet-content">${escapeHtml(snippet.content.substring(0, 150))}${snippet.content.length > 150 ? '...' : ''}</pre>
                
                <div class="snippet-footer">
                    <span class="snippet-category" style="background-color: ${categoryColor}">
                        ${snippet.category}
                    </span>
                    <div class="snippet-tags">
                        ${snippet.tags.slice(0, 3).map(tag => 
                            `<span class="tag">#${escapeHtml(tag)}</span>`
                        ).join('')}
                        ${snippet.tags.length > 3 ? `<span class="tag">+${snippet.tags.length - 3}</span>` : ''}
                    </div>
                </div>
                
                ${snippet.connections.length > 0 ? `
                    <div class="snippet-connections">
                        <span class="connections-count">
                            🔗 ${snippet.connections.length} relasi
                        </span>
                    </div>
                ` : ''}
            </article>
        `;
    }).join('');
    
    // Add click handlers
    container.querySelectorAll('.snippet-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = card.dataset.id;
            openDetailModal(id);
        });
    });
};

const escapeHtml = (text) => {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
};

const copySnippet = async (id) => {
    const snippet = getSnippet(id);
    if (snippet) {
        await copyToClipboard(snippet.content);
    }
};

// ========================================
// MODAL OPERATIONS
// ========================================
const openAddModal = () => {
    const modal = document.getElementById('modalSnippet');
    const title = document.getElementById('modalTitle');
    const form = document.getElementById('formSnippet');
    
    state.ui.editingId = null;
    title.textContent = 'Tambah Snippet';
    form.reset();
    document.getElementById('inputId').value = '';
    
    updateConnectionsSelect();
    modal.classList.add('show');
    document.getElementById('inputTitle').focus();
};

const openEditModal = (id) => {
    const snippet = getSnippet(id);
    if (!snippet) return;
    
    const modal = document.getElementById('modalSnippet');
    const title = document.getElementById('modalTitle');
    
    state.ui.editingId = id;
    title.textContent = 'Edit Snippet';
    
    document.getElementById('inputId').value = id;
    document.getElementById('inputTitle').value = snippet.title;
    document.getElementById('inputContent').value = snippet.content;
    document.getElementById('inputCategory').value = snippet.category;
    document.getElementById('inputTags').value = snippet.tags.join(', ');
    
    updateConnectionsSelect(snippet.connections);
    
    modal.classList.add('show');
    document.getElementById('inputTitle').focus();
};

const closeModal = () => {
    document.getElementById('modalSnippet').classList.remove('show');
    document.getElementById('formSnippet').reset();
    state.ui.editingId = null;
};

const updateConnectionsSelect = (selectedIds = []) => {
    const select = document.getElementById('inputConnections');
    const currentId = document.getElementById('inputId').value;
    
    const availableSnippets = state.snippets.filter(s => s.id !== currentId);
    
    select.innerHTML = availableSnippets.length > 0 
        ? availableSnippets.map(s => 
            `<option value="${s.id}" ${selectedIds.includes(s.id) ? 'selected' : ''}>
                ${escapeHtml(s.title)}
            </option>`
        ).join('')
        : '<option value="">-- Tidak ada snippet lain --</option>';
};

const handleFormSubmit = (e) => {
    e.preventDefault();
    
    const formData = {
        title: document.getElementById('inputTitle').value,
        content: document.getElementById('inputContent').value,
        category: document.getElementById('inputCategory').value,
        tags: document.getElementById('inputTags').value,
        connections: Array.from(document.getElementById('inputConnections').selectedOptions)
            .map(opt => opt.value)
            .filter(Boolean)
    };
    
    const id = document.getElementById('inputId').value;
    
    if (id) {
        updateSnippet(id, formData);
    } else {
        createSnippet(formData);
    }
    
    closeModal();
    renderSnippets();
    
    if (state.ui.mode === 'flow') {
        renderFlowCanvas();
    }
};

// ========================================
// DETAIL MODAL
// ========================================
const openDetailModal = (id) => {
    const snippet = getSnippet(id);
    if (!snippet) return;
    
    const modal = document.getElementById('modalDetail');
    const categoryColor = CATEGORY_COLORS[snippet.category] || CATEGORY_COLORS.other;
    
    document.getElementById('detailTitle').textContent = snippet.title;
    document.getElementById('detailCategory').textContent = snippet.category;
    document.getElementById('detailCategory').style.backgroundColor = categoryColor;
    document.getElementById('detailDate').textContent = formatDate(snippet.createdAt);
    
    // Tags
    const tagsContainer = document.getElementById('detailTags');
    tagsContainer.innerHTML = snippet.tags.length > 0
        ? snippet.tags.map(tag => `<span class="tag">#${escapeHtml(tag)}</span>`).join('')
        : '<span class="tag">Tidak ada tag</span>';
    
    // Content
    document.getElementById('detailContent').textContent = snippet.content;
    
    // Connections
    const connectionsContainer = document.getElementById('detailConnections');
    if (snippet.connections.length > 0) {
        const connectedSnippets = snippet.connections
            .map(connId => getSnippet(connId))
            .filter(Boolean);
        
        connectionsContainer.innerHTML = `
            <h3>🔗 Relasi Snippet (${connectedSnippets.length})</h3>
            <div class="connection-list">
                ${connectedSnippets.map(s => 
                    `<div class="connection-item" onclick="openDetailModal('${s.id}')">
                        ${escapeHtml(s.title)}
                    </div>`
                ).join('')}
            </div>
        `;
    } else {
        connectionsContainer.innerHTML = '';
    }
    
    // Setup action buttons
    document.getElementById('btnCopyDetail').onclick = () => copyToClipboard(snippet.content);
    document.getElementById('btnEditDetail').onclick = () => {
        closeDetailModal();
        openEditModal(id);
    };
    document.getElementById('btnDeleteDetail').onclick = () => {
        if (confirm(`Hapus snippet "${snippet.title}"?`)) {
            deleteSnippet(id);
            closeDetailModal();
            renderSnippets();
            if (state.ui.mode === 'flow') {
                renderFlowCanvas();
            }
        }
    };
    
    modal.classList.add('show');
};

const closeDetailModal = () => {
    document.getElementById('modalDetail').classList.remove('show');
};

// ========================================
// FLOW CANVAS VISUALIZATION
// ========================================
const renderFlowCanvas = () => {
    const canvas = document.getElementById('flowCanvas');
    const ctx = canvas.getContext('2d');
    const flowEmpty = document.getElementById('flowEmptyState');
    const flowCount = document.getElementById('flowCount');
    
    // Get snippets with connections
    const connectedSnippets = state.snippets.filter(s => 
        s.connections.length > 0 || 
        state.snippets.some(other => other.connections.includes(s.id))
    );
    
    if (connectedSnippets.length === 0) {
        flowEmpty.classList.remove('hide');
        flowCount.textContent = '0 snippet';
        return;
    }
    
    flowEmpty.classList.add('hide');
    flowCount.textContent = `${connectedSnippets.length} snippet`;
    
    // Set canvas size
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Calculate positions
    const positions = {};
    const padding = 20;
    const nodeWidth = 180;
    const nodeHeight = 80;
    const cols = Math.ceil(Math.sqrt(connectedSnippets.length));
    const rows = Math.ceil(connectedSnippets.length / cols);
    
    const spacingX = (canvas.width - 2 * padding) / (cols + 1);
    const spacingY = (canvas.height - 2 * padding) / (rows + 1);
    
    connectedSnippets.forEach((snippet, i) => {
        const col = i % cols;
        const row = Math.floor(i / cols);
        
        positions[snippet.id] = {
            x: padding + spacingX * (col + 1) + state.canvas.offsetX,
            y: padding + spacingY * (row + 1) + state.canvas.offsetY,
            snippet
        };
    });
    
    // Draw connections first
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 2;
    
    Object.values(positions).forEach(pos => {
        pos.snippet.connections.forEach(connId => {
            const targetPos = positions[connId];
            if (!targetPos) return;
            
            ctx.beginPath();
            ctx.moveTo(pos.x, pos.y);
            ctx.lineTo(targetPos.x, targetPos.y);
            ctx.stroke();
            
            // Draw arrow
            const angle = Math.atan2(targetPos.y - pos.y, targetPos.x - pos.x);
            const arrowSize = 10;
            
            ctx.beginPath();
            ctx.moveTo(targetPos.x, targetPos.y);
            ctx.lineTo(
                targetPos.x - arrowSize * Math.cos(angle - Math.PI / 6),
                targetPos.y - arrowSize * Math.sin(angle - Math.PI / 6)
            );
            ctx.moveTo(targetPos.x, targetPos.y);
            ctx.lineTo(
                targetPos.x - arrowSize * Math.cos(angle + Math.PI / 6),
                targetPos.y - arrowSize * Math.sin(angle + Math.PI / 6)
            );
            ctx.stroke();
        });
    });
    
    // Draw nodes
    Object.values(positions).forEach(pos => {
        const categoryColor = CATEGORY_COLORS[pos.snippet.category] || CATEGORY_COLORS.other;
        
        // Draw node background
        ctx.fillStyle = '#1e293b';
        ctx.strokeStyle = categoryColor;
        ctx.lineWidth = 2;
        
        const x = pos.x - nodeWidth / 2;
        const y = pos.y - nodeHeight / 2;
        
        ctx.beginPath();
        ctx.roundRect(x, y, nodeWidth, nodeHeight, 8);
        ctx.fill();
        ctx.stroke();
        
        // Draw title
        ctx.fillStyle = '#f1f5f9';
        ctx.font = '600 12px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        const title = pos.snippet.title.length > 20 
            ? pos.snippet.title.substring(0, 20) + '...' 
            : pos.snippet.title;
        
        ctx.fillText(title, pos.x, pos.y - 10);
        
        // Draw category
        ctx.fillStyle = '#94a3b8';
        ctx.font = '400 10px sans-serif';
        ctx.fillText(pos.snippet.category, pos.x, pos.y + 10);
        
        // Draw connection count
        if (pos.snippet.connections.length > 0) {
            ctx.fillStyle = categoryColor;
            ctx.font = '600 10px sans-serif';
            ctx.fillText(`🔗 ${pos.snippet.connections.length}`, pos.x, pos.y + 25);
        }
    });
};

const initCanvasInteractions = () => {
    const canvas = document.getElementById('flowCanvas');
    
    let isDragging = false;
    let startX = 0;
    let startY = 0;
    
    canvas.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX - state.canvas.offsetX;
        startY = e.clientY - state.canvas.offsetY;
        canvas.style.cursor = 'grabbing';
    });
    
    canvas.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        
        state.canvas.offsetX = e.clientX - startX;
        state.canvas.offsetY = e.clientY - startY;
        
        renderFlowCanvas();
    });
    
    canvas.addEventListener('mouseup', () => {
        isDragging = false;
        canvas.style.cursor = 'grab';
    });
    
    canvas.addEventListener('mouseleave', () => {
        isDragging = false;
        canvas.style.cursor = 'grab';
    });
    
    // Touch support
    canvas.addEventListener('touchstart', (e) => {
        isDragging = true;
        const touch = e.touches[0];
        startX = touch.clientX - state.canvas.offsetX;
        startY = touch.clientY - state.canvas.offsetY;
    });
    
    canvas.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        
        const touch = e.touches[0];
        state.canvas.offsetX = touch.clientX - startX;
        state.canvas.offsetY = touch.clientY - startY;
        
        renderFlowCanvas();
    });
    
    canvas.addEventListener('touchend', () => {
        isDragging = false;
    });
};

const resetCanvasView = () => {
    state.canvas.offsetX = 0;
    state.canvas.offsetY = 0;
    state.canvas.scale = 1;
    renderFlowCanvas();
};

// ========================================
// VIEW MODE TOGGLE
// ========================================
const toggleViewMode = () => {
    const listView = document.getElementById('listView');
    const flowView = document.getElementById('flowView');
    const btnToggle = document.getElementById('btnToggleMode');
    
    if (state.ui.mode === 'list') {
        state.ui.mode = 'flow';
        listView.style.display = 'none';
        flowView.style.display = 'block';
        btnToggle.innerHTML = '<span class="icon">🧠</span>';
        renderFlowCanvas();
    } else {
        state.ui.mode = 'list';
        listView.style.display = 'block';
        flowView.style.display = 'none';
        btnToggle.innerHTML = '<span class="icon">📋</span>';
    }
};

// ========================================
// EVENT LISTENERS
// ========================================
const initEventListeners = () => {
    // Add button
    document.getElementById('btnAdd').addEventListener('click', openAddModal);
    
    // Toggle mode
    document.getElementById('btnToggleMode').addEventListener('click', toggleViewMode);
    
    // Search
    document.getElementById('searchInput').addEventListener('input', (e) => {
        state.ui.search = e.target.value;
        renderSnippets();
    });
    
    // Category filter
    document.getElementById('filterCategory').addEventListener('change', (e) => {
        state.ui.filterCategory = e.target.value;
        renderSnippets();
    });
    
    // Favorite filter
    document.getElementById('btnFilterFavorite').addEventListener('click', (e) => {
        state.ui.filterFavorite = !state.ui.filterFavorite;
        e.target.classList.toggle('active');
        renderSnippets();
    });
    
    // Modal close buttons
    document.getElementById('btnCloseModal').addEventListener('click', closeModal);
    document.getElementById('modalOverlay').addEventListener('click', closeModal);
    document.getElementById('btnCancel').addEventListener('click', closeModal);
    
    // Detail modal close
    document.getElementById('btnCloseDetail').addEventListener('click', closeDetailModal);
    document.getElementById('modalDetailOverlay').addEventListener('click', closeDetailModal);
    
    // Form submit
    document.getElementById('formSnippet').addEventListener('submit', handleFormSubmit);
    
    // Canvas reset
    document.getElementById('btnResetZoom').addEventListener('click', resetCanvasView);
    
    // ESC key to close modals
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
            closeDetailModal();
        }
    });
    
    // Window resize for canvas
    window.addEventListener('resize', () => {
        if (state.ui.mode === 'flow') {
            renderFlowCanvas();
        }
    });
};

// ========================================
// INITIALIZATION
// ========================================
const init = () => {
    loadFromStorage();
    initEventListeners();
    initCanvasInteractions();
    renderSnippets();
    
    // Add sample data if empty
    if (state.snippets.length === 0) {
        createSnippet({
            title: 'Git Commit',
            content: 'git commit -m "message"',
            category: 'git',
            tags: 'git, commit, version control',
            connections: []
        });
        
        createSnippet({
            title: 'NPM Install Package',
            content: 'npm install package-name --save',
            category: 'npm',
            tags: 'npm, install, package',
            connections: []
        });
        
        createSnippet({
            title: 'Docker Run',
            content: 'docker run -d -p 8080:80 --name myapp image-name',
            category: 'docker',
            tags: 'docker, container, run',
            connections: []
        });
        
        renderSnippets();
    }
};

// Start the app
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}