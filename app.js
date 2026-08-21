/* ===================== SKY NEX CRM — APP ===================== */
const STORE_KEY = 'skynex_crm_db_v1';
// Bump this whenever seed data (e.g. default users/passwords) changes, so
// browsers holding an older cached DB get automatically reseeded instead
// of silently keeping stale/mismatched login credentials.
const SEED_VERSION = 5;
const CUR = 'Rs. ';

/* ---------- Icon set (inline SVG path data) ---------- */
const ICONS = {
  dashboard:'<rect x="3" y="3" width="7" height="9" rx="2"/><rect x="14" y="3" width="7" height="5" rx="2"/><rect x="14" y="12" width="7" height="9" rx="2"/><rect x="3" y="16" width="7" height="5" rx="2"/>',
  box:'<path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/>',
  cart:'<circle cx="9" cy="21" r="1.4"/><circle cx="19" cy="21" r="1.4"/><path d="M2.5 3h2l2.7 12.4a2 2 0 0 0 2 1.6h8.2a2 2 0 0 0 2-1.6L21 8H6"/>',
  file:'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h6"/>',
  wallet:'<path d="M3 7a2 2 0 0 1 2-2h13a1 1 0 0 1 1 1v3H5"/><path d="M3 7v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H8"/><circle cx="17" cy="14" r="1.3"/>',
  alert:'<path d="M10.3 3.9 2.6 18a1.7 1.7 0 0 0 1.5 2.5h15.8a1.7 1.7 0 0 0 1.5-2.5L13.7 3.9a1.7 1.7 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/>',
  tag:'<path d="M20.6 12.6 12.7 20.5a1.9 1.9 0 0 1-2.7 0l-6.5-6.5a1.9 1.9 0 0 1 0-2.7L11.4 3.4A2 2 0 0 1 12.8 3H19a2 2 0 0 1 2 2v6.2a2 2 0 0 1-.4 1.4z"/><circle cx="15.5" cy="7.5" r="1.4"/>',
  tool:'<path d="M14.7 6.3a4 4 0 0 0-5.6 5L2 18.4 4.6 21l7-7.1a4 4 0 0 0 5-5.6l-3 3-2.6-.6-.6-2.6z"/>',
  users:'<path d="M17 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9"/><path d="M16 3.1a4 4 0 0 1 0 7.8"/>',
  user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.2 2"/>',
  chart:'<path d="M3 3v18h18"/><rect x="7" y="12" width="3" height="6"/><rect x="12.5" y="8" width="3" height="10"/><rect x="18" y="5" width="3" height="13"/>',
  settings:'<circle cx="12" cy="12" r="3.2"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.9 2.9l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.9-2.9l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.9-2.9l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.9 2.9l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  edit:'<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/>',
  trash:'<path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/>',
  x:'<path d="M18 6 6 18M6 6l12 12"/>',
  chev:'<path d="M6 9l6 6 6-6"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>',
  bell:'<path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/>',
  print:'<path d="M6 9V3h12v6"/><rect x="6" y="13" width="12" height="8"/><path d="M6 17H4a1 1 0 0 1-1-1v-5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5a1 1 0 0 1-1 1h-2"/>',
  phone:'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .6 2.9a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.5 2.9.6a2 2 0 0 1 1.8 2.1z"/>',
  mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 6 10-6"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  eye:'<path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/>',
  eyeOff:'<path d="M17.9 17.9A10.5 10.5 0 0 1 12 20c-7 0-11-8-11-8a19.7 19.7 0 0 1 5-6.1M9.9 4.2A9.9 9.9 0 0 1 12 4c7 0 11 8 11 8a19.9 19.9 0 0 1-3.2 4.4"/><path d="M14.1 14.1a3 3 0 1 1-4.2-4.2"/><path d="M1 1l22 22"/>',
  shield:'<path d="M12 2 4 5v6c0 5.2 3.4 9.9 8 11 4.6-1.1 8-5.8 8-11V5z"/><path d="M9 12l2 2 4-4.5"/>',
  down:'<path d="M12 5v14M19 12l-7 7-7-7"/>',
  filter:'<path d="M4 5h16M7 12h10M10 19h4"/>',
  device:'<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
  check:'<path d="M20 6 9 17l-5-5"/>',
  info:'<circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h1v5h1"/>',
  camera:'<path d="M4 8h3l1.5-2h7L17 8h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2z"/><circle cx="12" cy="13" r="3.5"/>',
  image:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/>',
  download:'<path d="M12 3v12m0 0-4.5-4.5M12 15l4.5-4.5"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/>',
  upload:'<path d="M12 21V9m0 0-4.5 4.5M12 9l4.5 4.5"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/>',
  pin:'<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>'
};
function icon(name, cls){ return `<svg class="icon ${cls||''}" viewBox="0 0 24 24">${ICONS[name]||''}</svg>`; }

/* ---------- Nav config ---------- */
const NAV = [
  {group:'Overview', items:[
    {id:'dashboard', label:'Dashboard', icon:'dashboard'},
  ]},
  {group:'Inventory', items:[
    {id:'products', label:'Stock Items', icon:'box'},
    {id:'categories', label:'Categories', icon:'tag'},
    {id:'lowstock', label:'Low Stock', icon:'alert', badgeKey:'lowStockCount'},
  ]},
  {group:'Sales', items:[
    {id:'sales', label:'Sell Accessories', icon:'cart'},
    {id:'orders', label:'Repair', icon:'cart'},
    {id:'expenses', label:'Expense', icon:'wallet'},
  ]},
  {group:'Administration', items:[
    {id:'users', label:'Users', icon:'users', ownerOnly:true, badgeKey:'pendingRequestCount'},
    {id:'roles', label:'Roles', icon:'shield', ownerOnly:true},
    {id:'history', label:'History', icon:'clock'},
    {id:'reports', label:'Report', icon:'chart'},
    {id:'settings', label:'Settings', icon:'settings'},
  ]},
];
// Nav ids that are always Admin/Owner-level only, regardless of any role's
// selected module list (Sub Admin, Manager and Viewer can never reach these).
const OWNER_ONLY_NAV = NAV.flatMap(g=>g.items).filter(it=>it.ownerOnly).map(it=>it.id);
// The set of nav ids a role's module picker is allowed to offer (everything
// except the owner-only pages above).
const SELECTABLE_NAV = NAV.flatMap(g=>g.items).filter(it=>!it.ownerOnly).map(it=>it.id);
const ROLE_LEVELS = [
  {id:'admin', label:'Admin', hint:'Full access to every page, including Users, Roles, Import Backup and Erase All Data.'},
  {id:'subadmin', label:'Sub Admin', hint:'Full access to every page except Users, Roles, Import Backup and Erase All Data.'},
  {id:'manager', label:'Manager', hint:'Can view and edit only the pages ticked below.'},
  {id:'viewer', label:'Viewer', hint:'Can only view the pages ticked below — cannot add, edit or delete anything.'},
];
const PAGE_META = {
  dashboard:['Dashboard',"Welcome back — here's what's happening today."],
  products:['Stock Items','Manage the parts, accessories & devices you stock.'],
  categories:['Categories','Organize stock items and repair types into groups.'],
  lowstock:['Low Stock','Items that have fallen below their reorder threshold.'],
  sales:['Sell Accessories','Sell stock items & accessories directly to a walk-in or existing customer.'],
  orders:['Repair','Track repair jobs from intake to delivery.'],
  expenses:['Expense','Log workshop expenses and running costs.'],
  repairs:['Repair','Manage every repair job from intake to delivery.'],
  customers:['Customer Data','Your customer directory and service history.'],
  users:['Users','Staff accounts, roles and access.'],
  roles:['Roles','Define access levels and pick exactly what each role can see and edit.'],
  history:['History','A running log of activity across the workshop.'],
  reports:['Report','Business performance at a glance.'],
  settings:['Settings','Business profile, preferences and data.'],
};

/* ---------- Utilities ---------- */
function uid(p){ return p+'-'+Math.random().toString(36).slice(2,7).toUpperCase(); }
// Customer-facing tracking code — short, easy to read/type over the phone or
// into a website field. Excludes visually-ambiguous characters (0/O, 1/I/L).
// Format: PREFIX-XXXXXX. Prefix identifies the job type at a glance —
// REP for repairs, ACC for accessory sales, SKX for standalone invoices.
// Guaranteed unique across orders, repairs, sales and invoices, however
// the code is looked up.
function genTrackingId(prefix){
  prefix = prefix || 'SKX';
  const chars = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
  let code;
  do{
    code = prefix + '-' + Array.from({length:6}, ()=> chars[Math.floor(Math.random()*chars.length)]).join('');
  } while(
    (DB.orders||[]).some(o=>o.trackingId===code) ||
    (DB.invoices||[]).some(i=>i.trackingId===code) ||
    (DB.repairs||[]).some(r=>r.trackingId===code) ||
    (DB.sales||[]).some(s=>s.trackingId===code)
  );
  return code;
}
function fmtMoney(n){ n = Number(n)||0; return CUR + n.toLocaleString('en-PK',{maximumFractionDigits:0}); }
function fmtDate(d){ if(!d) return '—'; const dt = new Date(d); return dt.toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'}); }
function daysAgo(n){ const d = new Date(); d.setDate(d.getDate()-n); return d.toISOString().slice(0,10); }
function todayStr(){ return new Date().toISOString().slice(0,10); }
function nowTimeStr(){ const d = new Date(); return String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0'); }
function initials(name){ return (name||'?').split(' ').filter(Boolean).slice(0,2).map(w=>w[0].toUpperCase()).join(''); }
function escapeHtml(s){ return String(s??'').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
const PALETTE = ['#2E5EFF','#8B2FE0','#FF6A3D','#17B26A','#F5A623','#F04438','#0EA5E9','#D946EF'];

/* ---------- Seed data ---------- */
function seedData(){
  const categories = [
    {id:uid('CAT'), name:'Screens & Displays', type:'Product'},
    {id:uid('CAT'), name:'Batteries', type:'Product'},
    {id:uid('CAT'), name:'Charging Ports', type:'Product'},
    {id:uid('CAT'), name:'Back Covers', type:'Product'},
    {id:uid('CAT'), name:'Cables & Chargers', type:'Product'},
    {id:uid('CAT'), name:'Screen Repair', type:'Repair'},
    {id:uid('CAT'), name:'Water Damage', type:'Repair'},
    {id:uid('CAT'), name:'Software Issue', type:'Repair'},
  ];
  const products = [];
  const customers = [];
  const users = [
    {id:uid('USR'), name:'Admin User', username:'admin', password:'admin123', role:'Administrator', email:'', phone:'', status:'Active'},
  ];
  const repairs = [];
  const orders = [];
  const invoices = [];
  const sales = [];
  const expenses = [];
  const history = [];
  return {
    settings:{businessName:'Sky Nex', tagline:'Mobile Repair Workshop & Institute', currency:'PKR', theme:'light',
      address:'', phone:'', email:'', trackingUrl:'', lowStockAlerts:true, emailNotify:true, currentUser:users[0].id},
    lists:{
      expenseCategories:['Rent','Utilities','Inventory','Tools','Salaries','Marketing','Other'],
      paidBy:['Admin User'],
      orderStatuses:['Pending','Processing','Completed','Cancelled'],
      invoiceStatuses:['Paid','Unpaid','Partial'],
      repairStatuses:['Received','Diagnosing','Repairing','Ready','Delivered'],
      userStatuses:['Active','Inactive'],
    },
    roles:[
      {id:uid('ROL'), name:'Administrator', level:'admin', modules:[]},
      {id:uid('ROL'), name:'Sub Admin', level:'subadmin', modules:[]},
      {id:uid('ROL'), name:'Manager', level:'manager', modules:['dashboard','sales','orders','customers']},
      {id:uid('ROL'), name:'Senior Technician', level:'manager', modules:['dashboard','sales','orders','products','categories','customers']},
      {id:uid('ROL'), name:'Technician', level:'manager', modules:['dashboard','orders']},
      {id:uid('ROL'), name:'Cashier', level:'manager', modules:['dashboard','sales','orders','expenses','customers']},
      {id:uid('ROL'), name:'Viewer', level:'viewer', modules:['dashboard','sales','orders','customers','reports']},
    ],
    categories, products, customers, users, repairs, orders, sales, invoices, expenses, history, requests:[], schemaVersion:SEED_VERSION
  };
}
/* ---------- Username helpers ---------- */
/* ---------- Storage (resilient wrapper) ----------
   Falls back to an in-memory store if localStorage is blocked/unavailable
   (sandboxed preview, private browsing, disabled storage, etc.) so the
   login form never silently fails to work. */
const memStore = {};
let storageIsLive = true;
try{
  const t = '__skynex_test__';
  window.localStorage.setItem(t, '1');
  window.localStorage.removeItem(t);
}catch(e){ storageIsLive = false; }
const safeStorage = {
  getItem(key){
    if(!storageIsLive) return Object.prototype.hasOwnProperty.call(memStore, key) ? memStore[key] : null;
    try{ return window.localStorage.getItem(key); }
    catch(e){ storageIsLive = false; return Object.prototype.hasOwnProperty.call(memStore, key) ? memStore[key] : null; }
  },
  setItem(key, value){
    if(!storageIsLive){ memStore[key] = value; return; }
    try{ window.localStorage.setItem(key, value); }
    catch(e){ storageIsLive = false; memStore[key] = value; }
  },
  removeItem(key){
    if(!storageIsLive){ delete memStore[key]; return; }
    try{ window.localStorage.removeItem(key); }
    catch(e){ storageIsLive = false; delete memStore[key]; }
  }
};
function slugUsername(name, existingUsers){
  const base = (name||'user').toLowerCase().trim().split(/\s+/)[0].replace(/[^a-z0-9]/g,'') || 'user';
  let candidate = base, n = 1;
  const taken = (u)=> (existingUsers||[]).some(x=>x.username && x.username.toLowerCase()===u.toLowerCase());
  while(taken(candidate)){ n++; candidate = base+n; }
  return candidate;
}
function loadDB(){
  let raw = safeStorage.getItem(STORE_KEY);
  let d;
  if(!raw){ d = seedData(); safeStorage.setItem(STORE_KEY, JSON.stringify(d)); return d; }
  try{ d = JSON.parse(raw); }catch(e){ d = seedData(); safeStorage.setItem(STORE_KEY, JSON.stringify(d)); return d; }
  // If this saved data came from an older build (no schema version, or an
  // outdated one), it may hold stale users/passwords that no longer match
  // this build's seed data. Reseed fresh rather than silently locking
  // people out with mismatched credentials.
  if(d.schemaVersion !== SEED_VERSION){
    d = seedData();
    safeStorage.setItem(STORE_KEY, JSON.stringify(d));
    return d;
  }
  if(!d.lists) d.lists = {};
  const defaults = seedData().lists;
  let migrated = false;
  if(d.settings && d.settings.trackingUrl === undefined){ d.settings.trackingUrl = ''; migrated = true; }
  Object.keys(defaults).forEach(k=>{ if(!d.lists[k]){ d.lists[k] = defaults[k]; migrated = true; } });
  if(!Array.isArray(d.requests)){ d.requests = []; migrated = true; }
  if(!Array.isArray(d.sales)){ d.sales = []; migrated = true; }
  if(!Array.isArray(d.roles) || !d.roles.length){ d.roles = seedData().roles; migrated = true; }
  if(Array.isArray(d.users)){
    d.users.forEach(u=>{
      if(!u.username){ u.username = slugUsername(u.name, d.users); migrated = true; }
      if(!u.password){ u.password = 'changeme123'; migrated = true; }
    });
  }
  if(migrated) safeStorage.setItem(STORE_KEY, JSON.stringify(d));
  return d;
}
let DB;
try{ DB = loadDB(); }catch(e){ DB = seedData(); }
function save(){ safeStorage.setItem(STORE_KEY, JSON.stringify(DB)); }

/* ---------- Auth / session ---------- */
const SESSION_KEY = 'skynex_crm_session_v1';
function currentUserObj(){ return DB.users.find(u=>u.id===DB.settings.currentUser) || null; }
function roleForUser(u){ return (u && DB.roles.find(r=>r.name===u.role)) || null; }
function currentRole(){ const u = currentUserObj(); return u ? roleForUser(u) : null; }
// Safe default: if a user's role was deleted/renamed and no longer matches
// any role definition, treat them as a Viewer rather than silently granting
// wider access than intended.
function roleLevel(){ const r = currentRole(); return r ? r.level : 'viewer'; }
function isAdmin(){ return roleLevel()==='admin'; }
// Whether the current user can add/edit/delete records at all (false for Viewer).
function canEditData(){ return roleLevel()!=='viewer'; }
// Whether the current user can reach a given nav page id at all.
function hasModuleAccess(navId){
  const level = roleLevel();
  if(OWNER_ONLY_NAV.includes(navId)) return level==='admin';
  if(level==='admin' || level==='subadmin') return true;
  const r = currentRole();
  return !!(r && Array.isArray(r.modules) && r.modules.includes(navId));
}
// First page (in nav order) the current user is actually allowed to see —
// used as a safe redirect target instead of assuming dashboard is reachable.
function firstAccessibleRoute(){
  const flat = NAV.flatMap(g=>g.items);
  const hit = flat.find(it=>hasModuleAccess(it.id));
  return hit ? hit.id : 'dashboard';
}
function pendingRequestCount(){ return DB.requests.filter(r=>r.status==='Pending').length; }
function myPendingRequests(userId){ return DB.requests.filter(r=>r.userId===userId).slice().reverse(); }

function attemptLogin(username, password){
  const uname = (username||'').trim().toLowerCase();
  const user = DB.users.find(u=> (u.username||'').toLowerCase()===uname);
  if(!user || user.password!==password) return {ok:false, msg:'Incorrect username or password.'};
  if(user.status==='Inactive') return {ok:false, msg:'This account is inactive. Contact your administrator.'};
  safeStorage.setItem(SESSION_KEY, user.id);
  DB.settings.currentUser = user.id;
  save();
  return {ok:true, user};
}
function doLogout(){
  safeStorage.removeItem(SESSION_KEY);
  document.getElementById('app').style.display = 'none';
  document.getElementById('loginScreen').style.display = 'flex';
  document.getElementById('loginPassword').value = '';
  document.getElementById('loginError').textContent = '';
  const u = document.getElementById('loginUsername'); if(u){ u.value=''; u.focus(); }
}
function tryResumeSession(){
  const id = safeStorage.getItem(SESSION_KEY);
  if(!id) return false;
  const user = DB.users.find(u=>u.id===id);
  if(!user || user.status==='Inactive'){ safeStorage.removeItem(SESSION_KEY); return false; }
  DB.settings.currentUser = user.id; save();
  return true;
}
function showApp(){
  document.getElementById('loginScreen').style.display = 'none';
  document.getElementById('app').style.display = 'flex';
  if(!location.hash) location.hash = '#dashboard';
  route();
}
document.getElementById('loginForm').addEventListener('submit', function(e){
  e.preventDefault();
  const uEl = document.getElementById('loginUsername');
  const pEl = document.getElementById('loginPassword');
  const errEl = document.getElementById('loginError');
  const res = attemptLogin(uEl.value, pEl.value);
  if(!res.ok){ errEl.textContent = res.msg; return; }
  errEl.textContent = '';
  showApp();
});
(function setupLoginPwdToggle(){
  const toggleBtn = document.getElementById('loginPwdToggle');
  const pwdInput = document.getElementById('loginPassword');
  const eyeIcon = document.getElementById('loginPwdEyeIcon');
  if(!toggleBtn || !pwdInput || !eyeIcon) return;
  toggleBtn.addEventListener('click', function(){
    const showing = pwdInput.type === 'text';
    pwdInput.type = showing ? 'password' : 'text';
    eyeIcon.innerHTML = showing ? ICONS.eye : ICONS.eyeOff;
    toggleBtn.setAttribute('aria-label', showing ? 'Show password' : 'Hide password');
  });
})();
function log(text, type, meta){ const entry = {id:uid('LOG'), text, time:new Date().toISOString(), type:type||'general'}; if(meta) entry.meta = meta; DB.history.unshift(entry); if(DB.history.length>300) DB.history.length=300; save(); }
function toast(msg, type){
  const wrap = document.getElementById('toast-wrap');
  const el = document.createElement('div');
  el.className = 'toast '+(type||'success');
  el.innerHTML = icon(type==='error'?'x':'check') + '<span>'+escapeHtml(msg)+'</span>';
  wrap.appendChild(el);
  setTimeout(()=>{ el.style.opacity='0'; el.style.transform='translateX(20px)'; el.style.transition='.2s'; setTimeout(()=>el.remove(),200); }, 2600);
}

/* ---------- Lookups ---------- */
const custName = v => DB.customers.find(c=>c.id===v)?.name || v || '—';
const userName = id => DB.users.find(u=>u.id===id)?.name || '—';
const prodName = id => DB.products.find(p=>p.id===id)?.name || '—';
const catName = id => DB.categories.find(c=>c.id===id)?.name || '—';
function lowStockItems(){ return DB.products.filter(p=>Number(p.stock) <= Number(p.threshold)); }
function activeRepairs(){ return DB.orders.filter(o=>o.status!=='Completed' && o.status!=='Cancelled'); }

/* ---------- Router ---------- */
let currentRoute = 'dashboard';
function route(){
  const hash = (location.hash||'#dashboard').replace('#','');
  let target = PAGE_META[hash] ? hash : 'dashboard';
  if(!hasModuleAccess(target)){
    toast('You don\'t have access to that page','error');
    target = firstAccessibleRoute();
    if('#'+target !== location.hash){ location.hash = '#'+target; return; }
  }
  currentRoute = target;
  renderSidebar();
  const [title,sub] = PAGE_META[currentRoute];
  document.getElementById('pageTitle').textContent = title;
  document.getElementById('pageSub').textContent = sub;
  const c = document.getElementById('content');
  c.innerHTML = '';
  RENDERERS[currentRoute](c);
  document.getElementById('sidebar').classList.remove('open');
  window.scrollTo(0,0);
}
window.addEventListener('hashchange', route);

function renderSidebar(){
  const wrap = document.getElementById('navScroll');
  wrap.innerHTML = NAV.map(g=>{
    const items = g.items.filter(it=> hasModuleAccess(it.id));
    if(!items.length) return '';
    return `
    <div class="nav-group">
      <div class="nav-group-label">${g.group}</div>
      ${items.map(it=>{
        const active = it.id===currentRoute ? 'active':'';
        let badge = '';
        if(it.badgeKey==='lowStockCount'){ const n = lowStockItems().length; if(n>0 && DB.settings.lowStockAlerts) badge = `<span class="nav-badge">${n}</span>`; }
        if(it.badgeKey==='activeRepairCount'){ const n = activeRepairs().length; if(n>0) badge = `<span class="nav-badge">${n}</span>`; }
        if(it.badgeKey==='pendingRequestCount'){ const n = pendingRequestCount(); if(n>0) badge = `<span class="nav-badge">${n}</span>`; }
        return `<a href="#${it.id}" class="nav-item ${active}">${icon(it.icon)}<span>${it.label}</span>${badge}</a>`;
      }).join('')}
    </div>`;
  }).join('');
  const u = DB.users.find(x=>x.id===DB.settings.currentUser) || DB.users[0] || {name:'Guest', role:'—', photo:''};
  const avHtml = u.photo ? `<img src="${u.photo}" alt="">` : initials(u.name);
  document.getElementById('sbUserAvatar').innerHTML = avHtml;
  document.getElementById('sbUserName').textContent = u.name;
  document.getElementById('sbUserRole').textContent = u.role;
  document.getElementById('topbarAvatar').innerHTML = avHtml;
}

/* ---------- Modal helper ---------- */
function openModal(title, bodyHtml, footHtml, wide){
  document.getElementById('modalBox').className = 'modal'+(wide?' wide':'');
  document.getElementById('modalBox').innerHTML = `
    <div class="modal-head"><h3>${title}</h3><button class="modal-close" onclick="closeModal()" aria-label="Close dialog">${icon('x')}</button></div>
    <div class="modal-body">${bodyHtml}</div>
    ${footHtml? `<div class="modal-foot">${footHtml}</div>` : ''}
  `;
  document.getElementById('modalOverlay').classList.add('show');
}
function closeModal(){ document.getElementById('modalOverlay').classList.remove('show'); Object.keys(WEBCAM_STREAMS).forEach(stopWebcamStream); }
document.getElementById('modalOverlay').addEventListener('click', e=>{ if(e.target.id==='modalOverlay') closeModal(); });

/* ---------- Generic field renderer for forms ---------- */
function renderField(f, val){
  val = val ?? f.default ?? '';
  const id = 'f_'+f.key;
  if(f.type==='select'){
    const optsHtml = f.options.map(o=>`<option value="${o.value}" ${String(o.value)===String(val)?'selected':''}>${o.label}</option>`).join('');
    if(f.manageKey){
      return `<div class="field ${f.full?'full':''}" id="fw_${f.key}"><label>${f.label}</label>
        <div class="select-manage-row">
          <select id="${id}">${optsHtml}</select>
          <button type="button" class="select-manage-toggle" id="${id}_mgbtn" title="Add or remove options" aria-label="Add or remove options">${icon('plus')}</button>
        </div>
        <div class="select-manage-panel" id="${id}_mgpanel" style="display:none">
          <div class="taglist" id="${id}_mgtags"></div>
          <div class="manage-add-row">
            <input type="text" id="${id}_mginput" placeholder="Add new option...">
            <button type="button" class="btn btn-outline btn-sm" id="${id}_mgaddbtn">${icon('plus')} Add</button>
          </div>
        </div></div>`;
    }
    return `<div class="field ${f.full?'full':''}" id="fw_${f.key}"><label>${f.label}</label>
      <select id="${id}">${optsHtml}</select></div>`;
  }
  if(f.type==='lookup'){
    // Read-only display of a linked record's name (e.g. the customer already
    // attached to this invoice via its order/repair). Never offers a pick-list
    // of unrelated records, and shows blank if there's no linked name.
    const display = f.matchCollection ? (DB[f.matchCollection].find(x=>x.id===val)?.name || '') : (val||'');
    return `<div class="field ${f.full?'full':''}" id="fw_${f.key}"><label>${f.label}</label>
      <input type="text" value="${escapeHtml(display)}" disabled>
      <input type="hidden" id="${id}" value="${escapeHtml(val||'')}"></div>`;
  }
  if(f.type==='combo'){
    const display = f.matchCollection ? (DB[f.matchCollection].find(x=>x.id===val)?.name ?? val) : val;
    return `<div class="field ${f.full?'full':''}" id="fw_${f.key}"><label>${f.label}</label>
      <input type="text" id="${id}" value="${escapeHtml(display)}" placeholder="${f.placeholder||'Type a name...'}" autocomplete="off">
      </div>`;
  }
  if(f.type==='textarea'){
    return `<div class="field full" id="fw_${f.key}"><label>${f.label}</label><textarea id="${id}">${escapeHtml(val)}</textarea></div>`;
  }
  if(f.type==='image'){
    return `<div class="field full" id="fw_${f.key}"><label>${f.label}</label>
      <input type="hidden" id="${id}_data" value="${escapeHtml(val)}">
      <div id="${id}_container">${renderImageInner(f, val, id)}</div></div>`;
  }
  if(f.type==='webcam'){
    return `<div class="field full" id="fw_${f.key}"><label>${f.label}${f.optional?' <span class="opt-tag">(Optional)</span>':''}</label>
      <input type="hidden" id="${id}_data" value="${escapeHtml(val)}">
      <div id="${id}_container">${renderWebcamInner(f, val, id, 'idle')}</div></div>`;
  }
  if(f.type==='repeater'){
    return `<div class="field full" id="fw_${f.key}"><label>${f.label}</label>
      <div id="${id}_list"></div>
      <button type="button" class="btn btn-outline btn-sm" id="${id}_addbtn">${icon('plus')} Add Another ${f.itemName||'Item'}</button></div>`;
  }
  if(f.type==='checklist'){
    const list = (Array.isArray(val) && val.length) ? val : checklistDefaultVal(f);
    return `<div class="field full" id="fw_${f.key}"><label>${f.label}</label>
      <input type="hidden" id="${id}_data" value="${escapeHtml(JSON.stringify(list))}">
      <div class="checklist-box" id="${id}_box"></div>
      <div class="checklist-add-row">
        <input type="text" id="${id}_newitem" placeholder="Add custom option...">
        <button type="button" class="btn btn-outline btn-sm" id="${id}_addbtn">${icon('plus')} Add</button>
      </div></div>`;
  }
  if(f.type==='passcode'){
    const isDenied = val === 'Denied';
    return `<div class="field ${f.full?'full':''}" id="fw_${f.key}"><label>${f.label}</label>
      <div class="passcode-row">
        <input type="text" id="${id}" value="${isDenied?'':escapeHtml(val)}" placeholder="${f.placeholder||''}" ${isDenied?'disabled':''}>
        <label class="passcode-denied-lbl"><input type="checkbox" id="${id}_denied" ${isDenied?'checked':''}> Customer Denied</label>
      </div></div>`;
  }
  return `<div class="field ${f.full?'full':''}" id="fw_${f.key}"><label>${f.label}</label><input type="${f.type||'text'}" id="${id}" value="${escapeHtml(val)}" ${f.step?`step="${f.step}"`:''} placeholder="${f.placeholder||''}"></div>`;
}
function checklistDefaultVal(f){ return (f.options||[]).map(o=>({label:o, checked:false})); }
/* ---------- Read-only "View" detail modal (Sell Accessories / Repair jobs) ----------
   Renders every configured field as plain text instead of an editable input,
   showing only what was actually filled in / ticked — used by the eye-icon
   "View" action so staff can see full intake details without risking an edit. */
function readOnlyRow(label, html){
  return `<div class="ro-row"><div class="ro-label">${escapeHtml(label)}</div><div class="ro-val">${html}</div></div>`;
}
function renderReadOnlyField(f, val){
  val = val ?? f.default ?? '';
  if(f.type==='select'){
    const opt = (f.options||[]).find(o=>String(o.value)===String(val));
    return readOnlyRow(f.label, escapeHtml(opt?opt.label:(val||'—')));
  }
  if(f.type==='lookup' || f.type==='combo'){
    const display = f.matchCollection ? (DB[f.matchCollection].find(x=>x.id===val)?.name ?? val) : val;
    return readOnlyRow(f.label, escapeHtml(display||'—'));
  }
  if(f.type==='textarea'){
    return readOnlyRow(f.label, `<span style="white-space:pre-wrap">${escapeHtml(val||'—')}</span>`);
  }
  if(f.type==='image' || f.type==='webcam'){
    return readOnlyRow(f.label, val ? `<img src="${val}" style="max-width:160px;max-height:120px;border-radius:8px;border:1px solid var(--border)">` : '<span class="cell-muted">Not provided</span>');
  }
  if(f.type==='checklist'){
    const list = Array.isArray(val) ? val.filter(it=>it.checked) : [];
    return readOnlyRow(f.label, list.length
      ? `<div style="display:flex;flex-wrap:wrap;gap:6px">${list.map(it=>`<span class="badge green">${escapeHtml(it.label)}</span>`).join('')}</div>`
      : '<span class="cell-muted">None selected</span>');
  }
  if(f.type==='passcode'){
    return readOnlyRow(f.label, val==='Denied' ? '<span class="badge red">Customer Denied</span>' : escapeHtml(val||'—'));
  }
  if(f.type==='repeater'){
    const items = Array.isArray(val) ? val : [];
    if(!items.length) return readOnlyRow(f.label, `<span class="cell-muted">None added</span>`);
    return `<div class="field full"><label>${escapeHtml(f.label)}</label>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${items.map((it,i)=>`<div style="border:1px solid var(--border);border-radius:10px;padding:10px 12px">
          <div style="font-weight:700;font-size:12px;margin-bottom:6px;color:var(--text-muted)">${escapeHtml(f.itemName||'Item')} ${i+1}</div>
          <div class="ro-grid">${(f.subFields||[]).map(sf=>renderReadOnlyField(sf, it[sf.key])).join('')}</div>
        </div>`).join('')}
      </div></div>`;
  }
  if(f.type==='password') return '';
  return readOnlyRow(f.label, escapeHtml(val===''||val==null?'—':val));
}
function openDetailView(opts, item){
  const body = `<div class="ro-grid">${opts.fields.map(f=>renderReadOnlyField(f, item[f.key])).join('')}</div>`;
  openModal((opts.singular||'Record')+' Details', body,
    `<button class="btn btn-outline" onclick="closeModal()">Close</button>`, opts.wideForm);
}
/* ---------- Checklist field (checkbox list with add/remove-your-own options) ---------- */
function bindChecklistField(f){
  const id = 'f_'+f.key;
  const dataInput = document.getElementById(id+'_data');
  const box = document.getElementById(id+'_box');
  const newItemInput = document.getElementById(id+'_newitem');
  const addBtn = document.getElementById(id+'_addbtn');
  if(!dataInput || !box) return;
  let list = [];
  try{ list = JSON.parse(dataInput.value||'[]'); }catch(e){ list = []; }
  function sync(){ dataInput.value = JSON.stringify(list); if(f.onChange) f.onChange(); }
  function renderRows(){
    box.innerHTML = list.length ? list.map((item,i)=>`
      <label class="checklist-row">
        <input type="checkbox" data-idx="${i}" ${item.checked?'checked':''}>
        <span>${escapeHtml(item.label)}</span>
        <button type="button" class="checklist-row-x" data-idx="${i}" title="Remove option">${icon('x')}</button>
      </label>`).join('') : `<span class="checklist-empty">No options yet — add one below.</span>`;
    box.querySelectorAll('input[type=checkbox]').forEach(cb=>{
      cb.onchange = ()=>{ list[+cb.dataset.idx].checked = cb.checked; sync(); };
    });
    box.querySelectorAll('.checklist-row-x').forEach(btn=>{
      btn.onclick = ()=>{ list.splice(+btn.dataset.idx,1); sync(); renderRows(); };
    });
  }
  renderRows();
  sync();
  if(addBtn) addBtn.onclick = ()=>{
    const v = (newItemInput.value||'').trim();
    if(!v) return;
    list.push({label:v, checked:true});
    newItemInput.value = '';
    sync(); renderRows();
  };
  if(newItemInput) newItemInput.onkeydown = e=>{ if(e.key==='Enter'){ e.preventDefault(); addBtn.click(); } };
}
/* ---------- Passcode field (text + "Customer Denied" toggle) ---------- */
function bindPasscodeField(f){
  const id = 'f_'+f.key;
  const textEl = document.getElementById(id);
  const deniedEl = document.getElementById(id+'_denied');
  if(!textEl || !deniedEl) return;
  function apply(){
    textEl.disabled = deniedEl.checked;
    if(deniedEl.checked) textEl.value = '';
    if(f.onChange) f.onChange();
  }
  deniedEl.onchange = apply;
  apply();
}
/* ---------- Repeatable sub-form field (e.g. multiple Devices on one Repair job) ---------- */
function renderDeviceSubField(sf, val){
  val = val ?? sf.default ?? '';
  if(sf.type==='select'){
    return `<div class="field ${sf.full?'full':''}"><label>${sf.label}</label>
      <select data-key="${sf.key}">${sf.options.map(o=>`<option value="${o.value}" ${String(o.value)===String(val)?'selected':''}>${o.label}</option>`).join('')}</select></div>`;
  }
  if(sf.type==='textarea'){
    return `<div class="field full"><label>${sf.label}</label><textarea data-key="${sf.key}">${escapeHtml(val)}</textarea></div>`;
  }
  return `<div class="field ${sf.full?'full':''}"><label>${sf.label}</label><input type="${sf.type||'text'}" data-key="${sf.key}" value="${escapeHtml(val)}" placeholder="${sf.placeholder||''}"></div>`;
}
function bindRepeaterField(f, val){
  const id = 'f_'+f.key;
  const list = document.getElementById(id+'_list');
  const addBtn = document.getElementById(id+'_addbtn');
  if(!list) return;
  function renumber(){
    Array.from(list.children).forEach((block,i)=>{
      const title = block.querySelector('.device-block-title');
      if(title) title.textContent = (f.itemName||'Item')+' '+(i+1);
      const rm = block.querySelector('.device-remove');
      if(rm) rm.style.display = list.children.length>1 ? '' : 'none';
    });
  }
  function addBlock(data){
    const idx = list.children.length;
    const div = document.createElement('div');
    div.className = 'device-block';
    div.style.cssText = 'border:1px solid var(--border);border-radius:10px;padding:12px;margin-bottom:10px';
    div.innerHTML = `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
        <strong class="device-block-title" style="font-size:13px">${(f.itemName||'Item')+' '+(idx+1)}</strong>
        <button type="button" class="btn btn-outline btn-sm device-remove" style="color:var(--red);border-color:var(--red)">${icon('trash')} Remove</button>
      </div>
      <div class="form-grid">${(f.subFields||[]).map(sf=>renderDeviceSubField(sf, data?data[sf.key]:undefined)).join('')}</div>`;
    div.querySelector('.device-remove').onclick = ()=>{ div.remove(); renumber(); };
    list.appendChild(div);
    renumber();
  }
  list.innerHTML = '';
  const initial = (val && val.length) ? val : [{}];
  initial.forEach(d=> addBlock(d));
  if(addBtn) addBtn.onclick = ()=> addBlock({});
}
function formatPkPhone(v){
  const digits = (v||'').replace(/\D/g,'').slice(0,11);
  return digits.length > 4 ? digits.slice(0,4)+'-'+digits.slice(4) : digits;
}
function isValidEmail(v){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v||'').trim());
}
function bindPhoneMask(id){
  const el = document.getElementById(id);
  if(!el) return;
  el.setAttribute('inputmode','numeric');
  el.setAttribute('maxlength','12');
  if(!el.placeholder) el.placeholder = '0300-0000000';
  el.value = formatPkPhone(el.value);
  el.oninput = function(){
    const pos = this.selectionStart;
    const before = this.value.length;
    this.value = formatPkPhone(this.value);
    const after = this.value.length;
    const newPos = Math.max(0, pos + (after - before));
    this.setSelectionRange(newPos, newPos);
  };
}
function renderImageInner(f, val, id){
  return `<div class="img-field">
      <div class="img-preview">${val ? `<img src="${val}" alt="">` : `<div class="img-empty">${icon('image')}<span>No photo yet</span></div>`}</div>
      <div class="img-actions">
        <input type="file" accept="image/*" ${f.capture?`capture="${f.capture}"`:''} id="${id}_file" style="display:none">
        <button type="button" class="btn btn-outline btn-sm" data-imgpick="${id}">${icon('camera')} ${val?'Change Photo':'Add Photo'}</button>
        ${val?`<button type="button" class="btn btn-outline btn-sm" data-imgclear="${id}">${icon('trash')} Remove</button>`:''}
      </div>
    </div>`;
}
function bindImageField(f){
  const id = 'f_'+f.key;
  const container = document.getElementById(id+'_container');
  if(!container) return;
  const pickBtn = container.querySelector(`[data-imgpick="${id}"]`);
  const fileInput = document.getElementById(id+'_file');
  const clearBtn = container.querySelector(`[data-imgclear="${id}"]`);
  if(pickBtn) pickBtn.onclick = ()=> fileInput.click();
  if(fileInput) fileInput.onchange = e=>{
    const file = e.target.files[0]; if(!file) return;
    const reader = new FileReader();
    reader.onload = ()=>{
      document.getElementById(id+'_data').value = reader.result;
      container.innerHTML = renderImageInner(f, reader.result, id);
      bindImageField(f);
    };
    reader.readAsDataURL(file);
  };
  if(clearBtn) clearBtn.onclick = ()=>{
    document.getElementById(id+'_data').value = '';
    container.innerHTML = renderImageInner(f, '', id);
    bindImageField(f);
  };
}

/* ---------- Live PC/webcam-only capture field (no gallery/file picker) ---------- */
const WEBCAM_STREAMS = {};
function renderWebcamInner(f, val, id, mode){
  if(mode==='live'){
    return `<div class="webcam-field">
      <div class="webcam-live-wrap">
        <video id="${id}_video" autoplay playsinline muted></video>
      </div>
      <div class="img-actions">
        <button type="button" class="btn btn-primary btn-sm" data-webcamshot="${id}">${icon('camera')} Capture</button>
        <button type="button" class="btn btn-outline btn-sm" data-webcamcancel="${id}">${icon('x')} Cancel</button>
      </div>
    </div>`;
  }
  return `<div class="webcam-field">
      <div class="img-preview">${val ? `<img src="${val}" alt="">` : `<div class="img-empty">${icon('camera')}<span>No photo yet</span></div>`}</div>
      <div class="img-actions">
        <button type="button" class="btn btn-outline btn-sm" data-webcamopen="${id}">${icon('camera')} ${val?'Retake Photo':'Open Camera'}</button>
        ${val?`<button type="button" class="btn btn-outline btn-sm" data-webcamclear="${id}">${icon('trash')} Remove</button>`:''}
      </div>
      <div class="webcam-hint">Uses your PC/webcam camera only — cannot be uploaded from gallery.</div>
    </div>`;
}
function stopWebcamStream(id){
  const s = WEBCAM_STREAMS[id];
  if(s){ s.getTracks().forEach(t=>t.stop()); delete WEBCAM_STREAMS[id]; }
}
function bindWebcamField(f){
  const id = 'f_'+f.key;
  const container = document.getElementById(id+'_container');
  if(!container) return;
  const openBtn = container.querySelector(`[data-webcamopen="${id}"]`);
  const clearBtn = container.querySelector(`[data-webcamclear="${id}"]`);
  const shotBtn = container.querySelector(`[data-webcamshot="${id}"]`);
  const cancelBtn = container.querySelector(`[data-webcamcancel="${id}"]`);

  if(openBtn) openBtn.onclick = async ()=>{
    if(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia){
      toast('Camera not supported in this browser','error'); return;
    }
    container.innerHTML = renderWebcamInner(f, document.getElementById(id+'_data').value, id, 'live');
    bindWebcamField(f);
    try{
      const stream = await navigator.mediaDevices.getUserMedia({video:true});
      WEBCAM_STREAMS[id] = stream;
      const video = document.getElementById(id+'_video');
      if(video) video.srcObject = stream;
    }catch(err){
      toast('Camera access denied or unavailable','error');
      container.innerHTML = renderWebcamInner(f, document.getElementById(id+'_data').value, id, 'idle');
      bindWebcamField(f);
    }
  };
  if(shotBtn) shotBtn.onclick = ()=>{
    const video = document.getElementById(id+'_video');
    if(!video || !video.videoWidth){ toast('Camera still starting, try again','error'); return; }
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth; canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
    stopWebcamStream(id);
    document.getElementById(id+'_data').value = dataUrl;
    container.innerHTML = renderWebcamInner(f, dataUrl, id, 'idle');
    bindWebcamField(f);
  };
  if(cancelBtn) cancelBtn.onclick = ()=>{
    stopWebcamStream(id);
    container.innerHTML = renderWebcamInner(f, document.getElementById(id+'_data').value, id, 'idle');
    bindWebcamField(f);
  };
  if(clearBtn) clearBtn.onclick = ()=>{
    document.getElementById(id+'_data').value = '';
    container.innerHTML = renderWebcamInner(f, '', id, 'idle');
    bindWebcamField(f);
  };
}
function collectFields(fields){
  const out = {};
  fields.forEach(f=>{
    if(f.type==='image' || f.type==='webcam'){ const el = document.getElementById('f_'+f.key+'_data'); out[f.key] = el?el.value:''; return; }
    if(f.type==='repeater'){
      const list = document.getElementById('f_'+f.key+'_list');
      const blocks = list ? Array.from(list.children) : [];
      out[f.key] = blocks.map(b=>{
        const obj = {};
        (f.subFields||[]).forEach(sf=>{
          const el = b.querySelector(`[data-key="${sf.key}"]`);
          obj[sf.key] = sf.type==='number' ? Number((el&&el.value)||0) : (el?el.value:'');
        });
        return obj;
      });
      return;
    }
    if(f.type==='checklist'){
      const el = document.getElementById('f_'+f.key+'_data');
      try{ out[f.key] = el ? JSON.parse(el.value||'[]') : []; }catch(e){ out[f.key] = []; }
      return;
    }
    if(f.type==='passcode'){
      const deniedEl = document.getElementById('f_'+f.key+'_denied');
      const textEl = document.getElementById('f_'+f.key);
      out[f.key] = (deniedEl && deniedEl.checked) ? 'Denied' : (textEl?textEl.value:'');
      return;
    }
    const el = document.getElementById('f_'+f.key);
    out[f.key] = f.type==='number' ? Number(el.value||0) : el.value;
  });
  return out;
}

/* ---------- Excel Import / Export helpers (SheetJS) ---------- */
function excelValueForField(f, item){
  const raw = item[f.key];
  if(f.type==='password') return '';
  if(f.type==='checklist') return (Array.isArray(raw)?raw:[]).filter(i=>i.checked).map(i=>i.label).join(', ');
  if(f.type==='select' && f.options){
    const opt = f.options.find(o=>String(o.value)===String(raw));
    return opt ? opt.label : (raw ?? '');
  }
  if(f.type==='combo' && f.matchCollection){
    const hit = DB[f.matchCollection].find(x=>x.id===raw);
    return hit ? hit.name : (raw ?? '');
  }
  return raw ?? '';
}
function excelParseFieldValue(f, raw){
  let v = (raw===undefined || raw===null) ? '' : String(raw).trim();
  if(f.type==='select' && f.options){
    const opt = f.options.find(o=> String(o.label).toLowerCase()===v.toLowerCase() || String(o.value).toLowerCase()===v.toLowerCase());
    return opt ? opt.value : v;
  }
  if(f.type==='combo' && f.matchCollection){
    const hit = DB[f.matchCollection].find(x=> (x.name||'').toLowerCase()===v.toLowerCase());
    return hit ? hit.id : '';
  }
  if(f.type==='number') return v===''? '' : Number(v);
  return v;
}
function exportCrudExcel(opts){
  if(typeof XLSX==='undefined'){ toast('Excel library failed to load — check your internet connection','error'); return; }
  const fields = opts.fields.filter(f=> f.type!=='image' && f.type!=='webcam' && f.type!=='repeater');
  const rows = DB[opts.collection].map(item=>{
    const obj = {'ID': item.id};
    fields.forEach(f=>{ obj[f.label] = excelValueForField(f, item); });
    return obj;
  });
  const ws = XLSX.utils.json_to_sheet(rows.length ? rows : [Object.assign({ID:''}, Object.fromEntries(fields.map(f=>[f.label,''])))]);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, (opts.title||'Data').slice(0,28));
  XLSX.writeFile(wb, `${opts.collection}-export-${todayStr()}.xlsx`);
  toast('Exported to Excel');
}
function importCrudExcel(opts, file){
  if(typeof XLSX==='undefined'){ toast('Excel library failed to load — check your internet connection','error'); return; }
  const reader = new FileReader();
  reader.onload = (e)=>{
    let wb;
    try{ wb = XLSX.read(e.target.result, {type:'array'}); }
    catch(err){ toast('Could not read file — make sure it is a valid Excel/CSV file','error'); return; }
    const sheet = wb.Sheets[wb.SheetNames[0]];
    const rows = XLSX.utils.sheet_to_json(sheet, {defval:''});
    if(!rows.length){ toast('No rows found in the file','error'); return; }
    const fields = opts.fields.filter(f=> f.type!=='image' && f.type!=='webcam' && f.type!=='repeater' && f.type!=='checklist');
    let added=0, failed=0; const errors=[];
    rows.forEach((row,idx)=>{
      const data = {};
      fields.forEach(f=>{
        const raw = row[f.label] !== undefined ? row[f.label] : row[f.key];
        data[f.key] = excelParseFieldValue(f, raw);
      });
      if(opts.validate){ const err = opts.validate(data, null); if(err){ failed++; errors.push(`Row ${idx+2}: ${err}`); return; } }
      const newItem = Object.assign({id:uid(opts.prefix)}, data, opts.onCreateExtra?opts.onCreateExtra(data):{});
      DB[opts.collection].push(newItem);
      added++;
    });
    if(added){ save(); log(`${added} ${(opts.title||'record').toLowerCase()} imported from Excel`, opts.collection); }
    openModal('Import Result', `<p style="font-size:13.5px">${added} record(s) imported successfully.${failed? ` ${failed} row(s) skipped due to errors:`:''}</p>
      ${failed? `<div style="max-height:200px;overflow:auto;font-size:12px;color:var(--red);margin-top:8px">${errors.map(er=>`<div>${escapeHtml(er)}</div>`).join('')}</div>` : ''}`,
      `<button class="btn btn-primary" onclick="closeModal()">Close</button>`);
    route(); renderSidebar();
  };
  reader.onerror = ()=> toast('Could not read the selected file','error');
  reader.readAsArrayBuffer(file);
}

/* ---------- Generic CRUD list page builder ---------- */
function crudPage(container, opts){
  // opts: {collection, title, icon, fields(for form), columns(for table), searchKeys, filters:[{key,label,options}], newLabel, onRenderRow, extraToolbar}
  let searchVal = '';
  let filterVals = {};
  (opts.filters||[]).forEach(f=> filterVals[f.key]='');
  const readOnly = !canEditData();

  function getRows(){
    let rows = DB[opts.collection].slice().reverse();
    if(searchVal){
      const s = searchVal.toLowerCase();
      rows = rows.filter(r => opts.searchKeys.some(k => String(opts.getSearchVal ? opts.getSearchVal(r,k) : r[k]||'').toLowerCase().includes(s)));
    }
    (opts.filters||[]).forEach(f=>{
      if(filterVals[f.key]) rows = rows.filter(r => String(r[f.key])===filterVals[f.key]);
    });
    if(opts.statusOrder){
      const rank = s => { const i = opts.statusOrder.indexOf(s); return i===-1 ? opts.statusOrder.length : i; };
      rows = rows.slice().sort((a,b)=> rank(a.status)-rank(b.status));
    }
    return rows;
  }

  function renderTableInner(rows){
    return rows.length===0 ? emptyState(opts.title) : `
      <table>
        <thead><tr>${opts.columns.map(c=>`<th>${c.label}</th>`).join('')}${(opts.viewFn||opts.enableViewDetail||!readOnly)?'<th style="text-align:right">Actions</th>':''}</tr></thead>
        <tbody>${rows.map(r=>{
          const delAllowed = !opts.canDelete || opts.canDelete(r);
          return `<tr>${opts.columns.map(c=>`<td>${c.render(r)}</td>`).join('')}
          ${(opts.viewFn||opts.enableViewDetail||!readOnly)?`<td><div class="row-actions">
            ${opts.enableViewDetail?`<button class="mini-btn" data-detail="${r.id}" title="View" aria-label="View record details">${icon('eye')}</button>`:''}
            ${opts.viewFn?`<button class="mini-btn${opts.viewLabel?' mini-btn-text':''}" data-view="${r.id}" title="${escapeHtml(opts.viewLabel||'View')}" aria-label="${escapeHtml(opts.viewLabel||'View record')}">${opts.viewLabel?escapeHtml(opts.viewLabel):icon('file')}</button>`:''}
            ${readOnly?'':`<button class="mini-btn" data-edit="${r.id}" title="Edit" aria-label="Edit record">${icon('edit')}</button>
            ${delAllowed?`<button class="mini-btn danger" data-del="${r.id}" title="Delete" aria-label="Delete record">${icon('trash')}</button>`:`<button class="mini-btn danger" disabled title="${opts.canDeleteMsg||'Cannot delete this record'}" aria-label="Delete disabled: ${escapeHtml(opts.canDeleteMsg||'Cannot delete this record')}" style="opacity:.35;cursor:not-allowed">${icon('trash')}</button>`}`}
          </div></td>`:''}</tr>`;
        }).join('')}</tbody>
      </table>`;
  }

  // Re-renders only the row count + table body, so the search input / filters
  // never get destroyed and recreated -> keyboard focus stays put while typing.
  function updateRows(){
    const rows = getRows();
    const sub = container.querySelector('.section-head .sub');
    if(sub) sub.textContent = `${rows.length} of ${DB[opts.collection].length} ${opts.title.toLowerCase()}`;
    const card = container.querySelector('#crudTableCard');
    if(!card) return;
    card.innerHTML = renderTableInner(rows);
    if(!readOnly){
      card.querySelectorAll('[data-edit]').forEach(b=> b.onclick = ()=> openForm(DB[opts.collection].find(x=>x.id===b.dataset.edit)));
      card.querySelectorAll('[data-del]').forEach(b=> b.onclick = ()=> confirmDelete(b.dataset.del));
    }
    if(opts.viewFn) card.querySelectorAll('[data-view]').forEach(b=> b.onclick = ()=> opts.viewFn(DB[opts.collection].find(x=>x.id===b.dataset.view)));
    if(opts.enableViewDetail) card.querySelectorAll('[data-detail]').forEach(b=> b.onclick = ()=> openDetailView(opts, DB[opts.collection].find(x=>x.id===b.dataset.detail)));
  }

  function draw(){
    const rows = getRows();
    container.innerHTML = `
      <div class="section-head">
        <div><h2>${opts.title}</h2><div class="sub">${rows.length} of ${DB[opts.collection].length} ${opts.title.toLowerCase()}</div></div>
        <div class="head-actions">
          ${opts.extraActionsHtml||''}
          ${opts.enableExcel ? `<button class="btn btn-outline" id="exportExcelBtn">${icon('download')} Export Excel</button>` : ''}
          ${opts.enableExcel && !readOnly ? `<input type="file" accept=".xlsx,.xls,.csv" id="importExcelFile" style="display:none">
          <button class="btn btn-outline" id="importExcelBtn">${icon('upload')} Import Excel</button>` : ''}
          ${readOnly?'':`<button class="btn btn-primary" id="addNewBtn">${icon('plus')} ${opts.newLabel||'Add New'}</button>`}
        </div>
      </div>
      <div class="toolbar">
        <div class="tb-search">${icon('search')}<input type="text" id="searchInput" placeholder="Search ${opts.title.toLowerCase()}..." value="${escapeHtml(searchVal)}"></div>
        ${(opts.filters||[]).map(f=>{
          // manageKey filters pull their option list fresh from the live managed
          // list (categories/statuses) every time the page draws, so options
          // added/removed via the inline field manager show up here too.
          const optSrc = f.manageKey ? manageListItems(MANAGE_LIST_BLOCKS_BY_KEY[f.manageKey]).map(it=>({value:it.id,label:it.label})) : f.options;
          return `
          <select class="tb-filter" data-fk="${f.key}" ${f.manageKey?`data-managekey="${f.manageKey}"`:''}>
            <option value="">${f.label}: All</option>
            ${optSrc.map(o=>{
              const val = (o && typeof o==='object') ? o.value : o;
              const lbl = (o && typeof o==='object') ? o.label : o;
              return `<option value="${escapeHtml(String(val))}" ${filterVals[f.key]===String(val)?'selected':''}>${escapeHtml(String(lbl))}</option>`;
            }).join('')}
          </select>`;
        }).join('')}
      </div>
      <div class="table-card" id="crudTableCard">
        ${renderTableInner(rows)}
      </div>
    `;
    if(!readOnly){ const addBtn = container.querySelector('#addNewBtn'); if(addBtn) addBtn.onclick = ()=> openForm(null); }
    if(opts.enableExcel){
      const expBtn = container.querySelector('#exportExcelBtn');
      if(expBtn) expBtn.onclick = ()=> exportCrudExcel(opts);
      if(!readOnly){
        const impBtn = container.querySelector('#importExcelBtn');
        const impFile = container.querySelector('#importExcelFile');
        if(impBtn && impFile){
          impBtn.onclick = ()=> impFile.click();
          impFile.onchange = e=>{ const file = e.target.files[0]; if(file) importCrudExcel(opts, file); e.target.value=''; };
        }
      }
    }
    const si = container.querySelector('#searchInput');
    if(si) si.oninput = e=>{ searchVal = e.target.value; updateRows(); };
    container.querySelectorAll('.tb-filter').forEach(sel=>{
      sel.onchange = e=>{ filterVals[sel.dataset.fk] = e.target.value; updateRows(); };
    });
    updateRows();
  }

  function confirmDelete(id){
    if(readOnly) return;
    const item = DB[opts.collection].find(x=>x.id===id);
    if(opts.canDelete && item && !opts.canDelete(item)){ toast(opts.canDeleteMsg||'Cannot delete this record','error'); return; }
    openModal('Delete '+opts.singular, `<p style="font-size:13.5px;color:var(--text-muted)">Are you sure you want to delete this ${opts.singular.toLowerCase()}? This action cannot be undone.</p>`,
      `<button class="btn btn-outline" onclick="closeModal()">Cancel</button>
       <button class="btn" style="background:var(--red);color:#fff" id="confirmDelBtn">${icon('trash')} Delete</button>`);
    document.getElementById('confirmDelBtn').onclick = ()=>{
      const idx = DB[opts.collection].findIndex(x=>x.id===id);
      const item = DB[opts.collection][idx];
      if(opts.onDelete) opts.onDelete(item);
      DB[opts.collection].splice(idx,1);
      save(); log(`${opts.singular} deleted: ${opts.itemLabel ? opts.itemLabel(item) : id}`, opts.collection);
      closeModal(); toast(opts.singular+' deleted'); draw(); renderSidebar();
    };
  }

  function openForm(item){
    if(readOnly) return;
    const isEdit = !!item;
    // Snapshot of the record BEFORE any edits are applied — passed to onSaved
    // so hooks (e.g. stock deduction when a repair becomes Completed) can
    // compare old vs new values instead of only seeing the post-save state.
    const prevSnapshot = item ? Object.assign({}, item) : null;
    openModal((isEdit?'Edit ':'Add New ')+opts.singular,
      `<div class="form-grid">${opts.fields.map(f=>renderField(f, item?item[f.key]:undefined)).join('')}</div>`,
      `<button class="btn btn-outline" onclick="closeModal()">Cancel</button>
       <button class="btn btn-primary" id="saveBtn">${icon('check')} ${isEdit?'Save Changes':'Add '+opts.singular}</button>`, opts.wideForm);
    opts.fields.filter(f=>f.type==='image').forEach(bindImageField);
    opts.fields.filter(f=>f.type==='webcam').forEach(bindWebcamField);
    opts.fields.filter(f=>f.type==='repeater').forEach(f=> bindRepeaterField(f, item?item[f.key]:undefined));
    opts.fields.filter(f=>f.type==='checklist').forEach(f=> bindChecklistField(f));
    opts.fields.filter(f=>f.type==='passcode').forEach(f=> bindPasscodeField(f));
    opts.fields.filter(f=>f.type==='select' && f.manageKey).forEach(bindManageSelectField);
    if(opts.afterRender) opts.afterRender(item);
    document.getElementById('saveBtn').onclick = ()=>{
      const data = collectFields(opts.fields);
      opts.fields.forEach(f=>{
        if(f.type==='combo' && f.matchCollection && data[f.key]){
          const typed = String(data[f.key]).trim();
          const hit = DB[f.matchCollection].find(x=> (x.name||'').toLowerCase() === typed.toLowerCase());
          if(hit){
            data[f.key] = hit.id;
          } else if(typed){
            // No existing record matches this typed name — create one so it links
            // correctly everywhere (tables, invoices, customer stats), instead of
            // being left as plain text that invoices/lookups can't resolve.
            const newRec = { id: uid(f.matchCollection==='customers'?'CUS':f.matchCollection.slice(0,3).toUpperCase()), name: typed };
            if(f.matchCollection==='customers'){
              newRec.phone = data.customerPhone || '';
              newRec.address = data.address || '';
              newRec.joined = todayStr();
            }
            DB[f.matchCollection].push(newRec);
            data[f.key] = newRec.id;
          }
        }
      });
      opts.fields.forEach(f=>{
        if(f.type==='password' && isEdit && !data[f.key]) delete data[f.key];
      });
      if(opts.validate){ const err = opts.validate(data, item); if(err){ toast(err,'error'); return; } }
      let savedItem;
      if(isEdit){
        Object.assign(item, data);
        savedItem = item;
        log(`${opts.singular} updated: ${opts.itemLabel?opts.itemLabel(item):item.id}`, opts.collection);
        toast(opts.singular+' updated');
      } else {
        const newItem = Object.assign({id:uid(opts.prefix)}, data, opts.onCreateExtra?opts.onCreateExtra(data):{});
        DB[opts.collection].push(newItem);
        savedItem = newItem;
        const meta = (opts.collection==='products' && Number(newItem.stock)>0) ? {kind:'stock-in', qty:Number(newItem.stock)} : undefined;
        log(`${opts.singular} added: ${opts.itemLabel?opts.itemLabel(newItem):newItem.id}`, opts.collection, meta);
        toast(opts.singular+' added');
      }
      if(opts.onSaved) opts.onSaved(savedItem, isEdit, prevSnapshot);
      save(); closeModal(); draw(); renderSidebar();
    };
  }
  draw();
}
function emptyState(title){
  return `<div class="empty-state"><div class="icon-wrap">${icon('box')}</div><h4>No ${title.toLowerCase()} found</h4><p>Try adjusting your search or filters, or add a new record to get started.</p></div>`;
}
function statusBadge(status){
  const map = {
    'Completed':'green','Paid':'green','Delivered':'green','Active':'green','Ready':'blue',
    'Pending':'yellow','Processing':'yellow','Diagnosing':'yellow','Partial':'yellow','Received':'purple',
    'Cancelled':'red','Unpaid':'red','Inactive':'red','Repairing':'orange','Approved':'green','Rejected':'red'
  };
  return `<span class="badge ${map[status]||'gray'}">${status}</span>`;
}

/* ===================== PAGE RENDERERS ===================== */
const RENDERERS = {};

/* ---- DASHBOARD ---- */
RENDERERS.dashboard = function(c){
  const totalRevenue = DB.invoices.filter(i=>i.status==='Paid').reduce((s,i)=>s+Number(i.amount),0)
    + DB.orders.filter(o=>o.status==='Completed').reduce((s,o)=>s+Number(o.total),0)
    + DB.sales.filter(s=>s.status==='Paid').reduce((s,sale)=>s+Number(sale.total),0);
  const totalExpense = DB.expenses.reduce((s,e)=>s+Number(e.amount),0);
  const profit = totalRevenue - totalExpense;
  const activeRep = activeRepairs().length;
  const lowStock = lowStockItems().length;
  const unpaidInv = DB.invoices.filter(i=>i.status!=='Paid').reduce((s,i)=>s+Number(i.amount),0);

  c.innerHTML = `
    <div class="kpi-grid">
      ${kpiCard('wallet','var(--green)', fmtMoney(totalRevenue), 'Total Income','','up')}
      ${kpiCard('wallet','var(--red)', fmtMoney(totalExpense), 'Total Expense','','down')}
      ${kpiCard('chart', profit>=0?'var(--blue)':'var(--red)', fmtMoney(profit), 'Profit/Loss','', profit>=0?'up':'down')}
      ${kpiCard('tool', 'var(--orange)', activeRep, 'Repair (In Queue)', activeRep>0?activeRep+' in queue':'All clear','up')}
      ${kpiCard('alert', 'var(--red)', lowStock, 'Low Stock', lowStock>0?'Needs reorder':'Stock healthy', lowStock>0?'down':'up')}
      ${kpiCard('file', 'var(--purple)', fmtMoney(unpaidInv), 'Pending Invoice', DB.invoices.filter(i=>i.status!=='Paid').length+' unpaid','down')}
    </div>
    <div class="grid-2">
      <div class="card">
        <div class="card-head"><div><h3>Revenue — Last 7 Days</h3><div class="sub">Orders + repair invoices combined</div></div>
        <button class="link-btn" onclick="location.hash='#reports'">Full report</button></div>
        <div class="card-body"><canvas id="revChart" height="200"></canvas></div>
      </div>
      <div class="card">
        <div class="card-head"><div><h3>Repair Status</h3><div class="sub">${DB.orders.length} total jobs</div></div></div>
        <div class="card-body">
          <div class="chart-wrap" style="display:flex;justify-content:center"><canvas id="statusDonut" width="180" height="180"></canvas></div>
          <div class="legend" id="statusLegend"></div>
        </div>
      </div>
    </div>
    <div class="grid-2">
      <div class="card">
        <div class="card-head"><div><h3>Recent Repair Jobs</h3><div class="sub">Latest intakes and their status</div></div>
        <button class="link-btn" onclick="location.hash='#orders'">View all</button></div>
        <div class="table-card" style="border:none;border-radius:0">
          <table><tbody>
          ${DB.orders.length ? DB.orders.slice(-5).reverse().map(o=>`
            <tr><td><div class="name-cell"><div class="avatar-sm">${initials(custName(o.customer))}</div>
              <div><div class="cell-strong">${custName(o.customer)}</div><div class="cell-muted">${escapeHtml((o.devices||[]).map(d=>d.device).filter(Boolean).join(', ') || '—')}</div></div></div></td>
              <td>${statusBadge(o.status)}</td><td class="cell-muted" style="text-align:right">${fmtDate(o.date)}</td></tr>`).join('') : '<tr><td colspan="3" class="cell-muted" style="padding:16px 4px">No repair jobs yet.</td></tr>'}
          </tbody></table>
        </div>
      </div>
      <div class="card">
        <div class="card-head"><div><h3>Stock Alerts</h3><div class="sub">Items at or below reorder level</div></div>
        <button class="link-btn" onclick="location.hash='#lowstock'">View all</button></div>
        <div class="card-body">
          ${lowStockItems().length===0 ? `<p style="font-size:12.8px;color:var(--text-muted)">Nothing to reorder right now — stock levels are healthy.</p>` :
          `<div style="display:flex;flex-direction:column;gap:12px">
          ${lowStockItems().slice(0,5).map(p=>`
            <div style="display:flex;align-items:center;gap:12px">
              <div class="avatar-sm" style="background:linear-gradient(135deg,#FF6A3D,#F04438)">${icon('box')}</div>
              <div style="flex:1;min-width:0"><div class="cell-strong" style="font-size:13px">${escapeHtml(p.name)}</div>
              <div class="cell-muted">${escapeHtml(catName(p.category))}</div></div>
              <span class="badge red">${p.stock} left</span>
            </div>`).join('')}</div>`}
        </div>
      </div>
    </div>
  `;
  drawRevenueChart();
  drawStatusDonut();
};
function kpiCard(iconName, color, value, label, trend, dir){
  return `<div class="kpi-card">
    <div class="top"><div class="kpi-icon" style="background:${color}">${icon(iconName)}</div>
    <div class="kpi-trend ${dir}">${icon(dir==='up'?'down':'down')} ${trend}</div></div>
    <div class="kpi-value">${value}</div><div class="kpi-label">${label}</div></div>`;
}
function drawRevenueChart(){
  const cv = document.getElementById('revChart'); if(!cv) return;
  const ctx = cv.getContext('2d');
  const dpr = window.devicePixelRatio||1;
  const w = cv.clientWidth||500, h=200;
  cv.width = w*dpr; cv.height = h*dpr; ctx.scale(dpr,dpr);
  const days = [...Array(7)].map((_,i)=>daysAgo(6-i));
  const vals = days.map(d=>{
    const o = DB.orders.filter(x=>x.date===d && x.status==='Completed').reduce((s,x)=>s+Number(x.total),0);
    const inv = DB.invoices.filter(x=>x.date===d && x.status==='Paid').reduce((s,x)=>s+Number(x.amount),0);
    return o+inv;
  });
  const max = Math.max(...vals, 1000);
  const padL=10, padB=24, padT=14, chartW = w-padL-14, chartH = h-padB-padT;
  // grid lines
  ctx.strokeStyle = 'rgba(120,125,150,.15)'; ctx.lineWidth=1;
  for(let i=0;i<=3;i++){ const y = padT + chartH/3*i; ctx.beginPath(); ctx.moveTo(padL,y); ctx.lineTo(w-14,y); ctx.stroke(); }
  // area path
  const stepX = chartW/(vals.length-1);
  const pts = vals.map((v,i)=>[padL+i*stepX, padT+chartH-(v/max)*chartH]);
  const grad = ctx.createLinearGradient(0,padT,0,padT+chartH);
  grad.addColorStop(0,'rgba(46,94,255,.35)'); grad.addColorStop(1,'rgba(139,47,224,.02)');
  ctx.beginPath(); ctx.moveTo(pts[0][0],padT+chartH);
  pts.forEach(p=>ctx.lineTo(p[0],p[1])); ctx.lineTo(pts[pts.length-1][0],padT+chartH); ctx.closePath();
  ctx.fillStyle = grad; ctx.fill();
  const lgrad = ctx.createLinearGradient(0,0,w,0); lgrad.addColorStop(0,'#2E5EFF'); lgrad.addColorStop(1,'#8B2FE0');
  ctx.beginPath(); pts.forEach((p,i)=> i===0?ctx.moveTo(p[0],p[1]):ctx.lineTo(p[0],p[1]));
  ctx.strokeStyle = lgrad; ctx.lineWidth=2.6; ctx.lineJoin='round'; ctx.stroke();
  pts.forEach(p=>{ ctx.beginPath(); ctx.arc(p[0],p[1],3.4,0,7); ctx.fillStyle='#fff'; ctx.fill(); ctx.lineWidth=2; ctx.strokeStyle='#2E5EFF'; ctx.stroke(); });
  ctx.fillStyle = getComputedStyle(document.body).getPropertyValue('--text-faint')||'#9AA0AE';
  ctx.font = '10.5px Inter'; ctx.textAlign='center';
  days.forEach((d,i)=>{ ctx.fillText(new Date(d).toLocaleDateString('en-GB',{weekday:'short'}), padL+i*stepX, h-6); });
}
function drawStatusDonut(){
  const cv = document.getElementById('statusDonut'); if(!cv) return;
  const ctx = cv.getContext('2d');
  const statuses = DB.lists.orderStatuses;
  const colorPalette = ['#8B2FE0','#F5A623','#FF6A3D','#2E5EFF','#17B26A','#0EA5E9','#D946EF','#F04438'];
  const colors = {}; statuses.forEach((s,i)=> colors[s] = colorPalette[i % colorPalette.length]);
  const counts = statuses.map(s=>DB.orders.filter(o=>o.status===s).length);
  const total = counts.reduce((a,b)=>a+b,0) || 1;
  let start = -Math.PI/2;
  const cx=90, cy=90, rOuter=78, rInner=50;
  ctx.clearRect(0,0,180,180);
  statuses.forEach((s,i)=>{
    const val = counts[i]; if(val===0) return;
    const angle = (val/total)*Math.PI*2;
    ctx.beginPath(); ctx.arc(cx,cy,rOuter,start,start+angle); ctx.arc(cx,cy,rInner,start+angle,start,true); ctx.closePath();
    ctx.fillStyle = colors[s]; ctx.fill();
    start += angle;
  });
  document.getElementById('statusLegend').innerHTML = statuses.map(s=>{
    const n = DB.orders.filter(o=>o.status===s).length;
    return `<div class="legend-item"><span class="legend-dot" style="background:${colors[s]}"></span>${s} (${n})</div>`;
  }).join('');
}

/* ---- PRODUCTS / STOCK ITEMS ---- */
RENDERERS.products = function(c){
  crudPage(c, {
    collection:'products', title:'Stock Items', singular:'Stock Item', prefix:'PRD', newLabel:'Add Stock Item', enableExcel:true,
    searchKeys:['name'],
    filters:[{key:'category', label:'Category', manageKey:'itemcats', options:DB.categories.filter(x=>x.type==='Product').map(x=>({value:x.id,label:x.name}))}],
    itemLabel:p=>p.name,
    columns:[
      {label:'Item', render:p=>`<div class="name-cell"><div class="avatar-sm">${icon('box')}</div><div><div class="cell-strong">${escapeHtml(p.name)}</div></div></div>`},
      {label:'Category', render:p=>`<span class="badge purple">${escapeHtml(catName(p.category))}</span>`},
      {label:'Price', render:p=>`<span class="cell-strong">${fmtMoney(p.price)}</span>`},
      {label:'Cost', render:p=>`<span class="cell-muted">${fmtMoney(p.cost)}</span>`},
      {label:'Stock', render:p=>`<span class="badge ${Number(p.stock)<=Number(p.threshold)?'red':'green'}">${p.stock} pcs</span>`},
    ],
    fields:[
      {key:'name', label:'Item Name', full:true},
      {key:'category', label:'Category', type:'select', manageKey:'itemcats', options:DB.categories.filter(x=>x.type==='Product').map(x=>({value:x.id,label:x.name}))},
      {key:'price', label:'Sale Price (Rs.)', type:'number'},
      {key:'cost', label:'Cost Price (Rs.)', type:'number'},
      {key:'stock', label:'Current Stock', type:'number'},
      {key:'threshold', label:'Low Stock Threshold', type:'number'},
    ],
    validate:d=> !d.name ? 'Item name is required' : null,
  });
};

/* ---- CATEGORIES ---- */
RENDERERS.categories = function(c){
  crudPage(c, {
    collection:'categories', title:'Categories', singular:'Category', prefix:'CAT', newLabel:'Add Category', enableExcel:true,
    searchKeys:['name'],
    filters:[{key:'type', label:'Type', options:['Product','Repair']}],
    itemLabel:x=>x.name,
    columns:[
      {label:'Category', render:x=>`<div class="name-cell"><div class="avatar-sm" style="background:linear-gradient(135deg,#8B2FE0,#2E5EFF)">${icon('tag')}</div><div class="cell-strong">${escapeHtml(x.name)}</div></div>`},
      {label:'Type', render:x=>`<span class="badge ${x.type==='Product'?'blue':'orange'}">${x.type}</span>`},
      {label:'Items Linked', render:x=> x.type==='Product' ? DB.products.filter(p=>p.category===x.id).length : DB.orders.filter(o=>o.category===x.id).length},
    ],
    fields:[
      {key:'name', label:'Category Name', full:true},
      {key:'type', label:'Applies To', type:'select', options:[{value:'Product',label:'Stock / Product'},{value:'Repair',label:'Repair Type'}]},
    ],
    validate:(d, item)=>{
      if(!d.name) return 'Category name is required';
      // Same-name+type dedupe as the inline category add/remove on the Stock
      // Items / Repair forms, so a category can never be created twice
      // regardless of which screen it's added from.
      const dup = DB.categories.some(x=> x.id!==(item&&item.id) && x.type===d.type && x.name.trim().toLowerCase()===String(d.name).trim().toLowerCase());
      if(dup) return 'A category with this name already exists for this type';
      return null;
    },
  });
};

/* ---- LOW STOCK (read-only view + quick restock) ---- */
RENDERERS.lowstock = function(c){
  const items = lowStockItems();
  c.innerHTML = `
    <div class="section-head"><div><h2>Low Stock</h2><div class="sub">${items.length} item(s) at or below their reorder threshold</div></div>
    <div class="head-actions"><button class="btn btn-outline" onclick="location.hash='#products'">${icon('box')} Go to Stock Items</button></div></div>
    <div class="table-card">
      ${items.length===0 ? `<div class="empty-state"><div class="icon-wrap">${icon('check')}</div><h4>Stock levels are healthy</h4><p>No items currently need reordering.</p></div>` : `
      <table><thead><tr><th>Item</th><th>Category</th><th>Current Stock</th><th>Threshold</th><th>Status</th><th style="text-align:right">Restock</th></tr></thead>
      <tbody>${items.map(p=>`
        <tr><td><div class="name-cell"><div class="avatar-sm" style="background:linear-gradient(135deg,#FF6A3D,#F04438)">${icon('alert')}</div>
          <div><div class="cell-strong">${escapeHtml(p.name)}</div></div></div></td>
          <td><span class="badge purple">${escapeHtml(catName(p.category))}</span></td>
          <td class="cell-strong">${p.stock} pcs</td><td class="cell-muted">${p.threshold} pcs</td>
          <td><span class="badge ${p.stock===0?'red':'yellow'}">${p.stock===0?'Out of Stock':'Low Stock'}</span></td>
          <td style="text-align:right"><button class="btn btn-sm btn-primary" data-restock="${p.id}">${icon('plus')} Restock</button></td>
        </tr>`).join('')}</tbody></table>`}
    </div>`;
  c.querySelectorAll('[data-restock]').forEach(b=>{
    b.onclick = ()=>{
      const p = DB.products.find(x=>x.id===b.dataset.restock);
      openModal('Restock — '+p.name, `
        <div class="form-grid">
          <div class="field full"><label>Add Quantity</label><input type="number" id="restockQty" value="20" min="1"></div>
        </div>`,
        `<button class="btn btn-outline" onclick="closeModal()">Cancel</button>
         <button class="btn btn-primary" id="doRestock">${icon('check')} Add to Stock</button>`);
      document.getElementById('doRestock').onclick = ()=>{
        const q = Number(document.getElementById('restockQty').value||0);
        p.stock = Number(p.stock)+q; save(); log(`Restocked ${q} pcs of ${p.name}`, 'products', {kind:'stock-in', qty:q});
        closeModal(); toast('Stock updated'); route();
      };
    };
  });
};

/* ---- SELL ACCESSORIES (direct stock sale to a walk-in / existing customer) ----
   Separate from Repair jobs: this is for counter sales of accessories/parts
   that aren't tied to a repair. Stock is deducted immediately on save (not
   gated behind a status change like repair parts are), and restored if the
   sale is later edited down or deleted. */
function saleItemsSummary(s){
  const list = (s.items||[]).filter(it=>it.product);
  if(!list.length) return '—';
  const name = pid=> (DB.products.find(p=>p.id===pid)||{}).name || 'Unknown Item';
  const first = `${name(list[0].product)} × ${Number(list[0].qty)||0}`;
  return list.length===1 ? escapeHtml(first) : `${escapeHtml(first)} <span class="cell-muted">+${list.length-1} more</span>`;
}
function saleComputedTotal(items, discount){
  const sub = (items||[]).reduce((s,it)=> s + (Number(it.qty)||0)*(Number(it.price)||0), 0);
  return Math.max(0, sub - (Number(discount)||0));
}
// Live-updates the Total field as items/qty/price/discount change, and
// auto-fills a line's Unit Price from the product's sale price when picked.
function bindSaleLiveTotal(){
  const list = document.getElementById('f_items_list');
  const discountEl = document.getElementById('f_discount');
  const totalEl = document.getElementById('f_total');
  if(!list || !totalEl) return;
  function recalc(){
    const rows = Array.from(list.children).map(b=>({
      qty: Number((b.querySelector('[data-key="qty"]')||{}).value||0),
      price: Number((b.querySelector('[data-key="price"]')||{}).value||0),
    }));
    totalEl.value = saleComputedTotal(rows, discountEl?discountEl.value:0);
  }
  function bindRow(block){
    const prodSel = block.querySelector('[data-key="product"]');
    const priceInput = block.querySelector('[data-key="price"]');
    const qtyInput = block.querySelector('[data-key="qty"]');
    if(prodSel) prodSel.addEventListener('change', ()=>{
      const prod = DB.products.find(p=>p.id===prodSel.value);
      if(prod && priceInput && !priceInput.value) priceInput.value = prod.price;
      recalc();
    });
    if(priceInput) priceInput.addEventListener('input', recalc);
    if(qtyInput) qtyInput.addEventListener('input', recalc);
  }
  Array.from(list.children).forEach(bindRow);
  // Re-bind whenever a new row is appended by the "Add Another Item" button.
  const addBtn = document.getElementById('f_items_addbtn');
  if(addBtn) addBtn.addEventListener('click', ()=> setTimeout(()=>{
    const last = list.children[list.children.length-1];
    if(last) bindRow(last);
    recalc();
  }, 0));
  list.querySelectorAll('.device-remove').forEach(btn=> btn.addEventListener('click', ()=> setTimeout(recalc, 0)));
  if(discountEl) discountEl.addEventListener('input', recalc);
  recalc();
}
// Deducts stock for a newly recorded sale, or reconciles stock when an
// existing sale's items are edited (restores the old quantities first, then
// deducts the new ones). Guarded by sale._stockDeducted so re-saving never
// double-deducts.
function reconcileSaleStock(sale, prevSnapshot){
  if(prevSnapshot && prevSnapshot._stockDeducted){
    (prevSnapshot._deductedItems||[]).forEach(it=>{
      const prod = DB.products.find(p=>p.id===it.product);
      if(prod) prod.stock = Number(prod.stock) + Number(it.qty);
    });
  }
  const items = (sale.items||[]).filter(it=>it.product && Number(it.qty)>0);
  const short = [];
  items.forEach(it=>{
    const prod = DB.products.find(p=>p.id===it.product);
    if(!prod) return;
    const qty = Number(it.qty);
    if(Number(prod.stock) < qty) short.push(prod.name);
    prod.stock = Math.max(0, Number(prod.stock) - qty);
  });
  sale._stockDeducted = true;
  sale._deductedItems = items.map(it=>({product:it.product, qty:Number(it.qty)}));
  log(`Stock updated for accessory sale ${sale.id}`, 'products', {kind:'stock-out'});
  if(short.length) toast(`Stock updated — insufficient stock for: ${short.join(', ')}`, 'error');
}
// Restores stock when a sale record is deleted outright.
function restoreSaleStock(sale){
  if(!sale || !sale._stockDeducted) return;
  (sale._deductedItems||[]).forEach(it=>{
    const prod = DB.products.find(p=>p.id===it.product);
    if(prod) prod.stock = Number(prod.stock) + Number(it.qty);
  });
  log(`Stock restored — accessory sale ${sale.id} deleted`, 'products', {kind:'stock-in'});
}
function ensureInvoiceForSale(sale){
  const cust = DB.customers.find(x=>x.id===sale.customer) || {};
  const existing = DB.invoices.find(i=>i.ref===sale.id);
  if(!sale.trackingId) sale.trackingId = (existing && existing.trackingId) || genTrackingId('ACC');
  const itemsDesc = (sale.items||[]).filter(it=>it.product).map(it=>{
    const prod = DB.products.find(p=>p.id===it.product);
    return `${prod?prod.name:'Item'} × ${Number(it.qty)||0}`;
  }).join(', ');
  const payload = {
    customer: sale.customer,
    ref: sale.id,
    trackingId: sale.trackingId,
    contact: sale.customerPhone || cust.phone || '',
    phoneModel: 'Accessory Sale',
    imei: '',
    deviceCode: '',
    faultReported: 'Accessory / Stock Item Sale',
    deviceCondition: '—',
    accessories: itemsDesc || '—',
    notes: sale.notes || (sale.discount ? `Discount applied: ${fmtMoney(sale.discount)}` : ''),
    amount: sale.total,
    status: sale.status || (existing? existing.status : 'Unpaid'),
    date: existing? existing.date : sale.date || todayStr(),
    due: existing? existing.due : sale.date || todayStr(),
  };
  if(existing){
    Object.assign(existing, payload);
    log(`Invoice ${existing.id} updated from Sale ${sale.id}`, 'invoice');
  } else {
    const inv = Object.assign({id:uid('INV')}, payload);
    DB.invoices.push(inv);
    log(`Invoice ${inv.id} auto-generated from Sale ${sale.id}`, 'invoice');
  }
}
function printSaleReceipt(sale){
  const cust = DB.customers.find(x=>x.id===sale.customer) || {};
  const st = invStatusStyle(sale.status);
  const rows = (sale.items||[]).filter(it=>it.product).map(it=>{
    const prod = DB.products.find(p=>p.id===it.product) || {};
    const qty = Number(it.qty)||0, price = Number(it.price)||0;
    return `<tr>
      <td style="padding:6px 8px;border-bottom:1px solid #F0EFF7;font-size:10px;color:#1a1a2e">${escapeHtml(prod.name||'—')}</td>
      <td style="padding:6px 8px;border-bottom:1px solid #F0EFF7;font-size:10px;text-align:center">${qty}</td>
      <td style="padding:6px 8px;border-bottom:1px solid #F0EFF7;font-size:10px;text-align:right">${fmtMoney(price)}</td>
      <td style="padding:6px 8px;border-bottom:1px solid #F0EFF7;font-size:10px;text-align:right;font-weight:700">${fmtMoney(qty*price)}</td>
    </tr>`;
  }).join('');
  const trackUrl = (DB.settings.trackingUrl||'').trim();
  document.getElementById('printArea').innerHTML = `
    <div class="inv-sheet" style="font-family:'Segoe UI',Arial,Helvetica,sans-serif;width:100%;box-sizing:border-box;color:#1a1a2e">

      <div style="height:5px;border-radius:0 0 3px 3px;background:linear-gradient(90deg,#2E5EFF 0%,#8B2FE0 55%,#FF6A3D 100%);margin-bottom:9px"></div>

      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px">
        <img src="logo.png" style="height:44px;width:auto" alt="Sky Nex">
        <div style="text-align:right">
          <div style="font-size:12px;font-weight:800;letter-spacing:.3px">${escapeHtml(DB.settings.businessName||'Sky Nex').toUpperCase()}</div>
          <div style="font-size:8px;font-weight:700;color:#8B2FE0;letter-spacing:.2px">${escapeHtml(DB.settings.tagline||'Mobile Repair Workshop & Institute')}</div>
          <div style="font-size:8px;color:#666;margin-top:3px">${escapeHtml(DB.settings.phone)}${DB.settings.phone&&DB.settings.email?' &nbsp;•&nbsp; ':''}${escapeHtml(DB.settings.email)}</div>
        </div>
      </div>

      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
        <div>
          <div style="font-size:21px;font-weight:800;letter-spacing:.4px;color:#1a1a2e">SALE INVOICE</div>
          <div style="font-size:9px;color:#666;margin-top:1px">No. <b style="color:#1a1a2e;font-family:monospace">${sale.id}</b></div>
        </div>
        <div style="display:flex;align-items:center;gap:14px">
          <div style="text-align:right">
            <div style="font-size:7.5px;font-weight:700;color:#999;text-transform:uppercase;letter-spacing:.4px">Sale Date</div>
            <div style="font-size:10px;font-weight:700">${fmtDate(sale.date)}</div>
          </div>
          <div style="padding:5px 13px;border-radius:20px;background:${st.bg};color:${st.fg};font-size:10px;font-weight:800;letter-spacing:.3px">${escapeHtml(sale.status||'—')}</div>
        </div>
      </div>

      <div style="display:flex;gap:9px">
        <div style="flex:1.65;display:flex;flex-direction:column;gap:8px;min-width:0">
          <div style="border:1px solid #E7E5F3;border-radius:8px;overflow:hidden">
            <div style="display:flex">
              ${invField('Customer Name', custName(sale.customer))}
              ${invField('Contact No', sale.customerPhone||cust.phone, true)}
            </div>
          </div>
          <div style="border:1px solid #E7E5F3;border-radius:8px;overflow:hidden;flex:1">
            <div style="font-size:7.6px;font-weight:800;color:#8B2FE0;text-transform:uppercase;letter-spacing:.5px;padding:8px 12px 4px">Items Purchased</div>
            <table style="width:100%;border-collapse:collapse">
              <thead><tr style="background:#FAFAFE">
                <th style="padding:6px 8px;text-align:left;font-size:7.6px;text-transform:uppercase;color:#999;border-top:1px solid #E7E5F3;border-bottom:1px solid #E7E5F3">Item</th>
                <th style="padding:6px 8px;text-align:center;font-size:7.6px;text-transform:uppercase;color:#999;border-top:1px solid #E7E5F3;border-bottom:1px solid #E7E5F3">Qty</th>
                <th style="padding:6px 8px;text-align:right;font-size:7.6px;text-transform:uppercase;color:#999;border-top:1px solid #E7E5F3;border-bottom:1px solid #E7E5F3">Price</th>
                <th style="padding:6px 8px;text-align:right;font-size:7.6px;text-transform:uppercase;color:#999;border-top:1px solid #E7E5F3;border-bottom:1px solid #E7E5F3">Amount</th>
              </tr></thead>
              <tbody>${rows}</tbody>
            </table>
            ${sale.notes?`<div style="padding:8px 12px;font-size:9px;color:#666;white-space:pre-wrap;line-height:1.4">${escapeHtml(sale.notes)}</div>`:''}
          </div>
        </div>

        <div style="flex:1;display:flex;flex-direction:column;gap:8px;min-width:0">
          <div style="border-radius:8px;padding:12px 14px;background:linear-gradient(135deg,#2E5EFF 0%,#8B2FE0 100%);color:#fff">
            <div style="font-size:8px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;opacity:.85;margin-bottom:4px">Total Amount</div>
            <div style="font-size:22px;font-weight:800;letter-spacing:.2px">${fmtMoney(sale.total)}</div>
            ${sale.discount?`<div style="font-size:8px;font-weight:600;opacity:.9;margin-top:4px">Discount Applied: -${fmtMoney(sale.discount)}</div>`:''}
          </div>
          <div style="border-radius:8px;padding:11px 13px;background:#FFF7ED;border:1.5px dashed #FF6A3D;text-align:center">
            <div style="font-size:7.6px;font-weight:800;color:#C24F1E;text-transform:uppercase;letter-spacing:.6px;margin-bottom:5px">Track Your Order</div>
            <div style="font-size:15px;font-weight:800;font-family:'Courier New',monospace;letter-spacing:1.5px;color:#1a1a2e;background:#fff;border-radius:5px;padding:5px 4px;border:1px solid #FFD9C2">${escapeHtml(sale.trackingId||'—')}</div>
            <div style="font-size:7.3px;color:#946043;margin-top:5px;line-height:1.35">
              ${trackUrl
                ? `Visit <b style="color:#C24F1E">${escapeHtml(trackUrl.replace(/^https?:\/\//,''))}</b> and enter this ID for order status`
                : `Keep this ID safe — enter it on our website to check your order`}
            </div>
          </div>
        </div>
      </div>

      ${invReleaseNotice('Items will not be returned or exchanged/replaced without this invoice.')}

      <div style="display:flex;justify-content:space-between;align-items:center;border-top:1px solid #E7E5F3;margin-top:10px;padding-top:8px;font-size:7.6px;color:#777">
        <span style="display:flex;align-items:center;gap:4px">${invIcon('mail','#8B2FE0')} ${escapeHtml(DB.settings.email)}</span>
        <span style="display:flex;align-items:center;gap:4px">${invIcon('pin','#8B2FE0')} ${escapeHtml(DB.settings.address)}</span>
        <span style="display:flex;align-items:center;gap:4px">${invIcon('phone','#8B2FE0')} ${escapeHtml(DB.settings.phone)}</span>
        <span style="font-weight:700;color:#B4B4C4;letter-spacing:.4px">SKY NEX • MOBILE REPAIR WORKSHOP &amp; INSTITUTE</span>
      </div>
    </div>`;
  window.print();
}
function printRepairReceipt(order){
  const cust = DB.customers.find(x=>x.id===order.customer) || {};
  const devices = order.devices||[];
  const st = invStatusStyle(order.status);
  const trackUrl = (DB.settings.trackingUrl||'').trim();
  document.getElementById('printArea').innerHTML = `
    <div class="inv-sheet" style="font-family:'Segoe UI',Arial,Helvetica,sans-serif;width:100%;box-sizing:border-box;color:#1a1a2e">

      <div style="height:5px;border-radius:0 0 3px 3px;background:linear-gradient(90deg,#2E5EFF 0%,#8B2FE0 55%,#FF6A3D 100%);margin-bottom:9px"></div>

      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px">
        <img src="logo.png" style="height:44px;width:auto" alt="Sky Nex">
        <div style="text-align:right">
          <div style="font-size:12px;font-weight:800;letter-spacing:.3px">${escapeHtml(DB.settings.businessName||'Sky Nex').toUpperCase()}</div>
          <div style="font-size:8px;font-weight:700;color:#8B2FE0;letter-spacing:.2px">${escapeHtml(DB.settings.tagline||'Mobile Repair Workshop & Institute')}</div>
          <div style="font-size:8px;color:#666;margin-top:3px">${escapeHtml(DB.settings.phone)}${DB.settings.phone&&DB.settings.email?' &nbsp;•&nbsp; ':''}${escapeHtml(DB.settings.email)}</div>
        </div>
      </div>

      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
        <div>
          <div style="font-size:21px;font-weight:800;letter-spacing:.4px;color:#1a1a2e">INVOICE</div>
          <div style="font-size:9px;color:#666;margin-top:1px">No. <b style="color:#1a1a2e;font-family:monospace">${order.id}</b></div>
        </div>
        <div style="display:flex;align-items:center;gap:14px">
          <div style="text-align:right">
            <div style="font-size:7.5px;font-weight:700;color:#999;text-transform:uppercase;letter-spacing:.4px">Received Date</div>
            <div style="font-size:10px;font-weight:700">${fmtDate(order.date)}</div>
          </div>
          <div style="text-align:right">
            <div style="font-size:7.5px;font-weight:700;color:#999;text-transform:uppercase;letter-spacing:.4px">Delivery Date</div>
            <div style="font-size:10px;font-weight:700">${order.deliveryDate?fmtDate(order.deliveryDate):'—'}</div>
          </div>
          <div style="padding:5px 13px;border-radius:20px;background:${st.bg};color:${st.fg};font-size:10px;font-weight:800;letter-spacing:.3px">${escapeHtml(order.status||'—')}</div>
        </div>
      </div>

      <div style="display:flex;gap:9px">
        <div style="flex:1.65;display:flex;flex-direction:column;gap:8px;min-width:0">
          <div style="border:1px solid #E7E5F3;border-radius:8px;overflow:hidden">
            <div style="display:flex;border-bottom:1px solid #E7E5F3;background:#FAFAFE">
              ${invField('Customer Name', custName(order.customer))}
              ${invField('Contact No', order.customerPhone||cust.phone, true)}
            </div>
            <div style="display:flex;border-bottom:1px solid #E7E5F3">
              ${invField('Phone Model', joinDeviceField(devices,'device'))}
              ${invField('IMEI / Serial No', joinDeviceField(devices,'imei'), true)}
            </div>
            <div style="display:flex">
              ${invField('Fault Reported', joinDeviceField(devices,'issue'))}
              ${invFieldStatus('Device Code', order.deviceCode, true)}
            </div>
          </div>
          <div style="border:1px solid #E7E5F3;border-radius:8px;padding:8px 12px;flex:1">
            <div style="font-size:7.6px;font-weight:800;color:#8B2FE0;text-transform:uppercase;letter-spacing:.5px;margin-bottom:4px">Technician Diagnosis / Notes</div>
            <div style="font-size:10px;color:#333;white-space:pre-wrap;line-height:1.45">${escapeHtml(order.notes||'—')}</div>
          </div>
        </div>

        <div style="flex:1;display:flex;flex-direction:column;gap:8px;min-width:0">
          <div style="border-radius:8px;padding:12px 14px;background:linear-gradient(135deg,#2E5EFF 0%,#8B2FE0 100%);color:#fff">
            <div style="font-size:8px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;opacity:.85;margin-bottom:4px">Amount Due</div>
            <div style="font-size:22px;font-weight:800;letter-spacing:.2px">${fmtMoney(order.total)}</div>
            ${order.advance?`<div style="font-size:8px;font-weight:600;opacity:.9;margin-top:4px">Advance Received: ${fmtMoney(order.advance)}</div>`:''}
          </div>
          <div style="border-radius:8px;padding:11px 13px;background:#FFF7ED;border:1.5px dashed #FF6A3D;text-align:center">
            <div style="font-size:7.6px;font-weight:800;color:#C24F1E;text-transform:uppercase;letter-spacing:.6px;margin-bottom:5px">Track Your Repair</div>
            <div style="font-size:15px;font-weight:800;font-family:'Courier New',monospace;letter-spacing:1.5px;color:#1a1a2e;background:#fff;border-radius:5px;padding:5px 4px;border:1px solid #FFD9C2">${escapeHtml(order.trackingId||'—')}</div>
            <div style="font-size:7.3px;color:#946043;margin-top:5px;line-height:1.35">
              ${trackUrl
                ? `Visit <b style="color:#C24F1E">${escapeHtml(trackUrl.replace(/^https?:\/\//,''))}</b> and enter this ID for live status`
                : `Keep this ID safe — enter it on our website to check live repair status`}
            </div>
          </div>
        </div>
      </div>

      ${invReleaseNotice('Phone will not be returned without this invoice.')}

      <div style="display:flex;justify-content:space-between;align-items:center;border-top:1px solid #E7E5F3;margin-top:10px;padding-top:8px;font-size:7.6px;color:#777">
        <span style="display:flex;align-items:center;gap:4px">${invIcon('mail','#8B2FE0')} ${escapeHtml(DB.settings.email)}</span>
        <span style="display:flex;align-items:center;gap:4px">${invIcon('pin','#8B2FE0')} ${escapeHtml(DB.settings.address)}</span>
        <span style="display:flex;align-items:center;gap:4px">${invIcon('phone','#8B2FE0')} ${escapeHtml(DB.settings.phone)}</span>
        <span style="font-weight:700;color:#B4B4C4;letter-spacing:.4px">SKY NEX • MOBILE REPAIR WORKSHOP &amp; INSTITUTE</span>
      </div>
    </div>`;
  window.print();
}
RENDERERS.sales = function(c){
  crudPage(c, {
    collection:'sales', title:'Sell Accessories', singular:'Sale', prefix:'SAL', newLabel:'New Sale', enableExcel:true, enableViewDetail:true,
    searchKeys:['id'], getSearchVal:(r,k)=> k==='id' ? custName(r.customer)+' '+r.id+' '+(r.trackingId||'') : r[k],
    filters:[{key:'status', label:'Status', options:DB.lists.invoiceStatuses}],
    itemLabel:s=>custName(s.customer)+' — '+s.id,
    viewFn:printSaleReceipt, viewLabel:'Print',
    columns:[
      {label:'Sale ID', render:s=>`<span class="cell-mono">${s.id}</span>`},
      {label:'Tracking ID', render:s=>trackingCell(s.trackingId)},
      {label:'Customer', render:s=>`<div class="name-cell"><div class="avatar-sm">${initials(custName(s.customer))}</div><span class="cell-strong">${custName(s.customer)}</span></div>`},
      {label:'Items', render:s=>saleItemsSummary(s)},
      {label:'Total', render:s=>`<span class="cell-strong">${fmtMoney(s.total)}</span>`},
      {label:'Status', render:s=>statusBadge(s.status)},
      {label:'Date', render:s=>`<span class="cell-muted">${fmtDate(s.date)}</span>`},
    ],
    fields:[
      {key:'customer', label:'Customer Name', type:'combo', matchCollection:'customers', placeholder:'Type "Walk-in Customer" or an existing name', options:DB.customers.map(x=>({value:x.id,label:x.name}))},
      {key:'customerPhone', label:'Customer Phone (optional)', placeholder:'03XX-XXXXXXX'},
      {key:'items', label:'Accessories / Stock Items', type:'repeater', itemName:'Item', subFields:[
        {key:'product', label:'Item', type:'select', options:[{value:'',label:'— Select Stock Item —'}].concat(DB.products.map(p=>({value:p.id, label:`${p.name} (${p.stock} in stock) — ${fmtMoney(p.price)}`})))},
        {key:'qty', label:'Quantity', type:'number', placeholder:'1'},
        {key:'price', label:'Unit Price (Rs.)', type:'number', placeholder:'0'},
      ]},
      {key:'discount', label:'Discount (Rs.)', type:'number', placeholder:'0'},
      {key:'total', label:'Total Amount (Rs.)', type:'number'},
      {key:'status', label:'Payment Status', type:'select', options:DB.lists.invoiceStatuses.map(s=>({value:s,label:s}))},
      {key:'date', label:'Sale Date', type:'date', default:todayStr()},
      {key:'notes', label:'Notes', type:'textarea'},
    ],
    validate:d=>{
      if(!String(d.customer||'').trim()) return 'Customer name is required (type "Walk-in Customer" if unknown)';
      const items = (d.items||[]).filter(it=>it.product && Number(it.qty)>0);
      if(!items.length) return 'Add at least one item to sell';
      for(const it of items){
        const prod = DB.products.find(p=>p.id===it.product);
        if(!prod) continue;
        if(Number(it.qty) > Number(prod.stock)) return `Not enough stock for ${prod.name} — only ${prod.stock} left`;
      }
      return null;
    },
    afterRender:()=>{ bindPhoneMask('f_customerPhone'); bindSaleLiveTotal(); },
    wideForm:true,
    onCreateExtra:()=>({trackingId: genTrackingId('ACC')}),
    onSaved:(sale, isEdit, prevSnapshot)=>{ reconcileSaleStock(sale, prevSnapshot); ensureInvoiceForSale(sale); },
    onDelete:(sale)=>{ restoreSaleStock(sale); const inv = DB.invoices.find(i=>i.ref===sale.id); if(inv) DB.invoices.splice(DB.invoices.indexOf(inv),1); },
  });
};

/* ---- REPAIR (formerly Orders) ---- */
const REPORTED_ISSUE_OPTS = ['No Power / Dead','Not Charging','Fast Battery Drain','Heating','Restarting / Boot Loop','Stuck on Apple/Logo','Software/Restore Issue','Network/Signal Issue','Wi-Fi/Bluetooth Issue','Camera Issue','Face ID / Touch ID Issue','Display/Touch Issue','Back Glass/Frame Damage','Speaker/Mic Issue','Vibration Issue','Water/Liquid Damage'];
const PHYSICAL_CONDITION_OPTS = ['Screen cracked','Back glass cracked','Frame bent/damaged','Camera glass damaged','Missing screws/parts','Previous repair/opened','Signs of liquid damage','Heavy scratches/dents'];
const FUNCTION_TEST_OPTS = ['Display','Touch','Charging','Battery health','Front camera','Rear cameras','Flash','Ear speaker','Loud speaker','Microphone','Wi-Fi','Bluetooth','Mobile network','SIM','Face ID/Touch ID','Proximity sensor','Vibration','Power/volume buttons'];
const CUSTOMER_CONFIRMATION_OPTS = ['Customer has been informed that data loss may occur during software/repair work','Customer has backed up important data','Customer understands that previously repaired devices may have additional faults','Customer has disclosed any previous repair/liquid damage','Customer authorizes diagnosis and repair'];
const DEVICE_SUBFIELDS = [
  {key:'device', label:'Device / Phone Model', placeholder:'e.g. iPhone 13 Pro'},
  {key:'imei', label:'IMEI / Serial No'},
  {key:'color', label:'Color'},
  {key:'storage', label:'Storage', type:'select', options:['','32GB','64GB','128GB','256GB','512GB','1TB','2TB'].map(s=>({value:s,label:s||'Select Storage'}))},
  {key:'displayPanel', label:'Display Panel', type:'select', options:['','Original','Original (Used)','Copy / Aftermarket','Not Checked'].map(s=>({value:s,label:s||'Select Display Panel'}))},
  {key:'issue', label:'Problem Description', type:'textarea'},
  {key:'deviceRegistration', label:'Device Registration', type:'select', options:['','Registered (PTA)','Not Registered','Not Applicable'].map(s=>({value:s,label:s||'Select Device Registration'}))},
  {key:'batteryHealth', label:'Battery Health (%)'},
  {key:'accessories', label:'Accessories Received'},
  {key:'cost', label:'Estimated Cost (for this device) (Rs.)', type:'number'},
];
function pkPhoneValid(v){ return /^\d{4}-\d{7}$/.test(String(v||'').trim()); }
function orderDeviceSummary(o){
  const list = (o.devices||[]).map(d=>d.device).filter(Boolean);
  if(!list.length) return '—';
  return list.length===1 ? escapeHtml(list[0]) : `${escapeHtml(list[0])} <span class="cell-muted">+${list.length-1} more</span>`;
}
RENDERERS.orders = function(c){
  crudPage(c, {
    collection:'orders', title:'Repair', singular:'Repair Job', prefix:'REP', newLabel:'New Repair', enableExcel:true, enableViewDetail:true,
    searchKeys:['id'], getSearchVal:(r,k)=> k==='id' ? custName(r.customer)+' '+r.id+' '+(r.trackingId||'')+' '+(r.devices||[]).map(d=>d.device).join(' ') : r[k],
    filters:[
      {key:'status', label:'Status', manageKey:'orderstatus', options:DB.lists.orderStatuses},
      {key:'category', label:'Repair Type', manageKey:'repaircats', options:DB.categories.filter(x=>x.type==='Repair').map(x=>({value:x.id,label:x.name}))},
    ],
    statusOrder:['Pending','Processing','Completed','Cancelled'],
    itemLabel:o=>custName(o.customer),
    viewFn:printRepairReceipt, viewLabel:'Print',
    columns:[
      {label:'Repair ID', render:o=>`<span class="cell-mono">${o.id}</span>`},
      {label:'Tracking ID', render:o=>trackingCell(o.trackingId)},
      {label:'Customer', render:o=>`<div class="name-cell"><div class="avatar-sm">${initials(custName(o.customer))}</div><span class="cell-strong">${custName(o.customer)}</span></div>`},
      {label:'Device(s)', render:o=>orderDeviceSummary(o)},
      {label:'Technician', render:o=>`<span class="cell-muted">${escapeHtml(o.technician||'—')}</span>`},
      {label:'Total', render:o=>`<span class="cell-strong">${fmtMoney(o.total)}</span>`},
      {label:'Status', render:o=>statusBadge(o.status)},
      {label:'Date', render:o=>`<span class="cell-muted">${fmtDate(o.date)}${o.time?' '+o.time:''}</span>`},
    ],
    fields:[
      {key:'customer', label:'Customer Name', type:'combo', matchCollection:'customers', placeholder:'Type or pick a customer name', options:DB.customers.map(x=>({value:x.id,label:x.name}))},
      {key:'customerPhone', label:'Customer Phone Number', placeholder:'03XX-XXXXXXX'},
      {key:'address', label:'Address (optional)', full:true},
      {key:'technician', label:'Technician', placeholder:'Enter technician name'},
      {key:'bookedBy', label:'Booked By', placeholder:'Enter staff name'},
      {key:'category', label:'Repair Type', type:'select', manageKey:'repaircats', options:DB.categories.filter(x=>x.type==='Repair').map(x=>({value:x.id,label:x.name}))},
      {key:'phoneHistory', label:'Phone History', type:'textarea', placeholder:'How the issue started / how the phone died, prior repairs, usage history, etc.'},
      {key:'checkedElsewhere', label:'Checked By Someone Else Before?', type:'select', options:[{value:'No',label:'No'},{value:'Yes',label:'Yes'}]},
      {key:'devices', label:'Devices', type:'repeater', itemName:'Device', subFields:DEVICE_SUBFIELDS},
      {key:'deviceCode', label:'Password / Passcode', type:'passcode', placeholder:'Enter device password / passcode', onChange:()=>updateRepairChecklistVisibility()},
      {key:'reportedIssues', label:'Reported Issue', type:'checklist', options:REPORTED_ISSUE_OPTS, onChange:()=>updateRepairChecklistVisibility()},
      {key:'physicalCondition', label:'Physical Condition — Check Before Opening', type:'checklist', options:PHYSICAL_CONDITION_OPTS},
      {key:'functionTest', label:'Function Test (if the phone powers on)', type:'checklist', options:FUNCTION_TEST_OPTS},
      {key:'customerConfirmation', label:'Customer Confirmation', type:'checklist', options:CUSTOMER_CONFIRMATION_OPTS},
      {key:'partsUsed', label:'Parts Used (Stock Items)', type:'repeater', itemName:'Part', subFields:[
        {key:'product', label:'Stock Item', type:'select', options:[{value:'',label:'— Select Stock Item —'}].concat(DB.products.map(p=>({value:p.id, label:`${p.name} (${p.stock} in stock)`})))},
        {key:'qty', label:'Quantity Used', type:'number', placeholder:'1'},
      ]},
      {key:'total', label:'Estimated Cost — Total (Rs.)', type:'number'},
      {key:'advance', label:'Advance Payment (Rs.)', type:'number'},
      {key:'deliveryDate', label:'Estimated Delivery Date', type:'date'},
      {key:'status', label:'Status', type:'select', manageKey:'orderstatus', options:DB.lists.orderStatuses.map(s=>({value:s,label:s}))},
      {key:'date', label:'Received Date', type:'date', default:todayStr()},
      {key:'time', label:'Received Time', type:'time', default:nowTimeStr()},
      {key:'notes', label:'Notes', type:'textarea'},
      {key:'devicePhoto', label:'Device Photos (Condition)', type:'image', capture:'environment'},
      {key:'customerPhoto', label:'Customer Picture (Security Photo)', type:'webcam', optional:true},
    ],
    validate:d=>{
      if(!String(d.customer||'').trim()) return 'Customer name is required';
      if(!pkPhoneValid(d.customerPhone)) return 'Enter a valid phone number as 0300-1234567 (4 digits, dash, 7 digits)';
      if(!d.devices || !d.devices.some(dv=>dv.device && dv.device.trim())) return 'At least one device is required';
      return null;
    },
    afterRender:()=>{ bindPhoneMask('f_customerPhone'); updateRepairChecklistVisibility(); },
    wideForm:true,
    onCreateExtra:()=>({trackingId: genTrackingId('REP')}),
    onSaved:(order, isEdit, prevSnapshot)=>{ ensureInvoiceForOrder(order); reconcilePartsStock(order, prevSnapshot?prevSnapshot.status:null); },
  });
};
// Small mono-badge for a tracking code, with click-to-copy. Falls back to
// a plain dash for legacy records created before tracking IDs existed.
function trackingCell(code){
  if(!code) return '<span class="cell-muted">—</span>';
  return `<span class="tracking-chip" title="Click to copy" onclick="copyTrackingId(event,'${code}')">${code}</span>`;
}
function copyTrackingId(ev, code){
  ev.stopPropagation();
  const done = ()=> toast('Tracking ID copied: '+code);
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(code).then(done).catch(done);
  } else {
    done();
  }
}
// Hides the "Function Test" checklist whenever it can't actually be filled in:
// either the customer refused to share the device password/code, or the
// Reported Issue checklist has "No Power / Dead" checked (device won't power
// on, so none of the function checks are possible).
function updateRepairChecklistVisibility(){
  const ftWrap = document.getElementById('fw_functionTest');
  if(!ftWrap) return;
  const deniedEl = document.getElementById('f_deviceCode_denied');
  const denied = !!(deniedEl && deniedEl.checked);
  let noPower = false;
  const reportedDataEl = document.getElementById('f_reportedIssues_data');
  if(reportedDataEl){
    try{
      const list = JSON.parse(reportedDataEl.value||'[]');
      noPower = list.some(i=> i.checked && /no power\s*\/\s*dead/i.test(i.label));
    }catch(e){}
  }
  ftWrap.style.display = (denied || noPower) ? 'none' : '';
}

/* ---- AUTO STOCK DEDUCTION WHEN A REPAIR IS MARKED COMPLETED ---- */
// Deducts the qty of every stock item listed in a repair's "Parts Used" the
// moment its status becomes Completed. Guarded by order._stockDeducted so
// re-saving an already-Completed repair never deducts twice. If a repair is
// later moved OUT of Completed, the exact deducted amounts are restored.
function reconcilePartsStock(order, prevStatus){
  const wasCompleted = prevStatus === 'Completed';
  const isCompleted = order.status === 'Completed';
  if(isCompleted && !order._stockDeducted){
    const parts = (order.partsUsed||[]).filter(p=>p.product && Number(p.qty)>0);
    if(parts.length){
      const short = [];
      parts.forEach(p=>{
        const prod = DB.products.find(x=>x.id===p.product);
        if(!prod) return;
        const qty = Number(p.qty);
        if(Number(prod.stock) < qty) short.push(prod.name);
        prod.stock = Math.max(0, Number(prod.stock) - qty);
      });
      order._stockDeducted = true;
      order._deductedParts = parts.map(p=>({product:p.product, qty:Number(p.qty)}));
      log(`Parts stock reduced for completed repair ${order.id}`, 'products', {kind:'stock-out'});
      toast(short.length ? `Stock updated — insufficient stock for: ${short.join(', ')}` : 'Parts stock updated for completed repair');
    }
  } else if(!isCompleted && wasCompleted && order._stockDeducted){
    (order._deductedParts||[]).forEach(p=>{
      const prod = DB.products.find(x=>x.id===p.product);
      if(prod) prod.stock = Number(prod.stock) + Number(p.qty);
    });
    log(`Parts stock restored — repair ${order.id} moved out of Completed`, 'products', {kind:'stock-in'});
    order._stockDeducted = false;
    order._deductedParts = [];
  }
}

/* ---- AUTO-INVOICE GENERATION ---- */
function joinDeviceField(devices, key){
  return (devices||[]).map(d=>d[key]).filter(Boolean).join(' | ');
}
function ensureInvoiceForOrder(order){
  const cust = DB.customers.find(x=>x.id===order.customer) || {};
  const existing = DB.invoices.find(i=>i.ref===order.id);
  // Legacy repairs saved before tracking IDs existed won't have one yet —
  // backfill it here so the repair and its invoice always share one code.
  if(!order.trackingId) order.trackingId = (existing && existing.trackingId) || genTrackingId('REP');
  const devices = order.devices||[];
  const payload = {
    customer: order.customer,
    ref: order.id,
    trackingId: order.trackingId || (existing && existing.trackingId) || genTrackingId('REP'),
    contact: order.customerPhone || cust.phone || '',
    phoneModel: joinDeviceField(devices,'device') || '—',
    imei: joinDeviceField(devices,'imei'),
    deviceCode: order.deviceCode || '',
    faultReported: joinDeviceField(devices,'issue') || 'Repair Job',
    deviceCondition: joinDeviceField(devices,'bodyCondition') || '—',
    accessories: joinDeviceField(devices,'accessories') || '—',
    notes: order.notes || `Auto-generated on repair confirmation (${devices.length} device(s))`,
    amount: order.total,
    status: existing? existing.status : 'Unpaid',
    date: existing? existing.date : todayStr(),
    due: existing? existing.due : todayStr(),
  };
  if(existing){
    Object.assign(existing, payload);
    log(`Invoice ${existing.id} updated from Repair ${order.id}`, 'invoice');
  } else {
    const inv = Object.assign({id:uid('INV')}, payload);
    DB.invoices.push(inv);
    log(`Invoice ${inv.id} auto-generated from Repair ${order.id}`, 'invoice');
    toast('Invoice auto-generated for this repair');
  }
}
function ensureInvoiceForRepair(repair){
  const cust = DB.customers.find(x=>x.id===repair.customer) || {};
  const existing = DB.invoices.find(i=>i.ref===repair.id);
  if(!repair.trackingId) repair.trackingId = (existing && existing.trackingId) || genTrackingId('REP');
  const payload = {
    customer: repair.customer,
    ref: repair.id,
    trackingId: repair.trackingId,
    contact: cust.phone||'',
    phoneModel: repair.device||'',
    imei: repair.imei||'',
    deviceCode: repair.deviceCode||'',
    faultReported: repair.issue||'',
    deviceCondition: repair.condition||'',
    accessories: repair.accessories||'',
    notes: repair.notes||'',
    amount: repair.cost,
    status: existing? existing.status : 'Unpaid',
    date: existing? existing.date : todayStr(),
    due: existing? existing.due : todayStr(),
  };
  if(existing){
    Object.assign(existing, payload);
    log(`Invoice ${existing.id} updated from Repair ${repair.id}`, 'invoice');
  } else {
    const inv = Object.assign({id:uid('INV')}, payload);
    DB.invoices.push(inv);
    log(`Invoice ${inv.id} auto-generated from Repair ${repair.id}`, 'invoice');
    toast('Invoice auto-generated for this repair job');
  }
}

/* ---- INVOICES ---- */
RENDERERS.invoices = function(c){
  crudPage(c, {
    collection:'invoices', title:'Invoice', singular:'Invoice', prefix:'INV', newLabel:'New Invoice', enableExcel:true,
    searchKeys:['id'], getSearchVal:(r)=> custName(r.customer)+' '+r.id+' '+(r.trackingId||''),
    filters:[{key:'status', label:'Status', manageKey:'invoicestatus', options:DB.lists.invoiceStatuses}],
    itemLabel:i=>i.id,
    viewFn:printInvoice,
    onCreateExtra:()=>({trackingId: genTrackingId()}),
    columns:[
      {label:'Invoice #', render:i=>`<span class="cell-mono">${i.id}</span>`},
      {label:'Tracking ID', render:i=>trackingCell(i.trackingId)},
      {label:'Customer', render:i=>`<div class="name-cell"><div class="avatar-sm">${initials(custName(i.customer))}</div><span class="cell-strong">${custName(i.customer)}</span></div>`},
      {label:'Phone Model', render:i=>`<span class="cell-muted">${escapeHtml(i.phoneModel||'—')}</span>`},
      {label:'Amount', render:i=>`<span class="cell-strong">${fmtMoney(i.amount)}</span>`},
      {label:'Due', render:i=>`<span class="cell-muted">${fmtDate(i.due)}</span>`},
      {label:'Status', render:i=>statusBadge(i.status)},
    ],
    fields:[
      {key:'customer', label:'Customer Name', type:'combo', matchCollection:'customers'},
      {key:'contact', label:'Contact No'},
      {key:'phoneModel', label:'Phone Model'},
      {key:'imei', label:'IMEI / Serial No'},
      {key:'faultReported', label:'Fault Reported'},
      {key:'deviceCode', label:'Device Code'},
      {key:'deviceCondition', label:'Device Condition'},
      {key:'accessories', label:'Accessories Received'},
      {key:'notes', label:'Technician Diagnosis / Notes', type:'textarea'},
      {key:'amount', label:'Quoted Price (Rs.)', type:'number'},
      {key:'ref', label:'Reference (Order / Repair ID)', placeholder:'e.g. RPR-XXXXX'},
      {key:'status', label:'Status', type:'select', manageKey:'invoicestatus', options:DB.lists.invoiceStatuses.map(s=>({value:s,label:s}))},
      {key:'date', label:'Issue Date', type:'date', default:todayStr()},
      {key:'due', label:'Due Date', type:'date', default:todayStr()},
    ],
    wideForm:true,
  });
};
function invIcon(name, color){ return `<svg style="width:10px;height:10px;stroke:${color||'currentColor'};fill:none;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round;flex-shrink:0" viewBox="0 0 24 24">${ICONS[name]||''}</svg>`; }
// Two-up label/value cell used inside the customer & device info card.
function invField(label, value, last){
  return `<div style="flex:1;padding:7px 12px;${last?'':'border-right:1px solid #E7E5F3;'}min-width:0">
    <div style="font-size:7.6px;font-weight:800;color:#8B2FE0;text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px">${label}</div>
    <div style="font-size:10.5px;color:#1a1a2e;font-weight:600;min-height:13px;word-break:break-word">${escapeHtml(value||'—')}</div>
  </div>`;
}
// Same two-up cell as invField, but for the device passcode — never prints the
// actual code on a customer-facing invoice, only whether it was given or not.
function invFieldStatus(label, value, last){
  const isDenied = value === 'Denied';
  const isGranted = value && !isDenied;
  const color = isDenied ? '#D62E22' : (isGranted ? '#17914F' : '#1a1a2e');
  const text = isDenied ? 'Denied' : (isGranted ? 'Granted' : '—');
  return `<div style="flex:1;padding:7px 12px;${last?'':'border-right:1px solid #E7E5F3;'}min-width:0">
    <div style="font-size:7.6px;font-weight:800;color:#8B2FE0;text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px">${label}</div>
    <div style="font-size:10.5px;color:${color};font-weight:800;min-height:13px;word-break:break-word">${text}</div>
  </div>`;
}
// Bold, prominent notice printed near the bottom of every invoice/receipt.
function invReleaseNotice(text){
  return `<div style="text-align:center;background:#FDE8E7;border:1.3px solid #F6B7B1;border-radius:8px;padding:8px 10px;margin-top:9px">
    <span style="font-size:9.6px;font-weight:800;color:#D62E22;letter-spacing:.2px">⚠ ${escapeHtml(text)}</span>
  </div>`;
}
// Maps an invoice status to a brand-consistent pill (bg tint + solid text color).
function invStatusStyle(status){
  const map = {
    Paid:       {bg:'#E4F8EE', fg:'#17914F'},
    Partial:    {bg:'#FFF3DE', fg:'#B4780C'},
    Unpaid:     {bg:'#FDE8E7', fg:'#D62E22'},
    Completed:  {bg:'#E4F8EE', fg:'#17914F'},
    Processing: {bg:'#E9F1FF', fg:'#2E5EFF'},
    Pending:    {bg:'#FFF3DE', fg:'#B4780C'},
    Cancelled:  {bg:'#FDE8E7', fg:'#D62E22'},
  };
  return map[status] || {bg:'#EFEAFB', fg:'#6C2BD9'};
}
function printInvoice(inv){
  const cust = DB.customers.find(x=>x.id===inv.customer) || {};
  const st = invStatusStyle(inv.status);
  const trackUrl = (DB.settings.trackingUrl||'').trim();
  const trackFullUrl = trackUrl ? (trackUrl.replace(/\/$/,'') + (trackUrl.includes('?') ? '&' : '?') + 'id=' + encodeURIComponent(inv.trackingId||'')) : '';
  document.getElementById('printArea').innerHTML = `
    <div class="inv-sheet" style="font-family:'Segoe UI',Arial,Helvetica,sans-serif;width:100%;box-sizing:border-box;color:#1a1a2e">

      <div style="height:5px;border-radius:0 0 3px 3px;background:linear-gradient(90deg,#2E5EFF 0%,#8B2FE0 55%,#FF6A3D 100%);margin-bottom:9px"></div>

      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px">
        <img src="logo.png" style="height:44px;width:auto" alt="Sky Nex">
        <div style="text-align:right">
          <div style="font-size:12px;font-weight:800;letter-spacing:.3px">${escapeHtml(DB.settings.businessName||'Sky Nex').toUpperCase()}</div>
          <div style="font-size:8px;font-weight:700;color:#8B2FE0;letter-spacing:.2px">${escapeHtml(DB.settings.tagline||'Mobile Repair Workshop & Institute')}</div>
          <div style="font-size:8px;color:#666;margin-top:3px">${escapeHtml(DB.settings.phone)}${DB.settings.phone&&DB.settings.email?' &nbsp;•&nbsp; ':''}${escapeHtml(DB.settings.email)}</div>
        </div>
      </div>

      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
        <div>
          <div style="font-size:21px;font-weight:800;letter-spacing:.4px;color:#1a1a2e">INVOICE</div>
          <div style="font-size:9px;color:#666;margin-top:1px">No. <b style="color:#1a1a2e;font-family:monospace">${inv.id}</b></div>
        </div>
        <div style="display:flex;align-items:center;gap:14px">
          <div style="text-align:right">
            <div style="font-size:7.5px;font-weight:700;color:#999;text-transform:uppercase;letter-spacing:.4px">Issue Date</div>
            <div style="font-size:10px;font-weight:700">${fmtDate(inv.date)}</div>
          </div>
          <div style="text-align:right">
            <div style="font-size:7.5px;font-weight:700;color:#999;text-transform:uppercase;letter-spacing:.4px">Due Date</div>
            <div style="font-size:10px;font-weight:700">${fmtDate(inv.due)}</div>
          </div>
          <div style="padding:5px 13px;border-radius:20px;background:${st.bg};color:${st.fg};font-size:10px;font-weight:800;letter-spacing:.3px">${escapeHtml(inv.status)}</div>
        </div>
      </div>

      <div style="display:flex;gap:9px">
        <div style="flex:1.65;display:flex;flex-direction:column;gap:8px;min-width:0">
          <div style="border:1px solid #E7E5F3;border-radius:8px;overflow:hidden">
            <div style="display:flex;border-bottom:1px solid #E7E5F3;background:#FAFAFE">
              ${invField('Customer Name', cust.name)}
              ${invField('Contact No', inv.contact||cust.phone, true)}
            </div>
            <div style="display:flex;border-bottom:1px solid #E7E5F3">
              ${invField('Phone Model', inv.phoneModel)}
              ${invField('IMEI / Serial No', inv.imei, true)}
            </div>
            <div style="display:flex">
              ${invField('Fault Reported', inv.faultReported)}
              ${invFieldStatus('Device Code', inv.deviceCode, true)}
            </div>
          </div>
          <div style="border:1px solid #E7E5F3;border-radius:8px;padding:8px 12px;flex:1">
            <div style="font-size:7.6px;font-weight:800;color:#8B2FE0;text-transform:uppercase;letter-spacing:.5px;margin-bottom:4px">Technician Diagnosis / Notes</div>
            <div style="font-size:10px;color:#333;white-space:pre-wrap;line-height:1.45">${escapeHtml(inv.notes||'—')}</div>
          </div>
        </div>

        <div style="flex:1;display:flex;flex-direction:column;gap:8px;min-width:0">
          <div style="border-radius:8px;padding:12px 14px;background:linear-gradient(135deg,#2E5EFF 0%,#8B2FE0 100%);color:#fff">
            <div style="font-size:8px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;opacity:.85;margin-bottom:4px">Amount Due</div>
            <div style="font-size:22px;font-weight:800;letter-spacing:.2px">${fmtMoney(inv.amount)}</div>
          </div>
          <div style="border-radius:8px;padding:11px 13px;background:#FFF7ED;border:1.5px dashed #FF6A3D;text-align:center">
            <div style="font-size:7.6px;font-weight:800;color:#C24F1E;text-transform:uppercase;letter-spacing:.6px;margin-bottom:5px">Track Your Repair</div>
            <div style="font-size:15px;font-weight:800;font-family:'Courier New',monospace;letter-spacing:1.5px;color:#1a1a2e;background:#fff;border-radius:5px;padding:5px 4px;border:1px solid #FFD9C2">${escapeHtml(inv.trackingId||'—')}</div>
            <div style="font-size:7.3px;color:#946043;margin-top:5px;line-height:1.35">
              ${trackUrl
                ? `Visit <b style="color:#C24F1E">${escapeHtml(trackUrl.replace(/^https?:\/\//,''))}</b> and enter this ID for live status`
                : `Keep this ID safe — enter it on our website to check live repair status`}
            </div>
          </div>
          <div style="border:1px solid #E7E5F3;border-radius:8px;padding:9px 13px">
            <div style="font-size:7.6px;font-weight:800;color:#999;text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px">Reference</div>
            <div style="font-size:9.5px;font-weight:700;font-family:monospace">${escapeHtml(inv.ref||'—')}</div>
          </div>
        </div>
      </div>

      ${invReleaseNotice(inv.phoneModel==='Accessory Sale' ? 'Items will not be returned or exchanged/replaced without this invoice.' : 'Phone will not be returned without this invoice.')}

      <div style="display:flex;justify-content:space-between;align-items:center;border-top:1px solid #E7E5F3;margin-top:10px;padding-top:8px;font-size:7.6px;color:#777">
        <span style="display:flex;align-items:center;gap:4px">${invIcon('mail','#8B2FE0')} ${escapeHtml(DB.settings.email)}</span>
        <span style="display:flex;align-items:center;gap:4px">${invIcon('pin','#8B2FE0')} ${escapeHtml(DB.settings.address)}</span>
        <span style="display:flex;align-items:center;gap:4px">${invIcon('phone','#8B2FE0')} ${escapeHtml(DB.settings.phone)}</span>
        <span style="font-weight:700;color:#B4B4C4;letter-spacing:.4px">SKY NEX • MOBILE REPAIR WORKSHOP &amp; INSTITUTE</span>
      </div>
    </div>`;
  window.print();
}

/* ---- EXPENSES ---- */
RENDERERS.expenses = function(c){
  crudPage(c, {
    collection:'expenses', title:'Expense', singular:'Expense', prefix:'EXP', newLabel:'Add Expense', enableExcel:true,
    searchKeys:['title','category','paidBy'],
    filters:[
      {key:'category', label:'Category', manageKey:'expensecats', options:DB.lists.expenseCategories},
      {key:'paidBy', label:'Paid By', manageKey:'paidby', options:DB.lists.paidBy},
    ],
    itemLabel:e=>e.title,
    columns:[
      {label:'Expense', render:e=>`<span class="cell-strong">${escapeHtml(e.title)}</span>`},
      {label:'Category', render:e=>`<span class="badge orange">${escapeHtml(e.category)}</span>`},
      {label:'Amount', render:e=>`<span class="cell-strong">${fmtMoney(e.amount)}</span>`},
      {label:'Paid By', render:e=>`<span class="cell-muted">${escapeHtml(e.paidBy)}</span>`},
      {label:'Date', render:e=>`<span class="cell-muted">${fmtDate(e.date)}</span>`},
    ],
    fields:[
      {key:'title', label:'Expense Title', full:true},
      {key:'category', label:'Category', type:'select', manageKey:'expensecats', options:DB.lists.expenseCategories.map(s=>({value:s,label:s}))},
      {key:'amount', label:'Amount (Rs.)', type:'number'},
      {key:'paidBy', label:'Paid By', type:'select', manageKey:'paidby', options:DB.lists.paidBy.map(s=>({value:s,label:s}))},
      {key:'date', label:'Date', type:'date', default:todayStr()},
    ],
    validate:d=> !d.title ? 'Expense title is required' : null,
  });
};

/* ---- REPAIRS ---- */
RENDERERS.repairs = function(c){
  crudPage(c, {
    collection:'repairs', title:'Repair', singular:'Repair Job', prefix:'RPR', newLabel:'New Repair Job', enableExcel:true,
    searchKeys:['device','issue'], getSearchVal:(r,k)=> k==='device' ? custName(r.customer)+' '+r.device : r[k],
    filters:[{key:'status', label:'Status', options:DB.lists.repairStatuses}],
    itemLabel:r=>r.device+' — '+custName(r.customer),
    columns:[
      {label:'Customer', render:r=>`<div class="name-cell"><div class="avatar-sm">${initials(custName(r.customer))}</div><span class="cell-strong">${custName(r.customer)}</span></div>`},
      {label:'Device', render:r=>`<div><div>${escapeHtml(r.device)}</div><div class="cell-muted">${escapeHtml(r.issue)}</div></div>`},
      {label:'Technician', render:r=>`<span class="cell-muted">${userName(r.technician)}</span>`},
      {label:'Cost', render:r=>`<span class="cell-strong">${fmtMoney(r.cost)}</span>`},
      {label:'Status', render:r=>statusBadge(r.status)},
      {label:'Date', render:r=>`<span class="cell-muted">${fmtDate(r.date)}</span>`},
    ],
    fields:[
      {key:'customer', label:'Customer', type:'select', options:DB.customers.map(x=>({value:x.id,label:x.name}))},
      {key:'device', label:'Phone Model / Device'},
      {key:'imei', label:'IMEI / Serial No'},
      {key:'issue', label:'Fault Reported'},
      {key:'deviceCode', label:'Device Code / Passcode'},
      {key:'condition', label:'Device Condition'},
      {key:'accessories', label:'Accessories Received'},
      {key:'category', label:'Repair Type', type:'select', options:DB.categories.filter(x=>x.type==='Repair').map(x=>({value:x.id,label:x.name}))},
      {key:'technician', label:'Assigned Technician', type:'select', options:DB.users.filter(u=>u.role.toLowerCase().includes('technician')).map(x=>({value:x.id,label:x.name}))},
      {key:'notes', label:'Technician Diagnosis / Notes', type:'textarea'},
      {key:'cost', label:'Quoted / Estimated Cost (Rs.)', type:'number'},
      {key:'status', label:'Status', type:'select', options:DB.lists.repairStatuses.map(s=>({value:s,label:s}))},
      {key:'date', label:'Intake Date', type:'date', default:todayStr()},
    ],
    validate:d=> !d.device ? 'Device is required' : null,
    wideForm:true,
    onSaved:(repair)=>{ if(repair.status==='Delivered') ensureInvoiceForRepair(repair); },
  });
};

/* ---- CUSTOMERS ---- */
RENDERERS.customers = function(c){
  crudPage(c, {
    collection:'customers', title:'Customer Data', singular:'Customer', prefix:'CUS', newLabel:'Add Customer',
    searchKeys:['name','phone','email'],
    filters:[],
    itemLabel:x=>x.name,
    viewFn:viewCustomer,
    columns:[
      {label:'Customer', render:x=>`<div class="name-cell"><div class="avatar-sm">${initials(x.name)}</div><div><div class="cell-strong">${escapeHtml(x.name)}</div><div class="cell-muted">${escapeHtml(x.address||'')}</div></div></div>`},
      {label:'Phone', render:x=>`<span class="cell-mono">${escapeHtml(x.phone)}</span>`},
      {label:'Email', render:x=>`<span class="cell-muted">${escapeHtml(x.email||'—')}</span>`},
      {label:'Repairs', render:x=> DB.orders.filter(o=>o.customer===x.id).length},
      {label:'Total Spent', render:x=>{
        const s = DB.orders.filter(o=>o.customer===x.id && o.status==='Completed').reduce((a,b)=>a+Number(b.total),0)
          + DB.invoices.filter(i=>i.customer===x.id && i.status==='Paid').reduce((a,b)=>a+Number(b.amount),0);
        return `<span class="cell-strong">${fmtMoney(s)}</span>`;
      }},
    ],
    fields:[
      {key:'name', label:'Full Name', full:true},
      {key:'phone', label:'Phone Number'},
      {key:'email', label:'Email Address', type:'email'},
      {key:'address', label:'Address', full:true},
    ],
    onCreateExtra:()=>({joined:todayStr()}),
    validate:d=> !d.name ? 'Customer name is required' : (!d.phone ? 'Phone number is required' : (d.email && !isValidEmail(d.email) ? 'Enter a valid email address' : null)),
  });
};
function viewCustomer(cust){
  const ords = DB.orders.filter(o=>o.customer===cust.id);
  openModal('Customer Profile', `
    <div style="display:flex;gap:14px;align-items:center;margin-bottom:18px">
      <div class="avatar-sm" style="width:52px;height:52px;font-size:16px;border-radius:14px">${initials(cust.name)}</div>
      <div><div style="font-weight:700;font-size:16px">${escapeHtml(cust.name)}</div>
      <div class="cell-muted">${escapeHtml(cust.phone)} • ${escapeHtml(cust.email||'')}</div>
      <div class="cell-muted">Customer since ${fmtDate(cust.joined)}</div></div>
    </div>
    <h4 style="font-size:13px;margin-bottom:8px">Repair History (${ords.length})</h4>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${ords.length? ords.map(o=>`<div style="display:flex;justify-content:space-between;font-size:12.8px;padding:8px 10px;background:var(--surface-2);border-radius:8px">
        <span>${orderDeviceSummary(o)}</span>${statusBadge(o.status)}</div>`).join('') : '<p class="cell-muted" style="font-size:12.5px">No repair bookings yet.</p>'}
    </div>
  `, `<button class="btn btn-outline" onclick="closeModal()">Close</button>`, true);
}

/* ---- USERS ---- */
RENDERERS.users = function(c){
  if(!isAdmin()){
    c.innerHTML = `<div class="empty-state"><div class="icon-wrap">${icon('users')}</div><h4>Admin access required</h4><p>Only an administrator can view and manage staff accounts, usernames and passwords.</p></div>`;
    return;
  }
  const pending = DB.requests.filter(r=>r.status==='Pending');
  crudPage(c, {
    collection:'users', title:'Users', singular:'User', prefix:'USR', newLabel:'Add User', enableExcel:true,
    searchKeys:['name','email','role','username'],
    filters:[{key:'status', label:'Status', manageKey:'userstatus', options:DB.lists.userStatuses}],
    itemLabel:u=>u.name,
    canDelete:u=> u.id !== DB.settings.currentUser,
    canDeleteMsg:'You cannot delete your own account while logged in as it.',
    extraActionsHtml: pending.length ? `<a href="#settings" class="btn btn-outline">${icon('alert')} ${pending.length} Pending Request${pending.length>1?'s':''}</a>` : '',
    columns:[
      {label:'Name', render:u=>`<div class="name-cell"><div class="avatar-sm">${u.photo?`<img src="${u.photo}" style="width:100%;height:100%;object-fit:cover">`:initials(u.name)}</div><span class="cell-strong">${escapeHtml(u.name)}</span></div>`},
      {label:'Username', render:u=>`<span class="cell-mono">${escapeHtml(u.username||'—')}</span>`},
      {label:'Role', render:u=>`<span class="badge blue">${escapeHtml(u.role)}</span>`},
      {label:'Email', render:u=>`<span class="cell-muted">${escapeHtml(u.email)}</span>`},
      {label:'Phone', render:u=>`<span class="cell-mono">${escapeHtml(u.phone)}</span>`},
      {label:'Status', render:u=>statusBadge(u.status)},
    ],
    fields:[
      {key:'name', label:'Full Name', full:true},
      {key:'username', label:'Username (for login)'},
      {key:'password', label:'Password (required for new user, blank = keep current on edit)', type:'password'},
      {key:'role', label:'Role', type:'select', options:DB.roles.map(r=>({value:r.name,label:r.name}))},
      {key:'email', label:'Email', type:'email'},
      {key:'phone', label:'Phone'},
      {key:'status', label:'Status', type:'select', manageKey:'userstatus', options:DB.lists.userStatuses.map(s=>({value:s,label:s}))},
    ],
    validate:(d,item)=>{
      if(!d.name) return 'Name is required';
      if(!d.username) return 'Username is required';
      if(!/^[a-zA-Z0-9_.]+$/.test(d.username)) return 'Username can only contain letters, numbers, dot and underscore';
      const clash = DB.users.some(u=> u.username && u.username.toLowerCase()===d.username.toLowerCase() && (!item || u.id!==item.id));
      if(clash) return 'That username is already taken';
      if(!item && !d.password) return 'Password is required for a new user';
      if(d.email && !isValidEmail(d.email)) return 'Enter a valid email address';
      return null;
    },
    onSaved:(savedUser)=>{
      // Keep session in sync if the admin edited their own account
      if(savedUser.id===DB.settings.currentUser) renderSidebar();
    },
  });
};

/* ---- ROLES & PERMISSIONS ---- */
RENDERERS.roles = function(c){
  if(!isAdmin()){
    c.innerHTML = `<div class="empty-state"><div class="icon-wrap">${icon('shield')}</div><h4>Admin access required</h4><p>Only an administrator can view and manage roles and permissions.</p></div>`;
    return;
  }
  function moduleChecklistHtml(selected, namePrefix){
    return `<div class="role-modules-grid">${NAV.flatMap(g=>g.items).filter(it=>SELECTABLE_NAV.includes(it.id)).map(it=>`
      <label class="role-module-check">
        <input type="checkbox" data-mod="${it.id}" data-prefix="${namePrefix}" ${selected.includes(it.id)?'checked':''}>
        ${escapeHtml(it.label)}
      </label>`).join('')}</div>`;
  }
  function roleCardHtml(r){
    const usersOnRole = DB.users.filter(u=>u.role===r.name).length;
    const showModules = r.level==='manager' || r.level==='viewer';
    const hint = (ROLE_LEVELS.find(l=>l.id===r.level)||{}).hint || '';
    return `
    <div class="role-card" data-role="${r.id}">
      <div class="role-card-head">
        <h4>${escapeHtml(r.name)}<span class="cnt">${usersOnRole} user${usersOnRole===1?'':'s'}</span></h4>
        <button class="mini-btn danger" data-delrole="${r.id}" title="Delete role">${icon('trash')}</button>
      </div>
      <div class="role-level-pills">
        ${ROLE_LEVELS.map(l=>`<button type="button" class="role-level-pill" data-setlevel="${r.id}" data-level="${l.id}" data-active="${r.level===l.id?'1':'0'}">${l.label}</button>`).join('')}
      </div>
      <div class="role-level-hint" data-hint="${r.id}">${hint}</div>
      <div data-moduleswrap="${r.id}">${showModules?moduleChecklistHtml(r.modules||[], r.id):''}</div>
    </div>`;
  }

  function draw(){
    c.innerHTML = `
      <div class="section-head">
        <div><h2>Roles</h2><div class="sub">${DB.roles.length} role${DB.roles.length===1?'':'s'} configured</div></div>
      </div>
      <div class="card">
        <div class="card-body settings-card">
          <p style="font-size:12.3px;color:var(--text-muted);margin-bottom:16px">
            <b>Admin</b> gets everything, incl. Users, Roles, Import Backup and Erase All Data. <b>Sub Admin</b> gets everything except those owner-only pages. <b>Manager</b> and <b>Viewer</b> only get the pages ticked below — Manager can edit them, Viewer can only look.
          </p>
          <div id="rolesList">${DB.roles.map(roleCardHtml).join('')}</div>
        </div>
      </div>
      <div class="card" style="margin-top:18px">
        <div class="card-head"><h3>Add New Role</h3></div>
        <div class="card-body settings-card">
          <div class="role-new-form">
            <input type="text" class="role-new-name" id="newRoleName" placeholder="Role name — e.g. Front Desk">
            <div class="role-level-pills" id="newRoleLevelPills">
              ${ROLE_LEVELS.map((l,i)=>`<button type="button" class="role-level-pill" data-newlevel="${l.id}" data-active="${i===2?'1':'0'}">${l.label}</button>`).join('')}
            </div>
            <div id="newRoleModulesWrap">${moduleChecklistHtml([], 'new')}</div>
            <div style="text-align:right"><button class="btn btn-primary" id="addRoleBtn">${icon('plus')} Add Role</button></div>
          </div>
        </div>
      </div>
    `;
    bindEvents();
  }

  function bindEvents(){
    // Level switch per existing role
    c.querySelectorAll('[data-setlevel]').forEach(btn=>{
      btn.onclick = ()=>{
        const r = DB.roles.find(x=>x.id===btn.dataset.setlevel);
        if(!r) return;
        if(r.level==='admin' && btn.dataset.level!=='admin' && DB.roles.filter(x=>x.level==='admin').length<=1){
          toast('At least one Admin-level role must remain','error'); return;
        }
        r.level = btn.dataset.level;
        save(); draw();
      };
    });
    // Module checkbox toggles (existing roles)
    c.querySelectorAll('[data-moduleswrap] input[data-mod]').forEach(cb=>{
      cb.onchange = ()=>{
        const roleId = cb.dataset.prefix;
        const r = DB.roles.find(x=>x.id===roleId);
        if(!r) return;
        r.modules = r.modules||[];
        if(cb.checked){ if(!r.modules.includes(cb.dataset.mod)) r.modules.push(cb.dataset.mod); }
        else { r.modules = r.modules.filter(m=>m!==cb.dataset.mod); }
        save(); renderSidebar();
      };
    });
    // Delete role
    c.querySelectorAll('[data-delrole]').forEach(btn=>{
      btn.onclick = ()=>{
        const r = DB.roles.find(x=>x.id===btn.dataset.delrole);
        if(!r) return;
        if(DB.users.some(u=>u.role===r.name)){ toast('Cannot delete — this role is assigned to one or more users','error'); return; }
        if(r.level==='admin' && DB.roles.filter(x=>x.level==='admin').length<=1){ toast('At least one Admin-level role must remain','error'); return; }
        openModal('Delete Role', `<p style="font-size:13.5px;color:var(--text-muted)">Delete the "${escapeHtml(r.name)}" role? This cannot be undone.</p>`,
          `<button class="btn btn-outline" onclick="closeModal()">Cancel</button><button class="btn" style="background:var(--red);color:#fff" id="confirmDelRoleBtn">${icon('trash')} Delete</button>`);
        document.getElementById('confirmDelRoleBtn').onclick = ()=>{
          DB.roles = DB.roles.filter(x=>x.id!==r.id);
          save(); closeModal(); toast('Role deleted'); draw();
        };
      };
    });
    // New-role level pills
    let newLevel = ROLE_LEVELS[2].id; // default Manager
    const newModulesWrap = document.getElementById('newRoleModulesWrap');
    function refreshNewModulesVisibility(){
      newModulesWrap.innerHTML = (newLevel==='manager'||newLevel==='viewer') ? moduleChecklistHtml([], 'new') : '';
    }
    c.querySelectorAll('[data-newlevel]').forEach(btn=>{
      btn.onclick = ()=>{
        newLevel = btn.dataset.newlevel;
        c.querySelectorAll('[data-newlevel]').forEach(b2=> b2.dataset.active = (b2.dataset.newlevel===newLevel)?'1':'0');
        refreshNewModulesVisibility();
      };
    });
    document.getElementById('addRoleBtn').onclick = ()=>{
      const nameInput = document.getElementById('newRoleName');
      const name = nameInput.value.trim();
      if(!name){ toast('Enter a role name first','error'); return; }
      if(DB.roles.some(r=>r.name.toLowerCase()===name.toLowerCase())){ toast('A role with that name already exists','error'); return; }
      const modules = Array.from(c.querySelectorAll('#newRoleModulesWrap input[data-mod]:checked')).map(cb=>cb.dataset.mod);
      DB.roles.push({id:uid('ROL'), name, level:newLevel, modules});
      save(); toast('Role added'); draw();
    };
  }

  draw();
};


RENDERERS.history = function(c){
  const typeIcon = {repair:'tool', invoice:'file', product:'box', order:'cart', sale:'cart', sales:'cart', expense:'wallet', customer:'user', category:'tag', user:'users', general:'info'};
  const typeColor = {repair:'#FF6A3D', invoice:'#8B2FE0', product:'#2E5EFF', order:'#17B26A', sale:'#17B26A', sales:'#17B26A', expense:'#F5A623', customer:'#0EA5E9', category:'#D946EF', user:'#2E5EFF', general:'#9AA0AE'};
  c.innerHTML = `
    <div class="section-head"><div><h2>History</h2><div class="sub">${DB.history.length} recorded activities</div></div>
    <div class="head-actions">${isAdmin()?`<button class="btn btn-outline" id="clearHistBtn">${icon('trash')} Clear History</button>`:''}</div></div>
    <div class="card"><div class="card-body">
      <div style="display:flex;flex-direction:column;gap:0">
        ${DB.history.length===0 ? emptyState('History') : DB.history.map((h,i)=>`
        <div style="display:flex;gap:14px;padding:14px 0;${i<DB.history.length-1?'border-bottom:1px solid var(--border)':''}">
          <div class="avatar-sm" style="background:${typeColor[h.type]||'#9AA0AE'};border-radius:10px">${icon(typeIcon[h.type]||'info')}</div>
          <div style="flex:1"><div style="font-size:13.3px">${escapeHtml(h.text)}</div>
          <div class="cell-muted" style="margin-top:2px">${new Date(h.time).toLocaleString('en-GB',{day:'2-digit',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit'})}</div></div>
        </div>`).join('')}
      </div>
    </div></div>`;
  const cb = document.getElementById('clearHistBtn');
  if(cb) cb.onclick = ()=>{
    openModal('Clear History', `<p style="font-size:13.5px;color:var(--text-muted)">This will permanently remove all activity history. Continue?</p>`,
      `<button class="btn btn-outline" onclick="closeModal()">Cancel</button><button class="btn" style="background:var(--red);color:#fff" id="doClear">${icon('trash')} Clear</button>`);
    document.getElementById('doClear').onclick = ()=>{ DB.history=[]; save(); closeModal(); toast('History cleared'); route(); };
  };
};

/* ---- REPORTS ---- */
RENDERERS.reports = function(c){
  const monthly = computeMonthlyStats();
  const canExport = canEditData(); // Viewer can look at reports but not export/download them

  c.innerHTML = `
    <div class="card">
      <div class="card-head"><div><h3>Summary</h3><div class="sub">Month-wise snapshot across all workshop records — Jan–Dec ${new Date().getFullYear()}</div></div>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          ${canExport?`<button class="btn btn-outline btn-sm" id="exportExcelBtn">${icon('download')} Export to Excel</button>`:''}
        </div>
      </div>
      <div class="table-card" style="border:none;border-radius:0">
        <table>
          <thead><tr><th>Month</th><th>Customers</th><th>Repairs</th><th>Orders</th><th>Invoices</th><th>Revenue</th><th>Expenses</th><th>Stock In/Out</th></tr></thead>
          <tbody>
            ${monthly.length===0 ? `<tr><td colspan="8" style="text-align:center;color:var(--text-muted);padding:22px">No records yet</td></tr>` :
              monthly.map(m=>`<tr>
                <td class="cell-strong">${monthLabel(m.key)}</td>
                <td>${m.customers}</td>
                <td>${m.repairs}</td>
                <td>${m.orders}</td>
                <td>${m.invoices}</td>
                <td class="cell-strong" style="color:var(--green)">${fmtMoney(m.revenue)}</td>
                <td class="cell-strong" style="color:var(--red)">${fmtMoney(m.expenses)}</td>
                <td><span style="color:var(--green)">↑ ${m.stockIn}</span> <span class="cell-muted">/</span> <span style="color:var(--red)">↓ ${m.stockOut}</span></td>
              </tr>`).join('')}
          </tbody>
        </table>
      </div>
      <div class="custom-report-block">
        <h4>Download Custom Reports</h4>
        <p class="manage-hint">${canExport ? 'Export a single month or any date range to Excel' : 'Viewing only — exporting reports requires an editing role.'}</p>
        ${canExport ? `
        <div class="custom-report-row">
          <label>By Month</label>
          <input type="month" id="customMonthInput">
          <button class="btn btn-outline btn-sm" id="downloadMonthBtn">${icon('download')} Download Month</button>
        </div>
        <div class="custom-report-row">
          <label>By Date Range</label>
          <input type="date" id="rangeFromInput">
          <span class="to-label">to</span>
          <input type="date" id="rangeToInput">
          <button class="btn btn-outline btn-sm" id="downloadRangeBtn">${icon('download')} Download Range</button>
        </div>` : ''}
      </div>
    </div>
  `;
  if(!canExport) return;
  document.getElementById('exportExcelBtn').onclick = ()=>{
    const headers = ['Month','Customers','Repairs','Orders','Invoices','Revenue (Rs.)','Expenses (Rs.)','Stock In (pcs)','Stock Out (pcs)'];
    const rows = monthly.map(m=>[monthLabel(m.key), m.customers, m.repairs, m.orders, m.invoices, m.revenue, m.expenses, m.stockIn, m.stockOut]);
    const csv = [headers, ...rows].map(r=> r.map(v=> `"${String(v).replace(/"/g,'""')}"`).join(',')).join('\r\n');
    const blob = new Blob(['\ufeff'+csv], {type:'text/csv;charset=utf-8;'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = `skynex-report-summary-${new Date().toISOString().slice(0,10)}.csv`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast('Report exported');
  };
  document.getElementById('downloadMonthBtn').onclick = ()=>{
    const val = document.getElementById('customMonthInput').value;
    if(!val){ toast('Pick a month first','error'); return; }
    const [y,m] = val.split('-').map(Number);
    const from = new Date(y, m-1, 1, 0,0,0);
    const to = new Date(y, m, 0, 23,59,59);
    const label = from.toLocaleDateString('en-GB',{month:'long', year:'numeric'});
    downloadRangeReport(from, to, label, `skynex-report-${val}.csv`);
  };
  document.getElementById('downloadRangeBtn').onclick = ()=>{
    const fv = document.getElementById('rangeFromInput').value;
    const tv = document.getElementById('rangeToInput').value;
    if(!fv || !tv){ toast('Pick both start and end dates','error'); return; }
    const from = new Date(fv+'T00:00:00');
    const to = new Date(tv+'T23:59:59');
    if(from>to){ toast('Start date must be before end date','error'); return; }
    const label = `${fmtDate(fv)} – ${fmtDate(tv)}`;
    downloadRangeReport(from, to, label, `skynex-report-${fv}_to_${tv}.csv`);
  };
};
function computeMonthlyStats(year){
  year = year || new Date().getFullYear();
  const map = {};
  for(let m=1; m<=12; m++){
    const key = year+'-'+String(m).padStart(2,'0');
    map[key] = {key, customers:0, repairs:0, orders:0, invoices:0, revenue:0, expenses:0, stockIn:0, stockOut:0};
  }
  function bucket(dateStr){
    if(!dateStr) return null;
    const d = new Date(dateStr);
    if(isNaN(d) || d.getFullYear()!==year) return null;
    const key = d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0');
    return map[key] || null;
  }
  DB.customers.forEach(cu=>{ const b=bucket(cu.joined); if(b) b.customers++; });
  DB.orders.forEach(o=>{ const b=bucket(o.date); if(b){ b.repairs++; b.orders++; if(o.status==='Completed'){ b.revenue += Number(o.total)||0; b.stockOut += Number(o.qty)||0; } } });
  DB.invoices.forEach(i=>{ const b=bucket(i.date); if(b){ b.invoices++; if(i.status==='Paid') b.revenue += Number(i.amount)||0; } });
  DB.sales.forEach(sl=>{ const b=bucket(sl.date); if(b){ if(sl.status==='Paid') b.revenue += Number(sl.total)||0; b.stockOut += (sl.items||[]).reduce((s,it)=>s+(Number(it.qty)||0),0); } });
  DB.expenses.forEach(e=>{ const b=bucket(e.date); if(b) b.expenses += Number(e.amount)||0; });
  DB.history.forEach(h=>{ if(h.type==='products' && h.meta && h.meta.kind==='stock-in'){ const b=bucket(h.time); if(b) b.stockIn += Number(h.meta.qty)||0; } });
  return Object.values(map).sort((a,b)=> a.key<b.key?-1:1);
}
function monthLabel(key){
  const [y,m] = key.split('-').map(Number);
  return new Date(y, m-1, 1).toLocaleDateString('en-GB',{month:'long', year:'numeric'});
}
// Aggregates every collection into a single totals row for an arbitrary [from, to] date range
// (inclusive), used by the "Download Custom Reports" (by month / by date range) export.
function computeRangeStats(from, to){
  const stats = {customers:0, repairs:0, orders:0, invoices:0, revenue:0, expenses:0, stockIn:0, stockOut:0};
  const inRange = d=>{ if(!d) return false; const dt = new Date(d); if(isNaN(dt)) return false; return dt>=from && dt<=to; };
  DB.customers.forEach(cu=>{ if(inRange(cu.joined)) stats.customers++; });
  DB.orders.forEach(o=>{ if(inRange(o.date)){ stats.repairs++; stats.orders++; if(o.status==='Completed'){ stats.revenue += Number(o.total)||0; stats.stockOut += Number(o.qty)||0; } } });
  DB.invoices.forEach(i=>{ if(inRange(i.date)){ stats.invoices++; if(i.status==='Paid') stats.revenue += Number(i.amount)||0; } });
  DB.sales.forEach(sl=>{ if(inRange(sl.date)){ if(sl.status==='Paid') stats.revenue += Number(sl.total)||0; stats.stockOut += (sl.items||[]).reduce((s,it)=>s+(Number(it.qty)||0),0); } });
  DB.expenses.forEach(e=>{ if(inRange(e.date)) stats.expenses += Number(e.amount)||0; });
  DB.history.forEach(h=>{ if(h.type==='products' && h.meta && h.meta.kind==='stock-in' && inRange(h.time)) stats.stockIn += Number(h.meta.qty)||0; });
  return stats;
}
function downloadRangeReport(from, to, periodLabel, filename){
  const s = computeRangeStats(from, to);
  const headers = ['Period','Customers','Repairs','Orders','Invoices','Revenue (Rs.)','Expenses (Rs.)','Stock In (pcs)','Stock Out (pcs)'];
  const row = [periodLabel, s.customers, s.repairs, s.orders, s.invoices, s.revenue, s.expenses, s.stockIn, s.stockOut];
  const csv = [headers, row].map(r=> r.map(v=> `"${String(v).replace(/"/g,'""')}"`).join(',')).join('\r\n');
  const blob = new Blob(['\ufeff'+csv], {type:'text/csv;charset=utf-8;'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  URL.revokeObjectURL(url);
  toast('Report exported');
}

/* ---- SETTINGS ---- */
RENDERERS.settings = function(c){
  const s = DB.settings;
  const curUser = currentUserObj();
  const admin = isAdmin();

  /* ---- My Account card (differs for admin vs regular user) ---- */
  function accountCardHtml(){
    if(!curUser) return `<p style="font-size:13px;color:var(--text-muted)">No user account found.</p>`;
    if(admin){
      return `
        <div class="account-avatar-row">
          <div class="account-avatar" id="acctAvatarPreview">${curUser.photo ? `<img src="${curUser.photo}" alt="">` : `<span>${initials(curUser.name)}</span>`}</div>
          <div class="img-actions">
            <input type="file" accept="image/*" id="acctPhotoFile" style="display:none">
            <button type="button" class="btn btn-outline btn-sm" id="acctUploadBtn">${icon('camera')} Upload Photo</button>
            <button type="button" class="btn btn-outline btn-sm" id="acctRemoveBtn">${icon('trash')} Remove</button>
          </div>
        </div>
        <div class="form-grid" style="margin-top:18px">
          ${renderField({key:'acctName', label:'Display Name', full:true}, curUser.name)}
          ${renderField({key:'acctUsername', label:'Username (for login)', full:true}, curUser.username)}
          ${renderField({key:'acctPassword', label:'New Password (leave blank to keep current)', type:'password', full:true}, '')}
        </div>
        <div style="margin-top:16px;text-align:right"><button class="btn btn-primary" id="saveAccountBtn">${icon('check')} Save Changes</button></div>`;
    }
    // Non-admin: username/password are locked; photo & password can only be changed via request
    const myReqs = myPendingRequests(curUser.id);
    const pendingPwd = myReqs.find(r=>r.type==='password' && r.status==='Pending');
    const pendingPhoto = myReqs.find(r=>r.type==='photo' && r.status==='Pending');
    return `
      <div class="account-avatar-row">
        <div class="account-avatar" id="acctAvatarPreview">${curUser.photo ? `<img src="${curUser.photo}" alt="">` : `<span>${initials(curUser.name)}</span>`}</div>
        <div class="img-actions">
          <input type="file" accept="image/*" id="acctPhotoFile" style="display:none">
          <button type="button" class="btn btn-outline btn-sm" id="acctRequestPhotoBtn" ${pendingPhoto?'disabled':''}>${icon('camera')} ${pendingPhoto?'Photo Request Pending':'Request Photo Change'}</button>
        </div>
      </div>
      <div class="form-grid" style="margin-top:18px">
        <div class="field full"><label>Display Name</label><input type="text" value="${escapeHtml(curUser.name)}" disabled></div>
        <div class="field full"><label>Username</label><input type="text" value="${escapeHtml(curUser.username||'')}" disabled></div>
      </div>
      <p class="field-locked-note">Your name, username and password can only be changed by an administrator.</p>
      <div style="margin-top:14px;padding-top:14px;border-top:1px solid var(--border)">
        <div class="settings-row" style="padding-top:0">
          <div class="l"><h4>Password</h4><p>${pendingPwd ? 'Your password change request is pending admin approval.' : 'Ask the admin to set a new password for you.'}</p></div>
          <button type="button" class="btn btn-outline btn-sm" id="acctRequestPwdBtn" ${pendingPwd?'disabled':''}>${icon('edit')} ${pendingPwd?'Request Pending':'Request Password Change'}</button>
        </div>
      </div>
      ${myReqs.length ? `
      <div style="margin-top:8px">
        <h4 style="font-size:13px;margin-bottom:8px">My Requests</h4>
        ${myReqs.slice(0,5).map(r=>`
          <div class="request-row">
            <div class="l"><div class="t">${r.type==='password'?'Password change':'Profile photo change'}</div><div class="d">${fmtDate(r.date)}</div></div>
            ${statusBadge(r.status)}
          </div>`).join('')}
      </div>` : ''}
    `;
  }

  /* ---- Account Requests card (admin only) ---- */
  function requestsCardHtml(){
    const pending = DB.requests.filter(r=>r.status==='Pending').slice().reverse();
    if(!pending.length) return `<p style="font-size:13px;color:var(--text-muted)">No pending requests from staff right now.</p>`;
    return pending.map(r=>{
      const u = DB.users.find(x=>x.id===r.userId);
      return `<div class="request-row">
        <div class="l" style="display:flex;align-items:center;gap:10px">
          ${r.type==='photo' ? `<div class="request-photo-preview">${r.payload.photo?`<img src="${r.payload.photo}" alt="">`:''}</div>` : `<div class="avatar-sm">${icon('edit')}</div>`}
          <div>
            <div class="t">${escapeHtml(u?u.name:'Unknown user')} — ${r.type==='password'?'Password change':'Profile photo change'}</div>
            <div class="d">Requested ${fmtDate(r.date)}</div>
          </div>
        </div>
        <div class="acts">
          <button class="btn btn-outline btn-sm" data-reqreject="${r.id}">${icon('x')} Reject</button>
          <button class="btn btn-primary btn-sm" data-reqapprove="${r.id}">${icon('check')} Approve</button>
        </div>
      </div>`;
    }).join('');
  }

  c.innerHTML = `
    <div class="grid-2" style="grid-template-columns:1fr 1fr">
      <div class="card">
        <div class="card-head"><div><h3>My Account</h3><div class="sub">${admin?'Update your username, password and profile photo':'View your profile — request changes via admin'}</div></div></div>
        <div class="card-body settings-card">${accountCardHtml()}</div>
      </div>
      ${admin ? `
      <div class="card">
        <div class="card-head"><div><h3>Account Requests</h3><div class="sub">Approve or reject staff requests to change password / photo</div></div></div>
        <div class="card-body settings-card">${requestsCardHtml()}</div>
      </div>` : `
      <div class="card">
        <div class="card-head"><h3>Preferences</h3></div>
        <div class="card-body settings-card">
          <div class="settings-row"><div class="l"><h4>Dark Mode</h4><p>Switch the portal to a dark theme.</p></div>
            <div class="switch ${document.documentElement.dataset.theme==='dark'?'on':''}" id="darkSwitch"></div></div>
          <div class="settings-row"><div class="l"><h4>Low Stock Alerts</h4><p>Show a badge in the sidebar when stock runs low.</p></div>
            <div class="switch ${s.lowStockAlerts?'on':''}" id="lowStockSwitch"></div></div>
          <div class="settings-row"><div class="l"><h4>Email Notifications</h4><p>Get notified about new orders and invoices.</p></div>
            <div class="switch ${s.emailNotify?'on':''}" id="emailSwitch"></div></div>
        </div>
      </div>`}
    </div>
    ${admin ? `
    <div class="grid-2" style="grid-template-columns:1fr 1fr">
      <div class="card">
        <div class="card-head"><h3>Business Profile</h3></div>
        <div class="card-body settings-card">
          <div class="form-grid">
            ${renderField({key:'businessName',label:'Business Name',full:true}, s.businessName)}
            ${renderField({key:'tagline',label:'Tagline',full:true}, s.tagline)}
            ${renderField({key:'address',label:'Address',full:true}, s.address)}
            ${renderField({key:'phone',label:'Phone'}, s.phone)}
            ${renderField({key:'email',label:'Email',type:'email'}, s.email)}
            ${renderField({key:'trackingUrl',label:'Order Tracking Page URL (shown on invoices, once your website is live)',full:true,placeholder:'e.g. https://skynex.pk/track'}, s.trackingUrl)}
          </div>
          <div style="margin-top:16px;text-align:right"><button class="btn btn-primary" id="saveProfileBtn">${icon('check')} Save Profile</button></div>
        </div>
      </div>
      <div class="card">
        <div class="card-head"><h3>Preferences</h3></div>
        <div class="card-body settings-card">
          <div class="settings-row"><div class="l"><h4>Dark Mode</h4><p>Switch the portal to a dark theme.</p></div>
            <div class="switch ${document.documentElement.dataset.theme==='dark'?'on':''}" id="darkSwitch"></div></div>
          <div class="settings-row"><div class="l"><h4>Low Stock Alerts</h4><p>Show a badge in the sidebar when stock runs low.</p></div>
            <div class="switch ${s.lowStockAlerts?'on':''}" id="lowStockSwitch"></div></div>
          <div class="settings-row"><div class="l"><h4>Email Notifications</h4><p>Get notified about new orders and invoices.</p></div>
            <div class="switch ${s.emailNotify?'on':''}" id="emailSwitch"></div></div>
        </div>
      </div>
    </div>
    <div class="grid-2" style="grid-template-columns:1fr 1fr">
      <div class="card">
        <div class="card-head"><div><h3>Data Backup</h3><div class="sub">Your data lives only in this browser</div></div></div>
        <div class="card-body settings-card">
          <div class="two-col-list" style="grid-template-columns:1fr">
            <button type="button" class="btn btn-outline" style="justify-content:center" id="exportBackupBtn">${icon('download')} Export Backup (.json)</button>
            <input type="file" accept="application/json" id="importBackupFile" style="display:none">
            <button type="button" class="btn btn-outline" style="justify-content:center" id="importBackupBtn">${icon('upload')} Import Backup</button>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-head"><h3 style="color:var(--red)">Danger Zone</h3></div>
        <div class="card-body settings-card">
          <div class="settings-row"><div class="l"><h4>Reset Data</h4><p>Permanently delete every record in this app — stock, customers, repairs, orders, invoices, expenses, categories, users and history. This cannot be undone.</p></div>
            <button class="btn btn-danger-ghost btn-sm" id="resetBtn">${icon('trash')} Reset Data</button></div>
        </div>
      </div>
    </div>` : ''}
  `;

  /* ---- Bind: My Account ---- */
  if(curUser && admin){
    let acctPhotoDraft = curUser.photo || '';
    const refreshAcctAvatar = ()=>{
      document.getElementById('acctAvatarPreview').innerHTML = acctPhotoDraft ? `<img src="${acctPhotoDraft}" alt="">` : `<span>${initials(document.getElementById('f_acctName').value || curUser.name)}</span>`;
    };
    document.getElementById('acctUploadBtn').onclick = ()=> document.getElementById('acctPhotoFile').click();
    document.getElementById('acctPhotoFile').onchange = e=>{
      const file = e.target.files[0]; if(!file) return;
      const reader = new FileReader();
      reader.onload = ()=>{ acctPhotoDraft = reader.result; refreshAcctAvatar(); };
      reader.readAsDataURL(file);
      e.target.value = '';
    };
    document.getElementById('acctRemoveBtn').onclick = ()=>{ acctPhotoDraft = ''; refreshAcctAvatar(); };
    document.getElementById('saveAccountBtn').onclick = ()=>{
      const dname = document.getElementById('f_acctName').value.trim();
      const uname = document.getElementById('f_acctUsername').value.trim();
      if(!dname){ toast('Display name is required','error'); return; }
      if(!uname){ toast('Username is required','error'); return; }
      const clash = DB.users.some(u=> u.id!==curUser.id && u.username && u.username.toLowerCase()===uname.toLowerCase());
      if(clash){ toast('That username is already taken','error'); return; }
      curUser.name = dname;
      curUser.username = uname;
      curUser.photo = acctPhotoDraft;
      const pwd = document.getElementById('f_acctPassword').value;
      if(pwd) curUser.password = pwd;
      save(); toast('Account updated'); log('Account profile updated','user'); renderSidebar();
      document.getElementById('f_acctPassword').value = '';
    };
  } else if(curUser){
    const reqPhotoBtn = document.getElementById('acctRequestPhotoBtn');
    if(reqPhotoBtn && !reqPhotoBtn.disabled){
      reqPhotoBtn.onclick = ()=> document.getElementById('acctPhotoFile').click();
      document.getElementById('acctPhotoFile').onchange = e=>{
        const file = e.target.files[0]; if(!file) return;
        const reader = new FileReader();
        reader.onload = ()=>{
          DB.requests.push({id:uid('REQ'), userId:curUser.id, type:'photo', payload:{photo:reader.result}, status:'Pending', date:todayStr()});
          save(); toast('Photo change request sent to admin'); log('Profile photo change requested','user'); route();
        };
        reader.readAsDataURL(file);
        e.target.value = '';
      };
    }
    const reqPwdBtn = document.getElementById('acctRequestPwdBtn');
    if(reqPwdBtn && !reqPwdBtn.disabled){
      reqPwdBtn.onclick = ()=>{
        openModal('Request Password Change', `
          <div class="form-grid">
            <div class="field full"><label>New Password</label><input type="password" id="reqNewPwd" placeholder="Enter desired new password"></div>
            <div class="field full"><label>Confirm Password</label><input type="password" id="reqNewPwd2" placeholder="Re-enter new password"></div>
          </div>
          <p class="field-locked-note" style="margin-top:10px">This will be sent to your administrator for approval — it will not take effect until approved.</p>
        `, `<button class="btn btn-outline" onclick="closeModal()">Cancel</button><button class="btn btn-primary" id="submitReqPwdBtn">${icon('check')} Send Request</button>`);
        document.getElementById('submitReqPwdBtn').onclick = ()=>{
          const p1 = document.getElementById('reqNewPwd').value;
          const p2 = document.getElementById('reqNewPwd2').value;
          if(!p1 || p1.length<4){ toast('Password should be at least 4 characters','error'); return; }
          if(p1!==p2){ toast('Passwords do not match','error'); return; }
          DB.requests.push({id:uid('REQ'), userId:curUser.id, type:'password', payload:{newPassword:p1}, status:'Pending', date:todayStr()});
          save(); closeModal(); toast('Password change request sent to admin'); log('Password change requested','user'); route();
        };
      };
    }
  }

  /* ---- Bind: Account Requests (admin) ---- */
  if(admin){
    c.querySelectorAll('[data-reqapprove]').forEach(btn=>{
      btn.onclick = ()=>{
        const req = DB.requests.find(r=>r.id===btn.dataset.reqapprove);
        if(!req) return;
        const target = DB.users.find(u=>u.id===req.userId);
        if(target){
          if(req.type==='password') target.password = req.payload.newPassword;
          if(req.type==='photo') target.photo = req.payload.photo;
        }
        req.status = 'Approved';
        save(); toast('Request approved'); log(`${req.type==='password'?'Password':'Photo'} change approved for ${target?target.name:'user'}`, 'user'); route(); renderSidebar();
      };
    });
    c.querySelectorAll('[data-reqreject]').forEach(btn=>{
      btn.onclick = ()=>{
        const req = DB.requests.find(r=>r.id===btn.dataset.reqreject);
        if(!req) return;
        req.status = 'Rejected';
        save(); toast('Request rejected'); route();
      };
    });
  }

  if(admin){
    document.getElementById('exportBackupBtn').onclick = ()=>{
      const blob = new Blob([JSON.stringify(DB, null, 2)], {type:'application/json'});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = `skynex-backup-${new Date().toISOString().slice(0,10)}.json`;
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
      URL.revokeObjectURL(url);
      toast('Backup exported');
    };
    document.getElementById('importBackupBtn').onclick = ()=> document.getElementById('importBackupFile').click();
    document.getElementById('importBackupFile').onchange = e=>{
      const file = e.target.files[0]; if(!file) return;
      const reader = new FileReader();
      reader.onload = ()=>{
        let parsed;
        try{ parsed = JSON.parse(reader.result); }catch(err){ toast('Invalid backup file — not valid JSON','error'); e.target.value=''; return; }
        if(!parsed || typeof parsed!=='object'){ toast('Invalid backup file','error'); e.target.value=''; return; }
        openModal('Import Backup', `<p style="font-size:13.5px;color:var(--text-muted)">This will overwrite all current data in this browser with the contents of the selected backup file. This cannot be undone.</p>`,
          `<button class="btn btn-outline" onclick="closeModal()">Cancel</button><button class="btn btn-primary" id="confirmImportBtn">${icon('check')} Import & Overwrite</button>`);
        document.getElementById('confirmImportBtn').onclick = ()=>{
          const required = ['categories','products','customers','users','repairs','orders','sales','invoices','expenses','history','requests'];
          required.forEach(k=>{ if(!Array.isArray(parsed[k])) parsed[k] = []; });
          if(!parsed.settings) parsed.settings = seedData().settings;
          const defaultLists = seedData().lists;
          if(!parsed.lists) parsed.lists = {};
          Object.keys(defaultLists).forEach(k=>{ if(!Array.isArray(parsed.lists[k])) parsed.lists[k] = []; });
          parsed.users.forEach(u=>{ if(!u.username) u.username = slugUsername(u.name, parsed.users); if(!u.password) u.password = 'changeme123'; });
          const keepSession = curUser ? curUser.id : null;
          DB = parsed;
          if(keepSession && DB.users.some(u=>u.id===keepSession)) DB.settings.currentUser = keepSession;
          save(); closeModal(); toast('Backup imported successfully'); route();
        };
        e.target.value = '';
      };
      reader.readAsText(file);
    };
    bindPhoneMask('f_phone');
    document.getElementById('saveProfileBtn').onclick = ()=>{
      const emailVal = document.getElementById('f_email').value.trim();
      if(emailVal && !isValidEmail(emailVal)){ toast('Enter a valid business email address','error'); return; }
      ['businessName','tagline','address','phone','email','trackingUrl'].forEach(k=>{ s[k] = document.getElementById('f_'+k).value; });
      save(); toast('Business profile saved'); log('Business profile updated','general');
    };
    document.getElementById('resetBtn').onclick = confirmWipeAllData;
  }

  document.getElementById('darkSwitch').onclick = function(){
    const dark = document.documentElement.dataset.theme==='dark';
    document.documentElement.dataset.theme = dark ? 'light':'dark';
    s.theme = document.documentElement.dataset.theme; save();
    this.classList.toggle('on');
  };
  document.getElementById('lowStockSwitch').onclick = function(){ s.lowStockAlerts = !s.lowStockAlerts; save(); this.classList.toggle('on'); renderSidebar(); };
  document.getElementById('emailSwitch').onclick = function(){ s.emailNotify = !s.emailNotify; save(); this.classList.toggle('on'); };
};

function confirmWipeAllData(){
  openModal('Reset Data', `<p style="font-size:13.5px;color:var(--text-muted)">This will permanently delete every record in this app — stock items, customers, repairs, orders, invoices, expenses, categories, users and history. Your own admin login will be kept so you don't get locked out. This cannot be undone.</p>`,
    `<button class="btn btn-outline" onclick="closeModal()">Cancel</button><button class="btn" style="background:var(--red);color:#fff" id="doWipeBtn">${icon('trash')} Erase Everything</button>`);
  document.getElementById('doWipeBtn').onclick = ()=>{
    const me = currentUserObj();
    const keptAdmin = {id:uid('USR'), name: me?me.name:'Admin User', username: me?me.username:'admin', password: me?me.password:'admin123', role:'Administrator', email: me?me.email:'', phone: me?me.phone:'', status:'Active'};
    DB = {
      settings:{businessName:'', tagline:'', currency:'PKR', theme:DB.settings.theme,
        address:'', phone:'', email:'', trackingUrl:'', lowStockAlerts:true, emailNotify:true, currentUser:keptAdmin.id},
      lists:{expenseCategories:[], paidBy:[], orderStatuses:[], invoiceStatuses:[], repairStatuses:[], userStatuses:['Active','Inactive']},
      roles:[{id:uid('ROL'), name:'Administrator', level:'admin', modules:[]}],
      categories:[], products:[], customers:[], users:[keptAdmin], repairs:[], orders:[], sales:[], invoices:[], expenses:[], history:[], requests:[], schemaVersion:SEED_VERSION,
    };
    safeStorage.setItem(SESSION_KEY, keptAdmin.id);
    save(); closeModal(); toast('All data erased'); renderSidebar(); route();
  };
}


/* ---- FIELD-LEVEL LIST MANAGEMENT (add/remove categories, statuses & other dropdown
   options directly from the field that uses them — e.g. the Category field on the
   Add Stock Item form — instead of a separate Manage Lists page). ---- */
// Each block manages either a plain string list (DB.lists[listKey]) or a DB collection
// (e.g. categories, users) filtered to a subset — both render/behave the same as tag chips.
// A select field opts into this by setting manageKey to one of these blocks' key.
const MANAGE_LIST_BLOCKS = [
  {key:'itemcats', label:'Item Categories', hint:'Used as the Category field on Stock Items.',
    collection:'categories', filter:x=>x.type==='Product', extra:{type:'Product'}, prefix:'CAT',
    inUse:id=>DB.products.some(p=>p.category===id)},
  {key:'orderstatus', label:'Repair Status', hint:'Used as the Status field on the Repair page.',
    listKey:'orderStatuses', inUse:name=>DB.orders.some(o=>o.status===name)},
  {key:'invoicestatus', label:'Invoice Status', hint:'Used as the Status field on Invoices.',
    listKey:'invoiceStatuses', inUse:name=>DB.invoices.some(i=>i.status===name)},
  {key:'expensecats', label:'Category', hint:'Used as the Category field on Expenses.',
    listKey:'expenseCategories', inUse:name=>DB.expenses.some(e=>e.category===name)},
  {key:'paidby', label:'Paid By', hint:'Used as the Paid By field on Expenses.',
    listKey:'paidBy', inUse:name=>DB.expenses.some(e=>e.paidBy===name)},
  {key:'repaircats', label:'Repair Type', hint:'Used as the Category field on Repair jobs.',
    collection:'categories', filter:x=>x.type==='Repair', extra:{type:'Repair'}, prefix:'CAT',
    inUse:id=>DB.orders.some(o=>o.category===id)},
  {key:'userstatus', label:'Status', hint:'Used as the Status field on Users.',
    listKey:'userStatuses', inUse:name=>DB.users.some(u=>u.status===name)},
];
const MANAGE_LIST_BLOCKS_BY_KEY = Object.fromEntries(MANAGE_LIST_BLOCKS.map(b=>[b.key,b]));
function manageListItems(b){
  if(b.collection) return DB[b.collection].filter(x=> b.filter ? b.filter(x) : true).map(x=>({id:x.id, label:x.name}));
  return DB.lists[b.listKey].map(name=>({id:name, label:name}));
}
function manageListChipsHtml(b){
  const items = manageListItems(b);
  return items.length ? items.map(it=>`<span class="tagchip">${escapeHtml(it.label)}<button type="button" class="tagchip-x" data-mgrm="${escapeHtml(it.id)}" title="Remove">${icon('x')}</button></span>`).join('')
    : `<span class="manage-empty">No options yet — add one below.</span>`;
}
// Patches any visible toolbar filter dropdown (e.g. the "Category: All" filter on
// the Stock Items list) backed by a managed list, so an add/remove made from an
// inline field manager shows up there immediately without needing to reload the page.
function refreshManagedFilterSelects(){
  document.querySelectorAll('.tb-filter[data-managekey]').forEach(sel=>{
    const b = MANAGE_LIST_BLOCKS_BY_KEY[sel.dataset.managekey];
    if(!b || !sel.options.length) return;
    const current = sel.value;
    const items = manageListItems(b);
    const allOptHtml = sel.options[0].outerHTML;
    sel.innerHTML = allOptHtml + items.map(it=>`<option value="${escapeHtml(String(it.id))}" ${current===String(it.id)?'selected':''}>${escapeHtml(it.label)}</option>`).join('');
  });
}
// Binds the inline "add / remove" panel on a select field that opted in via
// f.manageKey (see MANAGE_LIST_BLOCKS above). Lets the user manage that field's
// options — e.g. Category on the Add Stock Item form — without leaving the form.
function bindManageSelectField(f){
  const b = MANAGE_LIST_BLOCKS_BY_KEY[f.manageKey];
  const id = 'f_'+f.key;
  const select = document.getElementById(id);
  const toggleBtn = document.getElementById(id+'_mgbtn');
  const panel = document.getElementById(id+'_mgpanel');
  const tagsEl = document.getElementById(id+'_mgtags');
  const input = document.getElementById(id+'_mginput');
  const addBtn = document.getElementById(id+'_mgaddbtn');
  if(!b || !select || !toggleBtn) return;

  function syncFieldOptions(){
    // Keep the field definition itself in sync so later Add/Edit forms opened
    // in this same page session (without a full page navigation) also see it.
    f.options = manageListItems(b).map(it=>({value:it.id, label:it.label}));
  }
  function refreshSelect(preferId){
    const items = manageListItems(b);
    const current = select.value;
    select.innerHTML = items.length ? items.map(it=>`<option value="${escapeHtml(it.id)}">${escapeHtml(it.label)}</option>`).join('') : `<option value="">— None yet —</option>`;
    if(preferId!==undefined && items.some(it=>String(it.id)===String(preferId))) select.value = preferId;
    else if(items.some(it=>String(it.id)===String(current))) select.value = current;
  }
  function refreshTags(){
    tagsEl.innerHTML = manageListChipsHtml(b);
    tagsEl.querySelectorAll('[data-mgrm]').forEach(btn=>{
      btn.onclick = ()=>{
        const val = btn.dataset.mgrm;
        if(b.inUse(val)){ toast('Cannot remove — still in use by existing records','error'); return; }
        if(b.collection){
          const idx = DB[b.collection].findIndex(x=>x.id===val);
          if(idx>-1) DB[b.collection].splice(idx,1);
        } else {
          const idx = DB.lists[b.listKey].indexOf(val);
          if(idx>-1) DB.lists[b.listKey].splice(idx,1);
        }
        save(); syncFieldOptions(); refreshTags(); refreshSelect(); refreshManagedFilterSelects(); toast('Removed'); renderSidebar();
      };
    });
  }
  const doAdd = ()=>{
    const name = input.value.trim();
    if(!name){ toast('Enter a name first','error'); return; }
    let newId;
    if(b.collection){
      if(DB[b.collection].some(x=> (b.filter?b.filter(x):true) && x.name.toLowerCase()===name.toLowerCase())){ toast('Already exists','error'); return; }
      newId = uid(b.prefix||'ID');
      DB[b.collection].push(Object.assign({id:newId, name}, b.extra||{}));
    } else {
      if(DB.lists[b.listKey].some(x=>x.toLowerCase()===name.toLowerCase())){ toast('Already exists','error'); return; }
      DB.lists[b.listKey].push(name);
      newId = name;
    }
    save(); syncFieldOptions(); input.value=''; refreshTags(); refreshSelect(newId); refreshManagedFilterSelects(); toast('Added'); renderSidebar();
  };
  addBtn.onclick = doAdd;
  input.onkeydown = e=>{ if(e.key==='Enter'){ e.preventDefault(); doAdd(); } };
  toggleBtn.onclick = ()=>{
    const opening = panel.style.display==='none';
    panel.style.display = opening ? 'block' : 'none';
    toggleBtn.classList.toggle('open', opening);
    toggleBtn.innerHTML = opening ? icon('x') : icon('plus');
    if(opening){ refreshTags(); input.focus(); }
  };
}

/* ---------- Menu toggle / theme / notifications ---------- */
document.getElementById('menuToggle').addEventListener('click', ()=> document.getElementById('sidebar').classList.toggle('open'));
document.getElementById('themeToggleBtn').addEventListener('click', ()=>{
  const dark = document.documentElement.dataset.theme==='dark';
  document.documentElement.dataset.theme = dark?'light':'dark';
  DB.settings.theme = document.documentElement.dataset.theme; save();
});
document.getElementById('notifBtn').addEventListener('click', ()=>{
  const n = lowStockItems().length + DB.invoices.filter(i=>i.status!=='Paid').length;
  openModal('Notifications', `
    <div style="display:flex;flex-direction:column;gap:10px">
      ${lowStockItems().length? `<div style="padding:12px;background:rgba(240,68,56,.08);border-radius:10px;font-size:13px">${icon('alert')} ${lowStockItems().length} item(s) low on stock</div>`:''}
      ${DB.invoices.filter(i=>i.status!=='Paid').length? `<div style="padding:12px;background:rgba(245,166,35,.1);border-radius:10px;font-size:13px">${icon('file')} ${DB.invoices.filter(i=>i.status!=='Paid').length} unpaid invoice(s)</div>`:''}
      ${activeRepairs().length? `<div style="padding:12px;background:rgba(46,94,255,.08);border-radius:10px;font-size:13px">${icon('tool')} ${activeRepairs().length} repair job(s) in progress</div>`:''}
      ${n===0?'<p style="font-size:12.8px;color:var(--text-muted)">You are all caught up.</p>':''}
    </div>`, `<button class="btn btn-outline" onclick="closeModal()">Close</button>`);
});

document.getElementById('logoutBtn').addEventListener('click', doLogout);

/* ---------- Init ---------- */
document.documentElement.dataset.theme = DB.settings.theme || 'light';
if(tryResumeSession()){
  showApp();
} else {
  document.getElementById('loginScreen').style.display = 'flex';
  document.getElementById('app').style.display = 'none';
  const u = document.getElementById('loginUsername'); if(u) u.focus();
}
