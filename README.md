<!-- INIT - PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://rocketseat.com.br">
    <img src="https://reactnative.dev/img/header_logo.svg" alt="Logo React Native" width="100">
  </a>

  <h3 align="center">Template React Native Advanced</h3>
  <p align="center">Template para projetos React Native</p>
</p>
<!-- END - PROJECT LOGO -->

<!-- INIT - ABOUT -->
#### Sobre o Projeto
Este projeto objetiva melhorar e agilizar o processo de criação e ajustes inicias de projetos React Native.

#### Tecnologias inclusas
- [React Native](http://facebook.github.io/react-native/)
- [Typescript](https://www.typescriptlang.org/)
- [React Native Reanimated v2](https://docs.swmansion.com/react-native-reanimated/)
- [React Native Responsive Screen](https://github.com/marudy/react-native-responsive-screen)
- [Styled-Components](https://styled-components.com/)
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
- [Redux](https://redux.js.org/)
  - [Reduxsauce](https://github.com/jkeam/reduxsauce)
  - [Redux Persist](https://github.com/rt2zz/redux-persist)
- [React Navigation](https://reactnavigation.org/)
- [Axios](https://github.com/axios/axios)
- [Babel](https://babeljs.io/) 
  - [babel-plugin-module-resolver](https://github.com/tleunen/babel-plugin-module-resolver)
  
<!-- END - ABOUT -->

<!-- INIT - STRUCTURE -->
#### Estrutura de Arquivos

```bash

src/
├── components/
│   └── ExampleComponent/
│       └── index.tsx
│       └── styles.ts
├── routes/
│   └── MainStack.tsx
├── screens/
│   └── Home/
│       └── index.tsx
│       └── styles.ts
│   └── AnotherRoute/
│       └── index.tsx
│       └── styles.ts
├── services/
│   └── api.ts
├── theme/
│   └── index.tsx
│   └── styled-components.ts
├── util/
│   └── example.tsx
├── store/
│   ├── ducks/
│   │   └── example.ts
│   │   └── index.ts
│   └── index.ts
└──  index.tsx
```

<!-- END - STRUCTURE -->

<!-- INIT - GETTING STARTED -->
#### Começando

Siga os passos abaixo:

1. Para criar um novo projeto utilizando o template, basta rodar o seguinte comando:

```sh
npx react-native init project --template https://github.com/lucas1feliciano0/react-native-template-advanced.git
```

2. Com o projeto já criado, rode esse comando para iniciar a aplicação:

```sh
yarn android
```

ou

```sh
cd ios/ && pod install
cd ..
yarn ios
```

<!-- INIT - GETTING STARTED -->
#### Tema

Para modificar o tema padrão siga os passos a seguir:

1. altere a tipagem no arquivo `styled.d.ts`.
    A estrutura padrão é:
   - `borderRadius`: objeto com valores do border-radius
     - small: number;
     - medium: number;
     - big: number;  
   - `padding`: objeto com valores do padding
     - small: number;
     - medium: number;
     - big: number;
     - large: number;
   - `colors`: objeto contendo as cores da aplicação 
       - primary: string;
       - secondary: string;
       - danger: string;
       - success: string;
       - info: string;

       - background: 
         - primary: string;
       - texts: 
         - primary: string;
         - secondary: string;
       - disabled: string;
       
2. Altere os valores no arquivo `src/theme/index.ts`
    `wp: é referete à função da lib React Native Responsive Screen`
    `hp: é referete à função da lib React Native Responsive Screen`

   Os valores padrão são:
     - `borderRadius`:
       - small: 4;
       - medium: 6;
       - big: 8;  
   - `padding`: objeto com valores do padding
     - small: ``wp('1%')``;
     - medium: ``wp('3%')``;
     - big: ``wp('6%')``; 
     - large: ``wp('12%')``;
   - `colors`: objeto contendo as cores da aplicação 
       - primary: <span style="background: #FFFFFF">#FFFFFF</span>;
       - secondary: <span style="background: #FFFFFF">#FFFFFF</span>;
       - danger: <span style="background: #F769A2">#F769A2</span>;
       - success: <span style="background: #5ED46A">#5ED46A</span>;
       - info: <span style="background: #5e9dd4">#5e9dd4</span>;

       - background: 
         - primary: <span style="background: #FDFDFF">#FDFDFF</span>;
       - texts: 
         - primary: <span style="background: #525252">#525252</span>;
         - secondary: <span style="background: #757575">#757575</span>;
       - disabled: <span style="background: #838B90">#838B90</span>;