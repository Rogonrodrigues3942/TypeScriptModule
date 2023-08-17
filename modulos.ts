console.log('\nSeção 6 - módulos\n')

import { areaCircunferencia } from "./circunferencia";
import { areaRetangulo } from "./retangulo";
import { areaRetangulo as ret} from "./retangulo";

console.log('Modulos carregados...')
console.log(areaCircunferencia(10))
console.log(areaRetangulo(10,15))
console.log(ret(10, 5))

//* realizando o import do arquivo novo.ts
const{ digaOi} = require('./novo')
console.log(digaOi('Ana'))

console.log('\nFim da seção 6 - módulos\n')