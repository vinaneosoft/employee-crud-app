export class Employee {
    constructor(
        public _id=0,  // id="0" for backend json server
        public emp_name="",
        public joining_date=Employee.getDateTimeLocal(new Date()),
        public emp_salary=0,
        public dept_code="LD",
        public experience=0,
        public emp_email="",
        public secrete_code="123",
        public employee_pic:any=""
        ){
        }
        static getDateTimeLocal(d:Date){
            return  (new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString()).slice(0, -1);
        }
}
