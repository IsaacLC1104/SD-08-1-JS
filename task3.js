export class Player {
  name;
  level;

  get level() {
    return this._level;
  }

  set level(value) {
    this._level = value;
  }
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  constructor(name, level) {
    this.name = name;
    this.level = level;
  }

  info() {
    return `${this.name} has reached Level ${this.level}!`
  }


}