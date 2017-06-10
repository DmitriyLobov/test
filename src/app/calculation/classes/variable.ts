export class Variable {
  value: number = 1;
  name: string;


  constructor(name: string, value?: number) {
    this.name = name;
    this.value = value;
  }

}
