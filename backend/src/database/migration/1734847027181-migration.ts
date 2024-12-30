import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1734847027181 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Inserindo dados na tabela 'testimonial'
    await queryRunner.query(`
          INSERT INTO testimonial (name, content, avatar, createdAt)
          VALUES 
            (
              'Ariana Fernandes Souza', 
              'Passando pra agradecer a vocês da Uai Passei, por toda a dedicação em ensinar e por todo o apoio durante o período que estava me preparando para a prova CPA 10, saibam que vocês foram de fundamental importância na minha aprovação. Vocês são mil e indico demais o curso de vocês. Sucesso e gratidão.',
              'https://this-person-does-not-exist.com/img/avatar-gend7b15906a780b36fed4cf0c96b450a78.jpg',
              CURRENT_TIMESTAMP
            ),
            (
              'Mariah Cássia Naves Costa de Jesus Teodoro',
              'Escolhi a UAI PASSEI para a certificação e me surpreendi pois têm compromisso na formação dos alunos. Eles realmente dominam o conteúdo, repassam as informações com clareza, e nos preparam para o mercado. Agradeço todo apoio e recomendo a todos que buscam o sucesso profissional.',
              'https://this-person-does-not-exist.com/img/avatar-gen0d0eb58bfb88938fd113d3d3824ec490.jpg',
              CURRENT_TIMESTAMP
            ),
            (
              'Roberta Pereira Franco', 
              'Sou Roberta Pereira Franco, agente de atendimento e me sinto pronta para a CPA após o curso da UAI PASSEI',
              'https://this-person-does-not-exist.com/img/avatar-gendd18f7248e542b959c96233b49bf9ee8.jpg',
              CURRENT_TIMESTAMP
            ),
            (
              'Amanda Silva Soares', 
              'Desde o início, fiquei impressionada com a qualidade do material e a didática dos professores, que são extremamente experientes e dedicados. As aulas são claras e objetivas, e os simulados foram essenciais para me familiarizar com o formato da prova e identificar áreas em que precisava melhorar. A equipe de suporte também esteve sempre disponível para tirar dúvidas.',
              'https://this-person-does-not-exist.com/img/avatar-gene57b42ac1147f863cbab2b1fc81da593.jpg',
              CURRENT_TIMESTAMP
            )
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Removendo os dados inseridos
    await queryRunner.query(`
          DELETE FROM testimonial WHERE name IN
            ('Ariana Fernandes Souza', 'Mariah Cássia Naves Costa de Jesus Teodoro', 'Roberta Pereira Franco', 'Amanda Silva Soares')
        `);
  }
}
