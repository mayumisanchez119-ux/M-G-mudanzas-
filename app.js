// ==========================================================================
// MG TRANSPORTE Y LOGÍSTICA - LÓGICA DE APLICACIÓN, LOGO Y CONTROL EDITABLE
// ==========================================================================

const LOGO_BASE64 = 'data:image/png;base64,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';

let state = {
  rooms: JSON.parse(JSON.stringify(INITIAL_ROOMS)),
  activeRoomId: 'all',
  searchQuery: '',
  historySearchQuery: '',
  historyStatusFilter: 'all',

  // Modalidad de Servicio Activa ('mudanza' | 'transporte')
  serviceMode: 'mudanza',

  // Configuración de "Solo Transporte" (Flota 18 m³ editable)
  transportTrucksQty: 1,
  priceTransportPerTruck: 120, // € tarifa base por camión de 18 m³
  transportCargoUnits: '',    // Opcional
  transportCargoWeight: '',   // Opcional

  // Asistencia en Carga (Precios Editables)
  transportHelpService: 'none', // 'none' | 'driver_help' | 'driver_plus_staff'
  priceHelpNone: 0,
  priceHelpDriver: 35,
  priceHelpStaff: 75,
  
  // Pricing Unit Rates de Mudanza (100% Editables)
  pricePerM3: 25,          // €/m³
  pricePerTruck: 120,      // €/camión (18 m³)
  pricePerStaff: 80,       // €/operario
  distanceKm: 15,          // km recorrido
  pricePerKm: 1.50,        // €/km
  pricePerFloor: 25,       // €/planta sin ascensor
  pricePackingRate: 6,     // €/m³ embalaje
  priceDisassemblyRate: 40,// € tarifa desmontaje y montaje

  // Truck Fleet capacity (Únicamente Camiones de 18 m³)
  truckCapacityM3: 18,

  // Coordinates (Default: Madrid)
  originCoords: [40.416775, -3.703790], // Sol, Madrid
  destCoords: [40.4233, -3.7121],       // Plaza de España, Madrid

  // Access & Extras
  accessFloor: 0,
  hasElevator: true,
  packingService: false,
  disassemblyService: false,
  
  // Logistics editable states
  suggestedTrucks: 1,
  userTrucks: 1,
  manualTruckOverride: false,

  suggestedStaff: 2,
  userStaff: 2,
  manualStaffOverride: false,

  // Custom Final Total Override
  isCustomTotalActive: false,
  customGrandTotal: 0,

  // Editing Item M3 state
  editingItemRoomId: null,
  editingItemId: null,

  // Client info
  client: {
    name: '',
    phone: '',
    email: '',
    date: new Date().toISOString().split('T')[0],
    origin: '28341 Valdemoro, Madrid',
    destination: '28939 Arroyomolinos, Madrid',
    notes: ''
  },

  // Quote History & Completed Moves list (localStorage)
  savedQuotes: JSON.parse(localStorage.getItem('mg_quotes_history') || '[]'),
  activeMainTab: 'cotizador',

  // -------------------------------------------------------------
  // MÓDULO DE FACTURACIÓN OFICIAL (PROTEGIDO POR CREDENCIALES)
  // -------------------------------------------------------------
  invoiceAuth: {
    isAuthenticated: false,
    currentUser: 'carlos'
  },
  invoiceData: {
    number: 'FAC-2026-001',
    date: new Date().toISOString().split('T')[0],
    dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    clientName: '',
    clientNif: '',
    clientAddress: '',
    hasIva: true,
    ivaPct: 21,
    hasIrpf: false,
    irpfPct: 1,
    items: []
  },
  savedInvoices: JSON.parse(localStorage.getItem('mg_invoices_history') || 'null') || [
    {
      id: 'FAC-2026-001',
      date: '2026-07-28',
      dueDate: '2026-08-28',
      clientName: 'Logística & Distribución Madrid S.L.',
      clientNif: 'B-84920193',
      clientAddress: 'Polígono Industrial Las Arenas, Pinto, Madrid',
      hasIva: true,
      ivaPct: 21,
      hasIrpf: false,
      irpfPct: 15,
      subtotal: 2520.00,
      ivaAmount: 529.20,
      irpfAmount: 0.00,
      grandTotal: 3049.20,
      status: 'Cobrada',
      items: [
        { id: '1', description: '07-07 Ruta Toledo', qty: 1, unitPrice: 300 },
        { id: '2', description: '08-07 Ruta localidad', qty: 1, unitPrice: 300 },
        { id: '3', description: '09-07 Ruta localidad', qty: 1, unitPrice: 260 },
        { id: '4', description: '10-07 Ruta localidad', qty: 1, unitPrice: 260 },
        { id: '5', description: '13-07 Ruta localidad *', qty: 1, unitPrice: 260 },
        { id: '6', description: '04-07 Ruta Toledo', qty: 1, unitPrice: 280 },
        { id: '7', description: '15-07 Ruta localidad', qty: 1, unitPrice: 300 },
        { id: '8', description: '16-07 Ruta localidad', qty: 1, unitPrice: 280 },
        { id: '9', description: '17-07 Ruta localidad', qty: 1, unitPrice: 280 }
      ]
    },
    {
      id: 'FAC-2026-002',
      date: '2026-08-02',
      dueDate: '2026-09-02',
      clientName: 'Mudanzas Integrales Centro S.A.',
      clientNif: 'A-28940122',
      clientAddress: 'Paseo de la Castellana 140, Madrid',
      hasIva: true,
      ivaPct: 21,
      hasIrpf: true,
      irpfPct: 15,
      subtotal: 1850.00,
      ivaAmount: 388.50,
      irpfAmount: 277.50,
      grandTotal: 1961.00,
      status: 'Cobrada',
      items: [
        { id: '10', description: 'Servicio de Mudanza y Portes Gran Volumen', qty: 1, unitPrice: 1850 }
      ]
    },
    {
      id: 'FAC-2026-003',
      date: '2026-08-06',
      dueDate: '2026-09-06',
      clientName: 'Construcciones & Reformas Toledo S.L.',
      clientNif: 'B-45091283',
      clientAddress: 'Av. Barber 22, Toledo',
      hasIva: true,
      ivaPct: 21,
      hasIrpf: false,
      irpfPct: 15,
      subtotal: 1420.00,
      ivaAmount: 298.20,
      irpfAmount: 0.00,
      grandTotal: 1718.20,
      status: 'Pendiente de Cobro',
      items: [
        { id: '11', description: 'Porte y Transporte 2 Camiones 18m³ Toledo', qty: 2, unitPrice: 710 }
      ]
    }
  ]
};

let map = null;
let originMarker = null;
let destMarker = null;
let routeLine = null;

let debounceTimerOrigin = null;
let debounceTimerDest = null;

// Base de datos integrada de Códigos Postales y Municipios de España
const POSTAL_CODES_DB = [
  { cp: '28001', name: '28001 - Madrid (Barrio Salamanca)', lat: 40.4258, lng: -3.6841 },
  { cp: '28002', name: '28002 - Madrid (Chamartín)', lat: 40.4468, lng: -3.6761 },
  { cp: '28003', name: '28003 - Madrid (Chamberí)', lat: 40.4402, lng: -3.7021 },
  { cp: '28004', name: '28004 - Madrid (Centro / Malasaña)', lat: 40.4231, lng: -3.7011 },
  { cp: '28005', name: '28005 - Madrid (La Latina)', lat: 40.4102, lng: -3.7121 },
  { cp: '28012', name: '28012 - Madrid (Lavapiés)', lat: 40.4082, lng: -3.7015 },
  { cp: '28013', name: '28013 - Madrid (Sol / Gran Vía)', lat: 40.4168, lng: -3.7038 },
  { cp: '28014', name: '28014 - Madrid (Retiro / Cortes)', lat: 40.4142, lng: -3.6931 },
  { cp: '28015', name: '28015 - Madrid (Argüelles / Moncloa)', lat: 40.4312, lng: -3.7141 },
  { cp: '28020', name: '28020 - Madrid (Tetuán / Azca)', lat: 40.4572, lng: -3.6961 },

  // Madrid Sur
  { cp: '28340', name: '28340 - Valdemoro (Centro)', lat: 40.1902, lng: -3.6751 },
  { cp: '28341', name: '28341 - Valdemoro (Av. Mar Mediterráneo)', lat: 40.1865, lng: -3.6721 },
  { cp: '28342', name: '28342 - Valdemoro (Estación / Brezo)', lat: 40.1925, lng: -3.6681 },
  { cp: '28343', name: '28343 - Valdemoro (Polígonos)', lat: 40.1785, lng: -3.6811 },
  { cp: '28939', name: '28939 - Arroyomolinos (Puerto Navacerrada / Madrid)', lat: 40.2741, lng: -3.9167 },
  { cp: '28901', name: '28901 - Getafe (Centro)', lat: 40.3083, lng: -3.7327 },
  { cp: '28911', name: '28911 - Leganés (Centro)', lat: 40.3281, lng: -3.7644 },
  { cp: '28921', name: '28921 - Alcorcón (Centro)', lat: 40.3458, lng: -3.8247 },
  { cp: '28930', name: '28930 - Móstoles (Centro)', lat: 40.3225, lng: -3.8647 },
  { cp: '28940', name: '28940 - Fuenlabrada (Centro)', lat: 40.2842, lng: -3.7942 },
  { cp: '28320', name: '28320 - Pinto (Madrid)', lat: 40.2415, lng: -3.6989 },
  { cp: '28300', name: '28300 - Aranjuez (Madrid)', lat: 40.0312, lng: -3.6025 },
  { cp: '28350', name: '28350 - Ciempozuelos (Madrid)', lat: 40.1585, lng: -3.6162 },
  { cp: '28980', name: '28980 - Parla (Madrid)', lat: 40.2372, lng: -3.7741 },

  // Madrid Norte y Oeste
  { cp: '28220', name: '28220 - Majadahonda (Madrid)', lat: 40.4735, lng: -3.8719 },
  { cp: '28223', name: '28223 - Pozuelo de Alarcón (Somosaguas)', lat: 40.4356, lng: -3.8136 },
  { cp: '28230', name: '28230 - Las Rozas (Madrid)', lat: 40.4924, lng: -3.8739 },
  { cp: '28660', name: '28660 - Boadilla del Monte (Madrid)', lat: 40.4062, lng: -3.8761 },
  { cp: '28100', name: '28100 - Alcobendas (Madrid)', lat: 40.5475, lng: -3.6422 },
  { cp: '28701', name: '28701 - San Sebastián de los Reyes', lat: 40.5472, lng: -3.6261 },
  { cp: '28801', name: '28801 - Alcalá de Henares (Centro)', lat: 40.4819, lng: -3.3644 },
  { cp: '28850', name: '28850 - Torrejón de Ardoz (Madrid)', lat: 40.4578, lng: -3.4800 },
  { cp: '28820', name: '28820 - Coslada (Madrid)', lat: 40.4258, lng: -3.5641 },
  { cp: '28521', name: '28521 - Rivas-Vaciamadrid', lat: 40.3521, lng: -3.5351 },

  // Ciudades Principales
  { cp: '08001', name: '08001 - Barcelona (Centro)', lat: 41.3851, lng: 2.1734 },
  { cp: '46001', name: '46001 - Valencia (Centro)', lat: 39.4699, lng: -0.3763 },
  { cp: '41001', name: '41001 - Sevilla (Centro)', lat: 37.3891, lng: -5.9845 },
  { cp: '50001', name: '50001 - Zaragoza (Centro)', lat: 41.6488, lng: -0.8891 },
  { cp: '45001', name: '45001 - Toledo (Centro)', lat: 39.8628, lng: -4.0273 }
];

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  try {
    renderRoomTabs();
    renderItems();
    initMap();
    setupAutocomplete();
    setupEventListeners();
    updateCalculations();
    updateHistoryBadge();
    initInvoiceModule();
    initCloudSync();

    // Asegurar que siempre inicie en modo público con las 4 pestañas originales
    state.invoiceAuth.isAuthenticated = false;
    const publicNav = document.getElementById('public-top-nav-bar');
    const invoiceNav = document.getElementById('invoice-top-nav-bar');
    const factView = document.getElementById('view-facturacion');
    const btnHeaderLogin = document.getElementById('btn-header-login');
    const headerAuthUser = document.getElementById('header-auth-user');

    if (publicNav) publicNav.style.display = 'block';
    if (invoiceNav) invoiceNav.style.display = 'none';
    if (factView) factView.style.display = 'none';
    if (btnHeaderLogin) btnHeaderLogin.style.display = 'inline-flex';
    if (headerAuthUser) headerAuthUser.style.display = 'none';

    switchMainTab('cotizador');
  } catch (err) {
    console.warn('Init warning:', err);
  } finally {
    hidePreloader();
  }
});

// Desvanecer Preloader / Splash Screen de carga inicial con el logo de la empresa
function hidePreloader() {
  const preloader = document.getElementById('app-preloader');
  if (preloader && !preloader.classList.contains('fade-out')) {
    preloader.classList.add('fade-out');
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 500);
  }
}

setTimeout(hidePreloader, 900);
window.addEventListener('load', hidePreloader);

// ==========================================================================
// SISTEMA DE SINCRONIZACIÓN EN LA NUBE EN TIEMPO REAL (MULTI-DISPOSITIVO)
// ==========================================================================
const CLOUD_SYNC_URL = 'https://jsonblob.com/api/jsonBlob/019ff169-538e-70ec-aa0e-f9ddbfc4fe66';
let isSyncing = false;
let lastSyncTimestamp = null;
let syncPollingInterval = null;

async function syncFetchFromCloud(showToast = false) {
  if (isSyncing) return;
  isSyncing = true;
  updateSyncUI('syncing');

  try {
    const response = await fetch(CLOUD_SYNC_URL, {
      method: 'GET',
      headers: { 'Accept': 'application/json' },
      cache: 'no-cache'
    });

    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

    const cloudData = await response.json();
    if (cloudData && typeof cloudData === 'object') {
      let hasChanges = false;

      // 1. Sincronizar Presupuestos
      if (Array.isArray(cloudData.savedQuotes)) {
        const mergedQuotesMap = new Map();
        
        // Cargar locales
        (state.savedQuotes || []).forEach(q => {
          if (q && q.id) mergedQuotesMap.set(q.id, q);
        });
        
        // Combinar con la nube
        cloudData.savedQuotes.forEach(q => {
          if (q && q.id) mergedQuotesMap.set(q.id, q);
        });

        const mergedQuotes = Array.from(mergedQuotesMap.values()).sort((a, b) => {
          const tA = new Date(a.timestamp || a.createdAt || 0).getTime() || 0;
          const tB = new Date(b.timestamp || b.createdAt || 0).getTime() || 0;
          return tB - tA;
        });

        if (JSON.stringify(mergedQuotes) !== JSON.stringify(state.savedQuotes)) {
          state.savedQuotes = mergedQuotes;
          localStorage.setItem('mg_quotes_history', JSON.stringify(state.savedQuotes));
          hasChanges = true;
        }
      }

      // 2. Sincronizar Facturas
      if (Array.isArray(cloudData.savedInvoices)) {
        const mergedInvoicesMap = new Map();
        (state.savedInvoices || []).forEach(inv => {
          if (inv && inv.id) mergedInvoicesMap.set(inv.id, inv);
        });
        cloudData.savedInvoices.forEach(inv => {
          if (inv && inv.id) mergedInvoicesMap.set(inv.id, inv);
        });

        const mergedInvoices = Array.from(mergedInvoicesMap.values());
        if (JSON.stringify(mergedInvoices) !== JSON.stringify(state.savedInvoices)) {
          state.savedInvoices = mergedInvoices;
          localStorage.setItem('mg_invoices_history', JSON.stringify(state.savedInvoices));
          hasChanges = true;
        }
      }

      if (hasChanges) {
        updateHistoryBadge();
        updateInvoiceBadge();
        if (state.activeMainTab === 'historial') renderHistoryTable();
        else if (state.activeMainTab === 'aceptadas') renderAcceptedMovesView();
        else if (state.activeMainTab === 'estadisticas') renderStatisticsDashboard();
        renderInvoicesHistoryTable();
      }

      lastSyncTimestamp = new Date();
      updateSyncUI('synced');

      if (showToast) {
        alert(`✅ Sincronización completada con la nube.\n${state.savedQuotes.length} presupuestos y ${state.savedInvoices.length} facturas actualizadas.`);
      }
    }
  } catch (err) {
    console.warn('Sync fetch error:', err);
    updateSyncUI('offline');
  } finally {
    isSyncing = false;
  }
}

async function syncPushToCloud() {
  updateSyncUI('syncing');

  try {
    const payload = {
      updatedAt: new Date().toISOString(),
      updatedBy: 'MG_Oficina',
      savedQuotes: state.savedQuotes,
      savedInvoices: state.savedInvoices
    };

    const response = await fetch(CLOUD_SYNC_URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      lastSyncTimestamp = new Date();
      updateSyncUI('synced');
    } else {
      updateSyncUI('offline');
    }
  } catch (err) {
    console.warn('Sync push error:', err);
    updateSyncUI('offline');
  }
}

function updateSyncUI(status) {
  const dot = document.getElementById('sync-indicator-dot');
  const label = document.getElementById('sync-status-label');
  const icon = document.getElementById('sync-icon-spin');
  const modalStatus = document.getElementById('modal-sync-server-status');
  const modalTime = document.getElementById('modal-sync-last-time');
  const modalQuotes = document.getElementById('modal-sync-quotes-count');
  const modalInvoices = document.getElementById('modal-sync-invoices-count');

  if (status === 'syncing') {
    if (dot) { dot.className = 'sync-indicator-dot syncing'; }
    if (label) label.innerText = 'Sincronizando...';
    if (icon) icon.classList.add('syncing-spin');
  } else if (status === 'synced') {
    if (dot) { dot.className = 'sync-indicator-dot'; }
    if (label) label.innerText = 'Nube Conectada';
    if (icon) icon.classList.remove('syncing-spin');
    if (modalStatus) modalStatus.innerHTML = '<i class="fa-solid fa-circle-check" style="color: var(--success);"></i> En Línea / Sincronizado';
  } else {
    if (dot) { dot.className = 'sync-indicator-dot offline'; }
    if (label) label.innerText = 'Modo Local';
    if (icon) icon.classList.remove('syncing-spin');
    if (modalStatus) modalStatus.innerHTML = '<i class="fa-solid fa-triangle-exclamation" style="color: var(--warning);"></i> Sin conexión (Local)';
  }

  if (modalTime && lastSyncTimestamp) {
    modalTime.innerText = lastSyncTimestamp.toLocaleTimeString('es-ES');
  }
  if (modalQuotes) modalQuotes.innerText = `${(state.savedQuotes || []).length} presupuestos`;
  if (modalInvoices) modalInvoices.innerText = `${(state.savedInvoices || []).length} facturas`;
}

function initCloudSync() {
  // Sincronización inicial al abrir
  syncFetchFromCloud();

  // Polling automático cada 8 segundos para detectar cambios de otros dispositivos
  if (syncPollingInterval) clearInterval(syncPollingInterval);
  syncPollingInterval = setInterval(() => {
    syncFetchFromCloud();
  }, 8000);

  // Sincronizar al volver a la pestaña o ventana
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      syncFetchFromCloud();
    }
  });

  window.addEventListener('focus', () => {
    syncFetchFromCloud();
  });
}

function manualCloudSync(showToast = true) {
  syncFetchFromCloud(showToast);
}

function openSyncModal() {
  const modal = document.getElementById('modal-cloud-sync');
  if (modal) {
    updateSyncUI(isSyncing ? 'syncing' : 'synced');
    modal.classList.add('active');
  }
}

function closeSyncModal() {
  const modal = document.getElementById('modal-cloud-sync');
  if (modal) modal.classList.remove('active');
}

// Selector de Pestañas Principales (Cotizador, Historial, Aceptadas, Estadísticas)
function switchMainTab(tabKey) {
  state.activeMainTab = tabKey;

  const views = {
    cotizador: document.getElementById('view-cotizador'),
    historial: document.getElementById('view-historial'),
    aceptadas: document.getElementById('view-aceptadas'),
    estadisticas: document.getElementById('view-estadisticas'),
    facturacion: document.getElementById('view-facturacion')
  };

  const tabs = {
    cotizador: document.getElementById('tab-btn-cotizador'),
    historial: document.getElementById('tab-btn-historial'),
    aceptadas: document.getElementById('tab-btn-aceptadas'),
    estadisticas: document.getElementById('tab-btn-estadisticas')
  };

  // Al navegar en modo público, la barra azul muestra exclusivamente las 4 pestañas originales
  const publicNav = document.getElementById('public-top-nav-bar');
  const invoiceNav = document.getElementById('invoice-top-nav-bar');
  if (publicNav) publicNav.style.display = 'block';
  if (invoiceNav) invoiceNav.style.display = 'none';

  // Mostrar la vista seleccionada
  Object.keys(views).forEach(key => {
    if (views[key]) {
      if (key === tabKey) {
        views[key].style.display = (key === 'cotizador') ? 'grid' : 'block';
        views[key].style.visibility = 'visible';
        views[key].style.opacity = '1';
      } else {
        views[key].style.display = 'none';
      }
    }
    if (tabs[key]) {
      if (key === tabKey) tabs[key].classList.add('active');
      else tabs[key].classList.remove('active');
    }
  });

  if (tabKey === 'historial') {
    renderHistoryTable();
  } else if (tabKey === 'aceptadas') {
    renderAcceptedMovesView();
  } else if (tabKey === 'estadisticas') {
    renderStatisticsDashboard();
  } else if (tabKey === 'facturacion') {
    checkInvoiceAuthState();
    renderInvoiceItems();
    updateInvoiceTotals();
    renderInvoicesHistoryTable();
  }
}

// Abrir Modal de Inicio de Sesión de Facturación
function openLoginModal() {
  if (state.invoiceAuth.isAuthenticated) {
    switchToInvoiceMode();
    return;
  }
  
  const modal = document.getElementById('modal-invoice-login');
  if (modal) modal.classList.add('active');
  const userInput = document.getElementById('modal-input-user') || document.getElementById('input-login-user');
  if (userInput) userInput.focus();
}

function closeLoginModal() {
  const modal = document.getElementById('modal-invoice-login');
  if (modal) modal.classList.remove('active');
}

// Selector de las 2 Hojas del Módulo de Facturación
function switchInvoiceSubTab(subTabKey) {
  const viewEmitir = document.getElementById('subview-invoice-emitir');
  const viewRegistro = document.getElementById('subview-invoice-registro');
  
  // Pestañas superiores (Barra Azul)
  const tabEmitir = document.getElementById('tab-btn-invoice-emitir');
  const tabRegistro = document.getElementById('tab-btn-invoice-registro');

  // Pestañas internas (Panel de Facturación)
  const btnInnerEmitir = document.getElementById('btn-inner-invtab-emitir');
  const btnInnerRegistro = document.getElementById('btn-inner-invtab-registro');

  if (subTabKey === 'registro') {
    if (viewEmitir) viewEmitir.style.display = 'none';
    if (viewRegistro) viewRegistro.style.display = 'block';

    if (tabEmitir) tabEmitir.classList.remove('active');
    if (tabRegistro) tabRegistro.classList.add('active');

    if (btnInnerEmitir) {
      btnInnerEmitir.style.background = '#F1F5F9';
      btnInnerEmitir.style.color = 'var(--dark)';
      btnInnerEmitir.style.border = '1px solid var(--border)';
    }
    if (btnInnerRegistro) {
      btnInnerRegistro.style.background = 'var(--primary)';
      btnInnerRegistro.style.color = 'white';
      btnInnerRegistro.style.border = 'none';
    }

    renderInvoicesHistoryTable();
  } else {
    if (viewEmitir) viewEmitir.style.display = 'block';
    if (viewRegistro) viewRegistro.style.display = 'none';

    if (tabEmitir) tabEmitir.classList.add('active');
    if (tabRegistro) tabRegistro.classList.remove('active');

    if (btnInnerEmitir) {
      btnInnerEmitir.style.background = 'var(--primary)';
      btnInnerEmitir.style.color = 'white';
      btnInnerEmitir.style.border = 'none';
    }
    if (btnInnerRegistro) {
      btnInnerRegistro.style.background = '#F1F5F9';
      btnInnerRegistro.style.color = 'var(--dark)';
      btnInnerRegistro.style.border = '1px solid var(--border)';
    }

    renderInvoiceItems();
    updateInvoiceTotals();
  }
}

// Activar modo Facturación
function switchToInvoiceMode() {
  // 1. Ocultar todas las vistas públicas
  const publicViews = ['view-cotizador', 'view-historial', 'view-aceptadas', 'view-estadisticas'];
  publicViews.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  });

  // 2. Intercambiar la barra de navegación en la parte azul superior
  const publicNav = document.getElementById('public-top-nav-bar');
  const invoiceNav = document.getElementById('invoice-top-nav-bar');
  if (publicNav) {
    publicNav.style.display = 'none';
    publicNav.style.visibility = 'hidden';
  }
  if (invoiceNav) {
    invoiceNav.style.display = 'block';
    invoiceNav.style.visibility = 'visible';
    invoiceNav.style.opacity = '1';
  }

  // 3. Mostrar el Módulo de Facturación completo
  const factView = document.getElementById('view-facturacion');
  if (factView) {
    factView.style.display = 'block';
    factView.style.visibility = 'visible';
    factView.style.opacity = '1';
  }

  const dashWrapper = document.getElementById('invoice-dashboard-wrapper');
  if (dashWrapper) {
    dashWrapper.style.display = 'block';
    dashWrapper.style.visibility = 'visible';
    dashWrapper.style.opacity = '1';
  }

  const loginWrapper = document.getElementById('invoice-login-wrapper');
  if (loginWrapper) loginWrapper.style.display = 'none';

  // 4. Actualizar botones de cabecera superior
  const btnHeaderLogin = document.getElementById('btn-header-login');
  const headerAuthUser = document.getElementById('header-auth-user');
  if (btnHeaderLogin) btnHeaderLogin.style.display = 'none';
  if (headerAuthUser) headerAuthUser.style.display = 'inline-flex';

  // Activar la primera hoja de emisión por defecto
  switchInvoiceSubTab('emitir');
  updateInvoiceBadge();
}

function logoutInvoiceAdmin() {
  state.invoiceAuth.isAuthenticated = false;
  localStorage.removeItem('mg_invoice_auth');
  sessionStorage.removeItem('mg_invoice_auth');

  // 1. Ocultar facturación
  const factView = document.getElementById('view-facturacion');
  if (factView) {
    factView.style.display = 'none';
  }

  // 2. Restaurar inmediatamente la barra de navegación pública en la parte azul superior
  const publicNav = document.getElementById('public-top-nav-bar');
  const invoiceNav = document.getElementById('invoice-top-nav-bar');
  if (publicNav) {
    publicNav.style.display = 'block';
    publicNav.style.visibility = 'visible';
    publicNav.style.opacity = '1';
  }
  if (invoiceNav) {
    invoiceNav.style.display = 'none';
    invoiceNav.style.visibility = 'hidden';
  }

  // 3. Actualizar botones de cabecera superior
  const btnHeaderLogin = document.getElementById('btn-header-login');
  const headerAuthUser = document.getElementById('header-auth-user');
  if (btnHeaderLogin) btnHeaderLogin.style.display = 'inline-flex';
  if (headerAuthUser) headerAuthUser.style.display = 'none';

  // 4. Volver al cotizador con las 4 pestañas públicas intactas
  switchMainTab('cotizador');
}

// Selector de Modalidad Dual (Mudanza Integral vs Solo Transporte)
function switchServiceMode(mode) {
  state.serviceMode = mode;

  const btnMudanza = document.getElementById('btn-mode-mudanza');
  const btnTransporte = document.getElementById('btn-mode-transporte');
  const panelMudanza = document.getElementById('panel-mode-mudanza');
  const panelTransporte = document.getElementById('panel-mode-transporte');
  const activeLabel = document.getElementById('active-mode-label');
  const sidebarBadge = document.getElementById('sidebar-badge-mode');
  const sidebarRowVolume = document.getElementById('sidebar-row-volume');
  const sidebarRowExtras = document.getElementById('sidebar-row-extras');
  const labelCostLogistics = document.getElementById('label-cost-logistics');

  if (mode === 'mudanza') {
    btnMudanza?.classList.add('active');
    btnTransporte?.classList.remove('active');
    if (panelMudanza) panelMudanza.style.display = 'block';
    if (panelTransporte) panelTransporte.style.display = 'none';
    if (activeLabel) activeLabel.innerText = 'Modo: Mudanza Integral';
    if (sidebarBadge) sidebarBadge.innerText = 'MUDANZA';
    if (sidebarRowVolume) sidebarRowVolume.style.display = 'flex';
    if (sidebarRowExtras) sidebarRowExtras.style.display = 'flex';
    if (labelCostLogistics) labelCostLogistics.innerText = 'Costo Vehículos & Mozos:';
  } else {
    btnMudanza?.classList.remove('active');
    btnTransporte?.classList.add('active');
    if (panelMudanza) panelMudanza.style.display = 'none';
    if (panelTransporte) panelTransporte.style.display = 'block';
    if (activeLabel) activeLabel.innerText = 'Modo: Solo Transporte / Portes';
    if (sidebarBadge) sidebarBadge.innerText = 'SOLO TRANSPORTE';
    if (sidebarRowVolume) sidebarRowVolume.style.display = 'none';
    if (sidebarRowExtras) sidebarRowExtras.style.display = 'none';
    if (labelCostLogistics) labelCostLogistics.innerText = 'Flota 18 m³ + Asistencia:';
  }

  updateCalculations();
}

function selectTransportHelp(serviceType) {
  state.transportHelpService = serviceType;

  const cards = document.querySelectorAll('.cargo-option-card');
  cards.forEach(card => card.classList.remove('active'));

  const selectedCard = document.getElementById(`card-help-${serviceType === 'none' ? 'none' : (serviceType === 'driver_help' ? 'driver' : 'staff')}`);
  if (selectedCard) {
    selectedCard.classList.add('active');
    const radio = selectedCard.querySelector('input[type="radio"]');
    if (radio) radio.checked = true;
  }

  updateCalculations();
}

// Leaflet Interactive Map Initialization
function initMap() {
  const mapElement = document.getElementById('map');
  if (!mapElement) return;

  map = L.map('map').setView(state.originCoords, 11);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
  }).addTo(map);

  originMarker = L.marker(state.originCoords).addTo(map).bindPopup('<b>Origen</b>');
  destMarker = L.marker(state.destCoords).addTo(map).bindPopup('<b>Destino</b>');

  routeLine = L.polyline([state.originCoords, state.destCoords], {
    color: '#005DAA',
    weight: 5,
    opacity: 0.85,
    dashArray: '6, 6'
  }).addTo(map);

  map.fitBounds(routeLine.getBounds(), { padding: [35, 35] });
}

// Hybrid Geocoder: First checks Postal Code DB, then town names, then Nominatim
async function geocodeAddress(queryStr) {
  if (!queryStr || queryStr.trim().length < 2) return null;
  const q = queryStr.trim().toLowerCase();

  const cpMatch = q.match(/\b\d{5}\b/);
  if (cpMatch) {
    const cp = cpMatch[0];
    const foundByCp = POSTAL_CODES_DB.find(item => item.cp === cp);
    if (foundByCp) {
      return { name: foundByCp.name, lat: foundByCp.lat, lng: foundByCp.lng };
    }
  }

  const foundByName = POSTAL_CODES_DB.find(item => item.name.toLowerCase().includes(q) || q.includes(item.name.toLowerCase().split(' ')[2] || '___'));
  if (foundByName) {
    return { name: foundByName.name, lat: foundByName.lat, lng: foundByName.lng };
  }

  try {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(queryStr)}&countrycodes=es&limit=1`;
    const res = await fetch(url, { headers: { 'Accept-Language': 'es-ES,es;q=0.9' } });
    const data = await res.json();
    if (data && data.length > 0) {
      return {
        name: data[0].display_name,
        lat: parseFloat(data[0].lat),
        lng: parseFloat(data[0].lon)
      };
    }
  } catch (err) {
    console.warn('Geocoding fetch error:', err);
  }

  return null;
}

// Update Map markers, polyline route and calculate distance
async function updateFullRouteFromInputs() {
  const originInput = document.getElementById('client-origin');
  const destInput = document.getElementById('client-destination');
  const statusEl = document.getElementById('route-status-msg');

  const originText = originInput?.value.trim();
  const destText = destInput?.value.trim();

  if (!originText && !destText) return;

  if (statusEl) {
    statusEl.innerHTML = '<span style="color: var(--primary);"><i class="fa-solid fa-spinner fa-spin"></i> Obteniendo ubicación y actualizando mapa...</span>';
  }

  const [originGeo, destGeo] = await Promise.all([
    originText ? geocodeAddress(originText) : null,
    destText ? geocodeAddress(destText) : null
  ]);

  let updated = false;

  if (originGeo) {
    state.originCoords = [originGeo.lat, originGeo.lng];
    state.client.origin = originText;
    originMarker?.setLatLng(state.originCoords).setPopupContent(`<b>Origen:</b> ${originGeo.name}`);
    updated = true;
  }

  if (destGeo) {
    state.destCoords = [destGeo.lat, destGeo.lng];
    state.client.destination = destText;
    destMarker?.setLatLng(state.destCoords).setPopupContent(`<b>Destino:</b> ${destGeo.name}`);
    updated = true;
  }

  if (updated && map && routeLine) {
    routeLine.setLatLngs([state.originCoords, state.destCoords]);
    map.fitBounds(routeLine.getBounds(), { padding: [40, 40] });

    const p1 = L.latLng(state.originCoords);
    const p2 = L.latLng(state.destCoords);
    const meters = p1.distanceTo(p2);
    const roadKm = Math.max(1, (meters / 1000) * 1.3);
    state.distanceKm = parseFloat(roadKm.toFixed(1));

    const distInput = document.getElementById('input-distance-km');
    if (distInput) distInput.value = state.distanceKm;

    updateCalculations();

    if (statusEl) {
      statusEl.innerHTML = `<span style="color: var(--success);"><i class="fa-solid fa-circle-check"></i> Ruta actualizada: ${state.distanceKm} km</span>`;
    }
  } else if (statusEl) {
    statusEl.innerHTML = '<span style="color: var(--warning);"><i class="fa-solid fa-circle-exclamation"></i> Ingrese ambas ubicaciones para calcular la ruta.</span>';
  }
}

// Setup Autocomplete Dropdowns for Origin & Destination
function setupAutocomplete() {
  const originInput = document.getElementById('client-origin');
  const destInput = document.getElementById('client-destination');
  const originDropdown = document.getElementById('origin-suggestions');
  const destDropdown = document.getElementById('dest-suggestions');

  if (originInput && originDropdown) {
    originInput.addEventListener('input', (e) => {
      handleAutocompleteInput(e.target.value, originDropdown, true);
    });
    originInput.addEventListener('change', updateFullRouteFromInputs);
  }

  if (destInput && destDropdown) {
    destInput.addEventListener('input', (e) => {
      handleAutocompleteInput(e.target.value, destDropdown, false);
    });
    destInput.addEventListener('change', updateFullRouteFromInputs);
  }

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.autocomplete-wrapper')) {
      originDropdown?.classList.remove('active');
      destDropdown?.classList.remove('active');
    }
  });
}

function handleAutocompleteInput(query, dropdownEl, isOrigin) {
  const q = query.trim().toLowerCase();
  if (q.length < 2) {
    dropdownEl.classList.remove('active');
    return;
  }

  const localMatches = POSTAL_CODES_DB.filter(item => 
    item.cp.includes(q) || item.name.toLowerCase().includes(q)
  );

  if (localMatches.length > 0) {
    renderDropdownItems(localMatches, dropdownEl, (selected) => {
      if (isOrigin) {
        document.getElementById('client-origin').value = selected.name;
        state.client.origin = selected.name;
        state.originCoords = [selected.lat, selected.lng];
      } else {
        document.getElementById('client-destination').value = selected.name;
        state.client.destination = selected.name;
        state.destCoords = [selected.lat, selected.lng];
      }
      updateFullRouteFromInputs();
    });
    return;
  }

  if (isOrigin && debounceTimerOrigin) clearTimeout(debounceTimerOrigin);
  if (!isOrigin && debounceTimerDest) clearTimeout(debounceTimerDest);

  const timer = setTimeout(async () => {
    try {
      const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(q)}&countrycodes=es&limit=5`;
      const res = await fetch(url, { headers: { 'Accept-Language': 'es-ES,es;q=0.9' } });
      const data = await res.json();

      if (data && data.length > 0) {
        const items = data.map(d => ({
          name: d.display_name,
          lat: parseFloat(d.lat),
          lng: parseFloat(d.lon)
        }));

        renderDropdownItems(items, dropdownEl, (selected) => {
          if (isOrigin) {
            document.getElementById('client-origin').value = selected.name;
            state.client.origin = selected.name;
            state.originCoords = [selected.lat, selected.lng];
          } else {
            document.getElementById('client-destination').value = selected.name;
            state.client.destination = selected.name;
            state.destCoords = [selected.lat, selected.lng];
          }
          updateFullRouteFromInputs();
        });
      } else {
        dropdownEl.classList.remove('active');
      }
    } catch (e) {
      dropdownEl.classList.remove('active');
    }
  }, 350);

  if (isOrigin) debounceTimerOrigin = timer;
  else debounceTimerDest = timer;
}

function renderDropdownItems(items, dropdownEl, onSelectCallback) {
  dropdownEl.innerHTML = items.map(item => `
    <div class="suggestion-item">
      <i class="fa-solid fa-location-dot"></i>
      <span>${item.name}</span>
    </div>
  `).join('');

  dropdownEl.classList.add('active');

  const childElements = dropdownEl.querySelectorAll('.suggestion-item');
  childElements.forEach((el, index) => {
    el.addEventListener('click', () => {
      onSelectCallback(items[index]);
      dropdownEl.classList.remove('active');
    });
  });
}

// Main Navigation Tab Switcher (4 Pestañas)
function switchMainTab(tabName) {
  state.activeMainTab = tabName;

  const viewCotizador = document.getElementById('view-cotizador');
  const viewHistorial = document.getElementById('view-historial');
  const viewAceptadas = document.getElementById('view-aceptadas');
  const viewEstadisticas = document.getElementById('view-estadisticas');

  const tabBtnCotizador = document.getElementById('tab-btn-cotizador');
  const tabBtnHistorial = document.getElementById('tab-btn-historial');
  const tabBtnAceptadas = document.getElementById('tab-btn-aceptadas');
  const tabBtnEstadisticas = document.getElementById('tab-btn-estadisticas');

  viewCotizador.style.display = 'none';
  viewHistorial.style.display = 'none';
  viewAceptadas.style.display = 'none';
  viewEstadisticas.style.display = 'none';

  tabBtnCotizador.classList.remove('active');
  tabBtnHistorial.classList.remove('active');
  tabBtnAceptadas.classList.remove('active');
  tabBtnEstadisticas.classList.remove('active');

  if (tabName === 'cotizador') {
    viewCotizador.style.display = 'grid';
    tabBtnCotizador.classList.add('active');
    if (map) {
      setTimeout(() => map.invalidateSize(), 200);
    }
  } else if (tabName === 'historial') {
    viewHistorial.style.display = 'grid';
    tabBtnHistorial.classList.add('active');
    renderHistoryTable();
  } else if (tabName === 'aceptadas') {
    viewAceptadas.style.display = 'grid';
    tabBtnAceptadas.classList.add('active');
    renderAcceptedMovesView();
  } else if (tabName === 'estadisticas') {
    viewEstadisticas.style.display = 'grid';
    tabBtnEstadisticas.classList.add('active');
    renderStatisticsDashboard();
  }
}

// Event Listeners Setup
function setupEventListeners() {
  document.getElementById('input-search')?.addEventListener('input', (e) => {
    state.searchQuery = e.target.value.toLowerCase().trim();
    renderItems();
  });

  // Buscador y Filtro por Estado en Historial
  document.getElementById('history-search-input')?.addEventListener('input', (e) => {
    state.historySearchQuery = e.target.value.toLowerCase().trim();
    renderHistoryTable();
  });

  document.getElementById('history-status-filter')?.addEventListener('change', (e) => {
    state.historyStatusFilter = e.target.value;
    renderHistoryTable();
  });

  // Solo Transporte: Stepper de Camiones de 18 m3 y Tarifa Editable
  document.getElementById('btn-transport-truck-minus')?.addEventListener('click', () => {
    if (state.transportTrucksQty > 1) {
      state.transportTrucksQty--;
      updateCalculations();
    }
  });

  document.getElementById('btn-transport-truck-plus')?.addEventListener('click', () => {
    state.transportTrucksQty++;
    updateCalculations();
  });

  document.getElementById('price-transport-per-truck')?.addEventListener('input', (e) => {
    state.priceTransportPerTruck = parseFloat(e.target.value) || 0;
    updateCalculations();
  });

  // Solo Transporte: Bultos y Peso (Opcional)
  document.getElementById('transport-cargo-units')?.addEventListener('input', (e) => {
    state.transportCargoUnits = e.target.value;
  });

  document.getElementById('transport-cargo-weight')?.addEventListener('input', (e) => {
    state.transportCargoWeight = e.target.value;
  });

  // Solo Transporte: Precios Editables de Asistencia
  document.getElementById('price-help-none')?.addEventListener('input', (e) => {
    state.priceHelpNone = parseFloat(e.target.value) || 0;
    updateCalculations();
  });

  document.getElementById('price-help-driver')?.addEventListener('input', (e) => {
    state.priceHelpDriver = parseFloat(e.target.value) || 0;
    updateCalculations();
  });

  document.getElementById('price-help-staff')?.addEventListener('input', (e) => {
    state.priceHelpStaff = parseFloat(e.target.value) || 0;
    updateCalculations();
  });

  // Mudanza Integral: Tarifas Editables
  document.getElementById('price-per-m3')?.addEventListener('input', (e) => {
    state.pricePerM3 = parseFloat(e.target.value) || 0;
    updateCalculations();
  });

  document.getElementById('price-per-truck')?.addEventListener('input', (e) => {
    state.pricePerTruck = parseFloat(e.target.value) || 0;
    updateCalculations();
  });

  document.getElementById('price-per-staff')?.addEventListener('input', (e) => {
    state.pricePerStaff = parseFloat(e.target.value) || 0;
    updateCalculations();
  });

  document.getElementById('price-per-floor')?.addEventListener('input', (e) => {
    state.pricePerFloor = parseFloat(e.target.value) || 0;
    updateCalculations();
  });

  document.getElementById('price-packing-rate')?.addEventListener('input', (e) => {
    state.pricePackingRate = parseFloat(e.target.value) || 0;
    updateCalculations();
  });

  document.getElementById('price-disassembly-rate')?.addEventListener('input', (e) => {
    state.priceDisassemblyRate = parseFloat(e.target.value) || 0;
    updateCalculations();
  });

  document.getElementById('input-distance-km')?.addEventListener('input', (e) => {
    state.distanceKm = parseFloat(e.target.value) || 0;
    updateCalculations();
  });

  document.getElementById('input-price-per-km')?.addEventListener('input', (e) => {
    state.pricePerKm = parseFloat(e.target.value) || 0;
    updateCalculations();
  });

  document.getElementById('btn-calc-route')?.addEventListener('click', updateFullRouteFromInputs);

  const checkCustomTotal = document.getElementById('check-custom-total');
  const customTotalGroup = document.getElementById('custom-total-group');
  const inputCustomTotal = document.getElementById('input-custom-total');

  checkCustomTotal?.addEventListener('change', (e) => {
    state.isCustomTotalActive = e.target.checked;
    customTotalGroup.style.display = e.target.checked ? 'block' : 'none';
    if (e.target.checked && !inputCustomTotal.value) {
      inputCustomTotal.value = calculateSuggestedGrandTotal().toFixed(2);
      state.customGrandTotal = calculateSuggestedGrandTotal();
    }
    updateCalculations();
  });

  inputCustomTotal?.addEventListener('input', (e) => {
    state.customGrandTotal = parseFloat(e.target.value) || 0;
    updateCalculations();
  });

  document.getElementById('select-floor')?.addEventListener('change', (e) => {
    state.accessFloor = parseInt(e.target.value, 10);
    recalculateLogistics();
    updateCalculations();
  });

  document.getElementById('select-elevator')?.addEventListener('change', (e) => {
    state.hasElevator = e.target.value === 'yes';
    recalculateLogistics();
    updateCalculations();
  });

  document.getElementById('check-packing')?.addEventListener('change', (e) => {
    state.packingService = e.target.checked;
    updateCalculations();
  });

  document.getElementById('check-disassembly')?.addEventListener('change', (e) => {
    state.disassemblyService = e.target.checked;
    updateCalculations();
  });

  document.getElementById('btn-truck-minus')?.addEventListener('click', () => {
    if (state.userTrucks > 1) {
      state.userTrucks--;
      state.manualTruckOverride = true;
      updateCalculations();
    }
  });

  document.getElementById('btn-truck-plus')?.addEventListener('click', () => {
    state.userTrucks++;
    state.manualTruckOverride = true;
    updateCalculations();
  });

  document.getElementById('btn-staff-minus')?.addEventListener('click', () => {
    if (state.userStaff > 1) {
      state.userStaff--;
      state.manualStaffOverride = true;
      updateCalculations();
    }
  });

  document.getElementById('btn-staff-plus')?.addEventListener('click', () => {
    state.userStaff++;
    state.manualStaffOverride = true;
    updateCalculations();
  });

  document.getElementById('btn-reset-logistics')?.addEventListener('click', () => {
    state.manualTruckOverride = false;
    state.manualStaffOverride = false;
    recalculateLogistics();
    updateCalculations();
  });

  const clientFields = ['name', 'phone', 'email', 'date', 'origin', 'destination', 'notes'];
  clientFields.forEach(field => {
    const el = document.getElementById(`client-${field}`);
    if (el) {
      el.addEventListener('input', (e) => {
        state.client[field] = e.target.value;
      });
    }
  });

  document.getElementById('btn-save-quote')?.addEventListener('click', saveQuoteToHistory);
  document.getElementById('btn-export-pdf')?.addEventListener('click', exportToPDF);

  // Modal Custom Item
  const btnOpenModal = document.getElementById('btn-open-custom-modal');
  const modalOverlay = document.getElementById('modal-custom-item');
  const btnCloseModal = document.getElementById('btn-close-modal');

  btnOpenModal?.addEventListener('click', () => {
    populateCustomRoomSelect();
    modalOverlay?.classList.add('active');
  });

  btnCloseModal?.addEventListener('click', () => {
    modalOverlay?.classList.remove('active');
  });

  modalOverlay?.addEventListener('click', (e) => {
    if (e.target === modalOverlay) modalOverlay.classList.remove('active');
  });

  document.getElementById('form-custom-item')?.addEventListener('submit', (e) => {
    e.preventDefault();
    handleAddCustomItem();
  });

  // Modal Edit Item M3 (Lápiz)
  const modalEditM3 = document.getElementById('modal-edit-m3');
  const btnCloseEditM3 = document.getElementById('btn-close-edit-m3');

  btnCloseEditM3?.addEventListener('click', () => {
    modalEditM3?.classList.remove('active');
  });

  modalEditM3?.addEventListener('click', (e) => {
    if (e.target === modalEditM3) modalEditM3.classList.remove('active');
  });

  document.getElementById('form-edit-m3')?.addEventListener('submit', (e) => {
    e.preventDefault();
    handleSaveItemM3();
  });
}

// 1. Restablecer valores y limpiar el cotizador completo a cero
function resetQuoterValues() {
  try {
    // Poner a 0 las cantidades del inventario en todas las estancias
    if (state.rooms && Array.isArray(state.rooms)) {
      state.rooms.forEach(room => {
        if (room.items && Array.isArray(room.items)) {
          room.items.forEach(item => {
            item.qty = 0;
          });
        }
      });
    }
    state.customItems = [];

    // Limpiar campos del cliente
    state.client = {
      name: '',
      phone: '',
      email: '',
      date: new Date().toISOString().split('T')[0],
      origin: '28001 - Madrid (Barrio Salamanca)',
      destination: '28004 - Madrid (Centro / Malasaña)',
      notes: '',
      originFloor: 0,
      destFloor: 0,
      serviceDate: new Date().toISOString().split('T')[0]
    };

    const clientName = document.getElementById('client-name');
    const clientPhone = document.getElementById('client-phone');
    const clientEmail = document.getElementById('client-email');
    const clientDate = document.getElementById('client-date');
    const clientNotes = document.getElementById('client-notes');
    const clientOrigin = document.getElementById('client-origin');
    const clientDest = document.getElementById('client-destination');

    if (clientName) clientName.value = '';
    if (clientPhone) clientPhone.value = '';
    if (clientEmail) clientEmail.value = '';
    if (clientDate) clientDate.value = new Date().toISOString().split('T')[0];
    if (clientNotes) clientNotes.value = '';
    if (clientOrigin) clientOrigin.value = '28001 - Madrid (Barrio Salamanca)';
    if (clientDest) clientDest.value = '28004 - Madrid (Centro / Malasaña)';

    // Restablecer accesos, plantas y ascensor
    state.hasElevator = true;
    state.accessFloor = 0;
    state.packingService = false;
    state.disassemblyService = false;
    state.manualTruckOverride = false;
    state.manualStaffOverride = false;

    const selectElevator = document.getElementById('select-elevator');
    const selectFloor = document.getElementById('select-floor');
    const checkPacking = document.getElementById('check-packing');
    const checkDisassembly = document.getElementById('check-disassembly');

    if (selectElevator) selectElevator.value = 'yes';
    if (selectFloor) selectFloor.value = '0';
    if (checkPacking) checkPacking.checked = false;
    if (checkDisassembly) checkDisassembly.checked = false;

    // Restablecer ajuste de precio final
    state.isCustomTotalActive = false;
    state.customGrandTotal = 0;
    const checkCustomTotal = document.getElementById('check-custom-total');
    const customTotalGroup = document.getElementById('custom-total-group');
    const inputCustomTotal = document.getElementById('input-custom-total');
    if (checkCustomTotal) checkCustomTotal.checked = false;
    if (customTotalGroup) customTotalGroup.style.display = 'none';
    if (inputCustomTotal) inputCustomTotal.value = '';

    // Restablecer opciones de Solo Transporte
    state.transportTrucksQty = 1;
    state.priceTransportPerTruck = 280;
    state.transportHelpersQty = 1;
    state.transportHelperPrice = 60;
    state.transportHasDriver = true;
    state.transportDriverPrice = 40;
    state.transportHasBoxes = false;
    state.transportBoxesPrice = 35;
    state.transportCargoUnits = '';
    state.transportWeightKg = '';

    const inputTrucks = document.getElementById('input-transport-trucks');
    const inputTruckPrice = document.getElementById('price-transport-per-truck');
    const inputCargoUnits = document.getElementById('transport-cargo-units');
    const inputCargoWeight = document.getElementById('transport-cargo-weight');
    if (inputTrucks) inputTrucks.value = '1';
    if (inputTruckPrice) inputTruckPrice.value = '280';
    if (inputCargoUnits) inputCargoUnits.value = '';
    if (inputCargoWeight) inputCargoWeight.value = '';

    renderRoomTabs();
    renderItems();
    recalculateLogistics();
    updateCalculations();

    alert('Valores del cotizador restablecidos correctamente a cero.');
  } catch (err) {
    console.error('Error al restablecer valores:', err);
  }
}

// 2. Exportar presupuestos filtrados a formato Excel (.CSV compatible con Excel)
function exportFilteredQuotesToExcel() {
  const searchVal = document.getElementById('history-search-input')?.value.toLowerCase().trim() || '';
  const statusFilter = document.getElementById('history-status-filter')?.value || 'all';

  let quotesToExport = [...state.savedQuotes];

  // Filtrar por estado si aplica
  if (statusFilter !== 'all') {
    quotesToExport = quotesToExport.filter(q => {
      if (statusFilter === 'Completado') {
        return q.status === 'Completado' || q.status === 'Realizada';
      }
      return q.status === statusFilter;
    });
  }

  // Filtrar por búsqueda si aplica
  if (searchVal) {
    quotesToExport = quotesToExport.filter(q => {
      const idMatch = (q.id || '').toLowerCase().includes(searchVal);
      const nameMatch = (q.client?.name || '').toLowerCase().includes(searchVal);
      const modeMatch = (q.serviceMode || '').toLowerCase().includes(searchVal);
      const phoneMatch = (q.client?.phone || '').includes(searchVal);
      const originMatch = (q.client?.origin || '').toLowerCase().includes(searchVal);
      const destMatch = (q.client?.destination || '').toLowerCase().includes(searchVal);
      return idMatch || nameMatch || modeMatch || phoneMatch || originMatch || destMatch;
    });
  }

  if (quotesToExport.length === 0) {
    alert(`No hay presupuestos para exportar con los filtros seleccionados (Estado: ${statusFilter}).`);
    return;
  }

  // Encabezados en español
  const headers = [
    'Nº Presupuesto',
    'Modalidad',
    'Cliente',
    'Telefono',
    'Email',
    'Origen',
    'Destino',
    'Distancia (km)',
    'Volumen / Flota',
    'Fecha Cotizacion',
    'Fecha Servicio',
    'Importe Final (€)',
    'Estado'
  ];

  const rows = quotesToExport.map(q => {
    const isTransport = q.serviceMode === 'transporte';
    const volumeDesc = isTransport 
      ? `${q.transportOptions?.trucksQty || 1} Camion/es 18m3` 
      : `${(q.totalM3 || 0).toFixed(2)} m3`;
    const modeName = isTransport ? 'Solo Transporte' : 'Mudanza Integral';

    return [
      `"${q.id || ''}"`,
      `"${modeName}"`,
      `"${(q.client?.name || 'Cliente Particular').replace(/"/g, '""')}"`,
      `"${q.client?.phone || ''}"`,
      `"${q.client?.email || ''}"`,
      `"${(q.client?.origin || '').replace(/"/g, '""')}"`,
      `"${(q.client?.destination || '').replace(/"/g, '""')}"`,
      `${q.distanceKm || 0}`,
      `"${volumeDesc}"`,
      `"${q.createdAt ? new Date(q.createdAt).toLocaleDateString('es-ES') : ''}"`,
      `"${q.client?.serviceDate || q.client?.date || ''}"`,
      `${(q.finalPrice || 0).toFixed(2)}`,
      `"${q.status || 'Pendiente'}"`
    ].join(';');
  });

  // UTF-8 BOM (\uFEFF) para apertura directa en Microsoft Excel con tildes y caracteres correctos
  const csvContent = '\uFEFF' + [headers.join(';'), ...rows].join('\r\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const sanitizedFilter = (statusFilter === 'all' ? 'Todos' : statusFilter).replace(/[^a-zA-Z0-9]/g, '_');
  a.href = url;
  a.download = `MG_Presupuestos_${sanitizedFilter}_${new Date().toISOString().split('T')[0]}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function renderRoomTabs() {
  const container = document.getElementById('room-tabs-container');
  if (!container) return;

  const totalItemsCount = getTotalItemsCount();

  let html = `
    <button class="room-tab ${state.activeRoomId === 'all' ? 'active' : ''}" onclick="switchRoom('all')">
      <i class="fa-solid fa-layer-group"></i> Todas las Estancias
      <span class="tab-badge">${totalItemsCount}</span>
    </button>
  `;

  state.rooms.forEach(room => {
    const roomCount = room.items.reduce((sum, item) => sum + item.qty, 0);
    html += `
      <button class="room-tab ${state.activeRoomId === room.id ? 'active' : ''}" onclick="switchRoom('${room.id}')">
        <i class="fa-solid ${room.icon}"></i> ${room.name}
        <span class="tab-badge">${roomCount}</span>
      </button>
    `;
  });

  container.innerHTML = html;
}

function switchRoom(roomId) {
  state.activeRoomId = roomId;
  renderRoomTabs();
  renderItems();
}

function renderItems() {
  const container = document.getElementById('items-grid-container');
  if (!container) return;

  let itemsToRender = [];

  state.rooms.forEach(room => {
    if (state.activeRoomId === 'all' || state.activeRoomId === room.id) {
      room.items.forEach(item => {
        if (!state.searchQuery || item.name.toLowerCase().includes(state.searchQuery)) {
          itemsToRender.push({ ...item, roomId: room.id, roomName: room.name });
        }
      });
    }
  });

  if (itemsToRender.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
        <i class="fa-solid fa-box-open" style="font-size: 2.5rem; margin-bottom: 0.75rem; color: var(--border-focus);"></i>
        <p>No se encontraron muebles u objetos en esta vista.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = itemsToRender.map(item => `
    <div class="item-card ${item.qty > 0 ? 'has-qty' : ''} animated-item">
      <div class="item-header">
        <div class="item-icon">
          <i class="fa-solid ${item.icon}"></i>
        </div>
        <div class="item-info">
          <div class="item-name">${item.name}</div>
          <div class="item-m3-row">
            <span class="item-m3"><i class="fa-solid fa-cube"></i> ${item.m3.toFixed(2)} m³/ud</span>
            <button class="btn-edit-m3" onclick="openEditM3Modal('${item.roomId}', '${item.id}')" title="Editar m³ de este objeto">
              <i class="fa-solid fa-pen"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="item-footer">
        <div class="subtotal-m3">
          ${item.qty > 0 ? `Subtotal: ${(item.qty * item.m3).toFixed(2)} m³` : ''}
        </div>
        <div class="qty-controls">
          <button class="btn-qty" onclick="changeQty('${item.roomId}', '${item.id}', -1)">-</button>
          <input type="number" class="qty-input" value="${item.qty}" min="0" onchange="setQty('${item.roomId}', '${item.id}', this.value)">
          <button class="btn-qty" onclick="changeQty('${item.roomId}', '${item.id}', 1)">+</button>
        </div>
      </div>
    </div>
  `).join('');
}

function openEditM3Modal(roomId, itemId) {
  const room = state.rooms.find(r => r.id === roomId);
  if (!room) return;
  const item = room.items.find(i => i.id === itemId);
  if (!item) return;

  state.editingItemRoomId = roomId;
  state.editingItemId = itemId;

  document.getElementById('edit-m3-item-name').innerText = `${item.name} (${room.name})`;
  document.getElementById('input-edit-m3-val').value = item.m3;

  document.getElementById('modal-edit-m3')?.classList.add('active');
}

function handleSaveItemM3() {
  const newVal = parseFloat(document.getElementById('input-edit-m3-val').value);
  if (isNaN(newVal) || newVal <= 0) {
    alert('Por favor, introduzca un valor de volumen en m³ válido y mayor a 0.');
    return;
  }

  const room = state.rooms.find(r => r.id === state.editingItemRoomId);
  if (room) {
    const item = room.items.find(i => i.id === state.editingItemId);
    if (item) {
      item.m3 = newVal;
      document.getElementById('modal-edit-m3')?.classList.remove('active');
      renderRoomTabs();
      renderItems();
      recalculateLogistics();
      updateCalculations();
    }
  }
}

function changeQty(roomId, itemId, delta) {
  const room = state.rooms.find(r => r.id === roomId);
  if (!room) return;
  const item = room.items.find(i => i.id === itemId);
  if (!item) return;

  item.qty = Math.max(0, item.qty + delta);
  renderRoomTabs();
  renderItems();
  recalculateLogistics();
  updateCalculations();
}

function setQty(roomId, itemId, value) {
  const room = state.rooms.find(r => r.id === roomId);
  if (!room) return;
  const item = room.items.find(i => i.id === itemId);
  if (!item) return;

  item.qty = Math.max(0, parseInt(value, 10) || 0);
  renderRoomTabs();
  renderItems();
  recalculateLogistics();
  updateCalculations();
}

function calculateTotalM3() {
  let total = 0;
  state.rooms.forEach(room => {
    room.items.forEach(item => {
      total += item.qty * item.m3;
    });
  });
  return total;
}

function getTotalItemsCount() {
  let count = 0;
  state.rooms.forEach(room => {
    room.items.forEach(item => {
      count += item.qty;
    });
  });
  return count;
}

// Logística de Flota con Camiones Estándar de 18 m3 exclusivamente
function recalculateLogistics() {
  const totalM3 = calculateTotalM3();

  if (totalM3 === 0) {
    state.suggestedTrucks = 1;
  } else if (totalM3 <= 18) {
    state.suggestedTrucks = 1;
  } else {
    state.suggestedTrucks = Math.ceil(totalM3 / state.truckCapacityM3);
  }

  if (!state.manualTruckOverride) {
    state.userTrucks = state.suggestedTrucks;
  }

  if (totalM3 === 0) {
    state.suggestedStaff = 2;
  } else if (totalM3 <= 14) {
    state.suggestedStaff = 2;
  } else if (totalM3 <= 28) {
    state.suggestedStaff = 3;
  } else {
    state.suggestedStaff = 3 + Math.ceil((totalM3 - 28) / 18);
  }

  if (state.accessFloor > 2 && !state.hasElevator) {
    state.suggestedStaff += 1;
  }

  if (!state.manualStaffOverride) {
    state.userStaff = state.suggestedStaff;
  }
}

// Cálculo Dual (Mudanza vs Solo Transporte)
function calculateSuggestedGrandTotal() {
  const distanceCost = state.distanceKm * state.pricePerKm;

  if (state.serviceMode === 'transporte') {
    const trucksCost = state.transportTrucksQty * state.priceTransportPerTruck;
    let helpFee = state.priceHelpNone;
    if (state.transportHelpService === 'driver_help') helpFee = state.priceHelpDriver;
    else if (state.transportHelpService === 'driver_plus_staff') helpFee = state.priceHelpStaff;

    return trucksCost + distanceCost + helpFee;
  }

  // Modo Mudanza Integral
  const totalM3 = calculateTotalM3();
  const baseVolumePrice = totalM3 * state.pricePerM3;
  const trucksCost = state.userTrucks * state.pricePerTruck;
  const staffCost = state.userStaff * state.pricePerStaff;

  let floorFee = (!state.hasElevator && state.accessFloor > 0) ? (state.accessFloor * state.pricePerFloor) : 0;
  let packingFee = state.packingService ? (totalM3 * state.pricePackingRate) : 0;
  let disassemblyFee = state.disassemblyService ? state.priceDisassemblyRate : 0;

  return baseVolumePrice + distanceCost + trucksCost + staffCost + floorFee + packingFee + disassemblyFee;
}

function updateCalculations() {
  const distanceCost = state.distanceKm * state.pricePerKm;
  const suggestedTotal = calculateSuggestedGrandTotal();
  const effectiveGrandTotal = state.isCustomTotalActive ? state.customGrandTotal : suggestedTotal;

  document.getElementById('display-dist-km').innerText = `${state.distanceKm.toFixed(1)} km`;
  document.getElementById('display-cost-dist').innerText = `${distanceCost.toFixed(2)} €`;
  document.getElementById('display-suggested-total').innerText = `${suggestedTotal.toFixed(2)} €`;
  document.getElementById('display-grand-total').innerText = `${effectiveGrandTotal.toFixed(2)} €`;

  if (state.serviceMode === 'transporte') {
    const trucksCost = state.transportTrucksQty * state.priceTransportPerTruck;
    let helpFee = state.priceHelpNone;
    if (state.transportHelpService === 'driver_help') helpFee = state.priceHelpDriver;
    else if (state.transportHelpService === 'driver_plus_staff') helpFee = state.priceHelpStaff;
    const transportBaseCost = trucksCost + helpFee;

    document.getElementById('display-cost-logistics').innerText = `${transportBaseCost.toFixed(2)} €`;
    document.getElementById('val-transport-trucks-qty').innerText = state.transportTrucksQty;
    document.getElementById('transport-trucks-desc').innerText = `${state.transportTrucksQty} Camión/es de 18 m³`;
    document.getElementById('transport-trucks-sub').innerText = `Capacidad hasta ${state.transportTrucksQty * 1500} kg • ${state.transportTrucksQty * 18} m³`;
    document.getElementById('badge-transport-capacity').innerText = `${state.transportTrucksQty * 18} m³ de Capacidad Total`;
  } else {
    const totalM3 = calculateTotalM3();
    const totalItems = getTotalItemsCount();
    const logisticsCost = (state.userTrucks * state.pricePerTruck) + (state.userStaff * state.pricePerStaff);

    let floorFee = (!state.hasElevator && state.accessFloor > 0) ? (state.accessFloor * state.pricePerFloor) : 0;
    let packingFee = state.packingService ? (totalM3 * state.pricePackingRate) : 0;
    let disassemblyFee = state.disassemblyService ? state.priceDisassemblyRate : 0;
    const extrasCost = floorFee + packingFee + disassemblyFee;

    document.getElementById('display-total-m3').innerText = `${totalM3.toFixed(2)} m³`;
    document.getElementById('display-cost-logistics').innerText = `${logisticsCost.toFixed(2)} €`;
    document.getElementById('display-cost-extras').innerText = `${extrasCost.toFixed(2)} €`;

    const floorBadgeText = document.getElementById('floor-surcharge-text');
    const floorBadgeAmount = document.getElementById('floor-surcharge-amount');
    if (floorBadgeText && floorBadgeAmount) {
      if (!state.hasElevator && state.accessFloor > 0) {
        floorBadgeText.innerHTML = `<i class="fa-solid fa-triangle-exclamation" style="color: var(--warning);"></i> <strong>Recargo por escalera:</strong> ${state.accessFloor}ª planta sin ascensor (${state.pricePerFloor} €/planta)`;
        floorBadgeAmount.innerText = `+${floorFee.toFixed(2)} €`;
        floorBadgeAmount.style.color = 'var(--warning)';
      } else {
        floorBadgeText.innerHTML = `<i class="fa-solid fa-circle-check" style="color: var(--success);"></i> <strong>Estado de accesos:</strong> Planta baja o con ascensor (Sin recargo)`;
        floorBadgeAmount.innerText = `+0.00 €`;
        floorBadgeAmount.style.color = 'var(--success)';
      }
    }

    document.getElementById('suggested-trucks-text').innerText = `${state.suggestedTrucks} camión/es 18m³ (Sugerido)`;
    document.getElementById('val-trucks-qty').innerText = state.userTrucks;
    
    document.getElementById('suggested-staff-text').innerText = `${state.suggestedStaff} operarios (Sugerido)`;
    document.getElementById('val-staff-qty').innerText = state.userStaff;

    let truckDesc = "Camión / Furgón 18 m³";
    if (state.userTrucks > 1) {
      truckDesc = `Flota de ${state.userTrucks} Camiones (18 m³ c/u - Capacidad ${state.userTrucks * 18} m³)`;
    }
    document.getElementById('truck-type-desc').innerText = truckDesc;

    document.getElementById('badge-selected-items').innerText = `${totalItems} seleccionados`;
  }
}

function populateCustomRoomSelect() {
  const select = document.getElementById('select-custom-room');
  if (!select) return;

  select.innerHTML = state.rooms.map(r => `
    <option value="${r.id}">${r.name}</option>
  `).join('');
}

function handleAddCustomItem() {
  const nameInput = document.getElementById('custom-item-name');
  const m3Input = document.getElementById('custom-item-m3');
  const roomSelect = document.getElementById('select-custom-room');
  const qtyInput = document.getElementById('custom-item-qty');

  const name = nameInput.value.trim();
  const m3 = parseFloat(m3Input.value);
  const roomId = roomSelect.value;
  const qty = parseInt(qtyInput.value, 10) || 1;

  if (!name || isNaN(m3) || m3 <= 0) {
    alert('Por favor, introduzca un nombre válido y un volumen en m³ mayor a 0.');
    return;
  }

  const room = state.rooms.find(r => r.id === roomId);
  if (room) {
    const newItem = {
      id: `custom-${Date.now()}`,
      name: name,
      m3: m3,
      icon: 'fa-cube',
      qty: qty
    };
    room.items.push(newItem);

    nameInput.value = '';
    m3Input.value = '';
    qtyInput.value = '1';

    document.getElementById('modal-custom-item').classList.remove('active');
    renderRoomTabs();
    renderItems();
    recalculateLogistics();
    updateCalculations();
  }
}

// ==========================================================================
// HISTORIAL DE PRESUPUESTOS, FILTROS Y ESTADÍSTICAS
// ==========================================================================

function updateHistoryBadge() {
  const badgeHistory = document.getElementById('history-count-badge');
  const totalHistoryText = document.getElementById('history-total-count');

  const badgeAccepted = document.getElementById('accepted-count-badge');
  const totalAcceptedText = document.getElementById('accepted-total-count');

  const badgeCompleted = document.getElementById('completed-count-badge');
  const totalCompletedBadge = document.getElementById('stats-total-badge');

  const quotes = (state.savedQuotes || []).filter(q => q && typeof q === 'object');
  const acceptedCount = quotes.filter(q => q.status === 'Aceptado').length;
  const completedCount = quotes.filter(q => q.status === 'Completado' || q.status === 'Realizada').length;
  const operationalCount = quotes.filter(q => q.status === 'Aceptado' || q.status === 'Completado' || q.status === 'Realizada').length;

  if (badgeHistory) badgeHistory.innerText = quotes.length;
  if (totalHistoryText) totalHistoryText.innerText = `${quotes.length} presupuestos registrados`;

  if (badgeAccepted) badgeAccepted.innerText = acceptedCount;
  if (totalAcceptedText) totalAcceptedText.innerText = `${acceptedCount} servicios confirmados`;

  if (badgeCompleted) badgeCompleted.innerText = completedCount;
  if (totalCompletedBadge) totalCompletedBadge.innerText = `${operationalCount} servicios en registro`;
}

function saveQuoteToHistory() {
  const isTransport = state.serviceMode === 'transporte';
  const totalM3 = calculateTotalM3();

  if (!isTransport && totalM3 === 0) {
    alert('Por favor, seleccione al menos un mueble u objeto para cotizar la mudanza.');
    return;
  }

  const suggestedTotal = calculateSuggestedGrandTotal();
  const finalPrice = state.isCustomTotalActive ? state.customGrandTotal : suggestedTotal;
  const quoteId = `PRE-${Math.floor(100000 + Math.random() * 900000)}`;

  const quoteRecord = {
    id: quoteId,
    serviceMode: state.serviceMode,
    timestamp: new Date().toISOString(),
    formattedDate: new Date().toLocaleDateString('es-ES'),
    completedDate: null,
    client: { ...state.client },
    totalM3: isTransport ? (state.transportTrucksQty * 18) : totalM3,
    totalItems: isTransport ? (state.transportCargoUnits || 'General') : getTotalItemsCount(),
    distanceKm: state.distanceKm,
    pricePerKm: state.pricePerKm,
    pricePerM3: state.pricePerM3,
    pricePerTruck: isTransport ? state.priceTransportPerTruck : state.pricePerTruck,
    pricePerStaff: state.pricePerStaff,
    trucks: isTransport ? state.transportTrucksQty : state.userTrucks,
    staff: isTransport ? (state.transportHelpService === 'driver_plus_staff' ? 2 : 1) : state.userStaff,
    transportTrucksQty: isTransport ? state.transportTrucksQty : null,
    priceTransportPerTruck: isTransport ? state.priceTransportPerTruck : null,
    transportCargoUnits: isTransport ? state.transportCargoUnits : null,
    transportCargoWeight: isTransport ? state.transportCargoWeight : null,
    transportHelpService: isTransport ? state.transportHelpService : null,
    suggestedTotal: suggestedTotal,
    finalPrice: finalPrice,
    isManualPrice: state.isCustomTotalActive,
    status: 'Pendiente',
    roomsSnapshot: JSON.parse(JSON.stringify(state.rooms))
  };

  state.savedQuotes.unshift(quoteRecord);
  localStorage.setItem('mg_quotes_history', JSON.stringify(state.savedQuotes));
  syncPushToCloud();

  updateHistoryBadge();
  alert(`✅ Presupuesto ${quoteId} (${isTransport ? 'SOLO TRANSPORTE' : 'MUDANZA'}) guardado con éxito en el Historial.`);
  switchMainTab('historial');
}

function updateQuoteStatus(quoteId, newStatus) {
  const quote = state.savedQuotes.find(q => q.id === quoteId);
  if (quote) {
    quote.status = newStatus;
    if (newStatus === 'Completado' || newStatus === 'Realizada') {
      quote.completedDate = new Date().toLocaleDateString('es-ES');
    }
    localStorage.setItem('mg_quotes_history', JSON.stringify(state.savedQuotes));
    syncPushToCloud();
    updateHistoryBadge();

    if (state.activeMainTab === 'historial') {
      renderHistoryTable();
    } else if (state.activeMainTab === 'aceptadas') {
      renderAcceptedMovesView();
    } else if (state.activeMainTab === 'estadisticas') {
      renderStatisticsDashboard();
    }
  }
}

function markMoveAsCompleted(quoteId) {
  if (confirm(`¿Confirmar que el servicio ${quoteId} ya se REALIZÓ para registrarlo en las Estadísticas?`)) {
    updateQuoteStatus(quoteId, 'Completado');
    alert(`🎉 ¡Servicio ${quoteId} finalizado con éxito! Sumado al Dashboard de Estadísticas.`);
    switchMainTab('estadisticas');
  }
}

function deleteQuoteFromHistory(quoteId) {
  if (confirm(`¿Está seguro de eliminar el presupuesto ${quoteId}?`)) {
    state.savedQuotes = state.savedQuotes.filter(q => q.id !== quoteId);
    localStorage.setItem('mg_quotes_history', JSON.stringify(state.savedQuotes));
    syncPushToCloud();
    updateHistoryBadge();
    
    if (state.activeMainTab === 'historial') {
      renderHistoryTable();
    } else if (state.activeMainTab === 'aceptadas') {
      renderAcceptedMovesView();
    } else if (state.activeMainTab === 'estadisticas') {
      renderStatisticsDashboard();
    }
  }
}

function loadQuoteIntoQuoter(quoteId) {
  const quote = state.savedQuotes.find(q => q.id === quoteId);
  if (!quote) return;

  switchServiceMode(quote.serviceMode || 'mudanza');

  if (quote.serviceMode === 'transporte') {
    state.transportTrucksQty = quote.transportTrucksQty || 1;
    state.priceTransportPerTruck = quote.priceTransportPerTruck || 120;
    state.transportCargoUnits = quote.transportCargoUnits || '';
    state.transportCargoWeight = quote.transportCargoWeight || '';
    state.transportHelpService = quote.transportHelpService || 'none';
    selectTransportHelp(state.transportHelpService);
    document.getElementById('transport-cargo-units').value = state.transportCargoUnits;
    document.getElementById('transport-cargo-weight').value = state.transportCargoWeight;
    document.getElementById('price-transport-per-truck').value = state.priceTransportPerTruck;
  } else {
    state.rooms = JSON.parse(JSON.stringify(quote.roomsSnapshot));
  }

  state.client = { ...quote.client };
  state.distanceKm = quote.distanceKm || 15;
  state.pricePerKm = quote.pricePerKm || 1.50;

  document.getElementById('client-name').value = state.client.name;
  document.getElementById('client-phone').value = state.client.phone;
  document.getElementById('client-email').value = state.client.email;
  document.getElementById('client-date').value = state.client.date;
  document.getElementById('client-origin').value = state.client.origin;
  document.getElementById('client-destination').value = state.client.destination;
  document.getElementById('client-notes').value = state.client.notes;

  renderRoomTabs();
  renderItems();
  updateCalculations();
  updateFullRouteFromInputs();
  switchMainTab('cotizador');
}

// Render Historial con Filtro por Búsqueda y Filtro por Estado
function renderHistoryTable() {
  const tbody = document.getElementById('history-tbody');
  if (!tbody) return;

  let filteredQuotes = (state.savedQuotes || []).filter(item => item && typeof item === 'object');

  // 1. Filtrar por Estado
  if (state.historyStatusFilter && state.historyStatusFilter !== 'all') {
    filteredQuotes = filteredQuotes.filter(item => {
      const status = item.status || 'Pendiente';
      if (state.historyStatusFilter === 'Completado') {
        return status === 'Completado' || status === 'Realizada';
      }
      return status === state.historyStatusFilter;
    });
  }

  // 2. Filtrar por texto
  if (state.historySearchQuery) {
    const q = state.historySearchQuery.toLowerCase();
    filteredQuotes = filteredQuotes.filter(item => {
      const id = String(item.id || '').toLowerCase();
      const mode = String(item.serviceMode || '').toLowerCase();
      const client = item.client || {};
      const name = String(client.name || '').toLowerCase();
      const phone = String(client.phone || '').toLowerCase();
      const origin = String(client.origin || '').toLowerCase();
      const dest = String(client.destination || '').toLowerCase();
      return id.includes(q) || mode.includes(q) || name.includes(q) || phone.includes(q) || origin.includes(q) || dest.includes(q);
    });
  }

  if (filteredQuotes.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="8" style="text-align: center; padding: 2.5rem; color: var(--text-muted);">
          <i class="fa-solid fa-folder-open" style="font-size: 2.2rem; margin-bottom: 0.5rem; color: var(--border-focus);"></i>
          <p>No se encontraron presupuestos con los filtros seleccionados.</p>
        </td>
      </tr>
    `;
    return;
  }

  const rows = [];
  for (let i = 0; i < filteredQuotes.length; i++) {
    const q = filteredQuotes[i];
    try {
      const status = q.status || 'Pendiente';
      let statusClass = 'pendiente';
      if (status === 'Aceptado') statusClass = 'aceptado';
      else if (status === 'Rechazado') statusClass = 'rechazado';
      else if (status === 'En Proceso') statusClass = 'en_proceso';
      else if (status === 'Completado' || status === 'Realizada') statusClass = 'completado';

      const isTransport = q.serviceMode === 'transporte';
      const modeBadge = isTransport 
        ? '<span style="background: #E0E7FF; color: #3730A3; font-size: 0.72rem; padding: 0.15rem 0.4rem; border-radius: 4px; font-weight: 700;">TRANSPORTE</span>'
        : '<span style="background: #EBF4FC; color: var(--primary); font-size: 0.72rem; padding: 0.15rem 0.4rem; border-radius: 4px; font-weight: 700;">MUDANZA</span>';

      const client = q.client || {};
      const clientName = client.name || 'Cliente Particular';
      const clientPhone = client.phone || '-';
      const clientOrigin = client.origin || 'Madrid';
      const clientDest = client.destination || 'España';

      const totalM3 = Number(q.totalM3 || 0);
      const totalItems = q.totalItems || 0;
      const trucksQty = q.trucks || 1;
      const staffQty = q.staff || 1;
      const sugTotal = Number(q.suggestedTotal || q.finalPrice || 0);
      const finalTotal = Number(q.finalPrice || q.suggestedTotal || 0);
      const formattedDate = q.formattedDate || (q.timestamp ? new Date(q.timestamp).toLocaleDateString('es-ES') : new Date().toLocaleDateString('es-ES'));

      const logisticsDesc = isTransport
        ? `<strong>${trucksQty} camión/es (18 m³)</strong><br><span style="font-size: 0.78rem; color: var(--text-muted);">${q.transportCargoUnits ? `${q.transportCargoUnits} bultos` : 'Carga directa'} ${q.transportCargoWeight ? `(${q.transportCargoWeight} kg)` : ''}</span>`
        : `<strong>${totalM3.toFixed(2)} m³</strong> (${totalItems} uds)<br><span style="font-size: 0.78rem; color: var(--text-muted);">${trucksQty} cam. (18m³) / ${staffQty} mozos</span>`;

      rows.push(`
        <tr>
          <td>
            <div style="display: flex; align-items: center; gap: 0.4rem; margin-bottom: 0.2rem;">
              <strong style="color: var(--primary);">${q.id || 'PRE-000'}</strong>
              ${modeBadge}
            </div>
            <span style="font-size: 0.78rem; color: var(--text-muted);">${formattedDate}</span>
          </td>
          <td>
            <strong>${clientName}</strong><br>
            <span style="font-size: 0.78rem; color: var(--text-muted);">${clientPhone}</span>
          </td>
          <td style="font-size: 0.82rem;">
            <i class="fa-solid fa-location-dot" style="color: var(--primary);"></i> ${truncateText(clientOrigin, 20)}<br>
            <i class="fa-solid fa-flag-checkered" style="color: var(--success);"></i> ${truncateText(clientDest, 20)}
          </td>
          <td>
            ${logisticsDesc}
          </td>
          <td style="color: var(--text-muted);">${sugTotal.toFixed(2)} €</td>
          <td style="font-weight: 700; color: var(--primary); font-size: 1rem;">${finalTotal.toFixed(2)} €</td>
          <td>
            <span class="status-badge ${statusClass}">${status}</span>
          </td>
          <td style="text-align: center;">
            <div style="display: flex; gap: 0.35rem; justify-content: center; flex-wrap: wrap;">
              ${status !== 'Aceptado' && status !== 'Completado' ? `
                <button class="btn-status-accept" onclick="updateQuoteStatus('${q.id}', 'Aceptado')">
                  <i class="fa-solid fa-check"></i> Aceptar
                </button>
              ` : ''}
              <button class="btn-action-sm" onclick="exportQuotePDFFromRecord('${q.id}')" title="Descargar PDF">
                <i class="fa-solid fa-file-pdf"></i>
              </button>
              <button class="btn-action-sm" onclick="loadQuoteIntoQuoter('${q.id}')" title="Cargar en Cotizador">
                <i class="fa-solid fa-folder-open"></i>
              </button>
              <button class="btn-action-sm" onclick="deleteQuoteFromHistory('${q.id}')" title="Eliminar" style="color: var(--danger);">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </td>
        </tr>
      `);
    } catch(err) {
      console.warn('Error rendering quote row:', q, err);
    }
  }

  tbody.innerHTML = rows.join('');
}

// Render Accepted Moves / Transport Jobs Grid Panel
function renderAcceptedMovesView() {
  const container = document.getElementById('accepted-grid-container');
  if (!container) return;

  const acceptedQuotes = (state.savedQuotes || []).filter(q => q && (q.status === 'Aceptado'));

  if (acceptedQuotes.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3.5rem 1rem; color: var(--text-muted);">
        <i class="fa-solid fa-handshake-slash" style="font-size: 3rem; margin-bottom: 0.75rem; color: var(--border-focus);"></i>
        <p style="font-size: 1.05rem;">No hay ningún servicio en estado <strong>Aceptado</strong> en este momento.</p>
        <p style="font-size: 0.85rem; margin-top: 0.25rem;">Puedes aceptar presupuestos desde la pestaña "Historial de Presupuestos".</p>
      </div>
    `;
    return;
  }

  const cards = [];
  for (let i = 0; i < acceptedQuotes.length; i++) {
    const q = acceptedQuotes[i];
    try {
      const isTransport = q.serviceMode === 'transporte';
      const serviceTitle = isTransport ? '🚚 SERVICIO DE TRANSPORTE' : '🏠 MUDANZA INTEGRAL';
      const client = q.client || {};
      const totalM3 = Number(q.totalM3 || 0);
      const finalPrice = Number(q.finalPrice || q.suggestedTotal || 0);
      const trucksQty = q.trucks || 1;
      const staffQty = q.staff || 1;

      const detailsBox = isTransport
        ? `<div><i class="fa-solid fa-truck"></i> <strong>Flota Asignada:</strong> ${trucksQty} camión/es (18 m³ con Plataforma)</div>
           <div><i class="fa-solid fa-boxes-stacked"></i> <strong>Carga:</strong> ${q.transportCargoUnits ? `${q.transportCargoUnits} bultos` : 'Porte directo'} ${q.transportCargoWeight ? `(${q.transportCargoWeight} kg)` : ''}</div>`
        : `<div><i class="fa-solid fa-boxes-stacked"></i> <strong>Volumen Total:</strong> ${totalM3.toFixed(2)} m³ (${q.totalItems || 0} ítems)</div>
           <div><i class="fa-solid fa-truck"></i> <strong>Logística:</strong> ${trucksQty} camión/es (18m³) | ${staffQty} mozos (${q.distanceKm || 0} km)</div>`;

      cards.push(`
        <div class="accepted-card animated-item">
          <div class="accepted-card-header">
            <div class="accepted-card-title">
              <h3>${client.name || 'Cliente Particular'}</h3>
              <p><i class="fa-solid fa-hashtag"></i> ${q.id || 'PRE-000'} • <strong>${serviceTitle}</strong></p>
            </div>
            <span class="status-badge aceptado"><i class="fa-solid fa-circle-check"></i> ACEPTADO</span>
          </div>

          <div class="accepted-card-body">
            <p><i class="fa-solid fa-phone" style="color: var(--primary);"></i> <strong>Teléfono:</strong> ${client.phone || 'No especificado'}</p>
            <p><i class="fa-solid fa-location-dot" style="color: var(--primary);"></i> <strong>Origen:</strong> ${client.origin || '-'}</p>
            <p><i class="fa-solid fa-flag-checkered" style="color: var(--success);"></i> <strong>Destino:</strong> ${client.destination || '-'}</p>
            
            <div style="background: var(--bg-app); padding: 0.6rem 0.8rem; border-radius: var(--radius-sm); margin-top: 0.4rem; font-size: 0.82rem;">
              ${detailsBox}
            </div>
          </div>

          <div class="accepted-card-footer">
            <div>
              <span style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">IMPORTE ACORDADO</span>
              <div style="font-size: 1.25rem; font-weight: 800; color: var(--primary);">${finalPrice.toFixed(2)} €</div>
            </div>

            <div style="display: flex; gap: 0.4rem; flex-wrap: wrap;">
              <button class="btn-action-sm" style="background: #10B981; color: white; font-weight: 700;" onclick="markMoveAsCompleted('${q.id}')" title="Marcar como Servicio Realizado">
                <i class="fa-solid fa-check-double"></i> Realizado
              </button>
              <button class="btn-action-sm" onclick="exportQuotePDFFromRecord('${q.id}')" title="Descargar Hoja de Trabajo / PDF">
                <i class="fa-solid fa-file-pdf"></i> Hoja PDF
              </button>
              <a class="btn-action-sm" style="background: #25D366; color: white;" href="https://wa.me/${(client.phone || '').replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hola ${client.name || ''}, le confirmamos los detalles de su servicio con MG Transporte y Logística.`)}" target="_blank" title="Contactar por WhatsApp">
                <i class="fa-brands fa-whatsapp"></i> WhatsApp
              </a>
            </div>
          </div>
        </div>
      `);
    } catch(err) {
      console.warn('Error rendering accepted move card:', q, err);
    }
  }

  container.innerHTML = cards.join('');
}

// Render Dashboard de Estadísticas y Tasa de Conversión (Muestra tanto Aceptados como Realizados)
function renderStatisticsDashboard() {
  const allQuotes = (state.savedQuotes || []).filter(q => q && typeof q === 'object');
  
  // Todos los servicios que han sido aceptados o completados
  const operationalQuotes = allQuotes.filter(q => {
    const status = q.status || '';
    return status === 'Aceptado' || status === 'Completado' || status === 'Realizada' || status === 'En Proceso';
  });

  const completedQuotes = allQuotes.filter(q => q.status === 'Completado' || q.status === 'Realizada');
  const tbody = document.getElementById('completed-tbody');

  let totalRevenue = 0;
  let totalM3 = 0;
  let totalKm = 0;

  operationalQuotes.forEach(q => {
    totalRevenue += Number(q.finalPrice || q.suggestedTotal || 0);
    totalM3 += Number(q.totalM3 || 0);
    totalKm += Number(q.distanceKm || 0);
  });

  const totalQuotesCount = allQuotes.length;
  const totalAcceptedCount = operationalQuotes.length;
  const conversionRate = totalQuotesCount > 0 ? ((totalAcceptedCount / totalQuotesCount) * 100) : 0;
  const totalMovesCount = operationalQuotes.length;
  const avgTicket = totalMovesCount > 0 ? (totalRevenue / totalMovesCount) : 0;

  // Actualizar KPI Conversión
  const elConversionRate = document.getElementById('kpi-conversion-rate');
  const elConversionRatio = document.getElementById('kpi-conversion-ratio');
  const elConversionBar = document.getElementById('kpi-conversion-bar');

  if (elConversionRate) elConversionRate.innerText = `${conversionRate.toFixed(1)}%`;
  if (elConversionRatio) elConversionRatio.innerText = `${totalAcceptedCount} aceptados de ${totalQuotesCount} presupuestos`;
  if (elConversionBar) elConversionBar.style.width = `${Math.min(100, conversionRate)}%`;

  // Actualizar demás KPIs
  const elRevenue = document.getElementById('kpi-total-revenue');
  const elMoves = document.getElementById('kpi-total-moves');
  const elM3 = document.getElementById('kpi-total-m3');
  const elAvg = document.getElementById('kpi-avg-ticket');

  if (elRevenue) elRevenue.innerText = `${totalRevenue.toFixed(2)} €`;
  if (elMoves) elMoves.innerText = totalMovesCount;
  if (elM3) elM3.innerText = `${totalM3.toFixed(2)} m³`;
  if (elAvg) elAvg.innerText = `${avgTicket.toFixed(2)} €`;

  if (!tbody) return;

  if (operationalQuotes.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="8" style="text-align: center; padding: 2.5rem; color: var(--text-muted);">
          <i class="fa-solid fa-chart-simple" style="font-size: 2.2rem; margin-bottom: 0.5rem; color: var(--border-focus);"></i>
          <p>Aún no hay servicios aceptados o realizados en el registro.</p>
          <p style="font-size: 0.8rem;">Acepta presupuestos en el <strong>"Historial"</strong> o márcalos como <em>"Realizado"</em> para verlos aquí.</p>
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = operationalQuotes.map(q => {
    const isTransport = q.serviceMode === 'transporte';
    const modeBadge = isTransport 
      ? '<span style="background: #E0E7FF; color: #3730A3; font-size: 0.72rem; padding: 0.15rem 0.4rem; border-radius: 4px; font-weight: 700;">TRANSPORTE</span>'
      : '<span style="background: #EBF4FC; color: var(--primary); font-size: 0.72rem; padding: 0.15rem 0.4rem; border-radius: 4px; font-weight: 700;">MUDANZA</span>';

    const status = q.status || 'Pendiente';
    let statusBadge = '';
    if (status === 'Aceptado') {
      statusBadge = '<span class="status-badge aceptado"><i class="fa-solid fa-check"></i> Aceptado</span>';
    } else if (status === 'Completado' || status === 'Realizada') {
      statusBadge = '<span class="status-badge completado" style="background: #D1FAE5; color: #065F46;"><i class="fa-solid fa-circle-check"></i> Realizado</span>';
    } else {
      statusBadge = `<span class="status-badge en_proceso">${status}</span>`;
    }

    const client = q.client || {};
    const totalM3 = Number(q.totalM3 || 0);
    const finalPrice = Number(q.finalPrice || q.suggestedTotal || 0);
    const vehicleText = `${q.trucks || 1} camión/es (18 m³) con Plataforma`;
    const dateText = q.completedDate || client.date || q.formattedDate || '-';

    return `
      <tr>
        <td>
          <div style="display: flex; align-items: center; gap: 0.4rem; margin-bottom: 0.2rem;">
            <strong style="color: var(--primary);">${q.id || 'PRE-000'}</strong>
            ${modeBadge}
          </div>
          ${statusBadge}
        </td>
        <td>
          <strong>${client.name || 'Cliente Particular'}</strong><br>
          <span style="font-size: 0.78rem; color: var(--text-muted);">${client.phone || '-'}</span>
        </td>
        <td>
          <strong>${dateText}</strong>
        </td>
        <td style="font-size: 0.82rem;">
          <i class="fa-solid fa-location-dot" style="color: var(--primary);"></i> ${truncateText(client.origin || 'Madrid', 20)}<br>
          <i class="fa-solid fa-flag-checkered" style="color: var(--success);"></i> ${truncateText(client.destination || 'España', 20)}
        </td>
        <td>
          <strong>${totalM3.toFixed(2)} m³</strong><br>
          <span style="font-size: 0.75rem; color: var(--text-muted);">${vehicleText}</span>
        </td>
        <td>
          ${q.distanceKm || 0} km
        </td>
        <td style="font-weight: 800; color: #059669; font-size: 1.05rem;">
          ${finalPrice.toFixed(2)} €
        </td>
        <td style="text-align: center;">
          <button class="btn-action-sm" onclick="exportQuotePDFFromRecord('${q.id}')" title="Descargar Comprobante PDF">
            <i class="fa-solid fa-file-pdf"></i> PDF
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

// Vector PDF Generator (Direct jsPDF + AutoTable con Logo Oficial y Contacto)
function exportToPDF() {
  const isTransport = state.serviceMode === 'transporte';
  const totalM3 = calculateTotalM3();

  if (!isTransport && totalM3 === 0) {
    alert('Por favor, seleccione al menos un mueble u objeto para poder generar el presupuesto de mudanza.');
    return;
  }

  generatePDFFromParams({
    quoteId: `PRE-${Math.floor(100000 + Math.random() * 900000)}`,
    serviceMode: state.serviceMode,
    currentDate: new Date().toLocaleDateString('es-ES'),
    client: state.client,
    totalM3: isTransport ? (state.transportTrucksQty * 18) : totalM3,
    totalItems: isTransport ? (state.transportCargoUnits || 'General') : getTotalItemsCount(),
    distanceKm: state.distanceKm,
    pricePerKm: state.pricePerKm,
    pricePerM3: state.pricePerM3,
    pricePerTruck: isTransport ? state.priceTransportPerTruck : state.pricePerTruck,
    pricePerStaff: state.pricePerStaff,
    trucks: isTransport ? state.transportTrucksQty : state.userTrucks,
    staff: isTransport ? (state.transportHelpService === 'driver_plus_staff' ? 2 : 1) : state.userStaff,
    transportTrucksQty: isTransport ? state.transportTrucksQty : null,
    priceTransportPerTruck: isTransport ? state.priceTransportPerTruck : null,
    transportCargoUnits: isTransport ? state.transportCargoUnits : null,
    transportCargoWeight: isTransport ? state.transportCargoWeight : null,
    transportHelpService: isTransport ? state.transportHelpService : null,
    suggestedTotal: calculateSuggestedGrandTotal(),
    finalPrice: state.isCustomTotalActive ? state.customGrandTotal : calculateSuggestedGrandTotal(),
    isManualPrice: state.isCustomTotalActive,
    rooms: state.rooms
  });
}

function exportQuotePDFFromRecord(quoteId) {
  const q = state.savedQuotes.find(record => record.id === quoteId);
  if (!q) return;

  generatePDFFromParams({
    quoteId: q.id,
    serviceMode: q.serviceMode || 'mudanza',
    currentDate: q.formattedDate,
    client: q.client,
    totalM3: q.totalM3,
    totalItems: q.totalItems,
    distanceKm: q.distanceKm,
    pricePerKm: q.pricePerKm,
    pricePerM3: q.pricePerM3,
    pricePerTruck: q.pricePerTruck,
    pricePerStaff: q.pricePerStaff,
    trucks: q.trucks || 1,
    staff: q.staff || 1,
    transportTrucksQty: q.transportTrucksQty,
    priceTransportPerTruck: q.priceTransportPerTruck,
    transportCargoUnits: q.transportCargoUnits,
    transportCargoWeight: q.transportCargoWeight,
    transportHelpService: q.transportHelpService,
    suggestedTotal: q.suggestedTotal,
    finalPrice: q.finalPrice,
    isManualPrice: q.isManualPrice || false,
    rooms: q.roomsSnapshot
  });
}

function generatePDFFromParams(params) {
  if (!window.jspdf || !window.jspdf.jsPDF) {
    alert('Cargando motor de generación PDF... Por favor, reintente en unos segundos.');
    return;
  }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const clientName = params.client.name || 'Cliente Particular / Empresa';
  const isTransport = params.serviceMode === 'transporte';
  const docTitle = isTransport ? 'PRESUPUESTO DE TRANSPORTE' : 'PRESUPUESTO DE MUDANZA';

  // 1. Franja Superior Azul Corporativa Limpia y Espaciosa
  doc.setFillColor(0, 93, 170);
  doc.rect(0, 0, 210, 32, 'F');

  // Integración del Logo Oficial con alta definición y fiabilidad total
  try {
    doc.addImage(LOGO_BASE64, 'PNG', 12, 3.5, 46, 25);
  } catch(e) {
    const logoImg = document.getElementById('company-logo-img');
    if (logoImg) doc.addImage(logoImg, 'PNG', 12, 3.5, 46, 25);
  }

  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13.5);
  doc.text('MG TRANSPORTE Y LOGÍSTICA', 62, 14);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.text('Servicios integrales de transporte y logística * España y Europa', 62, 21);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.text(docTitle, 196, 14, { align: 'right' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.text(`Nº: ${params.quoteId}`, 196, 20, { align: 'right' });
  doc.text(`Fecha: ${params.currentDate}`, 196, 25, { align: 'right' });

  // 2. Tarjeta Izquierda: DATOS DEL CLIENTE
  doc.setDrawColor(203, 213, 225);
  doc.setFillColor(248, 250, 252);
  doc.roundedRect(14, 37, 88, 38, 2.5, 2.5, 'FD');

  doc.setTextColor(0, 93, 170);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.text('DATOS DEL CLIENTE', 18, 44);

  doc.setTextColor(15, 23, 42);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.text(`Cliente: ${clientName}`, 18, 51);
  doc.text(`Teléfono: ${params.client.phone || 'No especificado'}`, 18, 57);
  doc.text(`Email: ${params.client.email || 'No especificado'}`, 18, 63);
  doc.text(`Fecha Servicio: ${params.client.date || params.currentDate}`, 18, 69);

  // 3. Tarjeta Derecha: UBICACIÓN Y TRAYECTO
  doc.setDrawColor(203, 213, 225);
  doc.setFillColor(248, 250, 252);
  doc.roundedRect(108, 37, 88, 38, 2.5, 2.5, 'FD');

  doc.setTextColor(0, 93, 170);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.text('UBICACIÓN Y DISTANCIA', 112, 44);

  doc.setTextColor(15, 23, 42);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  
  const originLines = doc.splitTextToSize(`Origen: ${params.client.origin || 'No especificado'}`, 80);
  doc.text(originLines, 112, 51);

  const destLines = doc.splitTextToSize(`Destino: ${params.client.destination || 'No especificado'}`, 80);
  doc.text(destLines, 112, 60);

  doc.text(`Distancia Recorrido: ${params.distanceKm} km`, 112, 69);

  let finalY = 80;

  if (isTransport) {
    // FORMATO SOLO TRANSPORTE: Tabla de Flota 18m3 y Carga
    const trucksCount = params.trucks || 1;
    const cargoData = [
      ['Flota Asignada (18 m³)', `${trucksCount} Camión/es de 18 m³ con Plataforma Elevadora (${trucksCount * 18} m³ de capacidad)`],
      ['Cantidad de Bultos / Palets', params.transportCargoUnits ? `${params.transportCargoUnits} unidades` : 'No especificado / Carga directa'],
      ['Peso Estimado de la Carga', params.transportCargoWeight ? `${params.transportCargoWeight} kg` : 'No especificado'],
      ['Servicio de Asistencia', params.transportHelpService === 'driver_help' ? 'Conductor ayuda en carga y descarga' : (params.transportHelpService === 'driver_plus_staff' ? 'Conductor + 1 Mozo auxiliar de apoyo' : 'Solo conductor / A pie de vehículo (Cliente carga y descarga)')]
    ];

    doc.autoTable({
      startY: 80,
      head: [['Concepto Operativo de Transporte (18 m³)', 'Detalles y Especificaciones']],
      body: cargoData,
      headStyles: {
        fillColor: [0, 93, 170],
        textColor: [255, 255, 255],
        fontStyle: 'bold',
        fontSize: 9
      },
      alternateRowStyles: {
        fillColor: [248, 250, 252]
      },
      styles: {
        font: 'helvetica',
        fontSize: 8.5,
        cellPadding: 4,
        textColor: [51, 65, 85]
      },
      columnStyles: {
        0: { fontStyle: 'bold', width: 68 }
      },
      margin: { left: 14, right: 14 }
    });

    finalY = doc.lastAutoTable.finalY + 8;
  } else {
    // FORMATO MUDANZA: Tabla de Muebles y Enseres
    const tableData = [];
    params.rooms.forEach(room => {
      const selectedInRoom = room.items.filter(i => i.qty > 0);
      selectedInRoom.forEach(item => {
        tableData.push([
          room.name,
          item.name,
          item.qty.toString(),
          `${item.m3.toFixed(2)} m³`,
          `${(item.qty * item.m3).toFixed(2)} m³`
        ]);
      });
    });

    doc.autoTable({
      startY: 80,
      head: [['Estancia / Ubicación', 'Mueble u Objeto', 'Cantidad', 'Volumen Ud', 'Subtotal m³']],
      body: tableData,
      headStyles: {
        fillColor: [0, 93, 170],
        textColor: [255, 255, 255],
        fontStyle: 'bold',
        fontSize: 9
      },
      alternateRowStyles: {
        fillColor: [248, 250, 252]
      },
      styles: {
        font: 'helvetica',
        fontSize: 8.5,
        cellPadding: 3,
        textColor: [51, 65, 85]
      },
      columnStyles: {
        2: { halign: 'center' },
        3: { halign: 'right' },
        4: { halign: 'right', fontStyle: 'bold' }
      },
      margin: { left: 14, right: 14 }
    });

    finalY = doc.lastAutoTable.finalY + 8;
  }

  if (finalY > 218) {
    doc.addPage();
    finalY = 20;
  }

  // Cuadro de Cierre Económico
  doc.setFillColor(15, 23, 42);
  doc.roundedRect(14, finalY, 182, 38, 3, 3, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.text('PLANIFICACIÓN LOGÍSTICA (Camiones de 18 m³ con Plataforma)', 20, finalY + 10);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(203, 213, 225);

  if (isTransport) {
    doc.text(`• Servicio: Flete / Porte punto a punto (${params.distanceKm} km)`, 20, finalY + 18);
    doc.text(`• Flota: ${params.trucks || 1} camión/es de 18 m³ con plataforma elevadora`, 20, finalY + 24);
    doc.text(`• Seguro: Cobertura de mercancías en tránsito incluida`, 20, finalY + 30);
  } else {
    doc.text(`• Cubicaje Total: ${params.totalM3.toFixed(2)} m³ (${params.totalItems} objetos)`, 20, finalY + 18);
    doc.text(`• Flota: ${params.trucks} camión/es de 18 m³ con plataforma elevadora`, 20, finalY + 24);
    doc.text(`• Personal: ${params.staff} mozo/s de mudanza (${params.distanceKm} km)`, 20, finalY + 30);
  }

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(255, 255, 255);
  doc.text('PRESUPUESTO ACORDADO', 120, finalY + 10);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(203, 213, 225);

  if (!params.isManualPrice && params.suggestedTotal === params.finalPrice) {
    doc.text(`Total Calculado: ${params.suggestedTotal.toFixed(2)} €`, 120, finalY + 18);
    doc.text(`Incluye vehículo 18m³, combustible y peajes`, 120, finalY + 24);
  } else {
    doc.text(`Servicio Directo Personalizado`, 120, finalY + 18);
    doc.text(`Incluye camión 18m³, conductor y trayecto`, 120, finalY + 24);
  }

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(74, 167, 255);
  doc.text(`PRECIO TOTAL: ${params.finalPrice.toFixed(2)} €`, 120, finalY + 32);

  // Cuadro Inferior de Contacto en el Pie de Página (Limpio y Espacioso)
  doc.setDrawColor(226, 232, 240);
  doc.setFillColor(248, 250, 252);
  doc.roundedRect(14, 265, 182, 22, 2, 2, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(0, 93, 170);
  doc.text('MG TRANSPORTE Y LOGÍSTICA • ATENCIÓN COMERCIAL Y ATENCIÓN AL CLIENTE', 105, 271, { align: 'center' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.8);
  doc.setTextColor(51, 65, 85);
  doc.text('Teléfono / WhatsApp: 692 264 152   |   Email: admon@mygtransporteylogistica.com   |   Web: www.mygtransporteylogistica.com', 105, 277, { align: 'center' });
  doc.text('Presupuesto orientativo válido por 30 días. Incluye seguro de transporte de mercancías y conductores profesionales.', 105, 282, { align: 'center' });

  const sanitizeName = clientName.replace(/[^a-zA-Z0-9]/g, '_');
  doc.save(`Presupuesto_MG_${isTransport ? 'Transporte' : 'Mudanza'}_${sanitizeName}.pdf`);
}

function truncateText(str, maxLength = 25) {
  if (str === null || str === undefined) return '';
  const s = String(str).trim();
  if (s.length <= maxLength) return s;
  return s.substring(0, Math.max(0, maxLength - 3)) + '...';
}

// ==========================================================================
// MÓDULO DE FACTURACIÓN OFICIAL - CONTROL ADMINISTRATIVO Y GENERADOR DE FACTURA
// ==========================================================================

function initInvoiceModule() {
  const formLogin = document.getElementById('form-invoice-login');
  if (formLogin) {
    formLogin.addEventListener('submit', (e) => {
      e.preventDefault();
      const user = document.getElementById('input-login-user')?.value.trim();
      const pass = document.getElementById('input-login-pass')?.value.trim();
      const errEl = document.getElementById('login-error-msg');

      if ((user === 'carlos' || user === 'admin') && (pass === 'mg2026' || pass === 'admin')) {
        state.invoiceAuth.isAuthenticated = true;
        state.invoiceAuth.currentUser = user;
        localStorage.setItem('mg_invoice_auth', 'true');
        localStorage.setItem('mg_invoice_user', user);
        if (errEl) errEl.style.display = 'none';
        
        // Cerrar modal si estaba abierto
        const modal = document.getElementById('modal-invoice-login');
        if (modal) modal.classList.remove('active');

        checkInvoiceAuthState();
        switchToInvoiceMode();
      } else {
        if (errEl) errEl.style.display = 'block';
      }
    });
  }

  // Escuchadores de IVA e IRPF
  const checkIva = document.getElementById('check-invoice-iva');
  const inputIvaPct = document.getElementById('input-invoice-iva-pct');
  const checkIrpf = document.getElementById('check-invoice-irpf');
  const inputIrpfPct = document.getElementById('input-invoice-irpf-pct');

  if (checkIva) {
    checkIva.addEventListener('change', (e) => {
      state.invoiceData.hasIva = e.target.checked;
      updateInvoiceTotals();
    });
  }

  if (inputIvaPct) {
    inputIvaPct.addEventListener('input', (e) => {
      state.invoiceData.ivaPct = parseFloat(e.target.value) || 0;
      updateInvoiceTotals();
    });
  }

  if (checkIrpf) {
    checkIrpf.addEventListener('change', (e) => {
      state.invoiceData.hasIrpf = e.target.checked;
      updateInvoiceTotals();
    });
  }

  if (inputIrpfPct) {
    inputIrpfPct.addEventListener('input', (e) => {
      state.invoiceData.irpfPct = parseFloat(e.target.value) || 0;
      updateInvoiceTotals();
    });
  }

  // Pre-llenar fecha y número
  const numInput = document.getElementById('invoice-number');
  const dateInput = document.getElementById('invoice-date');
  const dueDateInput = document.getElementById('invoice-due-date');

  if (numInput && !numInput.value) numInput.value = `FAC-2026-${String(state.savedInvoices.length + 1).padStart(3, '0')}`;
  if (dateInput && !dateInput.value) dateInput.value = state.invoiceData.date;
  if (dueDateInput && !dueDateInput.value) dueDateInput.value = state.invoiceData.dueDate;

  updateInvoiceBadge();
}

function checkInvoiceAuthState() {
  const loginWrapper = document.getElementById('invoice-login-wrapper');
  const dashWrapper = document.getElementById('invoice-dashboard-wrapper');
  const btnHeaderLogin = document.getElementById('btn-header-login');
  const headerAuthUser = document.getElementById('header-auth-user');
  const modalLogin = document.getElementById('modal-invoice-login');

  if (state.invoiceAuth.isAuthenticated) {
    if (loginWrapper) loginWrapper.style.display = 'none';
    if (dashWrapper) dashWrapper.style.display = 'block';
    if (btnHeaderLogin) btnHeaderLogin.style.display = 'none';
    if (headerAuthUser) headerAuthUser.style.display = 'flex';
    if (modalLogin) modalLogin.classList.remove('active');
  } else {
    if (loginWrapper) loginWrapper.style.display = 'flex';
    if (dashWrapper) dashWrapper.style.display = 'none';
    if (btnHeaderLogin) btnHeaderLogin.style.display = 'inline-flex';
    if (headerAuthUser) headerAuthUser.style.display = 'none';
  }
}

function renderInvoiceItems() {
  const tbody = document.getElementById('invoice-items-tbody');
  if (!tbody) return;

  if (state.invoiceData.items.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="5" style="text-align: center; padding: 2rem 1rem; color: var(--text-muted);">
          <i class="fa-solid fa-list" style="font-size: 2rem; margin-bottom: 0.5rem; color: var(--primary);"></i>
          <p>No hay servicios añadidos a la factura. Añade un concepto libre, una ruta o un servicio de mudanza/transporte.</p>
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = state.invoiceData.items.map((item, idx) => {
    const totalLine = (parseFloat(item.qty) || 0) * (parseFloat(item.unitPrice) || 0);

    return `
      <tr style="background: ${idx % 2 === 0 ? '#FFFFFF' : '#F8FAFC'};">
        <td style="padding: 0.6rem 0.75rem;">
          <input type="text" class="invoice-input-row" value="${item.description.replace(/"/g, '&quot;')}" onchange="updateInvoiceItemField('${item.id}', 'description', this.value)" placeholder="Descripción o fecha y ruta (ej: 07-07 Ruta Toledo)...">
        </td>
        <td style="padding: 0.6rem 0.75rem; text-align: center;">
          <input type="number" class="invoice-input-row" style="text-align: center; width: 65px;" value="${item.qty}" min="1" step="1" onchange="updateInvoiceItemField('${item.id}', 'qty', this.value)">
        </td>
        <td style="padding: 0.6rem 0.75rem; text-align: right;">
          <input type="number" class="invoice-input-row" style="text-align: right; width: 95px; font-weight: 600;" value="${item.unitPrice}" min="0" step="5" onchange="updateInvoiceItemField('${item.id}', 'unitPrice', this.value)">
        </td>
        <td style="padding: 0.6rem 0.75rem; text-align: right; font-weight: 700; color: var(--primary); font-size: 0.92rem;">
          ${totalLine.toFixed(2)} €
        </td>
        <td style="padding: 0.6rem 0.75rem; text-align: center;">
          <button type="button" class="btn-action-sm" style="color: var(--danger); border-color: #FECACA;" onclick="deleteInvoiceItemRow('${item.id}')" title="Eliminar fila">
            <i class="fa-solid fa-trash"></i>
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

function addInvoiceItemRow(description = '', qty = 1, unitPrice = 280) {
  const newItem = {
    id: `item_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
    description: description || `Ruta ${new Date().toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit' })} localidad`,
    qty: parseFloat(qty) || 1,
    unitPrice: parseFloat(unitPrice) || 0
  };

  state.invoiceData.items.push(newItem);
  renderInvoiceItems();
  updateInvoiceTotals();
}

function addPresetServiceRow(presetType) {
  if (presetType === 'mudanza') {
    const totalM3 = calculateTotalM3();
    const grandTotal = state.isCustomTotalActive ? state.customGrandTotal : calculateSuggestedGrandTotal();
    const desc = `Servicio de Mudanza Integral - Desmontaje, Carga, Traslado (${state.distanceKm} km, ${totalM3.toFixed(2)} m³) y Montaje`;
    addInvoiceItemRow(desc, 1, grandTotal || 450);
  } else if (presetType === 'transporte') {
    const trucks = state.transportTrucksQty || 1;
    const grandTotal = state.isCustomTotalActive ? state.customGrandTotal : calculateSuggestedGrandTotal();
    const desc = `Servicio de Transporte y Portes - ${trucks} Camión/es 18 m³ con Plataforma (${state.distanceKm} km)`;
    addInvoiceItemRow(desc, 1, grandTotal || 160);
  }
}

function loadFromAcceptedQuoteModal() {
  const accepted = state.savedQuotes.filter(q => q.status === 'Aceptado');
  if (accepted.length === 0) {
    alert('No hay servicios en estado "Aceptado" en el historial. Puedes aceptar cotizaciones desde la pestaña Historial.');
    return;
  }

  const latest = accepted[accepted.length - 1];
  const isTransport = latest.serviceMode === 'transporte';
  const desc = isTransport
    ? `Servicio de Transporte [${latest.id}] - ${latest.client.origin} a ${latest.client.destination} (${latest.distanceKm} km)`
    : `Servicio de Mudanza [${latest.id}] - ${latest.client.origin} a ${latest.client.destination} (${latest.totalM3.toFixed(2)} m³, ${latest.distanceKm} km)`;

  // Actualizar datos del cliente
  const clientNameInput = document.getElementById('invoice-client-name');
  const clientAddressInput = document.getElementById('invoice-client-address');
  if (clientNameInput && latest.client.name) clientNameInput.value = latest.client.name;
  if (clientAddressInput && latest.client.destination) clientAddressInput.value = latest.client.destination;

  addInvoiceItemRow(desc, 1, latest.finalPrice);
}

function deleteInvoiceItemRow(id) {
  state.invoiceData.items = state.invoiceData.items.filter(it => it.id !== id);
  renderInvoiceItems();
  updateInvoiceTotals();
}

function updateInvoiceItemField(id, field, value) {
  const item = state.invoiceData.items.find(it => it.id === id);
  if (!item) return;

  if (field === 'description') {
    item.description = value;
  } else if (field === 'qty') {
    item.qty = Math.max(1, parseFloat(value) || 1);
  } else if (field === 'unitPrice') {
    item.unitPrice = Math.max(0, parseFloat(value) || 0);
  }

  renderInvoiceItems();
  updateInvoiceTotals();
}

function updateInvoiceTotals() {
  const subtotal = state.invoiceData.items.reduce((acc, it) => acc + ((parseFloat(it.qty) || 0) * (parseFloat(it.unitPrice) || 0)), 0);
  
  const ivaAmount = state.invoiceData.hasIva ? subtotal * ((parseFloat(state.invoiceData.ivaPct) || 0) / 100) : 0;
  const irpfAmount = state.invoiceData.hasIrpf ? subtotal * ((parseFloat(state.invoiceData.irpfPct) || 0) / 100) : 0;
  const grandTotal = subtotal + ivaAmount - irpfAmount;

  const elBase = document.getElementById('invoice-base-amount');
  const elIva = document.getElementById('invoice-iva-amount');
  const elIrpf = document.getElementById('invoice-irpf-amount');
  const elTotal = document.getElementById('invoice-grand-total');

  if (elBase) elBase.innerText = `${subtotal.toFixed(2)} €`;
  if (elIva) elIva.innerText = `${state.invoiceData.hasIva ? '+' : ''}${ivaAmount.toFixed(2)} €`;
  if (elIrpf) elIrpf.innerText = `${state.invoiceData.hasIrpf ? '-' : ''}${irpfAmount.toFixed(2)} €`;
  if (elTotal) elTotal.innerText = `${grandTotal.toFixed(2)} €`;

  return { subtotal, ivaAmount, irpfAmount, grandTotal };
}

function resetInvoiceForm() {
  state.invoiceData.items = [];
  const clientNameInput = document.getElementById('invoice-client-name');
  const clientNifInput = document.getElementById('invoice-client-nif');
  const clientAddressInput = document.getElementById('invoice-client-address');
  const numInput = document.getElementById('invoice-number');

  if (clientNameInput) clientNameInput.value = '';
  if (clientNifInput) clientNifInput.value = '';
  if (clientAddressInput) clientAddressInput.value = '';
  if (numInput) numInput.value = `FAC-2026-${String(state.savedInvoices.length + 1).padStart(3, '0')}`;

  renderInvoiceItems();
  updateInvoiceTotals();
}

function saveInvoiceRecord() {
  if (state.invoiceData.items.length === 0) {
    alert('Por favor, añada al menos un servicio prestado a la factura antes de guardarla.');
    return;
  }

  const totals = updateInvoiceTotals();
  const numInput = document.getElementById('invoice-number');
  const dateInput = document.getElementById('invoice-date');
  const dueDateInput = document.getElementById('invoice-due-date');
  const clientNameInput = document.getElementById('invoice-client-name');
  const clientNifInput = document.getElementById('invoice-client-nif');
  const clientAddressInput = document.getElementById('invoice-client-address');

  const invoiceRecord = {
    id: numInput?.value.trim() || `FAC-2026-${String(state.savedInvoices.length + 1).padStart(3, '0')}`,
    date: dateInput?.value || state.invoiceData.date,
    dueDate: dueDateInput?.value || state.invoiceData.dueDate,
    clientName: clientNameInput?.value.trim() || 'Cliente Particular / Empresa',
    clientNif: clientNifInput?.value.trim() || 'N/A',
    clientAddress: clientAddressInput?.value.trim() || 'Madrid, España',
    hasIva: state.invoiceData.hasIva,
    ivaPct: state.invoiceData.ivaPct,
    hasIrpf: state.invoiceData.hasIrpf,
    irpfPct: state.invoiceData.irpfPct,
    subtotal: totals.subtotal,
    ivaAmount: totals.ivaAmount,
    irpfAmount: totals.irpfAmount,
    grandTotal: totals.grandTotal,
    status: 'Pendiente de Cobro',
    items: JSON.parse(JSON.stringify(state.invoiceData.items))
  };

  // Check if updating existing
  const existingIdx = state.savedInvoices.findIndex(inv => inv.id === invoiceRecord.id);
  if (existingIdx >= 0) {
    state.savedInvoices[existingIdx] = invoiceRecord;
  } else {
    state.savedInvoices.unshift(invoiceRecord);
  }

  localStorage.setItem('mg_invoices_history', JSON.stringify(state.savedInvoices));
  syncPushToCloud();
  updateInvoiceBadge();
  renderInvoicesHistoryTable();
  alert(`Factura ${invoiceRecord.id} guardada correctamente en el registro.`);
}

function updateInvoiceBadge() {
  const totalCount = state.savedInvoices.length;
  const totalAmount = state.savedInvoices.reduce((acc, inv) => acc + (parseFloat(inv.grandTotal) || 0), 0);
  
  const paidInvoices = state.savedInvoices.filter(inv => inv.status === 'Cobrada');
  const paidAmount = paidInvoices.reduce((acc, inv) => acc + (parseFloat(inv.grandTotal) || 0), 0);
  
  const pendingInvoices = state.savedInvoices.filter(inv => inv.status !== 'Cobrada');
  const pendingAmount = pendingInvoices.reduce((acc, inv) => acc + (parseFloat(inv.grandTotal) || 0), 0);

  // Subtab badges (Tanto en la barra azul superior como en el panel interno)
  const subtabBadge = document.getElementById('invoices-subtab-badge');
  if (subtabBadge) subtabBadge.innerText = totalCount;

  const innerBadge = document.getElementById('inner-invoices-subtab-badge');
  if (innerBadge) innerBadge.innerText = totalCount;

  const countBadge = document.getElementById('invoices-saved-count');
  if (countBadge) countBadge.innerText = `${totalCount} facturas emitidas`;

  // Tarjetas KPI de Resumen de Facturas Emitidas
  const elKpiCount = document.getElementById('kpi-inv-total-count');
  const elKpiTotal = document.getElementById('kpi-inv-total-amount');
  const elKpiPaidAmount = document.getElementById('kpi-inv-paid-amount');
  const elKpiPaidCount = document.getElementById('kpi-inv-paid-count');
  const elKpiPendingAmount = document.getElementById('kpi-inv-pending-amount');
  const elKpiPendingCount = document.getElementById('kpi-inv-pending-count');

  if (elKpiCount) elKpiCount.innerText = `${totalCount} facturas`;
  if (elKpiTotal) elKpiTotal.innerText = `${totalAmount.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`;
  if (elKpiPaidAmount) elKpiPaidAmount.innerText = `${paidAmount.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`;
  if (elKpiPaidCount) elKpiPaidCount.innerText = `${paidInvoices.length} facturas cobradas`;
  if (elKpiPendingAmount) elKpiPendingAmount.innerText = `${pendingAmount.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`;
  if (elKpiPendingCount) elKpiPendingCount.innerText = `${pendingInvoices.length} pendientes de cobro`;
}

function renderInvoicesHistoryTable() {
  updateInvoiceBadge();
  const tbody = document.getElementById('invoices-history-tbody');
  if (!tbody) return;

  if (state.savedInvoices.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="9" style="text-align: center; padding: 2.5rem 1rem; color: var(--text-muted);">
          <i class="fa-solid fa-file-invoice" style="font-size: 2.5rem; margin-bottom: 0.5rem; color: var(--border-focus);"></i>
          <p style="font-size: 1rem;">No hay facturas emitidas en el registro contable.</p>
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = state.savedInvoices.map(inv => {
    const isPaid = inv.status === 'Cobrada';
    const statusBadge = isPaid
      ? '<span class="status-badge aceptado"><i class="fa-solid fa-check"></i> COBRADA</span>'
      : '<span class="status-badge pendiente"><i class="fa-solid fa-clock"></i> PENDIENTE</span>';

    const taxesDesc = `${inv.hasIva ? `+IVA(${inv.ivaPct}%)` : ''} ${inv.hasIrpf ? `-IRPF(${inv.irpfPct}%)` : ''}`.trim() || 'Sin impuestos';

    return `
      <tr>
        <td><strong style="color: var(--primary);">${inv.id}</strong></td>
        <td>${inv.date}</td>
        <td>
          <strong>${inv.clientName}</strong><br>
          <span style="font-size: 0.75rem; color: var(--text-muted);">${inv.clientAddress || '-'}</span>
        </td>
        <td>${inv.clientNif}</td>
        <td style="font-weight: 600;">${inv.subtotal.toFixed(2)} €</td>
        <td style="font-size: 0.8rem; color: var(--text-muted);">${taxesDesc}</td>
        <td style="font-weight: 800; color: var(--primary); font-size: 1rem;">${inv.grandTotal.toFixed(2)} €</td>
        <td>${statusBadge}</td>
        <td style="text-align: center;">
          <div style="display: flex; gap: 0.35rem; justify-content: center; flex-wrap: wrap;">
            <button class="btn-action-sm" onclick="exportSavedInvoiceToPDF('${inv.id}')" title="Descargar Factura PDF">
              <i class="fa-solid fa-file-pdf"></i>
            </button>
            <button class="btn-action-sm" onclick="toggleInvoicePaidStatus('${inv.id}')" title="Alternar Estado Cobrado">
              <i class="fa-solid ${isPaid ? 'fa-arrow-rotate-left' : 'fa-check'}"></i>
            </button>
            <button class="btn-action-sm" onclick="deleteSavedInvoice('${inv.id}')" title="Eliminar" style="color: var(--danger);">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

function toggleInvoicePaidStatus(invId) {
  const inv = state.savedInvoices.find(i => i.id === invId);
  if (!inv) return;

  inv.status = (inv.status === 'Cobrada') ? 'Pendiente de Cobro' : 'Cobrada';
  localStorage.setItem('mg_invoices_history', JSON.stringify(state.savedInvoices));
  syncPushToCloud();
  renderInvoicesHistoryTable();
}

function deleteSavedInvoice(invId) {
  if (!confirm(`¿Desea eliminar la factura ${invId} del historial?`)) return;
  state.savedInvoices = state.savedInvoices.filter(i => i.id !== invId);
  localStorage.setItem('mg_invoices_history', JSON.stringify(state.savedInvoices));
  syncPushToCloud();
  updateInvoiceBadge();
  renderInvoicesHistoryTable();
}

function exportInvoiceToPDF() {
  if (state.invoiceData.items.length === 0) {
    alert('Por favor, añada servicios prestados antes de generar la factura oficial.');
    return;
  }

  const totals = updateInvoiceTotals();
  const numInput = document.getElementById('invoice-number');
  const dateInput = document.getElementById('invoice-date');
  const dueDateInput = document.getElementById('invoice-due-date');
  const clientNameInput = document.getElementById('invoice-client-name');
  const clientNifInput = document.getElementById('invoice-client-nif');
  const clientAddressInput = document.getElementById('invoice-client-address');

  generateOfficialInvoicePDF({
    invoiceNumber: numInput?.value.trim() || 'FAC-2026-001',
    date: dateInput?.value || state.invoiceData.date,
    dueDate: dueDateInput?.value || state.invoiceData.dueDate,
    clientName: clientNameInput?.value.trim() || 'Cliente Comercial / Particular',
    clientNif: clientNifInput?.value.trim() || 'No especificado',
    clientAddress: clientAddressInput?.value.trim() || 'Madrid, España',
    items: state.invoiceData.items,
    hasIva: state.invoiceData.hasIva,
    ivaPct: state.invoiceData.ivaPct,
    hasIrpf: state.invoiceData.hasIrpf,
    irpfPct: state.invoiceData.irpfPct,
    subtotal: totals.subtotal,
    ivaAmount: totals.ivaAmount,
    irpfAmount: totals.irpfAmount,
    grandTotal: totals.grandTotal
  });
}

function exportSavedInvoiceToPDF(invId) {
  const inv = state.savedInvoices.find(i => i.id === invId);
  if (!inv) return;

  generateOfficialInvoicePDF({
    invoiceNumber: inv.id,
    date: inv.date,
    dueDate: inv.dueDate,
    clientName: inv.clientName,
    clientNif: inv.clientNif,
    clientAddress: inv.clientAddress,
    items: inv.items,
    hasIva: inv.hasIva,
    ivaPct: inv.ivaPct,
    hasIrpf: inv.hasIrpf,
    irpfPct: inv.irpfPct,
    subtotal: inv.subtotal,
    ivaAmount: inv.ivaAmount,
    irpfAmount: inv.irpfAmount,
    grandTotal: inv.grandTotal
  });
}

// Generador Oficial de Factura en PDF con jsPDF y autoTable
function generateOfficialInvoicePDF(data) {
  if (!window.jspdf || !window.jspdf.jsPDF) {
    alert('Cargando motor de generación PDF... Por favor, reintente en unos segundos.');
    return;
  }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  // 1. Franja Superior Azul Corporativa
  doc.setFillColor(0, 93, 170);
  doc.rect(0, 0, 210, 32, 'F');

  // Integración del Logo Oficial con alta definición y fiabilidad total
  try {
    doc.addImage(LOGO_BASE64, 'PNG', 12, 3.5, 46, 25);
  } catch(e) {
    const logoImg = document.getElementById('company-logo-img');
    if (logoImg) doc.addImage(logoImg, 'PNG', 12, 3.5, 46, 25);
  }

  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13.5);
  doc.text('MG TRANSPORTE Y LOGÍSTICA', 62, 14);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.text('Servicios integrales de transporte y logística * España y Europa', 62, 21);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.text('FACTURA OFICIAL', 196, 14, { align: 'right' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.text(`Nº: ${data.invoiceNumber}`, 196, 20, { align: 'right' });
  doc.text(`Fecha: ${data.date}`, 196, 25, { align: 'right' });

  // 2. Tarjeta Izquierda: DATOS DEL EMISOR (CARLOS ANDRES LOPEZ)
  doc.setDrawColor(203, 213, 225);
  doc.setFillColor(248, 250, 252);
  doc.roundedRect(14, 37, 88, 38, 2.5, 2.5, 'FD');

  doc.setTextColor(0, 93, 170);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.text('DATOS DEL EMISOR / RESPONSABLE', 18, 44);

  doc.setTextColor(15, 23, 42);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.text('CARLOS ANDRES LOPEZ', 18, 51);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.text('NIF / NIE: Y7321814P', 18, 57);
  doc.text('Teléfono: +34 692 264 152', 18, 63);
  doc.text('Email: admon@mygtransporteylogistica.com', 18, 69);

  // 3. Tarjeta Derecha: DATOS DEL CLIENTE Y FACTURA
  doc.setDrawColor(203, 213, 225);
  doc.setFillColor(248, 250, 252);
  doc.roundedRect(108, 37, 88, 38, 2.5, 2.5, 'FD');

  doc.setTextColor(0, 93, 170);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.text('DATOS DEL CLIENTE / RECEPTOR', 112, 44);

  doc.setTextColor(15, 23, 42);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.text(doc.splitTextToSize(`Cliente: ${data.clientName}`, 80), 112, 51);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.text(`NIF / CIF: ${data.clientNif}`, 112, 57);
  
  const clientAddr = doc.splitTextToSize(`Dirección: ${data.clientAddress}`, 80);
  doc.text(clientAddr, 112, 63);
  doc.text(`Vencimiento: ${data.dueDate}`, 112, 69);

  // 4. Tabla Oficial de SERVICIOS PRESTADOS
  const tableRows = data.items.map(it => {
    const lineTotal = (parseFloat(it.qty) || 0) * (parseFloat(it.unitPrice) || 0);
    return [
      it.description,
      (it.qty || 1).toString(),
      `${(parseFloat(it.unitPrice) || 0).toFixed(2)} €`,
      `${lineTotal.toFixed(2)} €`
    ];
  });

  doc.autoTable({
    startY: 80,
    head: [['SERVICIOS PRESTADOS', 'CANTIDAD', 'PRECIO', 'TOTAL']],
    body: tableRows,
    headStyles: {
      fillColor: [0, 93, 170],
      textColor: [255, 255, 255],
      fontStyle: 'bold',
      fontSize: 9
    },
    alternateRowStyles: {
      fillColor: [248, 250, 252]
    },
    styles: {
      font: 'helvetica',
      fontSize: 8.5,
      cellPadding: 3.5,
      textColor: [51, 65, 85]
    },
    columnStyles: {
      0: { width: 100 },
      1: { halign: 'center', width: 24 },
      2: { halign: 'right', width: 30 },
      3: { halign: 'right', fontStyle: 'bold', width: 28 }
    },
    margin: { left: 14, right: 14 }
  });

  let finalY = doc.lastAutoTable.finalY + 6;

  if (finalY > 215) {
    doc.addPage();
    finalY = 20;
  }

  // 5. Cuadro de Desglose de Impuestos (Base Imponible, IVA, IRPF y Total)
  doc.setFillColor(248, 250, 252);
  doc.setDrawColor(203, 213, 225);
  doc.roundedRect(108, finalY, 88, 38, 2, 2, 'FD');

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);
  doc.text('Base Imponible:', 112, finalY + 8);
  doc.text(`${data.subtotal.toFixed(2)} €`, 190, finalY + 8, { align: 'right' });

  if (data.hasIva) {
    doc.text(`IVA (+${data.ivaPct}%):`, 112, finalY + 15);
    doc.text(`+${data.ivaAmount.toFixed(2)} €`, 190, finalY + 15, { align: 'right' });
  } else {
    doc.text('IVA (Exento / No aplicable):', 112, finalY + 15);
    doc.text('0.00 €', 190, finalY + 15, { align: 'right' });
  }

  if (data.hasIrpf) {
    doc.text(`Retención IRPF (-${data.irpfPct}%):`, 112, finalY + 22);
    doc.text(`-${data.irpfAmount.toFixed(2)} €`, 190, finalY + 22, { align: 'right' });
  } else {
    doc.text('Retención IRPF (0%):', 112, finalY + 22);
    doc.text('0.00 €', 190, finalY + 22, { align: 'right' });
  }

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(0, 93, 170);
  doc.text('TOTAL FACTURA:', 112, finalY + 31);
  doc.text(`${data.grandTotal.toFixed(2)} €`, 190, finalY + 31, { align: 'right' });

  // 6. Bloque de FORMA DE PAGO (Eurocaja Rural)
  doc.setFillColor(15, 23, 42);
  doc.roundedRect(14, finalY, 88, 38, 2, 2, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.text('FORMA DE PAGO', 18, finalY + 8);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(203, 213, 225);
  doc.text('Transferencia bancaria', 18, finalY + 15);
  doc.text('Entidad: Eurocaja Rural', 18, finalY + 21);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.2);
  doc.setTextColor(74, 167, 255);
  doc.text('IBAN ES43 3081 0140 7050 0059 3801', 18, finalY + 28);

  // 7. Pie de Página Oficial
  doc.setDrawColor(226, 232, 240);
  doc.setFillColor(248, 250, 252);
  doc.roundedRect(14, 265, 182, 22, 2, 2, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(0, 93, 170);
  doc.text('MG TRANSPORTE Y LOGÍSTICA • DEPARTAMENTO DE FACTURACIÓN Y CONTABILIDAD', 105, 271, { align: 'center' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.8);
  doc.setTextColor(51, 65, 85);
  doc.text('Teléfono / WhatsApp: 692 264 152   |   Email: admon@mygtransporteylogistica.com   |   Web: www.mygtransporteylogistica.com', 105, 277, { align: 'center' });
  doc.text('Factura mercantil emitida de conformidad con la legislación tributaria aplicable. Registro de Operaciones Madrid.', 105, 282, { align: 'center' });

  const sanitizeName = (data.clientName || 'Cliente').replace(/[^a-zA-Z0-9]/g, '_');
  doc.save(`Factura_MG_${data.invoiceNumber}_${sanitizeName}.pdf`);
}
