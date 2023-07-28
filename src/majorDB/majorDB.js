const fs = require("fs");
const path = require("path");
const emailValidator = require("email-validator");

const dataPath = path.resolve("./data");
const modelsPath = path.resolve("./models");

// VALIDATION DES DONNEES PAR RAPPORT AU MODELE
function isDataMatching(data, schema) {
  for (const key in schema) {
    // SI LE FIELD EST OBLIGATOIRE? VERIFIER QU'IL SOIT PRESENT
    if (schema[key].required && !data[key]) {
      throw new Error(`${key} is required`);
    }
    // VERIFIER LE TYPE DE DONNEE
    if (data[key] && typeof data[key] !== schema[key].type) {
      throw new Error(`${key} must be of type ${schema[key].type}`);
    }
    // VERIFIER LE NOMBRE DE CARACTERE
    if (schema[key].type === "string") {
      // VERIFIER LA MINIMALE RECQUISE
      if (schema[key].minLength && data[key].length < schema[key].minLength) {
        throw new Error(
          `${key} must have a minimum length of ${schema[key].minLength}`
        );
      }
      // VERIFIER LA MAXIMAE AUTORISEE
      if (schema[key].maxLength && data[key].length > schema[key].maxLength) {
        throw new Error(
          `${key} must have a maximum length of ${schema[key].maxLength}`
        );
      }
      // SI LE FIELD EST UN EMAIL, VERIFIER QU'IL SOIT VALIDE
      if (schema[key].isEmail && !emailValidator.validate(data[key])) {
        throw new Error(`${key} must be a valid email address`);
      }
    }
  }
}

// RECUPERATION DE TOUT LES ITEMS
function getAllItems(type) {
  const filePath = path.join(dataPath, `data.${type}.json`);
  if (!fs.existsSync(filePath)) {
    return [];
  }
  const rawData = fs.readFileSync(filePath);
  return JSON.parse(rawData);
}

// RECUPERATION D'UN ITEM
function getItemBy(type, field, value) {
  const items = getAllItems(type);
  return items.find((item) => item[field] === value) || null;
}

// RECUPERATION D'UN ITEM
function getItemsListBy(type, field, value) {
  const items = getAllItems(type);
  return items.find((item) => item[field] === value) || null;
}

// AJOUT D'UN NOUVEL ITEM
function addItem(type, item) {
  const modelPath = path.join(modelsPath, `model.${type}.js`);
  if (!fs.existsSync(modelPath)) {
    throw new Error(`Model for ${type} not found`);
  }
  const schema = require(modelPath);
  isDataMatching(item, schema);
  const items = getAllItems(type);
  const newId =
    items.length > 0 ? Math.max(...items.map((i) => i.id), 0) + 1 : 1;
  const newItem = { id: newId, ...item };
  items.push(newItem);

  const filePath = path.join(dataPath, `data.${type}.json`);
  fs.writeFileSync(filePath, JSON.stringify(items, null, 2));

  return newItem;
}

// MISE A JOUR D'UN ITEM
function updateItemBy(type, field, value, updatedItem) {
  const items = getAllItems(type);
  const index = items.findIndex((item) => item[field] === value);

  if (index !== -1) {
    const modelPath = path.join(modelsPath, `model.${type}.js`);
    if (!fs.existsSync(modelPath)) {
      throw new Error(`Model for ${type} not found`);
    }
    const schema = require(modelPath);
    isDataMatching(updatedItem, schema);

    items[index] = { ...items[index], ...updatedItem };
    const filePath = path.join(dataPath, `data.${type}.json`);
    fs.writeFileSync(filePath, JSON.stringify(items, null, 2));
    return items[index];
  }
  return null;
}

// SUPPRIMER UN ITEM
function deleteItemBy(type, field, value) {
  const items = getAllItems(type);
  const updatedItems = items.filter((item) => item[field] !== value);

  if (updatedItems.length < items.length) {
    const filePath = path.join(dataPath, `data.${type}.json`);
    fs.writeFileSync(filePath, JSON.stringify(updatedItems, null, 2));
    return true;
  }

  return false;
}

// EXPORT
const majorDB = {
  getAllItems,
  addItem,
  getItemBy,
  getItemsListBy,
  updateItemBy,
  deleteItemBy,
};

module.exports = majorDB;
