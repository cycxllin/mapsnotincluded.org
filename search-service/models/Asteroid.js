const { DataTypes } = require("sequelize");
const sequelize = require("../lib/database");

// This is the data for each asteriod
const Asteroid = sequelize.define(
  "Asteroid",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    coordinate: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "Cluster", // Refers to the Cluster model
        key: "coordinate",
      },
    },

    name: {
      type: DataTypes.STRING,
      // null name indicates cluster world traits, bad design pattern but makes
      // building search rules easier without making a new table and joining
      allowNull: true,
      //TODO: add validation
    },

    worldTraits: {
      // enum
      type: DataTypes.ARRAY(
        DataTypes.ENUM({
          values: [
            "DistressSignal",
            "MagmaVents",
            "MetalPoor",
            "MetalRich",
            "MetalCaves",
            "RadioactiveCrust",
            "BouldersMixed",
            "Geodes",
            "SlimeSplats",
            "SubsurfaceOcean",
            "LushCore",
            "FrozenCore",
            "CrashedSatellites",
            "BouldersMedium",
            "GlaciersLarge",
            "GeoDormant",
            "Volcanoes",
            "BouldersSmall",
            "DeepOil",
            "GeoActive",
            "IrregularOil",
            "BouldersLarge",
            "MisalignedStart",
          ],
        })
      ),
      /*validate: {
        maxSize4(value) {
          if (value.length > 4) {
            throw new Error(
              `this asteroid has more than 4 world traits. They are: ${value}. The whole instance is: ${this.coordinate}.`
            );
          }
        },
        //TODO: add validation for conficting traits
      },*/
      allowNull: true, // allow having an empty array
    },
  },
  {
    freezeTableName: true,
    timestamps: false, //no timestamps for creation and updating.
  }
);

module.exports = Asteroid;
