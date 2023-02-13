import { Cat } from 'src/cats/entities/cat.entity';
import { setSeederFactory } from 'typeorm-extension';

export default setSeederFactory(Cat, (faker) => {
  const cat = new Cat();
  cat.name = faker.name.fullName();
  cat.kind = faker.animal.cat();

  return cat;
});
