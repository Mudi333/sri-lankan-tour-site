import { DataTypes } from "sequelize"
import sequelize from "../utilities/db"

 const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: { isEmail: true },
    },
    passwordHash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
     role: {
    type: DataTypes.ENUM("TOURIST", "GUIDE", "ADMIN"),
     allowNull: false,
     defaultValue: "TOURIST",
},
  },
  {
    tableName: "users",
    timestamps: true,
  }
)
export default User;