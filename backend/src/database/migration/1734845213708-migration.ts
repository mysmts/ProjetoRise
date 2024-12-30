import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1734845213708 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Inserindo dados na tabela 'courses'
    await queryRunner.query(`
          INSERT INTO course (title, description, image, createdAt) 
          VALUES 
            (
              'Educação Financeira', 
              'O curso de Educação Financeira é para quem quer aprender a gerenciar melhor seu dinheiro, com dicas sobre orçamento, investimentos e planejamento financeiro. Indicado tanto para iniciantes quanto para quem quer conquistar maior controle financeiro e realizar sonhos!',
              'https://www.uaipassei.com.br/_next/image?url=%2Fcourses%2Fed.png&w=384&q=75',
              CURRENT_TIMESTAMP
            ),
            (
              'CPA 10', 
              'O CPA 10 é a certificação que habilita profissionais a atuarem no mercado financeiro com segurança e conhecimento. Ideal para quem quer trabalhar em bancos e corretoras, capacita na oferta de produtos de investimento. Destaque-se no setor e avance na carreira!', 
              'https://www.uaipassei.com.br/_next/image?url=%2Fcourses%2Fcea.png&w=384&q=75',
              CURRENT_TIMESTAMP
            ),
            (
              'CPA 20', 
              'A certificação CPA 20 é voltada para quem deseja atuar no atendimento a investidores qualificados em bancos e corretoras. Ela oferece conhecimento aprofundado sobre produtos de investimento e estratégias avançadas. Diferencie-se no mercado financeiro e atenda clientes de alta renda!', 
              'https://www.uaipassei.com.br/_next/image?url=%2Fcourses%2Fcpa-10.png&w=384&q=75',
              CURRENT_TIMESTAMP
            ),
            (
              'CEA', 
              'O CEA capacita profissionais a atuar como assessores especializados, oferecendo consultoria sobre produtos de investimento. Ideal para quem busca posições estratégicas em bancos e corretoras e quer destacar-se na carreira.', 
              'https://www.uaipassei.com.br/_next/image?url=%2Fcourses%2Fcpa-20.png&w=384&q=75',
              CURRENT_TIMESTAMP
            )
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Removendo os dados inseridos
    await queryRunner.query(`
      DELETE FROM courses WHERE title IN 
        ('Educação Financeira', 'CPA 10', 'CPA 20', 'CEA')
    `);
  }
}
