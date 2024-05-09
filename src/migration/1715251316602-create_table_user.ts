import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableUser1715251316602 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            CREATE TABLE public.user (
                id integer NOT NULL,
                name character varying NOT NULL,
                email character varying NOT NULL,
                cpf character varying NOT NULL,
                type_user int NOT NULL,
                phone character varying NOT NULL,
                password character varying NOT NULL,
                created_at timestamp without time zone DEFAULT now() NOT NULL,
                updated_at timestamp without time zone DEFAULT now() NOT NULL,
                primary key (id)
            );

            CREATE SEQUENCE public.user_id_seq
            AS integer
            START WITH 1
            INCREMENT BY 1
            NO MINVALUE
            NO MAXVALUE
            CACHE 1;

            ALTER SEQUENCE public.user_id_seq OWNED BY PUBLIC.user.id;

            ALTER TABLE ONLY PUBLIC.user ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            drop table public.user;
        `);
    }

}
