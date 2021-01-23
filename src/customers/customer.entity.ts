import { BaseEntity } from 'src/lib/base-entity';
import { Column, Entity } from 'typeorm'

@Entity('customers')
export class Customer extends BaseEntity{
    @Column({ type: 'varchar', length:255, nullable: false})
    name: string;
    @Column({ type: 'varchar', length:255, nullable: false})
    surname: string;
    @Column({ type: 'varchar', length:255, nullable: false})
    lastSurname: string;
    @Column({ type: 'varchar', length:255, nullable: false})
    phone: string;
    @Column({ type: 'varchar', length:255, nullable: false})
    email: string;
}