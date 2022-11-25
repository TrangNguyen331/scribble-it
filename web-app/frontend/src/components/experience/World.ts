import * as $ from 'three';
import Experience from '@core/Experience';

import Environment from './Environment';
import Dragon from './Dragon';

class World {

  public threeWorld: $.Group;

  private experience: Experience = new Experience();
  private scene = this.experience.scene;

  // private sky: Sky;
  private environment: Environment;
  private dragon: Dragon; 

  constructor() {
    this.threeWorld = new $.Group();
    this.environment = new Environment();
    this.dragon = new Dragon();

    this.init();
  }

  private init(): void {
    // environment
    this.threeWorld.add(this.environment.hemisLight);
    this.threeWorld.add(this.environment.shadowLight);
    this.threeWorld.add(this.environment.backLight);

    // kanna
    this.threeWorld.add(this.dragon.threeGroup);
  }

  public resize(): void {

  }

  public update(): void {
    this.environment.update();
    this.dragon.update();
  }
}

export default World;