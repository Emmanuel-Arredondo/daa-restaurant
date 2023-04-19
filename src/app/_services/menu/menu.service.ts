import { Injectable } from '@angular/core';
import { Menu } from 'src/app/_models/menu.model';

@Injectable({
  providedIn: 'root'
})

export class MenuService {
  private menuList :Menu[]= [{
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
  ];
  constructor() { }

  getMenuList():Menu[]{

    return this.menuList;
  }
}
