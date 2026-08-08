// Base de datos de catálogo de mudanzas con m³ aproximados por ítem
const INITIAL_ROOMS = [
  {
    id: 'salon',
    name: 'Salón / Comedor',
    icon: 'fa-couch',
    items: [
      { id: 'sofa-3p', name: 'Sofá 3 Plazas', m3: 2.2, icon: 'fa-couch', qty: 0 },
      { id: 'sofa-2p', name: 'Sofá 2 Plazas', m3: 1.5, icon: 'fa-couch', qty: 0 },
      { id: 'sofa-chaiselongue', name: 'Sofá Chaise Longue', m3: 3.5, icon: 'fa-couch', qty: 0 },
      { id: 'sillon', name: 'Sillón / Butaca Individual', m3: 0.8, icon: 'fa-chair', qty: 0 },
      { id: 'mesa-centro', name: 'Mesa de Centro', m3: 0.5, icon: 'fa-table', qty: 0 },
      { id: 'mesa-comedor', name: 'Mesa de Comedor', m3: 1.2, icon: 'fa-table-cells-large', qty: 0 },
      { id: 'silla-comedor', name: 'Silla de Comedor', m3: 0.2, icon: 'fa-chair', qty: 0 },
      { id: 'mueble-tv', name: 'Mueble TV / Aparador', m3: 1.5, icon: 'fa-tv', qty: 0 },
      { id: 'libreria-grande', name: 'Librería / Vitrina Grande', m3: 2.0, icon: 'fa-book', qty: 0 },
      { id: 'televisor', name: 'Televisor (Gran Formato)', m3: 0.2, icon: 'fa-desktop', qty: 0 },
      { id: 'lamp-pie', name: 'Lámpara de Pie', m3: 0.25, icon: 'fa-lightbulb', qty: 0 }
    ]
  },
  {
    id: 'dormitorio-principal',
    name: 'Dormitorio Principal',
    icon: 'fa-bed',
    items: [
      { id: 'cama-king', name: 'Cama King / Canapé Matrimonial', m3: 2.5, icon: 'fa-bed', qty: 0 },
      { id: 'cama-doble', name: 'Cama Doble Estándar', m3: 1.8, icon: 'fa-bed', qty: 0 },
      { id: 'colchon-doble', name: 'Colchón Matrimonial', m3: 0.8, icon: 'fa-mattress-pillow', qty: 0 },
      { id: 'mesilla', name: 'Mesilla de Noche', m3: 0.25, icon: 'fa-table', qty: 0 },
      { id: 'armario-3p', name: 'Armario 3-4 Puertas (Desmontado)', m3: 2.8, icon: 'fa-door-closed', qty: 0 },
      { id: 'comoda', name: 'Cómoda / Sinfonier', m3: 0.9, icon: 'fa-box-archive', qty: 0 },
      { id: 'espejo-pie', name: 'Espejo de Pie', m3: 0.2, icon: 'fa-expand', qty: 0 },
      { id: 'galan', name: 'Galán de Noche', m3: 0.15, icon: 'fa-user-tie', qty: 0 }
    ]
  },
  {
    id: 'dormitorio-secundario',
    name: 'Dormitorio Secundario / Infantil',
    icon: 'fa-bed-pulse',
    items: [
      { id: 'cama-indiv', name: 'Cama Individual', m3: 1.2, icon: 'fa-bed', qty: 0 },
      { id: 'litera', name: 'Litera (2 camas)', m3: 2.4, icon: 'fa-layer-group', qty: 0 },
      { id: 'escritorio', name: 'Mesa Escritorio', m3: 0.7, icon: 'fa-laptop-code', qty: 0 },
      { id: 'silla-oficina', name: 'Silla Ergonómica / Oficina', m3: 0.3, icon: 'fa-chair', qty: 0 },
      { id: 'armario-2p', name: 'Armario 2 Puertas', m3: 1.6, icon: 'fa-door-closed', qty: 0 },
      { id: 'estanteria', name: 'Estantería Estándar', m3: 0.6, icon: 'fa-list-check', qty: 0 },
      { id: 'cuna', name: 'Cuna / Cama Infantil', m3: 0.6, icon: 'fa-baby-carriage', qty: 0 }
    ]
  },
  {
    id: 'cocina',
    name: 'Cocina y Electrodomésticos',
    icon: 'fa-kitchen-set',
    items: [
      { id: 'frigorifico-combi', name: 'Frigorífico / Combi', m3: 1.2, icon: 'fa-snowflake', qty: 0 },
      { id: 'frigorifico-american', name: 'Frigorífico Americano (2P)', m3: 2.0, icon: 'fa-snowflake', qty: 0 },
      { id: 'lavadora', name: 'Lavadora / Secadora', m3: 0.6, icon: 'fa-soap', qty: 0 },
      { id: 'lavavajillas', name: 'Lavavajillas', m3: 0.6, icon: 'fa-shower', qty: 0 },
      { id: 'microondas', name: 'Microondas / Horno Sobremesa', m3: 0.15, icon: 'fa-fire-burner', qty: 0 },
      { id: 'mesa-cocina', name: 'Mesa de Cocina', m3: 0.6, icon: 'fa-table', qty: 0 },
      { id: 'taburete', name: 'Taburete / Silla Cocina', m3: 0.15, icon: 'fa-chair', qty: 0 }
    ]
  },
  {
    id: 'cajas-enseres',
    name: 'Cajas y Enseres',
    icon: 'fa-boxes-stacked',
    items: [
      { id: 'caja-estandar', name: 'Caja Cartón Estándar (Mudanza)', m3: 0.1, icon: 'fa-box', qty: 0 },
      { id: 'caja-libro', name: 'Caja Libro / Pesada', m3: 0.06, icon: 'fa-book', qty: 0 },
      { id: 'caja-perchero', name: 'Caja Perchero (Ropa colgada)', m3: 0.3, icon: 'fa-shirt', qty: 0 },
      { id: 'maleta-grande', name: 'Maleta Grande / Baúl', m3: 0.15, icon: 'fa-suitcase-rolling', qty: 0 },
      { id: 'cuadro-laminas', name: 'Cuadro Grande / Espejo Embalado', m3: 0.1, icon: 'fa-image', qty: 0 },
      { id: 'lote-vajilla', name: 'Caja Vajilla / Frágil Embalada', m3: 0.12, icon: 'fa-wine-glass', qty: 0 }
    ]
  },
  {
    id: 'terraza-trastero',
    name: 'Terraza, Trastero y Otros',
    icon: 'fa-umbrella-beach',
    items: [
      { id: 'bicicleta', name: 'Bicicleta Adulto / Infantil', m3: 0.5, icon: 'fa-bicycle', qty: 0 },
      { id: 'bici-electrica', name: 'Patinete / Bici Eléctrica', m3: 0.3, icon: 'fa-bolt', qty: 0 },
      { id: 'mueble-jardin', name: 'Set Muebles Terraza', m3: 1.2, icon: 'fa-chair', qty: 0 },
      { id: 'planta-grande', name: 'Maceta / Planta Grande', m3: 0.3, icon: 'fa-seedling', qty: 0 },
      { id: 'caja-herramientas', name: 'Caja Herramientas / Trastero', m3: 0.15, icon: 'fa-wrench', qty: 0 },
      { id: 'estanteria-metalica', name: 'Estantería Metálica Trastero', m3: 0.5, icon: 'fa-bars-staggered', qty: 0 },
      { id: 'cinta-correr', name: 'Máquina Gimnasio / Cinta Correr', m3: 1.5, icon: 'fa-dumbbell', qty: 0 }
    ]
  }
];
