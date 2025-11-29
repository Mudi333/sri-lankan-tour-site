// src/models/GuideApplication.ts
import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../utilities/db";

export type GuideApplicationStatus = "PENDING" | "APPROVED" | "REJECTED";

interface GuideApplicationAttributes {
  id: string;
  fullName: string;
  email: string;
  phone?: string | null;
  languages?: string[] | null;
  message?: string | null;
  status: GuideApplicationStatus;
  userId?: string | null;
}

type GuideApplicationCreationAttributes = Optional<
  GuideApplicationAttributes,
  "id" | "status" | "userId"
>;

class GuideApplication
  extends Model<GuideApplicationAttributes, GuideApplicationCreationAttributes>
  implements GuideApplicationAttributes
{
  public id!: string;
  public fullName!: string;
  public email!: string;
  public phone!: string | null;
  public languages!: string[] | null;
  public message!: string | null;
  public status!: GuideApplicationStatus;
  public userId!: string | null;
}

GuideApplication.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    languages: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM("PENDING", "APPROVED", "REJECTED"),
      allowNull: false,
      defaultValue: "PENDING",
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "guide_applications",
    timestamps: true,
  }
);

export default GuideApplication;
