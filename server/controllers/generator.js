import Handlebars from "handlebars";
import fs from "fs";

const fulfillFile = (path, templateValues) => {
  fs.readFile(path, (err, data) => {
    const template = Handlebars.compile(data.toString());
    fs.writeFile(path, template(templateValues), () => {});
  });
};

export const GeneratorController = {
  generateCertificate: (req, res) => {
    const htmlFilePath = req.file.path;
    const parsedValues = JSON.parse(req.body.data);
    fulfillFile(htmlFilePath, parsedValues);
    const pdf = convertToPdf(htmlFilePath);
    return res.send("123");
  },
};
