export class Employee {
  private _fullName!: string;
  private _address!: string;

  //Getter and Setter
  //get -> getter
  //set -> setter
  get fullname() { return this._fullName }
  set fullName(name: string) { this._fullName = name }

  get address() { return this._address }
  set address(name: string) { this._address = name }

  toString(): string {
    return 'Employee Name: ' + this.fullName + ' and address: ' + this.address;
  }
}
