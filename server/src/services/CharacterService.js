const Character = require("../models/CharacterModel");
const Inventory = require("../models/InventoryModel");

exports.getCharacters = async ({ userID }) => {
  try {
    const characters = await Character.find(userID ? { userID } : {})
      .populate("race")
      .populate("class");
    return characters;
  } catch (err) {
    throw Error(err);
  }
};

const itemsPopulate = {
  path: "item",
  model: "CurrentItem",
  populate: [
    {
      path: "item",
      model: "Item",
      populate: [
        {
          path: "skills",
          model: "Skill",
        },
        {
          path: "perks",
          model: "Perk",
        },
        {
          path: "spells",
          model: "Spell",
        },
      ],
    },
    {
      path: "material",
      model: "Material",
    },
    {
      path: "quality",
      model: "Quality",
    },
  ],
};

exports.getCharacter = async ({ id }) => {
  try {
    const character = await Character.findOne({ _id: id })
      .populate("equipment")
      .populate("storages")
      .populate({
        path: "class",
        model: "Class",
        populate: [
          {
            path: "skills",
            model: "Skill",
          },
          {
            path: "spells",
            model: "Spell",
          },
        ],
      })
      .populate({
        path: "race",
        model: "Race",
        populate: [
          {
            path: "skills",
            model: "Skill",
          },
          {
            path: "spells",
            model: "Spell",
          },
        ],
      })
      .populate({
        path: "spells",
        model: "Spell",
      })
      .populate({
        path: "skills",
        populate: {
          path: "skill",
          model: "Skill",
        },
      })
      .populate({
        path: "perks",
        model: "Perk",
        populate: [
          {
            path: "skills",
            model: "Skill",
          },
          {
            path: "spells",
            model: "Spell",
          },
        ],
      })
      .populate({
        path: "inventory",
        model: "Inventory",
        populate: [
          {
            path: "items",
            populate: itemsPopulate,
          },
          {
            path: "storages",
            populate: {
              path: "items",
              populate: itemsPopulate,
            },
          },
          ...[
            "weapon1",
            "weapon2",
            "weapon3",
            "weapon4",
            "armor",
            "helmet",
            "belt",
            "coat",
            "bag",
            "boots",
            "amulet",
            "rings",
            "pockets",
          ].map((path) => ({
            path: `equip.${path}.item`,
            populate: [
              {
                path: "item",
                model: "Item",
                populate: [
                  {
                    path: "skills",
                    model: "Skill",
                  },
                  {
                    path: "perks",
                    model: "Perk",
                  },
                  {
                    path: "spells",
                    model: "Spell",
                  },
                ],
              },
              {
                path: "material",
                model: "Material",
              },
              {
                path: "quality",
                model: "Quality",
              },
            ],
          })),
        ],
      });

    return character;
  } catch (err) {
    throw Error(err);
  }
};

exports.saveCharacter = async (query) => {
  try {
    const inventory = await new Inventory({
      items: inventory.items || [],
      equip: inventory.equip || {},
    }).save();
    const character = await new Character({
      ...query,
      inventory: inventory._id,
    }).save();
    return character;
  } catch (err) {
    throw Error(err);
  }
};

exports.updateCharacter = async (query) => {
  try {
    const inventory = await Inventory.findOneAndUpdate(
      { _id: query.inventory.id },
      {
        items: query.inventory.items,
        equip: query.inventory.equip,
        storages: query.inventory.storages,
      }
    );
    const character = await Character.findOneAndUpdate(
      { _id: query.id },
      { ...query, inventory: inventory.id }
    );

    character.inventory = inventory;
    return character;
  } catch (err) {
    console.log({ err });
    throw Error(err);
  }
};

exports.deleteCharacter = async ({ id }) => {
  try {
    await Character.findOneAndDelete({ _id: id });
  } catch (err) {
    throw Error(err);
  }
};
