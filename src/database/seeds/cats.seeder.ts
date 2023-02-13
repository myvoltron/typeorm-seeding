import { Cat } from 'src/cats/entities/cat.entity';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';

export default class CatsSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const repository = dataSource.getRepository(Cat);
    // await repository.insert([
    //   {
    //     name: 'cat1',
    //     kind: 'cat',
    //   },
    // ]);

    const catsFactory = factoryManager.get(Cat);
    await catsFactory.saveMany(5);
  }
}
