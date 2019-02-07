_Source code for the project demonstrating data visualization using d3.js, dc.js, node.js and mongodb_ - [Reference](https://anmolkoul.wordpress.com/2015/06/05/interactive-data-visualization-using-d3-js-dc-js-nodejs-and-mongodb)

## Required Components
- D3.js
- Dc.js
- Node.js
- Crossfilter.js
- Jquery
- MongoDB

## Steps for successful execution
1. Install MongoDB, NodeJS, NPM
3. Navigate to the node-dc-mongo directory using command prompt
2. Import data **sampledata.csv**
```
mongoimport -d donorschoose -c projects --type csv --headerline --file sampledata.csv
```
4. Run `npm install`
6. Run `node server.js` or `npm start`
7. Go to `http://localhost:8080`
