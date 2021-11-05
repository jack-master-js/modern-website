import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

/**
 * @apiDefine UserEntity
 * @apiBody {String} name 姓名
 * @apiBody {Number} age 年龄
 */
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;
}
