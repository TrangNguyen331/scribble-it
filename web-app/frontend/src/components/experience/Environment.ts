import * as $ from 'three'
import Experience from '@core/Experience';

class Environment {

  public hemisLight: $.HemisphereLight;
  public backLight: $.DirectionalLight;
  public shadowLight: $.DirectionalLight;

  private experience: Experience = new Experience();

  constructor() {

    this.hemisLight = new $.HemisphereLight(0xffffff, 0xb3858c, 0.8);
    this.shadowLight = new $.DirectionalLight(0xffffff, 0.8);
    this.backLight = new $.DirectionalLight(0xffffff, 0.4);

    this.init()

  }

  //---------Config----------
  private init() {
    this.configLight();
  }

  private configLight(): void {
    this.shadowLight.position.set(-100, 100, 50);
    this.shadowLight.castShadow = true;

    this.backLight.position.set(200, 100, 100);
    this.backLight.castShadow = true;
  }

  public update(): void {
    // cập nhật
    
  }
}




export default Environment;