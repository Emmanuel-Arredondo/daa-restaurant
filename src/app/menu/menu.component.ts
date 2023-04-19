import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menuList = [{
    title: 'Enchiladas Suizas',
    image: '../../assets/Menu/enchiladas-1698401.jpg',
    description:'Tortillas de maíz, pechuga de pollo desmenuzada, salsa verde, crema fresca o agria, queso rallado, cebolla y cilantro picado'
  },
  {
    title: 'Enchiladas Rojas',
    image: '../../assets/Menu/enchiladas-rojas.jpg',
    description:'Tortillas de maíz, carne deshebrada, salsa de chile rojo, queso rallado, cebolla y lechuga picadas y crema fresca'
  },
  {
    title: 'Mole',
    image: '../../assets/Menu/mole.jpeg',
    description:'Piezas de pollo, mole , cebolla, ajo, tomate, ajonjolí, canela, clavo, pimienta, chocolate amargo.'
  },
  {
    title: 'Tacos Dorados',
    image: '../../assets/Menu/tacos-dorados.jpg',
    description:'Tortillas de maíz dorada, carne deshebrada o picada, lechuga o repollo, queso fresco o crema, salsa roja o verde.'
  },
  {
    title: 'Torta Ahogada',
    image: '../../assets/Menu/torta.jpg',
    description:'Pan birote, carne de cerdo cocida y deshebrada, salsa de jitomate, cebolla, limones, aguacate .'
  },
  ]
}
