const categories=['Todos los platos','Tapas','Ensaladas','Pasta','Pasta fresca','Pizza','Lasaña','Carnes','Pescados','Postres'];
const items=[
  {
    "name": "Pizza Barbacoa",
    "category": "Pizza",
    "image": "../assets/pizza-barbacoa.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Pizza Marinara",
    "category": "Pizza",
    "image": "../assets/pizza-marinara.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Pizza Margherita",
    "category": "Pizza",
    "image": "../assets/pizza-margherita.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Pizza Verdure",
    "category": "Pizza",
    "image": "../assets/pizza-verdure.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Pizza Frutti di mare",
    "category": "Pizza",
    "image": "../assets/pizza-frutti-di-mare.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Pizza Prosciutto cotto e funghi",
    "category": "Pizza",
    "image": "../assets/pizza-cotto-funghi.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Pizza Salmone",
    "category": "Pizza",
    "image": "../assets/pizza-salmone.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Pizza Tonno e cipolla",
    "category": "Pizza",
    "image": "../assets/pizza-tonno.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Pizza Diavola",
    "category": "Pizza",
    "image": "../assets/pizza-diavola.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Pizza La Corte",
    "category": "Pizza",
    "image": "../assets/pizza-la-corte.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Pizza 4 formaggi",
    "category": "Pizza",
    "image": "../assets/pizza-quattro-formaggi.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Pizza 4 stagioni",
    "category": "Pizza",
    "image": "../assets/pizza-quattro-stagioni.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Pizza Truffaldina",
    "category": "Pizza",
    "image": "../assets/pizza-truffaldina.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Pizza Jose",
    "category": "Pizza",
    "image": "../assets/pizza-jose.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Pizza Fantastica",
    "category": "Pizza",
    "image": "../assets/pizza-fantastica.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Pizza Sburrata",
    "category": "Pizza",
    "image": "../assets/pizza-sburrata.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Spaghetti pomodoro e basilico",
    "category": "Pasta",
    "image": "../assets/spaghetti-pomodoro.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Spaghetti bolognese",
    "category": "Pasta",
    "image": "../assets/spaghetti-bolognese.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Spaghetti pesto",
    "category": "Pasta",
    "image": "../assets/spaghetti-pesto.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Spaghetti con vongole",
    "category": "Pasta",
    "image": "../assets/spaghetti-vongole.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Spaghetti piri piri",
    "category": "Pasta",
    "image": "../assets/spaghetti-piri-piri.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Spaghetti neri ai frutti di mare",
    "category": "Pasta",
    "image": "../assets/spaghetti-neri-mare.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Spaghetti amatriciana",
    "category": "Pasta",
    "image": "../assets/spaghetti-amatriciana.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Gnocchi",
    "category": "Pasta fresca",
    "image": "../assets/gnocchi.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Gnocchi con tartufo e gamberi",
    "category": "Pasta fresca",
    "image": "../assets/gnocchi-tartufo.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Fagottini formaggio e pera",
    "category": "Pasta fresca",
    "image": "../assets/raviolini-pera.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Tagliatelle",
    "category": "Pasta fresca",
    "image": "../assets/tagliatelle-bosco.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Tagliatelle Boscaiola",
    "category": "Pasta fresca",
    "image": "../assets/tagliatelle-boscaiola.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Raviolini de espinaca",
    "category": "Pasta fresca",
    "image": "../assets/raviolini-espinaca.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Raviolini de carne",
    "category": "Pasta fresca",
    "image": "../assets/raviolini-carne.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Lasagna de ternera",
    "category": "Lasaña",
    "image": "../assets/lasagna-ternera.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Lasagna vegetal",
    "category": "Lasaña",
    "image": "../assets/lasagna-vegetal.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Pizza prosciutto cotto",
    "category": "Pizza",
    "image": "../assets/pizza.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Spaghetti carbonara",
    "category": "Pasta",
    "image": "../assets/pasta.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Spaghetti pistacho e guanciale",
    "category": "Pasta",
    "image": "../assets/pistacho.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Tiramisú de pistacho",
    "category": "Postres",
    "image": "../assets/tiramisu.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Albóndigas en salsa de tomate",
    "category": "Tapas",
    "image": "../assets/albondigas.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Ensaladilla rusa con atún",
    "category": "Tapas",
    "image": "../assets/ensaladilla.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Tortilla de patatas",
    "category": "Tapas",
    "image": "../assets/tortilla.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Croquetas de jamón",
    "category": "Tapas",
    "image": "../assets/croquetas-jamon.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Croquetas de bacalao",
    "category": "Tapas",
    "image": "../assets/croquetas-bacalao.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Croquetas de gambas pil pil",
    "category": "Tapas",
    "image": "../assets/croquetas-gambas.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Patatas bravas",
    "category": "Tapas",
    "image": "../assets/patatas-bravas.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Patatas fritas",
    "category": "Tapas",
    "image": "../assets/patatas-fritas.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Gambas pil pil",
    "category": "Tapas",
    "image": "../assets/gambas-pilpil.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Focaccia con rúcula y jamón serrano",
    "category": "Tapas",
    "image": "../assets/focaccia.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Pan de ajo",
    "category": "Tapas",
    "image": "../assets/pan-ajo.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Pan de ajo con queso",
    "category": "Tapas",
    "image": "../assets/pan-ajo-queso.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Bruschetta",
    "category": "Tapas",
    "image": "../assets/bruschetta.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Provolone con nueces y miel",
    "category": "Tapas",
    "image": "../assets/provolone.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Ensalada mixta",
    "category": "Ensaladas",
    "image": "../assets/ensalada-mixta.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Ensalada César",
    "category": "Ensaladas",
    "image": "../assets/ensalada-cesar.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Ensalada de atún",
    "category": "Ensaladas",
    "image": "../assets/ensalada-atun.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Ensalada La Corte",
    "category": "Ensaladas",
    "image": "../assets/ensalada-la-corte.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Ensalada Caprese",
    "category": "Ensaladas",
    "image": "../assets/ensalada-caprese.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Ensalada de queso de cabra",
    "category": "Ensaladas",
    "image": "../assets/ensalada-cabra.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Burratina",
    "category": "Ensaladas",
    "image": "../assets/burratina.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Carpaccio de calabacín",
    "category": "Ensaladas",
    "image": "../assets/carpaccio-calabacin.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Pollo milanesa con patatas",
    "category": "Carnes",
    "image": "../assets/pollo-milanesa.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Pechuga de pollo a la plancha",
    "category": "Carnes",
    "image": "../assets/pollo-plancha.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Chuleta de cerdo a la parrilla",
    "category": "Carnes",
    "image": "../assets/chuleta.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Club sándwich de pollo",
    "category": "Carnes",
    "image": "../assets/club-pollo.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Gambones a la plancha",
    "category": "Pescados",
    "image": "../assets/gambones.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Anillas de calamares fritos",
    "category": "Pescados",
    "image": "../assets/calamares.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Mejillones en salsa de tomate",
    "category": "Pescados",
    "image": "../assets/mejillones.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Almejas al ajo",
    "category": "Pescados",
    "image": "../assets/almejas.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Filetes de lubina a la plancha",
    "category": "Pescados",
    "image": "../assets/lubina.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Club sándwich de salmón",
    "category": "Pescados",
    "image": "../assets/club-salmon.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Spaghetti con polpette",
    "category": "Pasta",
    "image": "../assets/spaghetti-polpette.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  },
  {
    "name": "Spaghetti con cozze",
    "category": "Pasta",
    "image": "../assets/spaghetti-cozze.png",
    "note": "Plato de la carta de La Corte Italiana. Consulta los ingredientes, alérgenos y disponibilidad con el equipo."
  }
]
;
const requestedCategory=new URLSearchParams(location.search).get('categoria');let selected=categories.includes(requestedCategory)?requestedCategory:categories[0],lastFocus;
const $=s=>document.querySelector(s),input=$('#search'),panel=$('#categories'),toggle=$('#category-button'),grid=$('#dishes'),dialog=$('dialog');
const normalize=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
function close(){panel.hidden=true;toggle.setAttribute('aria-expanded','false')}
toggle.addEventListener('click',()=>{panel.hidden=!panel.hidden;toggle.setAttribute('aria-expanded',String(!panel.hidden))});
categories.forEach(category=>{const button=document.createElement('button');button.textContent=category;button.setAttribute('aria-pressed',String(category===selected));button.addEventListener('click',()=>{selected=category;$('#selected').textContent=category;panel.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));close();render();toggle.focus()});panel.append(button)});
document.addEventListener('click',e=>{if(!e.target.closest('.category'))close()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
function render(){const filtered=items.filter(i=>(selected===categories[0]||i.category===selected)&&normalize(i.name).includes(normalize(input.value.trim())));grid.replaceChildren(...filtered.map(item=>{const button=document.createElement('button');button.className='dish';const img=document.createElement('img');img.src=item.image;img.alt='';img.loading='lazy';img.width=480;img.height=480;const text=document.createElement('span'),label=document.createElement('b');label.className='dish-title';label.textContent=item.name;const arrow=document.createElement('i');arrow.className='dish-arrow';arrow.setAttribute('aria-hidden','true');arrow.append(corteIcon('ne'));text.append(label,arrow);button.append(img,text);button.setAttribute('aria-label',`Ver ${item.name}`);button.addEventListener('click',()=>{lastFocus=button;dialog.querySelector('img').src=item.image;dialog.querySelector('img').alt=`Imagen editorial recreada de ${item.name}`;$('#dish-title').textContent=item.name;$('#dish-category').textContent=item.category;dialog.querySelector('p').textContent=item.note;dialog.showModal();document.body.style.overflow='hidden'});return button}));$('#status').textContent=filtered.length+' propuestas · '+selected;$('#empty').hidden=filtered.length>0}
input.addEventListener('input',render);dialog.querySelector('.close').addEventListener('click',()=>dialog.close());dialog.addEventListener('close',()=>{document.body.style.overflow='';lastFocus?.focus()});dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
$('#selected').textContent=selected;const initial=new URLSearchParams(location.search).get('plato');if(initial)input.value=initial;render();

