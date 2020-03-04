# simplestXLSXtoJSON

DISCLAIMER: 
  STILL IN PROGRESS. RIGHT NOW ONLY CONVERTS COLUMN OBJECTS POPULATED BY ROW ATTRIBUTES

INSTALLATION:
  1. cd into root directory
  2. `npm installl` (if you dont have nodemon installed globally, also `npm install nodemon`)
  3. `npm start`
  4. cd into client and `npm install` then `npm start`
  5. if your browser hasn't already, head to http://localhost:3000/. you should see something like this

DEMO: 
  1. You can demo the application with the file provided in `./public/TEST_OPCYCLE.xlsx`
  2. Drag the test file into the webpage's dropzone and check your chrome console to see what you receive

NOTE: 
  Right now the params in the JSON extraction function are hard set for files that look like `TEST_OPCYCLE.xlsx`. You can change the params (such as what row fills the parent objects, or which column is used to set the child objects) inside the `columnObjectParser` found in `./src/controllers/helpers/helpers`.
  
NOTES ON THE HELPER FUNCTION:
  COLUMN OBJECT PARSER:
     ARGUMENTS:
       1. `sheet` => this is the array of arrays you get after you parse a `csv` or `xlsx` file using the included `node-xlsx` library.
       2. `targetRow` => DEFAULTS TO 0; sets the target row in which the parser will extract JSON object's parent keys.
       3. `targetColumn` => DEFAULTS TO 0; sets the target column at which the parser will extract targetRow's child keys.
       4. `rowFloor` => DEFAULTS TO 1: sets the first row that will be added to JSON object. Will loop and add subsequent rows until all rows added unless a lower floorCeiling is defined.
       5. `rowCeiling` => DEFAULTS TO 2500: set lower to crop product data-set, or higher if your file contains more than 2500 rows.
 
 ROW OBJECT PARSER: 
  --IN DEVELOPMENT--
 
 READMORE:
  If you want more flexibility, feel free to add a new helper or controller and submit it for review.
  In the mean time, I'll be working on adding a samll form component (client-side) to set new arguments for the helper           function. I'll also be adding a more standard rowObjectParser with similar arguments for document scope soon.
    
