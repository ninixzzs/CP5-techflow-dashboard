Este modelo fornece uma configuração mínima para colocar o React funcionando no Vite com HMR (Hot Module Replacement) e algumas regras do ESLint.

Atualmente, dois plugins oficiais estão disponíveis:

@vitejs/plugin-react usa o Oxc

@vitejs/plugin-react-swc usa o SWC

React Compiler
O React Compiler não está ativado neste modelo devido ao seu impacto no desempenho de desenvolvimento e build. Para adicioná-lo, consulte esta documentação.

Expandindo a configuração do ESLint
Se você estiver desenvolvendo uma aplicação para produção, recomendamos o uso de TypeScript com regras de lint cientes de tipos ativadas. Confira o modelo em TS para obter informações sobre como integrar o TypeScript e o typescript-eslint ao seu projeto.
