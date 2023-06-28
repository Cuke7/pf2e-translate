// import { readFile } from "fs";
// import { promisify } from "util";
// import { Searcher } from "fast-fuzzy";
// import { getDataSet, getDescriptionFr } from "pf2e-database";
// import fs from "fs";
// import pdf from "html-pdf-node";

// // Promisify the fs.readFile function
// const readFileAsync = promisify(readFile);

// async function loadJSON(filePath) {
//   try {
//     // Read the file asynchronously
//     const data = await readFileAsync(filePath, "utf8");

//     // Parse the JSON data
//     const jsonData = JSON.parse(data);

//     // Process the JSON data or return it
//     return jsonData;
//   } catch (error) {
//     // Handle any errors that occurred during file reading or parsing
//     console.error("Error while loading JSON:", error);
//     throw error;
//   }
// }

// const data = await loadJSON("data.json");

// // console.log(data);

// let feats1 = await getDataSet("feats");
// let feats2 = await getDataSet("classfeatures");
// const heritages = await getDataSet("heritages");

// const feats = [
//   ...Object.values(feats1),
//   ...Object.values(feats2),
//   ...Object.values(heritages),
// ];

// const searcher = new Searcher(feats, {
//   keySelector: (obj) => obj.name,
// });

// let options = {
//   format: "A4",
//   margin: {
//     top: "15mm",
//     bottom: "15mm",
//     left: "15mm",
//     right: "15mm",
//   },
// };

// let html = "<body>";
// html += '<div style="column-count: 2;margin-left: auto; margin-right: auto;">';

// for (const feat of data.build.feats) {
//   const databaseFeat = searcher.search(feat[0])[0];
//   let frenchItem = await getDescriptionFr(databaseFeat["_id"]);
//   html += addBlock(frenchItem.nameFR, frenchItem.descriptionFR);
// }

// html += "</div>";
// html += "</body>";
// html += addStyles();

// let file = { content: html };
// const pdfBuffer = await pdf.generatePdf(file, options);
// fs.writeFileSync("sheet.pdf", pdfBuffer);

// function addBlock(title, text) {
//   let content =
//     '<div style="padding: 10px 20px 0 20px; display: inline-block; font-family: Georgia, "Times New Roman", serif; font-size: 1.2rem; line-height: 1; text-align: left; break-inside: avoid-column; break-inside: avoid;">';
//   content += "<h2>" + title + "</h2>";
//   content += text;
//   content += "</div>";
//   return content;
// }

// function addStyles() {
//   return `
//   <style>
//       h2 {
//           color: #6D0000;
//       }
//   </style>
//   `;
// }
