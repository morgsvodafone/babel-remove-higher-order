const { parse } = require('@babel/parser');
const generate = require('@babel/generator').default;
const traverse = require('@babel/traverse').default;
const fs = require('fs');

const getFunctionName = path => path.node.type === 'CallExpression' && path.node.callee && path.node.callee.object && path.node.callee.object.name;

fs.readFile('./input.jsx', (err, data) => {
  if (err) throw err;

  const ast = parse(data.toString(), {
    sourceType: 'module',
    plugins: [
      'jsx',
    ],
  });


  traverse(ast, {
    enter(path) {
      const functionName = getFunctionName(path);
      if (functionName) {
        console.log(functionName);
      }
    },
  });

  const generated = generate(ast);
  // console.log(generated);
});
