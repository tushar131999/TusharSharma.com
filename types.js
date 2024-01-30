const z = require("zod");

const basicSchemaCreate = z.object({
  title: z.string(),
  description: z.string(),
});

const idSchemaUpdate = z.object({
  id: z.string(),
});

module.exports = {
  basicSchemaCreate: basicSchemaCreate,
  idSchemaUpdate: idSchemaUpdate,
};
