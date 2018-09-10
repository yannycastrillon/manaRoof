# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:

    Employee.create(first_name:  "Jhon", last_name: "Snow", date_of_birth: "08/25/2000", driver_license: "JS100278",
                    salary_per_hour: 45.00, ssn: 144123456, cell_phone: "3235615786", email: "jhon.snow@example.com",
                    street: "7045 hollywood Ave", second_address: "apt 204", city: "Los Angeles", state: "CA",
                    zipcode: 90025, nationality: "England", start_date: DateTime.now.strftime('%G/%m/%d'),
                    phone_number: "3341578", status: "active", employable_type: "Worker", employable_id: 1)
    Employee.create(employable: Manager.create, first_name: "Cercei", last_name:"Lannister",driver_license:"cl123321", email: "cercei.lannister@example.com")
    Employee.create(employable: Worker.create, first_name: "Tyrion", last_name:"Lannister",driver_license:"tl2345432", email: "tyrion.lannister@example.com")
    Employee.create(employable: Worker.create, first_name: "Arya", last_name:"Stark",driver_license:"as111009", email: "arya.stark@example.com")
    Employee.create(employable: Worker.create, first_name: "Jaime", last_name:"Lannister",driver_license:"jm123321", email: "jaime.lannister@example.com")

    Contact.create(company: Company.create(name: "Winterfell", street: "3462 North Path"), manager: Employee.where(first_name:"Cercei").first.employable, first_name: "Sansa", last_name:"Stark", email: "sansa.stark@example.com")
