//Here we're importing items we'll need. You can add other imports here.

import '../node_modules/jsonata/jsonata.min.js'

window.performJSONATA = function (json){

  const jsonata = require('jsonata');
  const obj = JSON.parse(json);
  const data = obj.data;
  const query = obj.jquery;

  //call some jsonata magic
  const outcome = (async () => {
    const expression = jsonata(query);
    const result = await expression.evaluate(data);  // returns 24
    return result
  });
  
  FileMaker.PerformScript("reportResults",JSON.stringify(outcome));
}