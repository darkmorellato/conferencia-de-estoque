(function () {
  'use strict';

  var currentStore = null;
  var currentMonth = '2026-03';
  var inventory = [];
  var STORAGE_PREFIX = 'inventory_';
  var SAVED_PREFIX = 'countSaved_';
  var countSaved = false;

  var loginPage = document.getElementById('login-page');
  var inventoryPage = document.getElementById('inventory-page');
  var reportPage = document.getElementById('report-page');
  var loginForm = document.getElementById('login-form');
  var storeSelect = document.getElementById('store-select');
  var monthSelect = document.getElementById('month-select');
  var passwordInput = document.getElementById('password-input');
  var loginError = document.getElementById('login-error');
  var storeNameHeader = document.getElementById('store-name-header');
  var dateDisplay = document.getElementById('date-display');
  var monthBadge = document.getElementById('month-badge');
  var reportMonthBadge = document.getElementById('report-month-badge');
  var logoutBtn = document.getElementById('logout-btn');
  var exportBtn = document.getElementById('export-btn');
  var printBtn = document.getElementById('print-btn');
  var inventoryBody = document.getElementById('inventory-body');
  var progressText = document.getElementById('progress-text');
  var ringPath = document.getElementById('ring-path');
  var ringText = document.getElementById('ring-text');
  var totalProducts = document.getElementById('total-products');
  var countOk = document.getElementById('count-ok');
  var countPending = document.getElementById('count-pending');
  var countIssues = document.getElementById('count-issues');
  var saveAllBtn = document.getElementById('save-all-btn');
  var searchInput = document.getElementById('search-input');

  var reportBody = document.getElementById('report-body');
  var reportTotal = document.getElementById('report-total');
  var reportVerified = document.getElementById('report-verified');
  var reportIssues = document.getElementById('report-issues');
  var saveCountBtn = document.getElementById('save-count-btn');
  var backToInventoryBtn = document.getElementById('back-to-inventory-btn');

  var modalOverlay = document.getElementById('modal-overlay');
  var modalMessage = document.getElementById('modal-message');
  var modalConfirm = document.getElementById('modal-confirm');
  var modalCancel = document.getElementById('modal-cancel');

  var successModal = document.getElementById('success-modal');
  var successMessage = document.getElementById('success-message');
  var successOk = document.getElementById('success-ok');

  var modalCallback = null;

  function showModal(message, onConfirm) {
    modalMessage.innerHTML = message;
    modalCallback = onConfirm;
    modalOverlay.classList.remove('hidden');
  }

  function hideModal() {
    modalOverlay.classList.add('hidden');
    modalCallback = null;
  }

  function showSuccessModal(message) {
    successMessage.innerHTML = message;
    successModal.classList.remove('hidden');
  }

  function hideSuccessModal() {
    successModal.classList.add('hidden');
  }

  modalConfirm.addEventListener('click', function () {
    if (modalCallback) modalCallback();
    hideModal();
  });

  modalCancel.addEventListener('click', function () {
    hideModal();
  });

  modalOverlay.addEventListener('click', function (e) {
    if (e.target === modalOverlay) hideModal();
  });

  successOk.addEventListener('click', function () {
    hideSuccessModal();
  });

  successModal.addEventListener('click', function (e) {
    if (e.target === successModal) hideSuccessModal();
  });

  // ===== TAB LOGIC =====
  var tabBtns = document.querySelectorAll('.tab-btn');
  var tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var tab = btn.dataset.tab;
      tabBtns.forEach(function (b) { b.classList.remove('active'); });
      tabContents.forEach(function (c) { c.classList.remove('active'); });
      btn.classList.add('active');
      document.getElementById('tab-' + tab).classList.add('active');
      
      if (tab === 'saved-months') {
        loadSavedInventories();
      }
    });
  });

  // ===== HELPERS =====
  function needsCorrection(item) {
    return item.counted !== null && item.counted !== item.qty;
  }

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function getMonthName(monthStr) {
    var months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    var parts = monthStr.split('-');
    var month = parseInt(parts[1]);
    var year = parts[0];
    return months[month - 1] + ' ' + year;
  }

  // ===== LOGIN =====
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var store = storeSelect.value;
    var month = monthSelect.value;
    var password = passwordInput.value;

    if (!store) {
      loginError.textContent = 'Selecione uma loja.';
      loginError.classList.remove('hidden');
      return;
    }

    if (STORE_CREDENTIALS[store] !== password) {
      loginError.textContent = 'Senha incorreta.';
      loginError.classList.remove('hidden');
      passwordInput.value = '';
      passwordInput.focus();
      return;
    }

    currentStore = store;
    currentMonth = month;
    loginError.classList.add('hidden');
    loadInventory();
    showInventoryPage();
  });

  logoutBtn.addEventListener('click', function () {
    currentStore = null;
    inventory = [];
    countSaved = false;
    loginPage.classList.add('active');
    inventoryPage.classList.remove('active');
    reportPage.classList.remove('active');
    storeSelect.value = '';
    passwordInput.value = '';
    loginError.classList.add('hidden');
    saveCountBtn.disabled = false;
    saveCountBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg> Salvar Contagem';
  });

  // ===== LOAD INVENTORY =====
  function loadInventory() {
    var key = STORAGE_PREFIX + currentStore + '_' + currentMonth;
    var stored = localStorage.getItem(key);
    if (stored) {
      inventory = JSON.parse(stored);
    } else {
      var products = STORE_PRODUCTS[currentStore];
      inventory = products.map(function (p) {
        return {
          name: p.name,
          qty: p.qty,
          counted: null,
          defeito: 0,
          faltou: 0,
          verificado: false,
          corrigir: false
        };
      });
      saveInventory();
    }
    countSaved = localStorage.getItem(SAVED_PREFIX + currentStore + '_' + currentMonth) === 'true';
  }

  function saveInventory() {
    var key = STORAGE_PREFIX + currentStore + '_' + currentMonth;
    localStorage.setItem(key, JSON.stringify(inventory));
    addToHistory('Alteração salva');
  }

  function addToHistory(action) {
    var historyKey = 'history_' + currentStore + '_' + currentMonth;
    var history = JSON.parse(localStorage.getItem(historyKey) || '[]');
    var now = new Date();
    history.push({
      action: action,
      timestamp: now.toISOString(),
      dateStr: now.toLocaleString('pt-BR')
    });
    if (history.length > 50) history = history.slice(-50);
    localStorage.setItem(historyKey, JSON.stringify(history));
  }

  function showInventoryPage() {
    loginPage.classList.remove('active');
    inventoryPage.classList.add('active');
    reportPage.classList.remove('active');
    storeNameHeader.textContent = STORE_NAMES[currentStore];
    monthBadge.textContent = getMonthName(currentMonth);

    var now = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateDisplay.textContent = now.toLocaleDateString('pt-BR', options);

    renderTable();
    updateSummary();
    updateConfirmButton();
  }

  // ===== RENDER TABLE =====
  function renderTable(filter) {
    var searchTerm = (filter || searchInput.value || '').toLowerCase();
    inventoryBody.innerHTML = '';

    var filtered = searchTerm 
      ? inventory.filter(function(item) { return item.name.toLowerCase().includes(searchTerm); })
      : inventory;

    filtered.forEach(function (item, idx) {
      var tr = document.createElement('tr');
      var num = idx + 1;

      var needFix = needsCorrection(item);

      if (item.verificado || countSaved) {
        tr.classList.add('row-done');
      }

      var statusClass, statusText;
      if (item.verificado) {
        if (item.corrigir) {
          statusClass = 'status-warning';
          statusText = '!';
        } else {
          statusClass = 'status-ok';
          statusText = '&#10003;';
        }
      } else {
        statusClass = 'status-pending';
        statusText = '&#8226;';
      }

      var showDefectFields = !item.verificado && !countSaved && item.counted !== null && item.counted !== item.qty;
      var defectClass = showDefectFields ? ' field-unlocked' : '';
      var missingClass = showDefectFields ? ' field-red' : '';
      var defectDisabled = showDefectFields ? '' : ' disabled';
      var inputDisabled = (item.verificado || countSaved) ? 'disabled' : '';

      var corrigirBadge;
      if (item.corrigir) {
        corrigirBadge = '<span class="corrigir-badge badge-sim">Sim</span>';
      } else {
        corrigirBadge = '<span class="corrigir-badge badge-nao">N\u00e3o</span>';
      }

      var editBtn = (item.verificado && !countSaved)
        ? '<button class="btn-edit-row" data-index="' + idx + '" title="Editar"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button>'
        : '';

      tr.innerHTML =
        '<td class="col-num"><span class="row-number">' + num + '</span></td>' +
        '<td class="col-status"><span class="status-badge ' + statusClass + '">' + statusText + '</span></td>' +
        '<td class="col-name">' + escapeHtml(item.name) + '</td>' +
        '<td class="col-qty"><strong>' + item.qty + '</strong></td>' +
        '<td class="col-counted"><input type="number" class="cell-input input-counted" data-index="' + idx + '" data-field="counted" value="' + (item.counted !== null ? item.counted : '') + '" min="0" ' + inputDisabled + '></td>' +
        '<td class="col-defect"><input type="number" class="cell-input' + defectClass + '" data-index="' + idx + '" data-field="defeito" value="' + (item.defeito > 0 ? item.defeito : '') + '" min="0"' + defectDisabled + '></td>' +
        '<td class="col-missing"><span class="cell-text' + missingClass + '">' + (item.faltou > 0 ? item.faltou : '-') + '</span></td>' +
        '<td class="col-fix">' + corrigirBadge + '</td>' +
        '<td class="col-actions"></td>' +
        '<td class="col-edit">' + editBtn + '</td>';

      inventoryBody.appendChild(tr);
    });
  }

  // ===== CHECK IF ALL FILLED =====
  function updateConfirmButton() {
    if (countSaved) {
      saveAllBtn.disabled = true;
      saveAllBtn.textContent = 'Contagem Salva';
      return;
    }
    saveAllBtn.disabled = false;
    saveAllBtn.textContent = 'Confirmar';
  }

  // ===== INPUT CHANGE =====
  inventoryBody.addEventListener('change', function (e) {
    if (countSaved) return;
    
    var target = e.target;
    if (!target.classList.contains('cell-input')) return;

    var idx = parseInt(target.dataset.index);
    var field = target.dataset.field;
    var val = target.value === '' ? null : parseInt(target.value);
    var nextField = null;
    var item = inventory[idx];

    if (field === 'counted') {
      item.counted = val;
      if (val !== null && val !== item.qty) {
        nextField = 'defeito';
      }
      var falta = item.qty - val - (item.defeito || 0);
      item.faltou = (val !== null && falta > 0) ? falta : 0;
      var total = (val || 0) + (item.defeito || 0) + item.faltou;
      item.corrigir = (val !== null && val !== item.qty && total === item.qty);
    } else if (field === 'defeito') {
      item.defeito = val !== null ? val : 0;
      var falta = item.qty - (item.counted || 0) - item.defeito;
      item.faltou = (item.counted !== null && falta > 0) ? falta : 0;
      var total = (item.counted || 0) + item.defeito + item.faltou;
      item.corrigir = (item.counted !== null && item.counted !== item.qty && total === item.qty);
    }

    saveInventory();
    updateSummary();
    updateConfirmButton();
    renderTableWithFocus(idx, nextField);
  });

  function renderTableWithFocus(focusIdx, focusField) {
    inventoryBody.innerHTML = '';

    inventory.forEach(function (item, idx) {
      var tr = document.createElement('tr');
      var num = idx + 1;

      var needFix = needsCorrection(item);

      if (item.verificado || countSaved) {
        tr.classList.add('row-done');
      }

      var statusClass, statusText;
      if (item.verificado) {
        if (item.corrigir) {
          statusClass = 'status-warning';
          statusText = '!';
        } else {
          statusClass = 'status-ok';
          statusText = '&#10003;';
        }
      } else {
        statusClass = 'status-pending';
        statusText = '&#8226;';
      }

      var showDefectFields = !item.verificado && !countSaved && item.counted !== null && item.counted !== item.qty;
      var defectClass = showDefectFields ? ' field-unlocked' : '';
      var missingClass = showDefectFields ? ' field-red' : '';
      var defectDisabled = showDefectFields ? '' : ' disabled';
      var inputDisabled = (item.verificado || countSaved) ? 'disabled' : '';

      var corrigirBadge;
      if (item.corrigir) {
        corrigirBadge = '<span class="corrigir-badge badge-sim">Sim</span>';
      } else {
        corrigirBadge = '<span class="corrigir-badge badge-nao">N\u00e3o</span>';
      }

      var editBtn = (item.verificado && !countSaved)
        ? '<button class="btn-edit-row" data-index="' + idx + '" title="Editar"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button>'
        : '';

      tr.innerHTML =
        '<td class="col-num"><span class="row-number">' + num + '</span></td>' +
        '<td class="col-status"><span class="status-badge ' + statusClass + '">' + statusText + '</span></td>' +
        '<td class="col-name">' + escapeHtml(item.name) + '</td>' +
        '<td class="col-qty"><strong>' + item.qty + '</strong></td>' +
        '<td class="col-counted"><input type="number" class="cell-input input-counted" data-index="' + idx + '" data-field="counted" value="' + (item.counted !== null ? item.counted : '') + '" min="0" ' + inputDisabled + '></td>' +
        '<td class="col-defect"><input type="number" class="cell-input' + defectClass + '" data-index="' + idx + '" data-field="defeito" value="' + (item.defeito > 0 ? item.defeito : '') + '" min="0"' + defectDisabled + '></td>' +
        '<td class="col-missing"><span class="cell-text' + missingClass + '">' + (item.faltou > 0 ? item.faltou : '-') + '</span></td>' +
        '<td class="col-fix">' + corrigirBadge + '</td>' +
        '<td class="col-actions"></td>' +
        '<td class="col-edit">' + editBtn + '</td>';

      inventoryBody.appendChild(tr);
    });

    if (focusIdx !== null && focusField !== null) {
      setTimeout(function () {
        var inputs = inventoryBody.querySelectorAll('.cell-input');
        for (var i = 0; i < inputs.length; i++) {
          if (parseInt(inputs[i].dataset.index) === focusIdx && inputs[i].dataset.field === focusField) {
            inputs[i].focus();
            break;
          }
        }
      }, 50);
    }
  }

  // ===== EDIT BUTTON =====
  inventoryBody.addEventListener('click', function (e) {
    if (countSaved) return;
    
    var target = e.target.closest('.btn-edit-row');
    if (!target) return;

    var idx = parseInt(target.dataset.index);
    var item = inventory[idx];
    showModal(
      '<strong>' + item.name + '</strong><br><br>Deseja editar esta linha?',
      function () {
        item.verificado = false;
        item.counted = null;
        item.defeito = 0;
        item.faltou = 0;
        item.corrigir = false;
        saveInventory();
        updateSummary();
        renderTable();
      }
    );
  });

  // ===== SAVE ALL BUTTON =====
  saveAllBtn.addEventListener('click', function () {
    if (countSaved) return;
    
    var errors = [];
    var toConfirm = [];

    inventory.forEach(function (item, idx) {
      if (item.counted === null) {
        toConfirm.push({ idx: idx, type: 'pending' });
        return;
      }

      var sistema = item.qty;
      var counted = item.counted;
      var defeito = item.defeito || 0;
      var total = counted + defeito;

      if (counted === sistema) {
        toConfirm.push({ idx: idx, type: 'ok' });
      } else if (total === sistema) {
        toConfirm.push({ idx: idx, type: 'corrigir' });
      } else {
        toConfirm.push({ idx: idx, type: 'divergence' });
      }
    });

    if (errors.length > 0) {
      showModal(
        '<strong>Soma incorreta em:</strong><br><br>' + errors.join('<br>') + '<br><br> mesmo assim deseja continuar?',
        function () {
          proceedToReport(toConfirm, true);
        }
      );
    } else {
      proceedToReport(toConfirm, false);
    }
  });

  function proceedToReport(toConfirm, forceProceed) {
    toConfirm.forEach(function (entry) {
      var item = inventory[entry.idx];
      if (entry.type === 'pending') {
        item.verificado = false;
        item.corrigir = false;
      } else if (entry.type === 'ok') {
        item.verificado = true;
        item.corrigir = false;
      } else if (entry.type === 'corrigir') {
        item.verificado = true;
        item.corrigir = true;
      } else {
        item.verificado = true;
        item.corrigir = false;
      }
    });
    
    saveInventory();
    updateSummary();
    renderTable();
    
    showReportPage();
  }

  // ===== REPORT PAGE =====
  function showReportPage() {
    inventoryPage.classList.remove('active');
    reportPage.classList.add('active');
    reportMonthBadge.textContent = getMonthName(currentMonth);
    renderReportTable();
    updateReportSummary();
  }

  function renderReportTable() {
    reportBody.innerHTML = '';

    inventory.forEach(function (item, idx) {
      var tr = document.createElement('tr');
      var num = idx + 1;

      var counted = item.counted !== null ? item.counted : 0;
      var defeito = item.defeito || 0;
      var sistema = item.qty;
      var total = counted + defeito;
      
      var statusClass, statusText;
      
      if (item.counted === null) {
        statusClass = 'status-pending';
        statusText = 'Pendente';
      } else if (counted === sistema) {
        statusClass = 'status-ok';
        statusText = 'OK';
      } else if (total === sistema) {
        statusClass = 'status-warning';
        statusText = 'Corrigir';
      } else {
        statusClass = 'status-issue';
        statusText = 'Diverg\u00eancia';
      }

      tr.innerHTML =
        '<td class="col-num">' + num + '</td>' +
        '<td class="col-name">' + escapeHtml(item.name) + '</td>' +
        '<td class="col-qty"><strong>' + item.qty + '</strong></td>' +
        '<td class="col-counted"><strong>' + (item.counted !== null ? item.counted : '-') + '</strong></td>' +
        '<td class="col-defect">' + (item.defeito > 0 ? item.defeito : '-') + '</td>' +
        '<td class="col-missing">' + (item.faltou > 0 ? item.faltou : '-') + '</td>' +
        '<td class="col-status"><span class="status-badge ' + statusClass + '">' + statusText + '</span></td>';

      reportBody.appendChild(tr);
    });
  }

  function updateReportSummary() {
    var total = inventory.length;
    var verified = 0;
    var issues = 0;

    inventory.forEach(function (item) {
      if (item.counted !== null) {
        verified++;
        if (needsCorrection(item)) issues++;
      }
    });

    reportTotal.textContent = total;
    reportVerified.textContent = verified;
    reportIssues.textContent = issues;
  }

  backToInventoryBtn.addEventListener('click', function () {
    reportPage.classList.remove('active');
    inventoryPage.classList.add('active');
  });

  // ===== SAVE COUNT BUTTON =====
  saveCountBtn.addEventListener('click', function () {
    if (countSaved) return;
    
    showModal(
      '<strong>Confirmar contagem?</strong><br><br>Ap\u00f3s salvar, n\u00e3o ser\u00e1 poss\u00edvel alterar as informa\u00e7\u00f5es.',
      async function () {
        countSaved = true;
        localStorage.setItem(SAVED_PREFIX + currentStore + '_' + currentMonth, 'true');
        saveInventory();
        updateConfirmButton();
        
        saveCountBtn.disabled = true;
        saveCountBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg> Salvando...';
        
        var result = await saveToFirestore(currentStore, currentMonth, inventory);
        console.log('Salvou no Firebase:', result);
        
        if (result.success) {
          showSuccessModal('<strong>Contagem salva com sucesso!</strong><br><br>ID: ' + result.id);
        } else {
          showSuccessModal('<strong>Contagem salva localmente!</strong><br><br>Erro ao salvar online: ' + result.error);
        }
        
        saveCountBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg> Salvar Contagem';
        renderTable();
      }
    );
  });

  // ===== LOAD SAVED INVENTORIES =====
  async function loadSavedInventories() {
    var savedList = document.getElementById('saved-list');
    savedList.innerHTML = '<p class="loading-text">Carregando...</p>';
    
    console.log('Carregando inventários salvos...');
    try {
      var saved = await getSavedInventories();
      console.log('Inventários carregados:', saved);
      
      if (saved.length === 0) {
        savedList.innerHTML = '<p class="empty-text">Nenhuma contagem salva online.</p>';
        return;
      }

      var html = '';
      saved.forEach(function (item) {
        var data = item.data || [];
        var verified = data.filter(function (i) { return i.counted !== null; }).length;
        html += '<div class="saved-item">';
        html += '<div class="saved-info">';
        html += '<strong>' + (STORE_NAMES[item.loja] || item.loja) + '</strong>';
        html += '<span>' + getMonthName(item.mes) + '</span>';
        html += '</div>';
        html += '<div class="saved-stats">';
        html += '<span>' + verified + '/' + data.length + ' conferidos</span>';
        html += '</div>';
        html += '</div>';
      });

      savedList.innerHTML = html;
    } catch(e) {
      console.error('Erro ao carregar:', e);
      savedList.innerHTML = '<p class="error-text">Erro ao carregar: ' + e.message + '</p>';
    }
  }

  // ===== UPDATE SUMMARY =====
  function updateSummary() {
    var total = inventory.length;
    var verified = 0;
    var issues = 0;

    inventory.forEach(function (item) {
      if (item.counted !== null) {
        verified++;
        if (needsCorrection(item)) issues++;
      }
    });

    totalProducts.textContent = total;
    countOk.textContent = verified;
    countPending.textContent = total - verified;
    countIssues.textContent = issues;

    var pct = total > 0 ? Math.round((verified / total) * 100) : 0;
    progressText.textContent = verified + ' de ' + total;
    ringPath.setAttribute('stroke-dasharray', pct + ', 100');
    ringText.textContent = pct + '%';
  }

  // ===== EXPORT =====
  exportBtn.addEventListener('click', function () {
    var csv = '#;Nome exibido;Quantidade em m\u00e3os;Contado Loja;Defeito;Faltou;Verificado;Corrigir\n';

    inventory.forEach(function (item, idx) {
      csv += (idx + 1) + ';';
      csv += '"' + item.name.replace(/"/g, '""') + '";';
      csv += item.qty + ';';
      csv += (item.counted !== null ? item.counted : '') + ';';
      csv += item.defeito + ';';
      csv += item.faltou + ';';
      csv += (item.counted !== null ? 'sim' : 'n\u00e3o') + ';';
      csv += (needsCorrection(item) ? 'sim' : 'n\u00e3o') + '\n';
    });

    var blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
    var link = document.createElement('a');
    var now = new Date();
    var dateStr = now.toISOString().slice(0, 10);
    link.href = URL.createObjectURL(blob);
    link.download = 'inventario_' + currentStore + '_' + currentMonth + '_' + dateStr + '.csv';
    link.click();
    URL.revokeObjectURL(link.href);
  });

  printBtn.addEventListener('click', function () {
    var printWindow = window.open('', '_blank');
    var storeName = STORE_NAMES[currentStore];
    var monthName = getMonthName(currentMonth);
    var now = new Date();
    var dateStr = now.toLocaleDateString('pt-BR');
    
    var html = '<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><title>Inventário - ' + storeName + '</title>';
    html += '<style>body{font-family:Arial,sans-serif;padding:20px;color:#333}';
    html += 'h1{font-size:18px;margin-bottom:5px}h2{font-size:14px;color:#666;margin-bottom:20px}';
    html += 'table{width:100%;border-collapse:collapse;font-size:11px}';
    html += 'th,td{border:1px solid #ddd;padding:6px 8px;text-align:left}';
    html += 'th{background:#f5f5f5;font-weight:bold}';
    html += '.status-ok{color:green}.status-warning{color:#b8860b}.status-issue{color:red}.status-pending{color:#999}</style>';
    html += '</head><body>';
    html += '<h1>Inventário: ' + storeName + '</h1>';
    html += '<h2>Período: ' + monthName + ' - Data: ' + dateStr + '</h2>';
    html += '<table><thead><tr><th>#</th><th>Produto</th><th>Sistema</th><th>Contado</th><th>Defeito</th><th>Faltou</th><th>Status</th></tr></thead><tbody>';
    
    inventory.forEach(function (item, idx) {
      var counted = item.counted !== null ? item.counted : '-';
      var defeito = item.defeito > 0 ? item.defeito : '-';
      var faltou = item.faltou > 0 ? item.faltou : '-';
      var sistema = item.qty;
      var total = (item.counted || 0) + (item.defeito || 0);
      var statusHtml = '';
      
      if (item.counted === null) {
        statusHtml = '<span class="status-pending">Pendente</span>';
      } else if (counted === sistema) {
        statusHtml = '<span class="status-ok">OK</span>';
      } else if (total === sistema) {
        statusHtml = '<span class="status-warning">Corrigir</span>';
      } else {
        statusHtml = '<span class="status-issue">Divergência</span>';
      }
      
      html += '<tr><td>' + (idx + 1) + '</td><td>' + item.name + '</td><td>' + sistema + '</td><td>' + counted + '</td><td>' + defeito + '</td><td>' + faltou + '</td><td>' + statusHtml + '</td></tr>';
    });
    
    html += '</tbody></table></body></html>';
    
    printWindow.document.write(html);
    printWindow.document.close();
    printWindow.print();
  });

  // ===== SESSION TIMEOUT =====
  var SESSION_TIMEOUT = 30 * 60 * 1000;
  var sessionTimer;

  function resetSessionTimer() {
    if (sessionTimer) clearTimeout(sessionTimer);
    if (currentStore) {
      sessionTimer = setTimeout(function () {
        showModal('<strong>Sessão expirada</strong><br><br>Por segurança, você será desconectado.', function () {
          logoutBtn.click();
        });
      }, SESSION_TIMEOUT);
    }
  }

  document.addEventListener('mousemove', resetSessionTimer);
  document.addEventListener('keypress', resetSessionTimer);
  document.addEventListener('click', resetSessionTimer);

  // ===== SEARCH FILTER =====
  var searchTimeout;
  searchInput.addEventListener('input', function () {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(function () {
      renderTable(searchInput.value);
    }, 200);
  });

  // ===== KEYBOARD SHORTCUTS =====
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && e.target.classList.contains('cell-input')) {
      var idx = parseInt(e.target.dataset.index);
      var field = e.target.dataset.field;
      var inputs = document.querySelectorAll('.cell-input:not([disabled])');
      for (var i = 0; i < inputs.length; i++) {
        if (inputs[i] === e.target && i < inputs.length - 1) {
          inputs[i + 1].focus();
          break;
        }
      }
    }
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
      e.preventDefault();
      if (inventoryPage.classList.contains('active') && !saveAllBtn.disabled) {
        saveAllBtn.click();
      }
    }
  });

})();
