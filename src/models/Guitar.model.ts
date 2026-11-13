import { Table, Column, Model, DataType,  Default } from "sequelize-typescript";

@Table({
  tableName: "guitars",
})
class Guitar extends Model {

  @Column({type: DataType.STRING(50)})
  declare brand: string;

  @Column({ type: DataType.STRING(50) })
  declare name: string;

  @Column({ type: DataType.STRING(100) })
  declare image: string;

  @Column({ type: DataType.TEXT })
  declare description: string;

  @Column({ type: DataType.DECIMAL(5, 2) })
  declare price: number;
}

export default Guitar;
