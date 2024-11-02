import { fetchCompanies } from "./api";
import {
  ACCOUNT_EXECUTIVE_FIELD_NAME,
  COMPANIES_TABLE_HEADERS,
  COMPANY_NAME_FIELD_NAME,
  CREATED_AT_FIELD_NAME,
  REVENUE_YTD_FIELD_NAME,
  STATUS_FIELD_NAME
} from "./constants";

export const makeTable = async () => {
  const companies = await fetchCompanies();
  // Print result of api call to the developer console
  // Uncomment if you need it for debugging.
  // While this method of logging variables of interest to the console is primitive, but often highly valuable debugging technique
  console.log("companies: ", companies);
  console.log("companies[0].name: ", companies[0].name = companies[0].name);
  console.log("companies[1].name: ", companies[1].name = companies[1].name);
  console.log("companies[2].name: ", companies[2].name = companies[2].name);

  console.log("COMPANIES_TABLE_HEADERS: ", COMPANIES_TABLE_HEADERS);
  console.log("COMPANY_NAME_FIELD_NAME: ", COMPANY_NAME_FIELD_NAME);

  let counter = 0;


  // Initialize new array and push a header row
  const companiesToDisplay = [];
  companiesToDisplay.push(COMPANIES_TABLE_HEADERS);
  //console.log("companies: JSON:", JSON.stringify(companies));

  // Here we simply rearrange company fields in the order in which we want to display them in UI

  companies.map(company => {
    const row = [];
    row.push(
      company[COMPANY_NAME_FIELD_NAME],
      company[STATUS_FIELD_NAME],
      company[CREATED_AT_FIELD_NAME],
      company[REVENUE_YTD_FIELD_NAME],
      company[ACCOUNT_EXECUTIVE_FIELD_NAME]
    );

    companiesToDisplay.push(row);
    console.log("row: ", row);
    // console.log("row: ", row[0] = companies[1] = "s");


    /* if (counter <= companiesToDisplay.length) {
       console.log("row[1] = companies[0].name: ", row[0] = companies[0].name);
       console.log("row[1] = companies[1].name: ", row[0] = companies[1].name);
       console.log("row[1] = companies[2].name: ", row[1] = companies[2].name);
 
       //row[counter] = companies[counter].name;
       //console.log("row[counter] = companies[counter].name: ", row[counter] = companies[counter].name);
       counter++;
       console.log("counter: ", counter);
 
       if (counter === companiesToDisplay.length) {
         counter = 0;
       }
     }*/

  });

  console.log("companiesToDisplay: ", companiesToDisplay);

  // Programmatically create html table
  const table = document.createElement("table");
  document.body.appendChild(table); // Drew the main table node on the document

  companiesToDisplay.forEach(row => {
    const tr = table.insertRow(); //Create a new row

    row.forEach(column => {
      const td = tr.insertCell();
      td.innerText = column; // Take string from placeholder variable and append it to <tr> node
    });


  });


};