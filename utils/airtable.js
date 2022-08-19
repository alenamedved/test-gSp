const Airtable = require("airtable");

// Authenticate
Airtable.configure({
    apiKey: 'keyJriDpHL4TsAakG',
  });

// Initialize a base
const base = new Airtable({}).base('appqPKpL0Eq78zQKV'); 

// References to tables
const table = base('Presentation');

export {table}