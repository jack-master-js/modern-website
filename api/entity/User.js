import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

/**
 * @apiDefine UserModel
 * @apiParam {String} name 姓名
 * @apiParam {Number} age 年龄
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
