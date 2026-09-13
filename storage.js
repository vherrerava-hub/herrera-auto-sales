const KEY = "has_app_v1";

const demo = {
  settings: { businessName: "HERRERA AUTO SALES", adminName: "Victor Herrera Andres Valle" },
  vehicles: [
    {id:"HAS-001",brand:"Toyota",model:"Corolla",year:2017,version:"LE",mileage:82000,transmission:"Automática",fuel:"Gasolina",color:"Blanco",plate:"ABC123",vin:"JTDBU4EE9B9123456",price:7500000,minPrice:7200000,commissionPct:3,owner:"Carlos Rodríguez",ownerPhone:"8888-1111",entryDate:"2026-08-18",publishDate:"2026-08-20",status:"Publicado",lastOffer:7300000,interestedCount:3,nextFollowup:"2026-09-14",notes:"Excelente estado general.",links:["https://facebook.com/marketplace/","https://instagram.com/"],photos:[],offers:[{date:"2026-09-10",name:"Daniel",amount:7300000}],activity:[{date:"2026-08-18",text:"Vehículo registrado."},{date:"2026-08-20",text:"Publicación realizada."}]},
    {id:"HAS-002",brand:"Honda",model:"Civic",year:2019,version:"EX",mileage:61000,transmission:"Automática",fuel:"Gasolina",color:"Gris",plate:"DEF456",vin:"2HGFC2F7XKH123456",price:9000000,minPrice:8700000,commissionPct:3,owner:"María Solís",ownerPhone:"8777-2222",entryDate:"2026-08-27",publishDate:"2026-08-29",status:"Interesado",lastOffer:8850000,interestedCount:5,nextFollowup:"2026-09-15",notes:"Interesados activos.",links:[],photos:[],offers:[],activity:[{date:"2026-08-27",text:"Vehículo registrado."}]},
    {id:"HAS-003",brand:"Mazda",model:"CX-5",year:2020,version:"Touring",mileage:54000,transmission:"Automática",fuel:"Gasolina",color:"Rojo",plate:"GHI789",vin:"JM3KFBDMXL1234567",price:12500000,minPrice:12000000,commissionPct:3,owner:"Andrés Vega",ownerPhone:"8666-3333",entryDate:"2026-08-05",publishDate:"2026-08-07",status:"Negociación",lastOffer:12100000,interestedCount:2,nextFollowup:"2026-09-13",notes:"Negociación en curso.",links:[],photos:[],offers:[],activity:[{date:"2026-08-05",text:"Vehículo registrado."}]},
    {id:"HAS-004",brand:"Toyota",model:"Hilux",year:2021,version:"SRV",mileage:47000,transmission:"Manual",fuel:"Diésel",color:"Negro",plate:"JKL012",vin:"MR0HA3CD401234567",price:18000000,minPrice:17200000,commissionPct:2.5,owner:"José Pérez",ownerPhone:"8555-4444",entryDate:"2026-07-21",publishDate:"2026-07-24",status:"Publicado",lastOffer:0,interestedCount:4,nextFollowup:"2026-09-16",notes:"4x4.",links:[],photos:[],offers:[],activity:[{date:"2026-07-21",text:"Vehículo registrado."}]},
    {id:"HAS-005",brand:"Hyundai",model:"Tucson",year:2018,version:"GLS",mileage:76000,transmission:"Automática",fuel:"Gasolina",color:"Azul",plate:"MNO345",vin:"KM8J3CA46JU123456",price:8500000,minPrice:8200000,commissionPct:3,owner:"Laura Castro",ownerPhone:"8444-5555",entryDate:"2026-08-12",publishDate:"2026-08-14",status:"Publicado",lastOffer:0,interestedCount:1,nextFollowup:"2026-09-18",notes:"Único dueño.",links:[],photos:[],offers:[],activity:[{date:"2026-08-12",text:"Vehículo registrado."}]}
  ],
  owners: [
    {id:"OWN-001",name:"Carlos Rodríguez",cedula:"1-1111-1111",phone:"8888-1111",whatsapp:"8888-1111",email:"carlos@example.com",address:"Santa Ana, San José",notes:""},
    {id:"OWN-002",name:"María Solís",cedula:"1-2222-2222",phone:"8777-2222",whatsapp:"8777-2222",email:"maria@example.com",address:"Escazú, San José",notes:""},
    {id:"OWN-003",name:"Andrés Vega",cedula:"1-3333-3333",phone:"8666-3333",whatsapp:"8666-3333",email:"andres@example.com",address:"San José",notes:""},
    {id:"OWN-004",name:"José Pérez",cedula:"1-4444-4444",phone:"8555-4444",whatsapp:"8555-4444",email:"jose@example.com",address:"Belén, Heredia",notes:""},
    {id:"OWN-005",name:"Laura Castro",cedula:"1-5555-5555",phone:"8444-5555",whatsapp:"laura@example.com",email:"laura@example.com",address:"Santa Ana, San José",notes:""}
  ],
  leads: [],
  followups: [
    {id:"F-001",date:"2026-09-14",time:"10:00",vehicleId:"HAS-001",person:"Carlos Rodríguez",type:"Propietario",description:"Seguimiento con propietario",status:"Pendiente"},
    {id:"F-002",date:"2026-09-15",time:"15:30",vehicleId:"HAS-002",person:"Daniel",type:"Interesado",description:"Confirmar visita",status:"Pendiente"}
  ],
  sales: [],
  documents: []
};

export function loadDB() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) {
      localStorage.setItem(KEY, JSON.stringify(demo));
      return structuredClone(demo);
    }
    return JSON.parse(raw);
  } catch {
    return structuredClone(demo);
  }
}
export function saveDB(db) { localStorage.setItem(KEY, JSON.stringify(db)); }
export function resetDemo() { localStorage.setItem(KEY, JSON.stringify(demo)); return structuredClone(demo); }
export function emptyDB() { return {settings: demo.settings, vehicles:[], owners:[], leads:[], followups:[], sales:[], documents:[]}; }
export function nextId(items, prefix) {
  const nums = items.map(x => parseInt(String(x.id||"").replace(/\D/g,""),10)).filter(Number.isFinite);
  return `${prefix}-${String((Math.max(0,...nums)+1)).padStart(3,"0")}`;
}
